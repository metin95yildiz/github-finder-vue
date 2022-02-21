import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    userProfile: "",
    userRepos: "",
    userError: ""
  },
  mutations: {
    setUserProfile(state, user) {
      state.userProfile = user;
    },
    setUserRepos(state, repos) {
      state.userRepos = repos;
    },
    setUserError(state, error) {
      state.userError = error;
    }
  },
  getters: {
    getUserProfile(state){
      console.log(state.userProfile);
      return state.userProfile;
    },
    getUserRepos(state) {
      return state.userRepos;
    },
    getUserError(state) {
      return state.userError;
    }
  },
  actions: {
    searchUser({ commit }, { username }) {
      const baseUrl = "https://api.github.com/users/";
      axios.get(baseUrl + username).then(response => {
        commit("setUserProfile", response.data);
      }).catch(error => {
        commit("setUserError", error)
      })
      axios.get(baseUrl + username + "/repos").then(response => {
        const sortedData = Object.values(response.data).sort((prev, next) => {
          return new Date(next.created_at) - new Date(prev.created_at)
        });
        commit("setUserRepos", sortedData)
      })
    }
  }
})
