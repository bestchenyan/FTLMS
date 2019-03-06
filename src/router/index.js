import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login.vue'
import Register from '@/views/register/register.vue'
import Manage from '@/views/layout/App.vue'
// import PostManage from '@/views/ContentManage/Index.vue'
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'login',
        component: Login
    }, {
        path: '/register',
        name: 'register',
        component: Register
    },{
        path: '/manage',
        name: 'manage',
        component: Manage
    }]
})