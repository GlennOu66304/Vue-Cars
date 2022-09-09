<template>
  <div class="select-car">
    <ul>
      <li>
        <i class="icon icon-help"></i>
      </li>
      <li><i class="icon icon-search"></i></li>
      <li class="select-car-btn">select car</li>
      <li><i class="icon icon-gps"></i></li>
      <li><i class="icon icon-avatar" @click="user"></i></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SelectCar",
  data() {
    return {};
  },
  props: {},
  methods: {
    user() {
      this.$router.push("/user");
    },
  },

  components: {},
};
</script>

<style>
.select-car {
  position: fixed;
  bottom: 86px;
  z-index: 10;
  left: 0;
  right: 0;
  text-align: center;
}
li {
  display: inline-block;
}
.icon {
  display: inline-block;
  width: 42px;
  height: 42px;
  border-radius: 100px;
  background-color: #3c4248;
  background-repeat: no-repeat;
  vertical-align: middle;
  margin: 0 17px;
  cursor: pointer;
}
.icon-help {
  background-image: url(../assets/icon/help2.png);
}
.select-car-btn {
  background-color: #3c4248;
  width: 240px;
  height: 84px;
  border-radius: 100px;
  line-height: 84px;
  text-align: center;
  color: #fff;
  font-size: 26px;
  font-weight: 300px;
}
.icon-search {
  background-image: url(../assets/icon/search.png);
}
.icon-gps {
  background-image: url(../assets/icon/gps.png);
}
.icon-avatar {
  background-image: url(../assets/icon/avatar.png);
}
</style>
