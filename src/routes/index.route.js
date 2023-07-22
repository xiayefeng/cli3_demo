export default {
  path: '/index',
  name: 'index',
  component: () => import(/* webpackChunkName: "index" */ '@/views/Home.vue'),
  children: [

  ]
}
