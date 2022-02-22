<template>
  <div class="navBar">
    <div class="layout">
      <div class="layout_content">
        <!-- <img src="https://blog.jzzz66.cn/static/img/logo.df89019.png" alt=""> -->
        <img src="../assets/bokelogo.png" alt="">

        <ul class="layout_conten_list">
          <li v-for="(item,index) in list" :key="index" @click="goUrl(item.path)">
            {{item.name}}
          </li>
          <!-- <li @click="cs">
            首页
          </li>
          <li @click="cscs">文章</li>
          <li>归档</li>
          <li>留言</li>
          <li>导航</li>
          <li>关于本站</li>
          <li>登录</li> -->
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          path: "/",
          name: "首页",
        },
        {
          path: "/article",
          name: "文章",
        },
        {
          path: "/archive",
          name: "归档",
        },
        {
          path: "/message",
          name: "留言",
        },
        {
          path: "/",
          name: "关于本站",
        },
        {
          path: "/",
          name: "登录",
        },
      ],
    };
  },
  methods: {
    goUrl(e) {
      this.$router.push(e);
    },
  },
};
</script>

<style lang="less" scoped>
.navBar {
  // cursor: url("https://cdn.jzzz66.cn/normal1.cur"), auto;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;
  background: #efefee;
  color: #fff;
  background-image: linear-gradient(135deg, #52e5e7 10%, #1981d6 80%, #2924d1);
  -webkit-box-shadow: 0 1px 5px 0 rgb(19 141 165 / 48%);
  box-shadow: 0 1px 5px 0 rgb(19 141 165 / 48%);

  .layout {
    max-width: 1200px;
    margin: 0 auto;
  }

  .layout_content {
    display: flex;
    height: 64px;
    // line-height: 64px;

    .layout_conten_list {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      font-size: 15px;
      li {
        cursor: pointer;
        display: inline-block;
        padding: 0 10px;
        margin: 0 15px;
        position: relative;
        vertical-align: text-bottom;
        // display: flex;
        // align-items: center;
        // justify-content: center;
      }
    }
  }
}

li {
  list-style: none;
}
</style>