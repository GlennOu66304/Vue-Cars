<template>
  <div id="app">
    <Cars />
    <Amap2 />
    <!-- 
      1.side bar only display when the route is in the /user, /carlist, 
      2. with the / will not show the side bar,     
      3.also when user clik the text in the router page, the side bar will close
     -->
    <!-- use the :class to decide if it will open the window -->
    <div class="router-sidebar" :class="[show ? '' : 'open']">
      <!-- black box router view -->
      <router-view />
    </div>
  </div>
</template>

<script>
import jwt_decode from "jwt-decode";
import store from "./store/index.js";
import Cars from "./components/Cars.vue";
import Amap2 from "./components/Amap2.vue";

export default {
  name: "App",
  data() {
    return {
      show: false,
    };
  },

  watch: {
    $route: {
      handler(newValue) {
        const routeName = newValue.name;
        console.log(routeName);
        const show2 = routeName === "home" ? false : true;
        this.show = show2;
        console.log(this.show);
      },
    },
  },
  created() {},

  methods: {},
  components: {
    Amap2,
    Cars,
  },
};
</script>

<style>
.router-sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 300px;
  background-color: #394147;
  z-index: 101;
}
.open {
  right: -600px;
}
</style>
