import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import utils from '@/utils'

Vue.use(Router)

const routerList = []
function importRouter (r) {
  r.keys().forEach(key => {
    routerList.push(r(key).default)
  })
}

importRouter(require.context('.', true, /.+\.route\.js$/))

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: Home,
        head: () => import('@/views/TopHeader.vue'),
        'left-nav': () => import('@/views/LeftNav.vue')
      }
    },
    {
      path: '/about/:id?',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      components: {
        default: () =>
          import(/* webpackChunkName: "about" */ '@/views/About.vue')
      }
      // meta: { keepAlive: true }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path: '/table',
      name: 'table',
      component: () => import('@/views/Table.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('@/views/MyEvent.vue')
    },
    {
      path: '/form',
      name: 'form',
      component: () => import('@/views/FormSubmit.vue')
    },
    {
      path: '/photo',
      name: 'photo',
      component: () => import('@/views/FacePhoto.vue')
    },
    {
      path: '/imgUpload',
      name: 'imgUpload',
      component: () => import('@/views/ImgWater.vue')
    },
    {
      path: '/mediaFile',
      name: 'mediaFile',
      component: () => import('@/views/MediaFile.vue')
    },
    {
      path: '/excel',
      name: 'excel',
      component: () => import('@/views/XlsxFileReader.vue')
    },
    {
      path: '/inputOberve',
      name: 'inputOberve',
      component: () => import('@/views/InputValueOberve.vue')
    }
    // ...routerList
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requiresAuth)) {
    const token = utils.cookies.get('token')
    if (token) {
      next()
    } else {
      next({
        name: 'login'
      })
    }
  } else {
    // router.push('/login')
    next()
  }
})

router.afterEach((to, from) => {
  if (to.meta.title) {
    utils.title(to.meta.title)
  }
})

export default router
