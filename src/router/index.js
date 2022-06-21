import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue'
import Products from '@/views/Products.vue'
// import NotFound from '@/components/NotFound.vue'

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/products', name: 'Products', component: Products },
    // { path: '*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router