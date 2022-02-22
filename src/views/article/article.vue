<template>
  <div class="article">
    <div class="article_container">
      <div class="blog">
        <List v-for="(item) in $store.state.articleList" :key="item.id" :article='item' />
      </div>
      <div class="category">
        <div class="aside-box">
          <div class="search">
            <el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-search"></el-input>
          </div>
          <ul class="tag-box">
            <li class="tag-item">
              Node
            </li>

            <li class="tag-item">
              vue
            </li>

            <li class="tag-item">
              小程序
            </li>

            <li class="tag-item">
              Js
            </li>

            <li class="tag-item">
              移动端
            </li>

            <li class="tag-item">
              全部
            </li>
          </ul>
        </div>
        <div class="aside-box">
          <h3 class="aside-title">热门文章</h3>

          <ul class="aside-content">
            <li class="aside-item-article">
              <div class="aside-name">Vue点击返回顶部功能</div>
              <div class="aside-count">阅读量： 186</div>
            </li>

            <li class="aside-item-article">
              <div class="aside-name">Vue点击返回顶部功能</div>
              <div class="aside-count">阅读量： 186</div>
            </li>

            <li class="aside-item-article">
              <div class="aside-name">Vue点击返回顶部功能</div>
              <div class="aside-count">阅读量： 186</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from "../../components/list.vue";
export default {
  data() {
    return {
      input: "",
    };
  },
  components: {
    List,
  },
};
</script>

<style scoped lang='less'>
.article_container {
  width: 1280px;
  margin: 0 auto;
  display: flex;
  padding-top: 60px;

  .blog {
    flex: 1;
    margin-right: 20px;
  }

  .category {
    margin-top: 20px;
    width: 300px;
    height: 200px;

    .aside-box {
      margin-bottom: 20px;
      box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);

      .search {
        padding: 10px 16px;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
        background-color: #6fa3ef;
      }

      .tag-box {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        -webkit-box-pack: justify;
        -ms-flex-pack: justify;
        justify-content: space-between;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        background: #fff;
        padding: 10px 30px;

        .tag-item {
          border: 1px solid #6fa3ef;
          background: #6fa3ef;
          font-size: 13px;
          font-weight: 600;
          display: inline-block;
          margin: 6px 15px 8px 0;
          padding: 5px 15px;
          color: #fff;
          border-radius: 15px;
        }
      }
      .aside-title {
        padding: 0 15px;
        height: 38px;
        border-bottom: 1px solid #efefee;
        background: #fff;
        color: #3d3d3d;
        font-size: 16px;
        line-height: 38px;
        margin: 0;
        font-weight: 400;
      }
      .aside-content {
        padding: 15px 15px 20px;
        background: #fff;
      }
      .aside-item-article {
        padding: 7px 0;
        color: #333;
        font-size: 14px;
      }
      .aside-name {
        font-size: 12px;
        line-height: 1.4;
      }
      .aside-count {
        margin-top: 4px;
        color: #989898;
        font-size: 12px;
      }
    }
  }
}
</style>