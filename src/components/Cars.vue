<template>
  <div class="cars-list" @click="user">
    <h2>This is the Cars Data</h2>
  </div>
</template>

<script>

export default {
  name: "Cars",
  data() {
    return {
   
    };
  },
  props: {
   
  },
  methods: {
   user(){
    this.$router.push('/user')
   }
  },

  components: {},

};
</script>

<style>
.cars-list{
  position: fixed;
  top:10px;
  z-index: 101;
}
</style>
