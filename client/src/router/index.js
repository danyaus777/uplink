import { createRouter, createWebHistory } from 'vue-router'
import LoginView from "@/views/LoginView";
import HomeView from "@/views/HomeView";

const routes = [
    {
        path: '/login',
        name: 'login',
        component: LoginView
    },
    {
        path: '/',
        name: 'home',
        component: HomeView
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
