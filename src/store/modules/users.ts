import { api, setToken, clearToken } from "../../api";
import router from "@/router";

//TODO = Implement properly

// initial state
const state = () => ({
  user: null,
  profile: null,
});

// getters
const getters = {
  username(state: { user: { username: string } }) {
    return (state.user && state.user.username) || null;
  },
};

// mutations
const mutations = {
  setUser(state: { user: any }, payload: any) {
    state.user = payload;
  },
};

// actions
const actions = {
  getUser: async function({ commit }: any) {
    const user = await api.get("/user");
  },
  loginUser: async function(
    { commit }: any,
    { username, password }: { username: string; password: string }
  ) {
    try {
      const response = await api.post("auth/login", {
        username,
        password,
      });
      if (response.data.user) {
        console.log(response.data);
        setToken(response.data.token);
        commit("setUser", response.data.user);
        router.push("/");
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
