import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import MySupportsView from '@/views/supports/MySupportsView.vue'

const routes = [
    {
        path: '/campus',
        component: () => import('@/layouts/DefaultTemplate.vue'),
        children: [
            {
                path: 'minhas-duvidas',
                name: 'Campus.my.supports',
                component: MySupportsView
            },
            {
                path: '',
                name: 'Campus.home',
                component: HomeView
            }
        ]
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
