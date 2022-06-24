import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name: 'Products', component: Products },
]

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(from, to, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0 }
        }
    },
    // scrollBehavior(to, from, savedPosition) {
    //     // always scroll to top
    //     return { top: 0 }
    //   },
    routes
})

export default router