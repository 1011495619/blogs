<template>
  <div style="margin-top:100px">

    <div class="container">
      <div style=" display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
">
        <div class="container-left">

          <ArticleMark></ArticleMark>

          <!-- 111111111111111111111111111 -->
          <!-- <keep-alive> -->

          <!-- </keep-alive> -->
          <!-- <List v-for="(item) in $store.state.articleList" :key="item.id" :article='item' /> -->
          <!-- <ArticleMark /> -->
        </div>

      </div>

      <div class="comment">
        <div>
          <img style="display: inline-block;width:45px; border-radius:50%" src="https://q1.qlogo.cn/g?b=qq&nk=776438880&s=100" alt="">
        </div>
        <div class="inputs">
          <textarea name="" id="" cols="30" rows="10" placeholder="各位尽情评论"></textarea>

          <div class="inputs_emin">
            <input type="emin" name="" id="" placeholder="请输入QQ邮箱">
            <button>提交</button>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
// import instance from "../../utils/request";
import ArticleMark from "../../components/ArticleMark.vue";
export default {
  data() {
    return {
      data() {
        return {
          content: {},
        };
      },
    };
  },
  components: {
    ArticleMark,
  },
  methods: {},
  created() {
    // alert(123);
    // console.log(this.$route.params.id);
    // this.query();
  },
  mounted() {
    // this.query();
    // console.log(this.content);
  },
};
</script>

<style scoped lang='less'>
.container {
  overflow-x: hidden !important;
  width: 950px;
  padding: 0 50px;
  margin: 0 auto;
  // display: flex;
  // justify-content: space-between;
  .container-left {
    width: 950px;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 10px;
  }
}

.comment {
  // width: 940px;
  height: 350px;
  margin: 20px 0 50px 0;
  background-color: #fff;
  clear: both;
  padding-bottom: 40px;
  border-radius: 3px;
  padding: 30px 30px 0px 30px;
  display: flex;
  // justify-content:;

  .inputs {
    overflow: hidden;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    margin-left: 10px;
    background-color: #f2f2f2;
    border-radius: 10px;
    height: 220px;

    textarea {
      padding: 10px;
      min-height: 80pxpx;
      background-color: #f2f2f2;
      width: 100%;
      font-size: 14px;
      resize: none;
      border: none;
      outline: none;
      // border: ;
    }

    .inputs_emin {
      // padding-left: 30px;
      display: flex;
      justify-content: space-between;
      padding-bottom: 10px;
      input {
        margin-left: 20px;
        padding-left: 15px;
        width: 200px;
        height: 30px;
        outline: none;
        color: #333;
        border: 1px solid #999;
        border-radius: 5px;
        background-color: #f2f2f2;
        -webkit-appearance: none;
      }

      button {
        width: 120px;
        height: 30px;
        background: #5788aa;
        color: #fff;
        text-align: center;
        font-size: 16px;
        line-height: 30px;
        border-radius: 10px;
        border: none;
        // margin-bottom: 5px;
      }
    }
  }
}
</style>