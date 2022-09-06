<template>
  <div class="profiles">
    <div class="container">
      <div class="row">
        <div class="col-6">
          <a
            class="btn btn-light mb-3 float-left"
            @click.prevent="$router.go(-1)"
            >返回个人信息</a
          >
        </div>
      </div>
      <ProfileHeader v-if="profile" :profile="profile" />
      <ProfileAbout v-if="profile" :profile="profile" />
      <ProfileExperience
        v-if="profile && (profile.experience || profile.education)"
        :experience="profile.experience"
        :education="profile.education"
      />
      <ProfileGithub />
    </div>
  </div>
</template>

<script>
import ProfileHeader from "../components/ProfileHeader.vue";
import ProfileAbout from "../components//ProfileAbout.vue";
import ProfileExperience from "../components/ProfileExperience.vue";
import ProfileGithub from "../components/ProfileGithub.vue";
export default {
  name: "profile",
  data() {
    return {
      profile: {},
    };
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.getProfileByHandle(to.params.handle);
    });
  },
  // methods
  methods: {
    getProfileByHandle(handle) {
      // console.log(handle);
      //get the prifile data, then assign this value to the profile
      this.$axios
        .get(`/api/profile/handle/${handle}`)
        .then((res) => {
          this.profile = res.data;
          // console.log(this.profile);
          // this.$store.dispatch("setProfiles", this.profiles);
        })
        .catch((err) => {
          this.profiles = [];
          console.log(err);
          // console.log(this.profile.handle);
          // this.$store.dispatch("setProfiles",[]);
        });
    },
  },
  components: {
    ProfileHeader,
    ProfileAbout,
    ProfileExperience,
    ProfileGithub,
  },
};
</script>

<style></style>
