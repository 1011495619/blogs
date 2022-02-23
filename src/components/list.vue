<template>
  <div @click="add(article)">
    <div class="item">
      <div class="head">
        <div class="fc-flge">热门</div>
        <!-- <a href="javascript:;"> -->
        <router-link to="" class="hrefs">
          <h5>
            <span class="text-blue">【原创】</span>
            <!-- <span class="text-blue-1">Vue点击返回顶部功能</span> -->
            <span class="text-blue-1">{{article.title}}</span>
            <!-- article -->
          </h5>
        </router-link>

        <div class="time">
          <span class="day">
            {{article.times|day}}
          </span>
          <span class="text">
            {{article.times|month}}月
          </span>
          <span class="text">
            {{article.times|years}}
          </span>
        </div>
        <!-- </a> -->
      </div>
      <div class="content">
        <a href="javascript:;">
          <img :src="article.cover" alt="">
        </a>
        <!-- <router-link :to="{name:'aticlemd'}">
          <img :src="article.cover" alt="">
        </router-link> -->
        <a href="javascript:;">{{article.introduction}}</a>
      </div>
      <div class="read">
        <a>继续阅读</a>
      </div>
      <div class="footer">
        <icon-font type='icon-biaoqian'></icon-font>
        <span>vue</span>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {};
  },
  props: {
    article: Object,
  },
  filters: {
    day(value) {
      let date = new Date(Number(value));
      // console.log(value);
      return date.getDate();
    },
    month(value) {
      let date = new Date(Number(value));
      // console.log(value);
      return date.getMonth() + 1;
    },
    years(value) {
      let date = new Date(Number(value));
      // console.log(value);
      return date.getFullYear();
    },
  },
  methods: {
    add(e) {
      this.$router.push({ name: "aticlemd", params: { id: e.id } });
      console.log(e);
    },
  },
};
</script>

<style scoped lang='less'>
.item {
  overflow: hidden;
  padding: 0 30px 10px;
  position: relative;
  margin-top: 20px;
  background-color: #fff;
  -webkit-box-shadow: 5px 5px 10px rgb(0 0 0 / 8%),
    -5px -5px 10px rgb(0 0 0 / 8%);
  box-shadow: 5px 5px 10px rgb(0 0 0 / 8%), -5px -5px 10px rgb(0 0 0 / 8%);
  border-radius: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;

  .head {
    height: 100px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    padding-top: 30px;

    .fc-flge {
      position: absolute;
      height: 20px;
      line-height: 20px;
      text-align: center;
      width: 74px;
      background-color: #ff5722;
      color: #fff;
      -webkit-transform: rotate(-45deg);
      transform: rotate(-45deg);
      left: -18px;
      top: 9px;
      font-size: 15px;
    }

    .hrefs {
      h5 {
        line-height: 30px;
        padding: 0 19vw 5px 0;
        border-bottom: 1px solid #e8e9e7;
        font-size: 18px;
        font-weight: 400;
      }
    }
    .text-blue {
      color: #6fa3ef;
      font-size: 18px;
    }
    .text-blue-1 {
      color: #8b88e4;
      font-size: 17px;
    }

    .time {
      font-family: SourceCodeProRegular, Menlo, Monaco, Consolas, Courier New,
        monospace, Helvetica Neue, Arial, sans-serif;
      position: absolute;
      right: 10px;
      top: 15px;
      background-color: #fff;
      padding: 0 20px 5px;
      line-height: 32px;

      .day {
        display: block;
        text-align: center;
        font-weight: 700;
        font-size: 40px;
        color: #6bc30d;
        position: relative;
        top: 2px;
      }
      .text {
        color: #999;
        font-size: 16px;
      }
    }
  }
  .content {
    display: flex;
    justify-content: flex-start;

    > a:nth-child(1) {
      display: block;
      width: 300px;
      height: 180px;
      border: 1px solid #e8e9e7;
      overflow: hidden;
      float: left;
      margin-right: 20px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    > a:nth-child(2) {
      span {
        color: #5f5f5f;
        font-size: 18px;
        line-height: 1.5;
        letter-spacing: 2px;
        display: block;
        height: 185px;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
  .read {
    position: relative;
    display: flex;
    align-items: center;
    margin-top: 20px;
    > a {
      color: #666;
      font-size: 18px;
      // margin-top: 10px;
      font-weight: 700;
      // margin-top: 20px;
      line-height: 10px;
    }
  }
  .read::before {
    content: " ";
    display: inline-block;
    height: 1px;
    // top: 20px;
    left: 100px;
    right: 0;
    position: absolute;
    background-color: #d0d0d0;
  }
  .footer {
    margin-top: 10px;
    span {
      background: #bbb;
      color: #5f5f5f;
      font-size: 10px;
      padding: 2px 8px;
      margin: 0 10px;
    }
  }
}
</style>