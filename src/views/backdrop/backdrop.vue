<template>
  <div class="home">
    <div class="bjImg">
      <div class="bg_left">
        <div class="ball"></div>
        <div></div>
      </div>
      <div class="hollow">安安安</div>
      <div class="bg_right">
        <div class="ball"></div>
        <div></div>
      </div>
      <div class="arrow-down">
        <icon-font type='icon-jiantouxia'></icon-font>
      </div>
    </div>

    <div class="arttitle">
      <icon-font type='icon-shuye'></icon-font>
      <span>热门文章</span>
    </div>

    <div class="container">
      <div style=" display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
">
        <div class="container-left">

          <List v-for="(item) in $store.state.articleList" :key="item.id" :article='item' />
          <!-- <ArticleMark /> -->
        </div>

        <div class="container-right">
          <div class="userinfo">
            <div>
              <img src="../../assets/toux.jpg" alt="">
              <div>安笙</div>
              <div>无惧无畏，加油！</div>
            </div>
            <button @click="collect" type="button" class="el-button addbook el-button--primary">

              <span>
                <i class="iconfont icon-shuye"></i>
                加入书签
              </span>
            </button>

            <div class="social">
              <span>
                <span class="el-popover__reference-wrapper">
                  <icon-font type='icon-github'></icon-font>
                </span>
              </span>
              <span>
                <span class="el-popover__reference-wrapper">
                  <icon-font type='icon-qq-copy'></icon-font>
                </span>
              </span>
              <span>
                <span class="el-popover__reference-wrapper">
                  <icon-font type='icon-weixin-copy'></icon-font>
                </span>
              </span>
            </div>

          </div>
          <div class="notice">
            <div>
              <icon-font type='icon-laba'></icon-font>
              公告
            </div>

            <p>等您很久啦！安安博客欢迎您～</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import List from "../../components/list.vue";
import ArticleMark from "../../components/ArticleMark.vue";
import key from "keymaster";
export default {
  data() {
    return {
      articleList: [],
    };
  },
  components: {
    List,
    ArticleMark,
  },
  methods: {
    collect(event) {
      key("a", function () {
        alert("you pressed a!");
      });
      // if (event.ctrlKey == true && event.keyCode == 68) {
      //   //Ctrl+S
      //   event.returnvalue = false;
      // $("btnSave").click(); //ID
      // console.log(123);
      // }
    },
  },
  mounted() {
    console.log(this.$store.state.articleList);
    // this.$store.dispatch("articleList");
    // // console.log(this.$store.state.articleList);
    // this.$request({
    //   url: "article",
    //   method: "GET",
    // }).then(({ data }) => {
    //   console.log(data.data);
    //   this.articleList = data.data;
    // });
    // console.log(this.articleList);
  },
};
</script>

<style scoped lang="less">
.bjImg {
  // animation: all 2s;
  // overflow-x: hidden !important;

  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(135deg, #52e5e7 10%, #130cb7);

  .ball {
    height: 200px;
    width: 200px;
    // margin-bottom: 100px;
    border-radius: 50%;
    background: radial-gradient(
      circle at 75% 30%,
      #fff 5px,
      #0ff 8%,
      #00008b 60%,
      #0ff 100%
    );
    box-shadow: inset 0 0 20px #fff, inset 10px 0 46px #eaf5fc,
      inset 88px 0 60px #c2d8fe, inset -20px -60px 100px #fde9ea,
      inset 0 50px 140px #fde9ea, 0 0 90px #fff;
    // overflow: auto;
  }

  .bg_left {
    margin-right: 150px;
  }
  .bg_right {
    margin-left: 150px;
  }
  .arrow-down {
    position: absolute;
    bottom: 60px;
    color: #fff;
    cursor: pointer;
    font-size: 45px;
  }

  .hollow {
    font-size: 80px;
    color: #fefefe;
    text-shadow: 0 0 0.5em #13e6d8, 0 0 0.2em #ffeded;
    font-family: cursive;
  }
}

.arttitle {
  text-align: center;
  margin: 20px 0 0;

  span {
    color: #0a91b9;
    font-size: 16px;
    font-weight: 800;
  }
  i {
    font-size: 22px;
    color: #fff;
    color: #0a91b9;
    font-weight: 700;
    margin-right: 6px;
  }
}

.container {
  overflow-x: hidden !important;

  width: 1280px;
  padding: 0 50px;
  margin: 0 auto;
  // display: flex;
  // justify-content: space-between;
  .container-left {
    width: 70%;
    display: flex;
    flex-direction: column;
  }
  .container-right {
    margin-top: 20px;
    width: 23%;
    .userinfo {
      padding: 20px 0;
      background: #fff;
      text-align: center;
      margin-bottom: 20px;
      border-radius: 10px;

      img {
        margin-bottom: 6px;
        width: 100px;
        height: 100px;
        border-radius: 50%;
        display: inline-block;
      }
      > div:nth-child(1) {
        // > div:nth-child(1) {
        //   font-size: 20px;
        //   margin-bottom: 4px;
        // }
        // > div:nth-child(2) {
        //   font-size: 13px;
        //   margin-bottom: 10px;
        // }
        div {
          font-size: 13px;
          margin-bottom: 10px;
        }
      }
      .social {
        // font-size: 30px;
        // padding: 5px 20px;
        > span {
          font-size: 30px;
          padding: 5px 20px;
        }
      }

      button {
        width: 90%;
        margin-bottom: 15px;
        height: 40px;
      }
    }
    .notice {
      background: #fff;
      padding: 15px;
      border-radius: 10px;
      font-size: 14px;
      p {
        margin-top: 10px;
        font-size: 14px;
        text-align: center;
        color: #666;
      }
    }
  }
}
</style>