import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },

    {
        path: '/login',
        name: 'Login',

        component: () =>
            import ('../views/Login.vue')
    },
   {
      path: '/register',
      name: 'Register',

      component: () =>
       import ('../views/Register.vue')
   },
  {
    path: '/modify',
    name: 'Modify',

    component: () =>
      import ('../views/Modify.vue')
  },

    {
        path: '/main',
        name: 'Main',

        component: () =>
            import ('../views/Main.vue'),
        children: [{
                path: '/users',
                name: 'Users',
                component: () =>
                    import ('../views/user/Users.vue')
            }

        ]
    }
]

const router = new VueRouter({
    routes
})

export default router