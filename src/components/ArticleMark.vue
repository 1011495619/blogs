<template>
  <v-md-preview :text="$store.state.queryarticle[0].content"></v-md-preview>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$store.dispatch("queryarticle", this.$route.params.id);
  },
};
</script>

<style scoped>
</style>