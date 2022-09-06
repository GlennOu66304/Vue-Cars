// import the vue and the router
import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import Login from "../views/Login.vue";
import SignUp from "../views/SignUp.vue";
import AllProfiles from "../views/AllProfiles.vue";
import Profile from "../views/Profile.vue";
import Dashboard from "../views/Dashboard.vue";
import CreateDashboard from "../views/CreateDashboard.vue";
import EditDashboard from "../views/EditDashboard.vue";
import CreateExperience from "../views/CreateExperience.vue";
import CreateEducation from "../views/CreateEducation.vue";
import Posts from "../views/Posts.vue";
import Comment from "../views/Comment.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    redirect: "/",
  },
  {
    path: "/",
    name: "landing",
    component: Landing,
  },
  {
    path: "/allprofiles",
    name: "allprofiles",
    component: AllProfiles,
  },
  {
    path: `/profile/:handle`,
    name: "profile",
    component: Profile,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/signup",
    name: "signup",
    component: SignUp,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
  {
    path: "/create-dashboard",
    name: "create-dashboard",
    component: CreateDashboard,
  },
  {
    path: "/edit-profile",
    name: "edit-profile",
    component: EditDashboard,
  },
  {
    path: "/add-experience",
    name: "add-experience",
    component: CreateExperience,
  },
  {
    path: "/add-education",
    name: "add-education",
    component: CreateEducation,
  },

  {
    path: "/comments",
    name: "posts",
    component: Posts,
  },
  {
    path: `/comments/:id`,
    name: "comment",
    component: Comment,
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
