<template>
  <div class="service-page-container" id="contact-page">
    <div class="header-page">
      <headerPage @langChange="langChange"></headerPage>
    </div>
    <div class="about-page-first">
      <img src="../assets/imgs/contact/top.png" class="first-img" />
      <img src="../assets/imgs/contact/pc-top.png" class="pc-banner-img" />
    </div>
    <div class="second-title">
      <div class="img-left">
        <img src="../assets/imgs/home/left.png" />
      </div>
      <span v-html="$t('localization.contactType')"></span>
      <div class="img-right">
        <img src="../assets/imgs/home/rigth.png" />
      </div>
    </div>
    <div class="second-phone-title">
      <span v-html="$t('localization.contactType')"></span>
    </div>
    <div class="contact-main">
      <div class="main-left">
        <div>
          <div style="display: flex;justify-content: space-between;">
            <div class="main-left-tel">
              <img src="../assets/imgs/contact/tele.png" class="con-icon01" />
              <p @click="callPhone" style="font-weight: bold;">+855 15220000</p>
            </div>
            <div class="main-left-email left-email">
              <img src="../assets/imgs/contact/email.png" class="con-icon02" />
              <p
                class="tag-read"
                style="cursor: pointer;"
                :data-clipboard-text="emailNumber"
                @click="copyBankAccount"
              >
                contact@monetbeauty.com
              </p>
            </div>
          </div>

          <div class="main-left-email">
            <img src="../assets/imgs/contact/addr.png" class="con-icon03" />
            <p>{{ $t("localization.addrDetailsFont") }}</p>
          </div>
        </div>

        <div class="main-left-map">
          <a
            href="https://www.google.com/maps/dir/?api=1&language=zh-CN&origin=&destination=11.548813,104.935900"
            target="_blank"
            ><img
              src="../assets/imgs/contact/conMap.png"
              style="width: 100%;height: 100%;"
          /></a>
        </div>
      </div>
      <div class="main-right">
        <p class="right-top">{{ $t("localization.consultFont") }}</p>
        <div class="right-name">
          <p>
            <span style="color: red;">* </span>{{ $t("localization.nameFont") }}
          </p>
          <input
            class="input-style"
            style="padding-left: 15px;"
            type="text"
            v-model="name"
            @input="nameInput"
          />
          <p style="color: red;" v-show="nameNum == 1">
            {{ $t("localization.nameSureFont") }}
          </p>
        </div>
        <div class="right-tel">
          <p>
            <span style="color: red;">* </span
            >{{ $t("localization.telephoneFont") }}
          </p>
          <el-input
            v-model="phoneNumber"
            placeholder=""
            class="input-with-select input-style"
            @input="phoneInput"
          >
            <el-select v-model="code" slot="prepend" placeholder="">
              <el-option
                v-for="item in codeList"
                :key="item.value"
                :label="item.value"
                :value="item.value"
              >
                <img
                  :src="item.img"
                  style="width: 17px;height: 12px;float: left;margin-top: 11px;margin-right: 3px;"
                />
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{
                  item.value
                }}</span>
              </el-option>
            </el-select>
          </el-input>
          <p style="color: red;" v-show="phoneNum == 1">
            {{ $t("localization.phoneSureFont") }}
          </p>
        </div>
        <div class="right-tel">
          <p>
            <span style="color: red;">* </span
            >{{ $t("localization.consultContainerFont") }}
          </p>
          <textarea
            class="area-type"
            style="padding-left: 15px;"
            v-model="content"
            @input="contentInput"
          ></textarea>
          <p style="color: red;" v-show="contentNum == 1">
            {{ $t("localization.contentSureFont") }}
          </p>
        </div>
        <div style="width: 100%;text-align: right;">
          <div class="submit-button" @click="submitContent" v-preventClick>
            SUBMIT
          </div>
        </div>
      </div>
    </div>
    <div>
      <footerPage></footerPage>
    </div>
  </div>
</template>

