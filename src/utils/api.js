import instance from "./request";

export const articleList = () => instance.get('article')

// export const queryarticle = () => instance.get(`queryarticle/${this.$route.params}`)