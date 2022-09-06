<template>
  <div class="post-form mb-3">
    <el-amap vid="amapContainer"> </el-amap>
  </div>
</template>

<script>
import { AMapManager, lazyAMapApiLoaderInstance } from "vue-amap";
export default {
  name: "Amap2",
  data() {
    return {
      map: null,
      zoom: 12,
      center: [121.508434, 31.207508],
    };
  },
  props: {
    comment_id: String,
  },
  methods: {
    submit() {
      const user = this.$store.getters.user;
      const newComment = {
        text: this.text,
        name: user.name,
        user: user.id,
      };
      this.$axios
        .post(`/api/post/comment/${this.comment_id}`, newComment)
        .then((res) => {
          this.errors = {};
          this.text = "";
          console.log(res.data);
          this.$emit("update");
        })
        .catch((err) => {
          this.errors = err.response.data;
        });
      // console.log(this.msgInfo)
    },
  },

  components: {},
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      // your code ...

      //Amap issue
      this.map = new AMap.Map("amapContainer", {
        center: new AMap.LngLat(121.59996, 31.197646),
        zoom: this.zoom,
      });
    });
  },
};
</script>

<style>
.mb-3 {
  margin-bottom: 1rem !important;
  height: 800px;
}
</style>
