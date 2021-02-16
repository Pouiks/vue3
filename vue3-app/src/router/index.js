import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import Articles from '../views/Articles'
import Technos from '../views/Technos'

const routes = [
    {
        path: '/', 
        name: 'Home', 
        component: Home
    },

    {
        path: '/article',
        name: 'Articles', 
        component: Articles
    },
    {
        path: '/technos', 
        name: 'Technos', 
        component: Technos
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;