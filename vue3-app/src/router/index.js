import {createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home'
import Articles from '../views/Article/Articles'
import ArticleDetails from '../views/Article/ArticleDetails'
import Technos from '../views/Technos'
import Count from '../components/Count'

const routes = [
    {
        path: '/', 
        name: 'Home', 
        component: Home, Count
    },

    {
        path: '/article',
        name: 'Articles', 
        component: Articles
    },
    {
        path: '/articleDetails/:id', 
        name: 'ArticleDetails', 
        component: ArticleDetails
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