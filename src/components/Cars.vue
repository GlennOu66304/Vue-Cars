<template>
  <div class="cars-list">
    <section class="car-item">
      <header>
        <h4 class="car-logo">
          <img src="../assets/car-logo.png" alt="Mustang 2019款" />
          <span class="car-name">Mustang 2019款</span>
        </h4>
        <p class="car-attr">
          <span>新能源汽车 5座</span>
        </p>
      </header>
      <div class="car-content">
        <div class="car-info">
          <div>
            <h3 class="car-license">粤 B745N8</h3>

            <ul class="car-battery">
              <li class="car-battery-item active"></li>
              <li class="car-battery-item active"></li>
              <li class="car-battery-item active"></li>
              <li class="car-battery-item active"></li>
              <li class="car-battery-item active"></li>
              <li class="car-battery-item active"></li>
              <li class="car-battery-item active"></li>
              <li class="car-battery-item active"></li>
              <li class="car-battery-item"></li>
              <li class="car-battery-item"></li>
              <p class="car-distance">
                <sub>约</sub>
                <strong> 600 </strong>
                <sub>KM</sub>
              </p>
            </ul>
          </div>
        </div>

        <img class="car-img" src="../assets/car-img.png" alt="" />
      </div>

      <footer>
        <!-- <hr> -->
        <a
          href="https://www.bilibili.com/video/BV1Gz411z75G?p=15&vd_source=a6dcde83e717a44e76ae7c56de63a455"
          class="park-link"
          >某某停车场
          <img src="../assets/right-arrow.png" alt="" class="right-arrow" />
        </a>
      </footer>
    </section>
    <span class="cars-title" @click="user">This is the Cars Data</span>
  </div>
</template>

<script>
export default {
  name: "Cars",
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
.cars-list {
  position: fixed;
  z-index: 12;
  bottom: 170px;
  left: 0;
  right: 0;
}
.cars-title {
}
.car-item {

  width: 400px;
  height: 150px;
  border-radius: 24px;
  background-color: #fff;
  margin: auto;
}
header {
  display: flex;
}
h4,
p {
  flex: 1;
}
img {
  display: inline-block;
  height: 20px;
  margin-right: 5px;
  vertical-align: middle;
}
.car-name {
  font-size: 16px;
}
.car-attr {
  text-align: right;
  opacity: 0.5;
}
.car-img {
  float: right;
  height: 80px;
  width: 190px;
}

.car-content {
  position: relative;
  height: 70px;
}
.car-info {
  display: flex;
  position: absolute;
  width: 100%;
  height: 100px;
  left: 0;
  top: 0;
  /* background-color: red; */
}
.car-license {
  font-size: 18px;
  padding-left: 8px;
}
.car-bettery {
  padding-left: 8px;
}
.car-battery {
  padding-left: 8px;
}
.car-battery-item {
  display: inline-block;
  width: 6px;
  height: 20px;
  border-radius: 100px;
  background-color: #e1e0e1;
  margin-right: 5px;
}
.active {
  background-color: #009bf3;
}
.car-distance {
  margin-left: 5px;
  display: inline-block;
}
strong {
  font-size: 22px;
}
footer {
  padding-top: 8px;
  padding-left: 15px;
  display: inline-block;
}
.park-link {
  position: relative;
  display: block;
  border-top: 1px solid #e1e0e1;
  color: #b2b2b4;
  opacity: 0.5;
}
.right-arrow {
  float: right;
}

</style>
