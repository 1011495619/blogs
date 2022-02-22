<template>
  <div>
    <!-- <ArticleMark />
    <ArticleMark />
    <ArticleMark />
    <ArticleMark />
    <ArticleMark />
    <ArticleMark /> -->
    <bar></bar>
    <router-view></router-view>
    <!-- <ArticleMark /> -->
  </div>
</template>

<script>
import Bar from "./components/NavigationBar.vue";
// import ArticleMark from "./components/ArticleMark.vue";
export default {
  data() {
    return {};
  },
  components: {
    Bar,
    // ArticleMark,
  },
  created() {
    this.$store.dispatch("articleList");
  },
};
</script>

<style>
@import "./assets/css/base.css";

body::-webkit-scrollbar {
  display: none;
}
body {
  cursor: url("https://cdn.jzzz66.cn/normal1.cur"), auto;
  background: #f0f0f0;
  overflow-x: hidden;
}
* {
  list-style: none;
  /* overflow: hidden; */
}
.app-content {
  min-height: 100vh;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  z-index: 10;
}
</style>