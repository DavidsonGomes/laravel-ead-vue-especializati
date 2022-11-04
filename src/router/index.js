import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/home/HomeView.vue'
import MySupportsView from '@/views/supports/MySupportsView.vue'
import ModulesAndLessonsView from '@/views/modules/ModulesAndLessonsView.vue'
import LoginView from '@/views/auth/LoginView.vue'
import ForgotPassword from '@/views/auth/ForgotPasswordView.vue'

const routes = [
    {
        path: '/campus',
        component: () => import('@/layouts/DefaultTemplate.vue'),
        children: [
            {
                path: 'modulos',
                name: 'campus.modules',
                component: ModulesAndLessonsView
            },
            {
                path: 'minhas-duvidas',
                name: 'campus.my.supports',
                component: MySupportsView
            },
            {
                path: '',
                name: 'campus.home',
                component: HomeView
            }
        ]
    },
    {
        path: '/',
        component: () => import('@/layouts/AuthTemplate.vue'),
        children: [
            {
                path: '',
                name: 'auth.login',
                component: LoginView
            },
            {
                path: '/esqueci-minha-senha',
                name: 'auth.forgot.password',
                component: ForgotPassword
            }
        ]
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
