<template>
  <div class="profiles">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <h1 class="display-4 text-center">开发者们</h1>
          <p class="lead text-center">让世界丰富多彩的你们!</p>
          <!-- 展示开发者 -->
          <ProfileItem
            v-for="profileItem in profiles"
            :key="profileItem._id"
            :profileItem="profileItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileItem from "../components/ProfileItem.vue";
export default {
  name: "allProfiles",
  data() {
    return {
      profiles: [],
    };
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.getProfile();
    });
  },
  // methods
  methods: {
  
    getProfile() {
      //get the prifile data, then assign this value to the profile
      this.$axios.get("/api/profile/all").then((res) => {
        this.profiles = res.data;

        console.log(this.profiles);
        this.$store.dispatch("setProfiles", this.profiles);
      }).catch(err =>{
         this.profiles = [];
  console.log(err)
        // console.log(this.profile.handle);
        this.$store.dispatch("setProfiles",[]);
      })
    }
  },
  components: {
    ProfileItem,
  },
};
</script>

<style></style>
