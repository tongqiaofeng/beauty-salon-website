<template>
  <div class="service-page-container" id="contact-page">
    <div class="header-page">
      <headerPage @langChange="langChange"></headerPage>
    </div>
    <div class="about-page-first">
      <img src="../assets/imgs/contact/top.png" class="first-img" />
      <img src="../assets/imgs/contact/pc-top.png" class="pc-banner-img" />
    </div>
    <div class="contact-main">
      <div class="second-title">
        <img
          :src="
            langType == 'zh-CN'
              ? brand03
              : langType == 'zh-TW'
              ? brand02
              : langType == 'en-US'
              ? brand01
              : brand01
          "
        />
      </div>
      <div class="second-phone-title">
        <img
          :src="
            langType == 'zh-CN'
              ? brand03
              : langType == 'zh-TW'
              ? brand02
              : langType == 'en-US'
              ? brand01
              : brand01
          "
        />
      </div>

      <div class="main-company-every">
        <div class="every-img marginRight" @click="checkStore(1)">
          <img src="../assets/imgs/contact/shop02.png" alt="" />
        </div>
        <div class="every-font">
          <div class="font-main">
            <div class="font-title" @click="checkStore(1)">
              {{ $t("localization.lonDonFont") }}
            </div>
            <div class="font-detail" @click="checkStore(1)">
              {{ $t("localization.addrDetailsLonDonFont") }}
            </div>
            <div class="font-contact">
              <div class="contact-phone">
                <img src="../assets/imgs/contact/tele.png" class="con-icon01" />
                <p @click="callPhone">+855 15220000</p>
              </div>
              <div class="contact-email">
                <img
                  src="../assets/imgs/contact/email.png"
                  class="con-icon02"
                />
                <p
                  class="tag-read"
                  style="cursor: pointer"
                  :data-clipboard-text="emailNumber"
                  @click="copyBankAccount"
                >
                  contact@monetbeauty.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-company-every">
        <div class="every-font">
          <div class="font-main">
            <div class="font-title" @click="checkStore(2)">
              {{ $t("localization.hongKongFont") }}
            </div>
            <div class="font-detail" @click="checkStore(2)">
              {{ $t("localization.addrDetailsHongKongFont") }}
            </div>
            <div class="font-contact">
              <div class="contact-phone">
                <img src="../assets/imgs/contact/tele.png" class="con-icon01" />
                <p @click="callPhone">+855 15220000</p>
              </div>
              <div class="contact-email">
                <img
                  src="../assets/imgs/contact/email.png"
                  class="con-icon02"
                />
                <p
                  class="tag-read"
                  style="cursor: pointer"
                  :data-clipboard-text="emailNumber"
                  @click="copyBankAccount"
                >
                  contact@monetbeauty.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="every-img marginLeft" @click="checkStore(2)">
          <img src="../assets/imgs/contact/shop04.png" alt="" />
        </div>
      </div>
      <div class="main-company-every">
        <div class="every-img marginRight" @click="checkStore(3)">
          <img src="../assets/imgs/contact/shop01.png" alt="" />
        </div>
        <div class="every-font">
          <div class="font-main">
            <div class="font-title" @click="checkStore(3)">
              {{ $t("localization.jinBianFont") }}
            </div>
            <div class="font-detail" @click="checkStore(3)">
              {{ $t("localization.addrDetailsFont") }}
            </div>
            <div class="font-contact">
              <div class="contact-phone">
                <img src="../assets/imgs/contact/tele.png" class="con-icon01" />
                <p @click="callPhone">+855 15220000</p>
              </div>
              <div class="contact-email">
                <img
                  src="../assets/imgs/contact/email.png"
                  class="con-icon02"
                />
                <p
                  class="tag-read"
                  style="cursor: pointer"
                  :data-clipboard-text="emailNumber"
                  @click="copyBankAccount"
                >
                  contact@monetbeauty.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="main-company-every">
        <div class="every-font">
          <div class="font-main">
            <div class="font-title" @click="checkStore(4)">
              {{ $t("localization.jinBianPHFont") }}
            </div>
            <div class="font-detail" @click="checkStore(4)">
              {{ $t("localization.addrDetailsPHFont") }}
            </div>
            <div class="font-contact">
              <div class="contact-phone">
                <img src="../assets/imgs/contact/tele.png" class="con-icon01" />
                <p @click="callPhone">+855 15220000</p>
              </div>
              <div class="contact-email">
                <img
                  src="../assets/imgs/contact/email.png"
                  class="con-icon02"
                />
                <p
                  class="tag-read"
                  style="cursor: pointer"
                  :data-clipboard-text="emailNumber"
                  @click="copyBankAccount"
                >
                  contact@monetbeauty.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="every-img marginLeft" @click="checkStore(4)">
          <img src="../assets/imgs/contact/shop03.png" alt="" />
        </div>
      </div>

      <!-- <div class="main-left">
        <div class="main-left-map">
          <a
            href="https://www.google.com/maps/dir/?api=1&language=zh-CN&origin=&destination=11.548813,104.935900"
            target="_blank"
            ><img
              src="../assets/imgs/contact/conMap.png"
              style="width: 100%; height: 100%"
          /></a>
        </div>
      </div> -->
      <div class="main-right">
        <p class="right-top">{{ $t("localization.consultFont") }}</p>
        <div class="right-name">
          <p>
            <span style="color: red">* </span>{{ $t("localization.nameFont") }}
          </p>
          <el-input
            class="input-style"
            type="text"
            v-model="name"
            @input="nameInput"
          >
          </el-input>

          <p style="color: red" v-show="nameNum == 1">
            {{ $t("localization.nameSureFont") }}
          </p>
        </div>
        <div class="right-tel">
          <p>
            <span style="color: red">* </span
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
                  style="
                    width: 17px;
                    height: 12px;
                    float: left;
                    margin-top: 11px;
                    margin-right: 3px;
                  "
                />
                <span style="float: left">{{ item.label }}</span>
                <span style="float: right; color: #8492a6; font-size: 13px">{{
                  item.value
                }}</span>
              </el-option>
            </el-select>
          </el-input>
          <p style="color: red" v-show="phoneNum == 1">
            {{ $t("localization.phoneSureFont") }}
          </p>
        </div>
        <div class="right-tel">
          <p>
            <span style="color: red">* </span
            >{{ $t("localization.consultContainerFont") }}
          </p>
          <textarea
            class="area-type"
            style="padding-left: 15px"
            v-model="content"
            @input="contentInput"
          ></textarea>
          <p style="color: red" v-show="contentNum == 1">
            {{ $t("localization.contentSureFont") }}
          </p>
        </div>
        <div style="width: 100%; text-align: right">
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
        {
          label: "Britain",
          value: "+44",
          img: require("../assets/imgs/home/en.png"),
        },
      ],
      nameNum: 0,
      phoneNum: 0,
      contentNum: 0,

      brand01: require("../assets/imgs/contact/title.png"),
      brand02: require("../assets/imgs/contact/title02.png"),
      brand03: require("../assets/imgs/contact/title03.png"),
    };
  },
  methods: {
    // 跳转店内详情
    checkStore(val) {
      this.$router.push({
        path: "/store",
        query: {
          storeSel: val,
        },
      });
    },
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
  width: 100%;
  margin: 30px auto 15px;
  display: flex;
  justify-content: flex-start;
  color: #755793;

  img {
    width: 325px;
    height: 98px;
    object-fit: cover;
  }
}

