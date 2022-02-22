<template>
  <!-- <div>
    <template> -->
  <v-md-preview :text="markdown"></v-md-preview>
  <!-- <div>
    {{texts}}
  </div> -->
  <!-- </template>
    1111111111111
  </div> -->
</template>

<script>
import instance from "../utils/request";
export default {
  data() {
    return {
      markdown: this.$store.state.articleList[0].content,
      cs: "",
    };
  },
  props: ["texts"],
  created() {
    console.log(this.texts);
    this.query();
  },
  methods: {
    query() {
      instance({
        url: `queryarticle/${this.$route.params.id}`,
        method: "GET",
      }).then((res) => {
        console.log(res.data.data[0]);
        if (res.status == 200) {
          this.markdown = res.data.data[0].content;
        }
      });
    },
  },
};
</script>

<style scoped>
</style>