<template>
  <div class="footer-page-contaienr">
    <!-- <h1>底部</h1> -->
    <div class="addr-main" style="width: 60%">
      <div class="img-div">
        <img src="../assets/imgs/home/addr02.png" />
      </div>
      <p class="addr-details">
        {{ $t("localization.addrDetailsFont") }}
      </p>
    </div>
    <div class="topStyle">
      <div class="img-div">
        <img src="../assets/imgs/home/phone02.png" />
      </div>
      <p class="addr-details" style="cursor: pointer;" @click="callPhone">
        +855 15220000
      </p>
    </div>
  </div>
</template>

<script>
import Clipboard from "clipboard";
export default {
  data() {
    return {
      langType: localStorage.getItem("DefaultLanguage"),
      routeName: this.$route.name,
      emailNumber: "contact@monetbeauty.com",
      contactImg1: require("../assets/imgs/home/image7.png"),
      contactImg2: require("../assets/imgs/about/conImg.png"),
      logImg1: require("../assets/imgs/home/logo_bottom.png"),
      logImg2: require("../assets/imgs/about/logo_white.png"),
      phone: "+855 15220000",
      font01: "monet beauty clinic",
      font02: "+855 15220000",
    };
  },
  methods: {
    // 调用拨号功能
    callPhone() {
      window.location.href = "tel:" + this.phone;
    },
    // 复制邮箱
    copyBankAccount() {
      let clipboard = new Clipboard(".tag-read");
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
    // 复制信息查找
    copy01() {
      let clipboard = new Clipboard(".font01Text");
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
    copy02() {
      let clipboard = new Clipboard(".font02Text");
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
  background-color: #755793;
  color: #fff;
}

@media screen and (min-width: 1781px) {
  .footer-page-contaienr {
    padding: 15px 410px 15px;
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

    img {
      width: 26px;
      height: 26px;
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
    padding: 15px 20% 15px;
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

    img {
      width: 26px;
      height: 26px;
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
    padding: 15px 15% 15px;
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

    img {
      width: 26px;
      height: 26px;
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
    padding: 15px 12% 15px;
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

    img {
      width: 26px;
      height: 26px;
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
    padding: 15px 50px 15px;
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

    img {
      width: 26px;
      height: 26px;
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
    padding: 10px 5px;
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
