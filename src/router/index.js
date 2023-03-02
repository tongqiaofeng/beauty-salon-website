import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/homePage.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: '首页'
    }
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/aboutPage.vue")
  },
  {
    path: "/service",
    name: "Service",
    component: () => import("../views/servicePage.vue")
  },
  {
    path: "/news",
    name: "News",
    component: () => import("../views/newsPage.vue")
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import("../views/contactPage.vue")
  },
  {
    path: "/details",
    name: "Details",
    component: () => import("../components/detailsPage.vue")
  },
  {
    path: "/list",
    name: "List",
    component: () => import("../components/list.vue")
  },
  {
    path: "/store",
    name: "List",
    component: () => import("../components/storePage.vue")
  }
];

const router = new VueRouter({
  mode: 'hash',
  routes
});

router.beforeEach((to, from, next) => {
  // 让页面回到顶部
  let timer = null;
  cancelAnimationFrame(timer);
  timer = requestAnimationFrame(function fn() {
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
    if (oTop > 0) {
      document.body.scrollTop = document.documentElement.scrollTop = oTop - 100;
      timer = requestAnimationFrame(fn);
    } else {
      cancelAnimationFrame(timer);
    }
  });
  // 调用 next()，一定要调用 next 方法，否则钩子就不会被销毁
  next()
})

export default router;