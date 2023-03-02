<template>
  <div class="service-page-container" id="contact-page">
    <div class="header-page">
      <headerPage @langChange="langChange"></headerPage>
    </div>
    <div class="about-page-first" v-if="storeSel == 1">
      <img
        class="first-img"
        :src="
          langType == 'zh-CN'
            ? backLonDonImg02
            : langType == 'zh-TW'
            ? backLonDonImg03
            : langType == 'en-US'
            ? backLonDonImg01
            : backLonDonImg01
        "
      />
      <img
        class="pc-banner-img"
        :src="
          langType == 'zh-CN'
            ? backLonDonImg02
            : langType == 'zh-TW'
            ? backLonDonImg03
            : langType == 'en-US'
            ? backLonDonImg01
            : backLonDonImg01
        "
      />
    </div>
    <div class="about-page-first" v-if="storeSel == 2">
      <img
        class="first-img"
        :src="
          langType == 'zh-CN'
            ? backHongKongImg02
            : langType == 'zh-TW'
            ? backHongKongImg03
            : langType == 'en-US'
            ? backHongKongImg01
            : backHongKongImg01
        "
      />
      <img
        class="pc-banner-img"
        :src="
          langType == 'zh-CN'
            ? backHongKongImg02
            : langType == 'zh-TW'
            ? backHongKongImg03
            : langType == 'en-US'
            ? backHongKongImg01
            : backHongKongImg01
        "
      />
    </div>
    <div class="about-page-first" v-if="storeSel == 3">
      <img
        class="first-img"
        :src="
          langType == 'zh-CN'
            ? backYongImg02
            : langType == 'zh-TW'
            ? backYongImg03
            : langType == 'en-US'
            ? backYongImg01
            : backYongImg01
        "
      />
      <img
        class="pc-banner-img"
        :src="
          langType == 'zh-CN'
            ? backYongImg02
            : langType == 'zh-TW'
            ? backYongImg03
            : langType == 'en-US'
            ? backYongImg01
            : backYongImg01
        "
      />
    </div>
    <div class="about-page-first" v-if="storeSel == 4">
      <img
        class="first-img"
        :src="
          langType == 'zh-CN'
            ? backPHImg02
            : langType == 'zh-TW'
            ? backPHImg03
            : langType == 'en-US'
            ? backPHImg01
            : backPHImg01
        "
      />
      <img
        class="pc-banner-img"
        :src="
          langType == 'zh-CN'
            ? backPHImg02
            : langType == 'zh-TW'
            ? backPHImg03
            : langType == 'en-US'
            ? backPHImg01
            : backPHImg01
        "
      />
    </div>
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
    <div class="about-page-third" v-if="storeSel == 1">
      <div class="third-img">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/london/frame01.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/london/frame02.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/london/frame03.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/london/frame04.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/london/frame05.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/london/frame06.png"
                  style="width: 100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="first-contact">
        <div class="contact-addr">
          <img src="../assets/imgs/contact/addr.png" class="con-icon01" />
          <p style="color: #616366">
            {{ $t("localization.addrDetailsLonDonFont") }}
          </p>
        </div>
        <div class="contact-phone">
          <img src="../assets/imgs/contact/tele.png" class="con-icon02" />
          <p style="color: #863e89" @click="callPhone">+855 15220000</p>
        </div>
      </div>
    </div>
    <div class="about-page-third" v-if="storeSel == 2">
      <div class="third-img">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/hongKong/frame01.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/hongKong/frame02.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/hongKong/frame03.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/hongKong/frame04.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/hongKong/frame05.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/hongKong/frame06.png"
                  style="width: 100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="first-contact">
        <div class="contact-addr">
          <img src="../assets/imgs/contact/addr.png" class="con-icon01" />
          <p style="color: #616366">
            {{ $t("localization.addrDetailsHongKongFont") }}
          </p>
        </div>
        <div class="contact-phone">
          <img src="../assets/imgs/contact/tele.png" class="con-icon02" />
          <p style="color: #863e89" @click="callPhone">+855 15220000</p>
        </div>
      </div>
    </div>
    <div class="about-page-third" v-if="storeSel == 3">
      <div class="third-img">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/yongWang/frame01.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/yongWang/frame02.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/yongWang/frame03.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/yongWang/frame04.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/yongWang/frame05.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/yongWang/frame06.png"
                  style="width: 100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="first-contact">
        <div class="contact-addr">
          <img src="../assets/imgs/contact/addr.png" class="con-icon01" />
          <p style="color: #616366">{{ $t("localization.addrDetailsFont") }}</p>
        </div>
        <div class="contact-phone">
          <img src="../assets/imgs/contact/tele.png" class="con-icon02" />
          <p style="color: #863e89" @click="callPhone">+855 15220000</p>
        </div>
      </div>
    </div>
    <div class="about-page-third" v-if="storeSel == 4">
      <div class="third-img">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/PH/frame01.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/PH/frame02.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/PH/frame03.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/PH/frame04.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/PH/frame05.png"
                  style="width: 100%"
                />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px">
                <img
                  src="../assets/imgs/store/PH/frame06.png"
                  style="width: 100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="first-contact">
        <div class="contact-addr">
          <img src="../assets/imgs/contact/addr.png" class="con-icon01" />

          <p style="color: #616366">
            {{ $t("localization.addrDetailsPHFont") }}
          </p>
        </div>
        <div class="contact-phone">
          <img src="../assets/imgs/contact/tele.png" class="con-icon02" />
          <p style="color: #863e89" @click="callPhone">+855 15220000</p>
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
      phone: "+855 15220000",

      storeSel: 0,

      brand01: require("../assets/imgs/store/storeImgTitle.png"),
      brand02: require("../assets/imgs/store/storeImgTitle02.png"),
      brand03: require("../assets/imgs/store/storeImgTitle03.png"),
      brand04: require("../assets/imgs/store/storeImgTitle04.png"),

      backLonDonImg01: require("../assets/imgs/store/london/back.png"),
      backLonDonImg02: require("../assets/imgs/store/london/backch.png"),
      backLonDonImg03: require("../assets/imgs/store/london/backtw.png"),
      backLonDonImg04: require("../assets/imgs/store/london/backkh.png"),

      backHongKongImg01: require("../assets/imgs/store/hongKong/back.png"),
      backHongKongImg02: require("../assets/imgs/store/hongKong/backch.png"),
      backHongKongImg03: require("../assets/imgs/store/hongKong/backtw.png"),
      backHongKongImg04: require("../assets/imgs/store/hongKong/backkh.png"),

      backPHImg01: require("../assets/imgs/store/PH/back.png"),
      backPHImg02: require("../assets/imgs/store/PH/backch.png"),
      backPHImg03: require("../assets/imgs/store/PH/backtw.png"),
      backPHImg04: require("../assets/imgs/store/PH/backkh.png"),

      backYongImg01: require("../assets/imgs/store/yongWang/back.png"),
      backYongImg02: require("../assets/imgs/store/yongWang/backch.png"),
      backYongImg03: require("../assets/imgs/store/yongWang/backtw.png"),
      backYongImg04: require("../assets/imgs/store/yongWang/backkh.png"),
    };
  },
  created() {
    this.storeSel = this.$route.query.storeSel;
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
.first-contact {
  margin-top: 36px;

  .contact-addr,
  .contact-phone {
    display: flex;
    align-items: center;
    text-align: left;

    .con-icon01 {
      width: 14px;
      height: 17px;
      margin-right: 5px;
      object-fit: cover;
    }

    .con-icon02 {
      width: 14px;
      height: 14px;
      margin-right: 5px;
      object-fit: cover;
    }
  }

  .contact-phone {
    margin-top: 16px;
  }
}

.second-title {
  display: flex;
  justify-content: flex-start;
  color: #755793;
}

.service-page-container {
  position: relative;
  z-index: 0;

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

.about-page-third {
  .container,
  .container-lg,
  .container-md,
  .container-sm,
  .container-xl {
    max-width: 100%;
  }

  .col,
  .col-1,
  .col-10,
  .col-11,
  .col-12,
  .col-2,
  .col-3,
  .col-4,
  .col-5,
  .col-6,
  .col-7,
  .col-8,
  .col-9,
  .col-auto,
  .col-lg,
  .col-lg-1,
  .col-lg-10,
  .col-lg-11,
  .col-lg-12,
  .col-lg-2,
  .col-lg-3,
  .col-lg-4,
  .col-lg-5,
  .col-lg-6,
  .col-lg-7,
  .col-lg-8,
  .col-lg-9,
  .col-lg-auto,
  .col-md,
  .col-md-1,
  .col-md-10,
  .col-md-11,
  .col-md-12,
  .col-md-2,
  .col-md-3,
  .col-md-4,
  .col-md-5,
  .col-md-6,
  .col-md-7,
  .col-md-8,
  .col-md-9,
  .col-md-auto,
  .col-sm,
  .col-sm-1,
  .col-sm-10,
  .col-sm-11,
  .col-sm-12,
  .col-sm-2,
  .col-sm-3,
  .col-sm-4,
  .col-sm-5,
  .col-sm-6,
  .col-sm-7,
  .col-sm-8,
  .col-sm-9,
  .col-sm-auto,
  .col-xl,
  .col-xl-1,
  .col-xl-10,
  .col-xl-11,
  .col-xl-12,
  .col-xl-2,
  .col-xl-3,
  .col-xl-4,
  .col-xl-5,
  .col-xl-6,
  .col-xl-7,
  .col-xl-8,
  .col-xl-9,
  .col-xl-auto {
    position: relative;
    width: 50%;
    // width: 100%;
    padding-right: 0;
    padding-left: 0;
    display: flex;
    align-items: center;
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
    padding-top: 60px;

    .first-img {
      display: none;
    }
  }

  .pc-banner-img {
    width: 100%;
    object-fit: cover;
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
    padding-top: 60px;

    .first-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .pc-banner-img {
    display: none;
  }

  .second-title {
    display: none;
  }

  .second-phone-title {
    display: block;
    width: 100%;
    margin-top: 40px;
    text-align: left;

    img {
      width: 280px;
      height: 98px;
      object-fit: cover;
    }
  }
}

@media screen and (min-width: 1781px) {
  .second-title {
    width: 75%;
    margin: 0 auto;
    margin-top: 80px;

    img {
      width: 325px;
      height: 98px;
      object-fit: cover;
    }
  }

  .about-page-third {
    width: 75%;
    margin: 0 auto;
    padding-top: 30px;

    .third-img {
      display: flex;
      justify-content: space-between;
    }
  }
}

@media screen and (min-width: 1499px) and (max-width: 1780px) {
  .second-title {
    width: 1350px;
    margin: 0 auto;
    margin-top: 80px;

    img {
      width: 325px;
      height: 98px;
      object-fit: cover;
    }
  }

  .about-page-third {
    width: 1350px;
    margin: 0 auto;
    padding-top: 30px;

    .third-img {
      display: flex;
      justify-content: space-between;
    }
  }
}

@media screen and (min-width: 1200px) and (max-width: 1500px) {
  .second-title {
    width: 90%;
    margin: 0 auto;
    margin-top: 80px;

    img {
      width: 325px;
      height: 98px;
      object-fit: cover;
    }
  }

  .about-page-third {
    width: 90%;
    margin: 0 auto;
    padding-top: 30px;

    .third-img {
      display: flex;
      justify-content: space-between;

      div > img {
        width: 90%;
      }
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .second-title {
    width: 75%;
    margin: 0 auto;
    margin-top: 60px;

    img {
      width: 325px;
      height: 98px;
      object-fit: cover;
    }
  }

  .about-page-third {
    width: 75%;
    margin: 0 auto;
    padding-top: 30px;

    .third-img {
      display: flex;
      justify-content: space-between;

      div > img {
        width: 90%;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .second-title {
    width: 80%;
    margin: 0 auto;
    margin-top: 40px;

    img {
      width: 325px;
      height: 98px;
      object-fit: cover;
    }
  }

  .about-page-third {
    width: 80%;
    margin: 0 auto;
    padding-top: 30px;

    .third-img {
      display: flex;
      justify-content: space-between;

      div > img {
        width: 90%;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .about-page-third {
    padding: 10px 10px;

    .third-img {
      display: flex;
      justify-content: space-between;

      div > img {
        width: 90%;
      }
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
