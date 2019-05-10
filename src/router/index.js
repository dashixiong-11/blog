import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router) //绑定router到vue

const router = new Router({ //创建一个router实例
  routes:[
    {
      path:'/',                //动态的匹配路由和组件 实现懒加载
      component:()=>import('@/pages/Index/template.vue')
    },{
      path:'/login',
      component:()=>import('@/pages/Login/template.vue')
    },{
      path:'/detail/:blogId',
      component:()=>import('@/pages/Detail/template.vue'),
    },{
      path:'/edit/:blogId',
      component:()=>import('@/pages/Edit/template.vue')
    },{
      path:'/create',
      component:()=>import('@/pages/Create/template.vue')
    },{
      path:'/user/:userId',
      component:()=>import('@/pages/User/template.vue')
    },{
      path:'/my',
      component:()=>import('@/pages/My/template.vue')
    },{
      path:'/register',
      component:()=>import('@/pages/Register/template.vue')
    },
  ]
})

  /*
const router =  new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path:'/login',
      component: Login
    },
    {
      path:'/create',
      component: Create,
      meta:{requiresAuth:true}
    },
    {
      path:'/detail/:blogId',
      component: Detail,
      meta:{requiresAuth:true}
    },
    {
      path:'/edit/:blogId',
      component: Edit,
      meta:{requiresAuth:true}
    },
    {
      path:'/my',
      component: My,
      meta:{requiresAuth:true}
    },
    {
      path:'/register',
      component: Register
    },
    {
      path:'/user/:userId',
      component: User
    }
  ]
})
*/
router.beforeEach(
  (to,from,next) => {
    if(to.matched.some(record => record.meta.requiresAuth)){
      store.dispatch('checkLogin').then((isLogin) => {
        if(!isLogin){
          next({
            path:'/login',
            query:{redirect:to.fullPath}
          })
        }else{
          next()
        }
      })
    }else{
      next()
    }
  }
)
export default router
