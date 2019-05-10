import blog from '@/api/blog.js'

export default {
  data () {
    return {
      blogs:[],
      total:0,
      page:1
    }
  },
  created(){
    this.page = parseInt(this.$route.query.page)||1
    blog.getIndexBlogs({page:this.page}).then(res => {
      let array = res.data
      for(let i = 0; i<array.length; i++){
        if(array[i].user==null){
          array.splice(i--,1)
        }
      }
      this.blogs = array
      this.total = res.total
      this.page = res.page
    })
  },
  methods:{
    onPageChange(newPage){
    blog.getIndexBlogs({page:newPage}).then(res => {
      this.blogs = res.data
      this.total = res.total
      this.page = res.page
      this.$router.push({path:'/',query:{page:newPage}})
    })
    }
  }
}
