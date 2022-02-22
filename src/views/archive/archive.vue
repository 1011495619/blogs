<template>
  <div class="app-content">
    <div class="box">
      <ul class="event_year">
        <li>
          2022年01月
        </li>

        <li>

          2021年12月

        </li>
      </ul>
      <ul class="event_list">
        <div class="disnone">
          <h3>2022年01月</h3>
          <li class="hand">

            <span>7号</span>
            <p>
              <span>
                设置ui库中组件的样式无效问题
              </span>
            </p>
          </li>

          <li class="hand">

            <span>7号</span>
            <p>
              <span>
                设置ui库中组件的样式无效问题
              </span>
            </p>
          </li>

          <li class="hand">

            <span>7号</span>
            <p>
              <span>
                设置ui库中组件的样式无效问题
              </span>
            </p>
          </li>

          <li class="hand">

            <span>7号</span>
            <p>
              <span>
                设置ui库中组件的样式无效问题
              </span>
            </p>
          </li>
        </div>

        <div class="disnone">
          <h3>
            2021年12月
          </h3>
          <li class="hand">

            <span>7号</span>
            <p>
              <span>
                设置ui库中组件的样式无效问题
              </span>
            </p>
          </li>

          <li class="hand">

            <span>7号</span>
            <p>
              <span>
                设置ui库中组件的样式无效问题
              </span>
            </p>
          </li>

          <li class="hand">

            <span>7号</span>
            <p>
              <span>
                设置ui库中组件的样式无效问题
              </span>
            </p>
          </li>

          <li class="hand">

            <span>7号</span>
            <p>
              <span>
                设置ui库中组件的样式无效问题
              </span>
            </p>
          </li>
        </div>
      </ul>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped lang='less'>
.box {
  background: #f0f0f0;
  width: 1280px;
  margin: 80px auto 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  font-size: 16px;

  .event_year {
    text-align: center;
    position: fixed;
    left: 14vw;
    li {
      line-height: 40px;
      background: #fff;
      font-size: 14px;
      color: #828282;
      cursor: pointer;
      position: relative;
      margin: 10px 0;
      border-radius: 50px 35px 35px 50px;
      -webkit-box-shadow: 10px 10px 10px #ccc;
      box-shadow: 10px 10px 10px #ccc;
      width: 140px;
      // background: #4e6fa1;
      // color: #fff;
      text-align: right;
      padding-right: 9px;
    }
    li::before {
      content: "";
      top: 10px;
      right: -18px;
      position: absolute;
      border: 10px solid transparent;
      border-left-color: #fff;
    }
  }
  .event_list {
    .disnone {
      -webkit-transition: all 1s;
      transition: all 1s;
      position: relative;
      top: 0;
      z-index: 2;
      h3 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 24px;
        font-family: Georgia;
        color: #506c95;
        height: 38px;
        line-height: 30px;
        font-style: italic;
        position: relative;
        border-left: 4px solid #ccc;
        padding-left: 10px;
        margin-left: 90px;
        // margin: 0;
        font-weight: 400;
      }
      h3::before {
        position: absolute;
        left: -8px;
        top: 25%;
        content: "";
        width: 12px;
        height: 12px;
        background: #506c95;
        border-radius: 50%;
      }
      h3::after {
        position: absolute;
        left: -4px;
        top: 32%;
        content: "";
        width: 5px;
        height: 5px;
        background: #fff;
        border-radius: 50%;
      }
      .hand {
        display: flex;
        > span {
          width: 70px;
          text-align: right;
          margin-right: 20px;
          padding-top: 13px;
          color: #506c95;
          letter-spacing: 1px;
        }
        > p {
          margin-top: 0;
          margin-bottom: 0;
          border-left: 4px solid #ccc;
          padding-left: 20px;
          position: relative;
          > span {
            text-align: left;
            position: relative;
            display: block;
            background: #fff;
            width: 600px;
            height: 50px;
            font-size: 15px;
            margin-bottom: 10px;
            -webkit-box-shadow: 10px 10px 10px #ccc;
            box-shadow: 10px 10px 10px #ccc;
            padding-left: 20px;
            padding-bottom: 10px;
            border-radius: 10px;
            -webkit-transition: 0.3s;
            transition: 0.3s;
            cursor: pointer;
            padding-top: 13px;
            color: #506c95;
            letter-spacing: 1px;
          }
        }
        > p::before {
          position: absolute;
          left: -8px;
          top: 25%;
          content: "";
          width: 12px;
          height: 12px;
          background: #666;
          border-radius: 50%;
        }
      }
    }
  }
}
</style>