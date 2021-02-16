import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import Articles from '../views/Articles'
import Technos from '../views/Technos'
import Count from '../components/Count'
import Article from '../components/Article'

const routes = [
    {
        path: '/', 
        name: 'Home', 
        component: Home, Count
    },

    {
        path: '/article',
        name: 'Articles', 
        component: Articles, Article
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