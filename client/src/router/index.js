import { createRouter, createWebHashHistory } from "vue-router";
import home from "../views/Home.vue";
import login from "../views/Login.vue";
import register from "../views/Register.vue";

const routes = [{
        path: "/",
        name: "home",
        component: home,
    },
    {
        path: "/login",
        name: "login",
        component: login,
    },
    {
        path: "/register",
        name: "logiregistern",
        component: register,
    },

    {
        path: "/pay2",
        name: "pay2",
        component: () =>
            import ("../views/patienPay.vue"),
    },
    {
        path: "/addmedi",
        name: "add",
        component: () =>
            import ("../views/addMedi.vue"),
    },
    {
        path: "/allmedi",
        name: "all",
        component: () =>
            import ("../views/Allmedi.vue"),
    },
    {
        path: "/docinfo",
        name: "docinfo",
        component: () =>
            import ("../views/docinfo.vue"),
    },
    {
        path: "/doc",
        name: "doc",
        component: () =>
            import ("../views/docHome.vue"),
    },
    {
        path: "/alluser",
        name: "alluser",
        component: () =>
            import ("../views/allUser.vue"),
    },
    {
        path: "/pay1",
        name: "pay1",
        component: () =>
            import ("../views/preScript.vue"),
    },
    {
        path: "/addrole",
        name: "addrole",
        component: () =>
            import ("../views/addRole.vue"),
    },
    {
        path: "/record",
        name: "record",
        component: () =>
            import ("../views/recordUser.vue"),
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;