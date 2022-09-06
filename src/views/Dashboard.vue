<template>
  <div>
    <p >
      <!-- Welcome {{user.name}} -->
     Welcome
      <!-- router link display two place profile section and handle section -->
      <!-- Profile section you need to use the dobuble == not single =-->
      <router-link v-if="profile == null" to="/profile">{{user.name}}</router-link> 
      <!-- handle -->
      <router-link v-else :to="`/profile/${profile.handle}`">{{user.name}}</router-link>
    </p>


<!-- check if there is a user -->
    <!-- <p v-if="user !== null" class="lead text-muted">
      Welcome -->

<!-- second check if there is a profile -->
      <!-- <router-link v-if="profile == null" to="/profiles">{{
        user.name
      }}</router-link>


      <router-link v-else :to="`/profile/${profile.handle}`">{{
        user.name
      }}</router-link>


    </p> -->

    <!-- user not null will show this -->
    <div v-if="profile !== null">
      <ProfileActivated />
      <Experience
        :experience="profile.experience"
        @deleteExperience="deleteExperience"
      />
      <Education
        :education="profile.education"
        @deleteEducation="deleteEducation"
      />

      <div>
        <button @click="deleteClick()" class="btn btn-danger">
          删除当前账号
        </button>
      </div>
    </div>

    <!-- user value is null -->
    <!-- <h1 v-else>Todo:create the profile content</h1> -->
    <router-link v-else class="nav-link" to="/create-dashboard">
      Todo:create the profile content
    </router-link>
  </div>
</template>

<script>
import ProfileActivated from "../components/ProfileActived.vue";
import Experience from "../components/Experience.vue";
import Education from "../components/Education.vue";
export default {
  name: "DashBoard",
  data() {
    return {
      profile: {},
    };
  },
  // compute the bollean value will decide to show the content or go to the create conten page
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  // created() {
  //   this.getProfile();
  // },
  // eveny time, you come to this router, it will load the getProfile method
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.getProfile();
    });
  },
  // methods
  methods: {
    getProfile() {
      //get the prifile data, then assign this value to the profile
      this.$axios.get("/api/profile").then((res) => {
        this.profile = res.data;

        // console.log(this.profile.handle);
        this.$store.dispatch("setProfile", this.profile);
      });
    },
    deleteClick() {
      this.$axios
        .delete(`/api/profile/user`)
        .then(() => {
          this.profile = null;
          this.$store.dispatch("clearState");
          this.$router.push("/login");
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteExperience(id) {
      this.$axios
        .delete(`/api/profile/experience/${id}`)
        .then((res) => {
          this.profile = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    deleteEducation(id) {
      this.$axios
        .delete(`/api/profile/education/${id}`)
        .then((res) => {
          this.profile = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  components: {
    ProfileActivated,
    Experience,
    Education,
  },
};
</script>

<style></style>
