<template>
  <div id="app">
    <!-- <Cars /> -->
    <Amap2 />
    <SelectCar />
    <!-- 
      1.side bar only display when the route is in the /user, /carlist, 
      2. with the / will not show the side bar,     
      3.also when user clik the text in the router page, the side bar will close
     -->
    <!-- use the :class to decide if it will open the window -->
    <div id="x" class="router-sidebar" :class="[show ? 'close' : 'open']">
      <!-- <div class="router-sidebar" :class="{ close: !show }"> -->
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
import SelectCar from "./components/SelecCar.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  computed: {
    show() {
      const routeName = this.$route;
      // console.log(routeName.name)
      return routeName.name === "home" ? true : false;
    },
  },
  watch: {
    // $route: {
    //   handler(newValue) {
    //     const routeName = newValue.name;
    //     console.log(routeName);
    //     const show2 = routeName === "home" ? false : true;
    //     this.show = show2;
    //     console.log(this.show);
    //   },
    // },
  },
  created() {},
  mounted() {
    document.addEventListener("mouseup", (e) => {
      const sideMenu = document.getElementById("x");
      if (sideMenu) {
        if (!sideMenu.contains(e.target.value)) {
          this.$router.push({
            name: "home",
          });
        }
        // console.log(sideMenu);
        // console.log(e.target.value)
      }
    });
  },
  methods: {},
  components: {
    Amap2,
    Cars,
    SelectCar,
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
  right: -600px;
}
.open {
  right: 0px;
}
</style>
