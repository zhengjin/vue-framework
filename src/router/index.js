import Vue from 'vue'
import Router from 'vue-router'

let home = r => require.ensure([], () => r(require('@/pages/home')), 'home')
let segmentation = r => require.ensure([], () => r(require('@/pages/segmentation/Segmentation')), 'segmentation')

Vue.use(Router)

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path: '/segmentation',
        component: segmentation
    }
]
const pathes = routes.map(i => i.path)
const router = new Router({
    mode: 'history',
    routes
})
export {pathes,	router}
