import Vue from 'vue'
import VueRouter from 'vue-router'
import homePage from '../views/homePage.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/home', component: homePage}
]

export default new VueRouter({
    routes
})