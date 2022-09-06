// import the vue and the router
import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import User from "../views/User.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/user",
    name: "user",
    component: User,
  },


];

// initainl a new vue Router
const router = new VueRouter({
  mode: "history",
  //   base: process.env.BASE_URL,
  routes,
});

// Router Guard and Private Router
// router.beforeEach((to, from, next) => {
//   const isLogin = localStorage.jwt_token ? true : false;
//   if (to.path == "/login" || to.path == "/signup" || to.path == "/") {
//     next();
//   } else {
//     isLogin ? next() : next("/login");
//   }
// });

// navigation duplicate errors fix
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
};

export default router;
