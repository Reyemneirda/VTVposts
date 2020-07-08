import { api } from "../api";

const fetchArticles = async (username) => {
  try {
    const response = await api.get("articles/", {
      params: {
        username: username,
      },
    });
    if (response.data.response) {
      return response.data.response.map((article) => ({
        ...article,
        createdAt: new Date(article.createdAt),
      }));
    }
  } catch (e) {
    console.error(e);
    throw e;
  }
};

const articleService = {
  fetchArticles,
};

export default articleService;