<script>
import headerPage from "@/components/headerPage";
import footerPage from "@/components/footerPage";
import Clipboard from "clipboard";
export default {
  components: {
    headerPage,
    footerPage,
  },
  data() {
    return {
      langType: localStorage.getItem("DefaultLanguage"),
      emailNumber: "contact@monetbeauty.com",
      name: "",
      phoneNumber: "",
      phone: "+855 15220000",
      content: "",
      code: "+86",
      codeList: [
        {
          label: "中国大陆",
          value: "+86",
          img: require("../assets/imgs/home/china.png"),
        },
        {
          label: "中國香港",
          value: "+852",
          img: require("../assets/imgs/home/xiang.png"),
        },
        {
          label: "臺灣",
          value: "+886",
          img: require("../assets/imgs/home/tai.png"),
        },
        {
          label: "កម្ពុជា",
          value: "+855",
          img: require("../assets/imgs/home/jian.png"),
        },
      ],
      nameNum: 0,
      phoneNum: 0,
      contentNum: 0,
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
    langChange(value) {
      this.langType = value;
    },
    nameInput() {
      if (this.name !== "") this.nameNum = 0;
    },
    phoneInput() {
      if (this.code !== "" || this.phoneNumber !== "") this.phoneNum = 0;
    },
    contentInput() {
      if (this.content !== "") this.contentNum = 0;
    },
    check() {
      if (this.name == "") this.nameNum = 1;
      if (this.code == "" || this.phoneNumber == "") this.phoneNum = 1;
      if (this.content == "") this.contentNum = 1;
    },
    submitContent() {
      this.check();
      if (this.nameNum !== 1 && this.phoneNum !== 1 && this.contentNum !== 1) {
        this.$axios
          .post(this.$store.state.baseUrl + "/reserve", {
            name: this.name,
            code: this.code,
            phoneNumber: this.phoneNumber,
            content: this.content,
          })
          .then((res) => {
            console.log("咨询內容提交");
            console.log(res);
            this.$message.success({
              message: "您的咨询内容提交成功",
              showClose: true,
              duration: 2000,
            });
            this.name = "";
            this.phoneNumber = "";
            this.content = "";
          })
          .catch((err) => {
            console.log(err);
            this.$message.error({
              message: err.data.message,
              showClose: true,
              duration: 2000,
            });
            this.name = "";
            this.phoneNumber = "";
            this.content = "";
          });
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.second-title {
  width: 90%;
  display: flex;
  justify-content: center;
  color: #755793;

  img {
    height: 18px;
  }
}

.service-page-container {
  position: relative;
  z-index: 0;

  .contact-main {
    background-color: #fff;

    .main-left {
      text-align: left;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;

      .main-left-title {
        color: #837a8b;
      }

      .main-left-tel,
      .main-left-email {
        display: flex;
        color: #837a8b;
      }

      .main-left-map {
        img {
          object-fit: cover;
        }
      }
    }

    .main-right {
      background-color: #fbf8fe;

      .right-top {
        color: #755793;
        font-weight: bold;
      }

      .right-name,
      .right-tel {
        text-align: left;

        p {
          font-size: 14px;
          color: #959596;
        }
      }

      .input-style,
      .area-type {
        width: 100%;
        border: none;
        outline: none;
        background-color: #fff;
      }

      .submit-button {
        font-size: 14px;
        background-color: #755793;
        text-align: center;
        color: #fff;
        // float: right;
        cursor: pointer;
      }
    }
  }

  .con-icon01 {
    width: 22px;
    height: 22px;
  }

  .con-icon02 {
    width: 26px;
    height: 19px;
  }

  .con-icon03 {
    width: 23px;
    height: 27px;
  }
}

@media screen and (min-width: 1781px) {
  .header-page {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .about-page-first {
    .first-img {
      display: none;
    }
  }

  .pc-banner-img {
    width: 100%;
    object-fit: cover;
  }

  .second-title {
    margin: 50px auto;
    font-size: 30px;
    letter-spacing: 3;

    .img-left {
      margin-right: 30px;
    }

    .img-right {
      margin-left: 30px;
    }
  }

  .contact-main {
    display: flex;
    justify-content: space-between;

    .main-left {
      margin: 0 0 50px 220px;

      .main-left-title {
        font-size: 32px;
        font-weight: bold;
      }

      .main-left-tel,
      .left-email {
        margin-bottom: 20px;
      }

      .main-left-tel,
      .main-left-email {
        p {
          margin-left: 24px;
          font-size: 18px;
        }
      }

      .left-email {
        padding-right: 40%;
      }

      .main-left-map {
        width: 70%;
        height: 410px;
        margin-top: 50px;
      }
    }

    .main-right {
      width: 600px;
      margin: 0 220px 50px 0;
      padding: 0 50px 40px;

      .right-top {
        margin-top: 40px;
        font-size: 30px;
      }

      .input-style {
        height: 40px;
        margin-top: 10px;
      }

      .right-name {
        margin-top: 60px;
      }

      .right-tel {
        margin-top: 30px;
      }

      .area-type {
        height: 200px;
        margin-top: 10px;
      }

      .submit-button {
        width: 200px;
        height: 52px;
        margin: 0 auto;
        margin-top: 30px;
        line-height: 52px;
      }
    }
  }

  .second-phone-title {
    display: none;
  }
}

@media screen and (min-width: 1499px) and (max-width: 1780px) {
  .header-page {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .about-page-first {
    .first-img {
      display: none;
    }
  }

  .pc-banner-img {
    width: 100%;
    object-fit: cover;
  }

  .second-title {
    margin: 50px auto;
    font-size: 30px;
    letter-spacing: 3;

    .img-left {
      margin-right: 30px;
    }

    .img-right {
      margin-left: 30px;
    }
  }

  .contact-main {
    width: 85%;
    margin: 0 auto;
    padding-bottom: 40px;
    display: flex;
    justify-content: space-between;

    .main-left {
      width: 45%;

      .main-left-title {
        font-size: 32px;
        font-weight: bold;
      }

      .main-left-tel,
      .main-left-email {
        p {
          margin-left: 24px;
          font-size: 18px;
        }
      }

      .main-left-tel,
      .left-email {
        margin-bottom: 20px;
      }

      .left-email {
        padding-right: 0;
      }

      .main-left-map {
        width: 70%;
        height: 410px;
        margin-top: 50px;
      }
    }

    .main-right {
      width: 45%;
      padding: 0 50px 30px;

      .right-top {
        margin-top: 40px;
        font-size: 30px;
      }

      .input-style {
        height: 40px;
        margin-top: 10px;
      }

      .right-name {
        margin-top: 60px;
      }

      .right-tel {
        margin-top: 30px;
      }

      .area-type {
        height: 200px;
        margin-top: 10px;
      }

      .submit-button {
        width: 200px;
        height: 52px;
        margin: 0 auto;
        margin-top: 30px;
        line-height: 52px;
      }
    }
  }

  .second-phone-title {
    display: none;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1500px) {
  .header-page {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .about-page-first {
    .first-img {
      display: none;
    }
  }

  .pc-banner-img {
    width: 100%;
    object-fit: cover;
  }

  .second-title {
    margin: 50px auto;
    font-size: 30px;
    letter-spacing: 3;

    .img-left {
      margin-right: 30px;
    }

    .img-right {
      margin-left: 30px;
    }
  }

  .contact-main {
    width: 85%;
    margin: 0 auto;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;

    .main-left {
      width: 49%;

      .main-left-title {
        font-size: 32px;
        font-weight: bold;
      }

      .main-left-tel,
      .main-left-email {
        p {
          margin-left: 24px;
          font-size: 18px;
        }
      }

      .main-left-tel,
      .left-email {
        margin-bottom: 20px;
      }

      .left-email {
        padding-right: 0;
      }

      .main-left-map {
        width: 70%;
        height: 410px;
        margin-top: 50px;
      }
    }

    .main-right {
      width: 45%;
      padding: 0 50px 30px;

      .right-top {
        margin-top: 40px;
        font-size: 30px;
      }

      .input-style {
        height: 40px;
        margin-top: 10px;
      }

      .right-name {
        margin-top: 60px;
      }

      .right-tel {
        margin-top: 30px;
      }

      .area-type {
        height: 200px;
        margin-top: 10px;
      }

      .submit-button {
        width: 200px;
        height: 52px;
        margin: 0 auto;
        margin-top: 30px;
        line-height: 52px;
      }
    }
  }

  .second-phone-title {
    display: none;
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .header-page {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .about-page-first {
    .first-img {
      display: none;
    }
  }

  .pc-banner-img {
    width: 100%;
    object-fit: cover;
  }

  .second-title {
    margin: 50px auto;
    font-size: 30px;
    letter-spacing: 3;

    .img-left {
      margin-right: 30px;
    }

    .img-right {
      margin-left: 30px;
    }
  }

  .contact-main {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 40px;
    display: flex;
    justify-content: space-between;

    .main-left {
      width: 49%;

      .main-left-title {
        font-size: 32px;
        font-weight: bold;
      }

      .main-left-tel,
      .main-left-email {
        p {
          margin-left: 24px;
          font-size: 18px;
        }
      }

      .main-left-tel,
      .left-email {
        margin-bottom: 20px;
      }

      .left-email {
        padding-right: 0;
      }

      .main-left-map {
        width: 70%;
        height: 310px;
        margin-top: 50px;
      }
    }

    .main-right {
      width: 49%;
      padding: 0 30px 30px;

      .right-top {
        margin-top: 40px;
        font-size: 30px;
      }

      .input-style {
        height: 40px;
        margin-top: 10px;
      }

      .right-name {
        margin-top: 60px;
      }

      .right-tel {
        margin-top: 30px;
      }

      .area-type {
        height: 200px;
        margin-top: 10px;
      }

      .submit-button {
        width: 200px;
        height: 52px;
        margin: 0 auto;
        margin-top: 30px;
        line-height: 52px;
      }
    }
  }

  .second-phone-title {
    display: none;
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .header-page {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #fff;
  }

  .about-page-first {
    .first-img {
      display: none;
    }
  }

  .pc-banner-img {
    width: 100%;
    object-fit: cover;
  }

  .about-page-first {
    padding-top: 60px;
  }

  .second-title {
    margin: 50px auto;
    font-size: 30px;
    letter-spacing: 3;

    .img-left {
      margin-right: 30px;
    }

    .img-right {
      margin-left: 30px;
    }
  }

  .contact-main {
    padding: 0 20px 30px 20px;
    display: flex;
    justify-content: space-between;

    .main-left {
      width: 46%;
      margin: 0 auto;

      .main-left-title {
        font-size: 25px;
        font-weight: bold;
      }

      .main-left-tel,
      .main-left-email {
        p {
          margin-left: 10px;
          font-size: 16px;
        }
      }

      .main-left-tel,
      .left-email {
        margin-bottom: 20px;
      }

      .left-email {
        padding-right: 0;
      }

      .main-left-map {
        width: 90%;
        height: 310px;
        margin-top: 50px;
      }
    }

    .main-right {
      width: 54%;
      margin-left: 10px;
      padding: 0 30px 30px;

      .right-top {
        padding-top: 30px;
        font-size: 22px;
      }

      .input-style {
        height: 40px;
        margin-top: 10px;
      }

      .right-name {
        margin-top: 30px;
      }

      .right-tel {
        margin-top: 30px;
      }

      .area-type {
        height: 200px;
        margin-top: 10px;
      }

      .submit-button {
        width: 150px;
        height: 42px;
        margin: 0 auto;
        margin-top: 30px;
        line-height: 42px;
      }
    }
  }

  .second-phone-title {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .header-page {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #fff;
  }

  .about-page-first {
    .first-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .pc-banner-img {
    display: none;
  }

  .about-page-first {
    padding-top: 60px;
  }

  .second-title {
    display: none;
    margin: 20px auto;
    font-size: 18px;
    letter-spacing: 3;

    .img-left {
      margin-right: 10px;
    }

    .img-right {
      margin-left: 10px;
    }

    img {
      height: 12px;
    }
  }

  .contact-main {
    padding-bottom: 30px;
    // display: flex;
    // justify-content: space-between;

    .main-left {
      width: 90%;
      margin: 0 auto;
      padding: 0;

      .main-left-title {
        font-size: 20px;
        font-weight: bold;
      }

      .main-left-tel,
      .main-left-email {
        .con-icon01 {
          width: 15px;
          height: 15px;
        }

        .con-icon02 {
          width: 18px;
          height: 13px;
        }

        .con-icon03 {
          width: 15px;
          height: 19px;
        }

        p {
          margin-left: 10px;
          font-size: 14px;
        }
      }

      .main-left-tel,
      .left-email {
        margin-top: 0;
        margin-bottom: 15px;
      }

      .main-left-email {
        margin-top: 0;
      }

      .main-left-map-font {
        margin-top: 20px;
        font-size: 18px;
        font-weight: bold;
      }

      .main-left-map {
        // width: 300px;
        width: 100%;
        height: 250px;
        margin: 0 auto;
        margin-top: 20px;
      }
    }

    .main-right {
      width: 90%;
      margin: 40px auto 0;
      padding: 0 30px 20px;

      .right-top {
        padding-top: 20px;
        font-size: 20px;
      }

      .input-style {
        height: 40px;
        margin-top: 5px;
      }

      .right-name {
        margin-top: 20px;
      }

      .right-tel {
        margin-top: 20px;
      }

      .area-type {
        height: 100px;
        margin-top: 5px;
      }

      .submit-button {
        width: 100%;
        height: 40px;
        margin-top: 20px;
        line-height: 40px;
      }
    }
  }

  .second-phone-title {
    display: block;
    width: 100%;
    height: 32px;
    margin: 25px auto;
    line-height: 32px;
    color: #fff;
    background-color: #755793;
    font-size: 16px;
  }
}
</style>

<style lang="scss">
#contact-page {
  .el-input-group__prepend {
    border: none;
  }

  .el-input__inner {
    // width: 100px;
    background-color: #fff;
    border: none;
  }

  .el-select {
    width: 100px;
  }

  .el-select-dropdown__list {
    width: 150px !important;
    list-style: none;
    padding: 6px 0;
    margin: 0;
    box-sizing: border-box;
  }
}

.el-scrollbar {
  width: 150px !important;
}

.el-select-dropdown__item {
  padding: 0 15px;
}
</style>
