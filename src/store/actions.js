// function
export const setAuthentication = ({ commit }, data) => {
  commit("Authentication", data);//commit this action to the mutation user
};



export const setUser = ({ commit }, data) => {
  commit("user", data);//commit this action to the mutation user
};

export const setProfile = ({ commit }, data) => {
  commit("profile", data);//commit this action to the mutation user
};

export const setProfiles = ({ commit }, data) => {
  commit("profiles", data);//commit this action to the mutation user
};

export const setLoading = ({ commit }, data) => {
  commit("loading", data);//commit this action to the mutation user
};
// 0.create a clear state icon, this one will replace the vuex dispatch in the nav bar and home page

export const clearState = ({ commit }) => {
  commit("Authentication", false);
  commit("user", {});//commit this action to the mutation user
};
