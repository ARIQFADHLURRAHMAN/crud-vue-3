//import vue router
import { createRouter, createWebHistory } from 'vue-router'

//define a routes
const routes = [
    {
        path: '/',
        name: 'post.index',
        component: () => import( /* webpackChunkName: "post.index" */ '@/views/posts/IndexPosts.vue')
    },
    {
        path: '/create',
        name: 'post.create',
        component: () => import( /* webpackChunkName: "post.create" */ '@/views/posts/CreatePosts.vue')
    },
    {
        path: '/edit/:id',
        name: 'post.edit',
        component: () => import( /* webpackChunkName: "post.edit" */ '@/views/posts/EditPosts.vue')
    }
]

//create router
const router = createRouter({
    history: createWebHistory(),
    routes  // config routes
})

export default router