.service-page-container {
  position: relative;
  z-index: 0;

  .contact-main {
    background-color: #fff;

    .main-company-every {
      margin-bottom: 34px;
      display: flex;
      justify-content: center;
      align-items: center;

      .every-img {
        cursor: pointer;
      }

      .every-font {
        text-align: left;

        .font-title {
          color: #863e89;
          cursor: pointer;
        }

        .font-detail {
          color: #616366;
          cursor: pointer;
        }
      }

      .font-contact {
        .contact-phone {
          display: flex;
          align-items: center;
          color: #863e89;

          .con-icon01 {
            width: 12px;
            height: 12px;
            margin-right: 6px;
          }
        }

        .contact-email {
          display: flex;
          align-items: center;

          .con-icon02 {
            width: 12px;
            height: 12px;
            margin-right: 6px;
          }

          .tag-read {
            color: #85888c;
          }
        }
      }
    }

    .main-right {
      .right-top {
        color: #863e89;
        font-weight: bold;
        text-align: center;
      }

      .right-name,
      .right-tel {
        text-align: left;

        p {
          font-size: 15px;
          color: #000;
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
        background-color: #863e89;
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

  .contact-main {
    // width: 85%;
    width: fit-content;
    margin: 0 auto;
    margin-top: 80px;

    .every-img {
      cursor: pointer;
      img {
        width: 610px;
        height: 401px;
      }
    }

    .every-font {
      .font-title {
        font-size: 26px;
      }

      .font-detail {
        font-size: 18px;
      }
    }

    .font-contact {
      .contact-phone {
        font-size: 16px;
      }

      .contact-email {
        .tag-read {
          font-size: 16px;
        }
      }
    }

    .every-font {
      width: 410px;

      .font-main {
        width: 300px;
        margin: 0 auto;

        .font-detail {
          margin-top: 15px;
          line-height: 24px;
        }
      }
    }

    .font-contact {
      margin-top: 21px;

      .contact-email {
        margin-top: 9px;
      }
    }

    .main-right {
      width: 65%;
      margin: 0 auto;
      padding: 16px 50px 30px;

      .right-top {
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

  .contact-main {
    // width: 85%;
    width: fit-content;
    margin: 0 auto;
    margin-top: 80px;

    .every-img {
      cursor: pointer;
      img {
        width: 610px;
        height: 401px;
      }
    }

    .every-font {
      .font-title {
        font-size: 26px;
      }

      .font-detail {
        font-size: 18px;
      }
    }

    .font-contact {
      .contact-phone {
        font-size: 16px;
      }

      .contact-email {
        .tag-read {
          font-size: 16px;
        }
      }
    }

    .every-font {
      width: 410px;

      .font-main {
        width: 300px;
        margin: 0 auto;

        .font-detail {
          margin-top: 15px;
          line-height: 24px;
        }
      }
    }

    .font-contact {
      margin-top: 21px;

      .contact-email {
        margin-top: 9px;
      }
    }

    .main-right {
      width: 65%;
      margin: 0 auto;
      padding: 16px 50px 30px;

      .right-top {
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

  .contact-main {
    // width: 85%;
    width: fit-content;
    margin: 0 auto;
    margin-top: 80px;

    .every-img {
      cursor: pointer;
      img {
        width: 610px;
        height: 401px;
      }
    }

    .every-font {
      .font-title {
        font-size: 26px;
      }

      .font-detail {
        font-size: 18px;
      }
    }

    .font-contact {
      .contact-phone {
        font-size: 16px;
      }

      .contact-email {
        .tag-read {
          font-size: 16px;
        }
      }
    }

    .every-font {
      width: 410px;

      .font-main {
        width: 300px;
        margin: 0 auto;

        .font-detail {
          margin-top: 15px;
          line-height: 24px;
        }
      }
    }

    .font-contact {
      margin-top: 21px;

      .contact-email {
        margin-top: 9px;
      }
    }

    .main-right {
      width: 65%;
      margin: 0 auto;
      padding: 16px 50px 30px;

      .right-top {
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

  .contact-main {
    // width: 85%;
    width: fit-content;
    margin: 0 auto;
    margin-top: 60px;

    .every-img {
      cursor: pointer;
      img {
        width: 410px;
        height: 251px;
      }
    }

    .every-font {
      .font-title {
        font-size: 26px;
      }

      .font-detail {
        font-size: 18px;
      }
    }

    .font-contact {
      .contact-phone {
        font-size: 16px;
      }

      .contact-email {
        .tag-read {
          font-size: 16px;
        }
      }
    }

    .every-font {
      width: 410px;

      .font-main {
        width: 300px;
        margin: 0 auto;

        .font-detail {
          margin-top: 15px;
          line-height: 24px;
        }
      }
    }

    .font-contact {
      margin-top: 21px;

      .contact-email {
        margin-top: 9px;
      }
    }

    .main-right {
      width: 65%;
      margin: 0 auto;
      padding: 16px 50px 30px;

      .right-top {
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

  .contact-main {
    width: fit-content;
    padding: 0 20px 0 20px;
    margin: 0 auto;
    margin-top: 40px;

    .main-company-every {
      padding: 0 15px;

      .every-img {
        cursor: pointer;
        img {
          width: 252px;
          height: 162px;
        }
      }

      .every-font {
        .font-title {
          font-size: 24px;
        }

        .font-detail {
          font-size: 10px;
        }
      }

      .font-contact {
        .contact-phone {
          font-size: 10px;
        }

        .contact-email {
          .tag-read {
            font-size: 10px;
          }
        }
      }

      .every-font {
        width: 300px;
        .font-main {
          width: 250px;
          margin: 0 auto;

          .font-detail {
            margin-top: 8px;
            line-height: 16px;
          }
        }
      }

      .font-contact {
        margin-top: 10px;

        .contact-email {
          margin-top: 5px;
        }
      }
    }
    .main-right {
      width: 80%;
      margin: 0 auto;
      padding: 16px 30px 30px;

      .right-top {
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
  }

  .contact-main {
    .main-company-every {
      padding: 0 15px;
      .every-img {
        cursor: pointer;
        img {
          width: 182px;
          height: 132px;
        }
      }

      .marginRight {
        margin-right: 13px;
      }

      .marginLeft {
        margin-left: 13px;
      }

      .every-font {
        .font-title {
          font-weight: 600;
          font-size: 17px;
        }

        .font-detail {
          font-size: 10px;
        }
      }

      .font-contact {
        .contact-phone {
          font-size: 10px;
        }

        .contact-email {
          .tag-read {
            font-size: 10px;
          }
        }
      }

      .every-font {
        width: 300px;

        .font-detail {
          margin-top: 8px;
          line-height: 16px;
        }
      }

      .font-contact {
        margin-top: 10px;

        .contact-email {
          margin-top: 5px;
        }
      }
    }
    .main-right {
      width: 90%;
      margin: 16px auto 0;
      padding: 0 30px 20px;

      .right-top {
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
    margin: 30px auto 15px;
    text-align: left;

    img {
      width: 325px;
      height: 97px;
      object-fit: cover;
    }
  }
}
</style>

<style lang="scss">
#contact-page {
  .el-input-group__prepend {
    border: none;
  }

  .el-input__inner,
  .area-type {
    // width: 100px;
    background-color: #f5f6f7 !important;
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
