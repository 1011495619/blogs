import instance from "./request";

export const articleList = () => instance.get('article')

export const queryarticle = (e) => instance.get(`queryarticle/${e}`)