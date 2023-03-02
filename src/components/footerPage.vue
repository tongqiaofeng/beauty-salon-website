<template>
  <div class="footer-page-contaienr">
    <!-- <h1>底部</h1> -->
    <div class="addr-main" style="width: 60%">
      <div class="img-div">
        <img src="../assets/imgs/footer/email.png" />
      </div>
      <p
        class="addr-details"
        style="cursor: pointer"
        :data-clipboard-text="emailNumber"
        @click="copyBankAccount"
      >
        contact@monetbeauty.com
      </p>
    </div>
    <div class="topStyle">
      <a
        href="https://www.xiaohongshu.com/user/profile/602b57750000000001005481"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../assets/imgs/footer/red.png"
          style="margin-right: 16px"
        />
      </a>
      <a
        href="https://facebook.com/moneatbeauty"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../assets/imgs/footer/facebook.png"
          style="margin-right: 16px"
        />
      </a>
      <a
        href="https://www.instagram.com/monetbeautyclinic/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="../assets/imgs/footer/instagram.png"
          style="margin-right: 16px"
        />
      </a>
    </div>
  </div>
</template>

<script>
import Clipboard from "clipboard";
export default {
  data() {
    return {
      langType: localStorage.getItem("DefaultLanguage"),
      emailNumber: "contact@monetbeauty.com",
    };
  },
  methods: {
    // 复制邮箱
    copyBankAccount() {
      let clipboard = new Clipboard(".addr-details");
      console.log(this.langType);
      this.langType = localStorage.getItem("DefaultLanguage");
      clipboard.on("success", (e) => {
        let msg = "";
        if (this.langType == "zh-CN") {
          msg = "复制成功";
        } else if (this.langType == "zh-TW") {
          msg = "複製成功";
        } else if (this.langType == "en-US") {
          msg = "Copy success";
        } else {
          msg = "Copy success";
        }
        this.$message.success({
          message: msg,
          showClose: true,
          duration: 2000,
        });
        console.log("复制成功", e);
        // 释放内存
        clipboard.destroy();
      });
      clipboard.on("error", (e) => {
        let msg2 = "";
        if (this.langType == "zh-CN") {
          // 该浏览器不支持自动复制
          msg2 = "复制失败";
        } else if (this.langType == "zh-TW") {
          msg2 = "複製失敗";
        } else if (this.langType == "en-US") {
          msg2 = "Copy the failure";
        } else {
          msg2 = "Copy the failure";
        }
        // 不支持复制
        this.$message.error({
          message: msg2,
          showClose: true,
          duration: 2000,
        });
        console.log("该浏览器不支持自动复制", e);
        // 释放内存
        clipboard.destroy();
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.footer-page-contaienr {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  background-color: #863e89;
  color: #fff;

  .topStyle img {
    width: 26px;
    height: 27px;
  }
}

@media screen and (min-width: 1781px) {
  .footer-page-contaienr {
    padding: 15px 410px 29px;
    text-align: left;

    .addr-main {
      min-width: 66%;
      display: flex;
    }

    .topStyle {
      display: flex;
    }

    .img-div {
      line-height: 34px;
    }

    .addr-details {
      margin-left: 20px;
      line-height: 36px;
      font-size: 18px;
    }
  }
}

@media screen and (min-width: 1499px) and (max-width: 1780px) {
  .footer-page-contaienr {
    padding: 15px 20% 29px;
    text-align: left;

    .addr-main {
      min-width: 66%;
      display: flex;
    }

    .topStyle {
      display: flex;
    }

    .img-div {
      line-height: 34px;
    }

    .addr-details {
      margin-left: 20px;
      line-height: 36px;
      font-size: 18px;
    }
  }
}

@media screen and (min-width: 1200px) and (max-width: 1500px) {
  .footer-page-contaienr {
    padding: 15px 15% 29px;
    text-align: left;

    .addr-main {
      min-width: 66%;
      display: flex;
    }

    .topStyle {
      display: flex;
    }

    .img-div {
      line-height: 34px;
    }

    .addr-details {
      margin-left: 20px;
      line-height: 36px;
      font-size: 18px;
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .footer-page-contaienr {
    padding: 15px 12% 29px;
    text-align: left;

    .addr-main {
      min-width: 66%;
      display: flex;
    }

    .topStyle {
      display: flex;
    }

    .img-div {
      line-height: 34px;
    }

    .addr-details {
      margin-left: 20px;
      line-height: 36px;
      font-size: 18px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .footer-page-contaienr {
    padding: 15px 50px 29px;
    text-align: left;
    text-align: left;

    .addr-main {
      width: 60%;
      display: flex;
    }

    .topStyle {
      display: flex;
    }

    .img-div {
      line-height: 34px;
    }

    .addr-details {
      margin-left: 20px;
      line-height: 36px;
      font-size: 18px;
    }
  }
}

@media screen and (max-width: 767px) {
  .footer-page-contaienr {
    padding: 15px 15px 29px;
    text-align: left;

    .addr-main {
      width: 60%;
      display: flex;
    }

    .topStyle {
      display: flex;
    }

    .img-div {
      line-height: 0;
    }

    img {
      width: 20px;
      height: 20px;
    }

    .addr-details {
      margin-left: 10px;
      // line-height: 36px;
      font-size: 12px;
    }
  }
}
</style>
