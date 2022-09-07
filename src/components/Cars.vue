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
      <div class="car-content"></div>
      <footer></footer>
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
  bottom: 200px;
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
.car-attr{
  text-align: right;
  opacity: .5;
}
</style>
