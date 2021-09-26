import Vue from 'vue';
import Router from 'vue-router';
import Login from './components/Login';
import Panelmain from './components/Panelmain';
import Panelparking from './components/Panelparking';
import Error from '@/views/Error404';
import UserDetail from '@/views/UserDetail';
import Home from '@/views/Home';
import Tickets from './components/Tickets';
Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'Login',
            component: Login
        }, // cualquier ruta que no e reconoca el * es el que va actuar
        {
            path: '*',
            name: 'error',
            component: Error
        },
        {
            path: '/home1',
            name: 'home1',
            component: Home
        },
        {
            path: '/user/:id',
            name: 'user',
            component: UserDetail
        },
        {
            path: '/home',
            name: 'home',
            component: Panelmain
        },
        {
            path: '/Panelparking',
            name: 'PanelParqueo',
            component: Panelparking
        },
        {
            path: '/Tickets',
            name: 'GetionTickets',
            component: Tickets
        },
    ]
    });