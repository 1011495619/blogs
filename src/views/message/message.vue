<template>
  <div class="app-content">
    <div class="container">
      <div class="message">

        <div class="msg">
          <div style="text-align: center;">
            <h3>留言板</h3>
          </div>

          <div class="form-content">
            <div class="avatar-info">
              <img src="data:image/png;base64,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" alt="">
              <div class="nickname">
                快来留个言～
              </div>
              <div class="tisp">(点击头像登录)</div>
            </div>
            <div class="form">
              <div class="text">
                <textarea rows="5" class="textarea"></textarea>
              </div>
              <div class="emoji-btn">
                <div class="submit">
                  发布
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="message_foot">
        <div class="content" style="line-height: 1.8;">
          <div style="color: #34b686;font-size: 22px;">
            Message
          </div>

          <div style="margin: 10px 0;">
            <span style="color: #34b686;">#</span>
            <span style="color: #bbb;">留言前需知</span>
          </div>

          <div style="margin: 20px 0;color: #a7ce94; padding-left: 20px;font-size: 14px;line-height: 2.4;">
            <p>• 烦请各位大佬留言时填写自己的真实邮件</p>
            <p>• 留言我基本都会回复，并会以邮件通知您</p>
          </div>
          <p style="margin-top: 20px;color: #767676;font-size: 14px;">希望能向小猪猪提出好的建议。 ^_^</p>
        </div>
      </div>

      <div class="app-timeline">
        <div>
          <ul style="padding: 0 30px;">
            <li style="margin-bottom: 10px;">
              <div style="display: flex;">
                <img style="width: 24px; height: 24px; border-radius: 50%;" src="https://q1.qlogo.cn/g?b=qq&nk=2921709778&s=100" alt="">
                <div style="flex: 1;padding-left: 15px;">
                  <div style="font-size: 12px; margin-bottom: 4px;">bababa</div>
                  <div style="margin-bottom: 4px; color: #555;">xcvxfvbdfblghj</div>
                  <div style="margin-bottom: 10px;">
                    2022-01-22 09:28:22
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

 <style lang="less" scoped>
.container {
  width: 1280px;
  margin: 0 auto;

  .message {
    margin-top: 100px;

    .msg {
      margin: 0 auto;
      padding: 20px;
      min-height: 120px;
      width: 100%;
      background-color: #fff;

      h3 {
        color: #515250;
        font-size: 28px;
        font-weight: 700;
        margin-bottom: 10px;
      }
    }

    .form-content {
      display: flex;

      .avatar-info {
        margin-right: 20px;
        padding-top: 10px;
        width: 80px;
        img {
          margin: 0 8px;
          width: 60px;
          height: 60px;
        }
        .nickname {
          color: #4ebbaa;
          text-align: center;
          font-size: 12px;
          margin-top: 10px;
        }

        .tisp {
          color: #999;
          font-size: 11px;
        }
      }
      .form {
        flex: 1;
        margin-top: 8px;

        .text {
          position: relative;
          overflow: hidden;
        }

        .textarea {
          padding: 10px;
          min-height: 140px;
          max-height: 200px;
          max-width: 1000px;
          min-width: 1000px;
          font-size: 14px;
          border: 1px solid #ccc;
        }
        .emoji-btn {
          margin-top: 10px;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
          width: 100%;
          padding-right: 90px;
        }
        .submit {
          width: 120px;
          height: 40px;
          border-radius: 4px;
          background-image: -webkit-gradient(
            linear,
            left top,
            right top,
            from(#4ebbaa),
            to(#6bc30d)
          );
          background-image: linear-gradient(90deg, #4ebbaa, #6bc30d);
          color: #fff;
          font-size: 14px;
          opacity: 0.5;
          cursor: pointer;

          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          -webkit-box-pack: center;
          -ms-flex-pack: center;
          justify-content: center;
        }
      }
    }
  }

  .message_foot {
    margin-top: 20px;
    background: #fff;
    padding: 20px;
    font-size: 16px;
  }
  .app-timeline {
    margin-top: 20px;
    padding: 30px 0;
    margin-bottom: 20px;
    background-color: #fff;
  }
}
</style>