import { api } from "../../api";

const state = () => ({
  articles: [],
  count: 0,
});

// getters
const getters = {};

// mutations
const mutations = {
  setArticles(state, { articles, articlesCount }) {
    state.articles = articles;
    state.count = articlesCount;
  },
};

// actions
const actions = {
  async getAllArticles({ commit }, payload = { page: 1 }) {
    let route = "articles";
    if (payload) {
      const {
        tag = null,
        author = null,
        favourited = null,
        page = 1,
      } = payload;
      route += tag ? `?tag=${tag}&` : "";
      route += author ? `?author=${author}&` : "";
      route += favourited ? `?favourited=${favourited}&` : "";
      route += page ? `?offset=${(page - 1) * 10}&limit=10` : "";
    }
    const reponse = await api.get(route);
    commit("setArticles", reponse.data);
  },
  async getUserArticles({ commit }, payload = { page: 1, id: null }) {
    let route = "/articles/user-feed";
    if (payload) {
      const { page = 1, id = null } = payload;
      route += id ? `?id=${id}&` : "";

      route += page ? `?offset=${(page - 1) * 10}&limit=10` : "";
    }
    const reponse = await api.get(route);
    commit("setArticles", reponse.data);
  },
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
};
