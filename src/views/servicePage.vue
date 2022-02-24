<template>
  <div class="service-page-container">
    <div class="header-page">
      <headerPage @langChange="langChange"></headerPage>
    </div>
    <div class="service-page-first">
      <img src="../assets/imgs/service/service_top.png" class="first-img" />
      <img src="../assets/imgs/service/pc-service.png" class="pc-banner-img" />
    </div>
    <div class="home-page-second">
      <div class="second-title">
        <div class="img-left">
          <img src="../assets/imgs/home/left.png" />
        </div>
        <span v-html="$t('localization.specialProjectFont')"></span>
        <div class="img-right">
          <img src="../assets/imgs/home/rigth.png" />
        </div>
      </div>
      <div class="second-phone-title">
        <span v-html="$t('localization.specialProjectFont')"></span>
      </div>
      <div class="second-main">
        <div class="main-every">
          <div>
            <img src="../assets/imgs/home/001.png" @click="listJump(1)" />
          </div>
          <div>
            <p class="every-title01">
              {{ $t("localization.whiteningBeautyCreamFont") }}
            </p>
            <div class="every-title02" v-if="langType !== 'en-US'"></div>
          </div>
        </div>
        <div class="main-every">
          <div>
            <img src="../assets/imgs/home/002.png" @click="listJump(2)" />
          </div>
          <div>
            <p class="every-title01">
              {{ $t("localization.fightDeclineAscensionFont") }}
            </p>
            <div class="every-title03" v-if="langType !== 'en-US'"></div>
          </div>
        </div>
        <div class="main-every">
          <div>
            <img src="../assets/imgs/home/003.png" @click="listJump(3)" />
          </div>
          <div>
            <p class="every-title01">
              {{ $t("localization.cleanTheFillingWaterFont") }}
            </p>
            <div class="every-title04" v-if="langType !== 'en-US'"></div>
          </div>
        </div>
        <div class="main-every">
          <div>
            <img src="../assets/imgs/home/004.png" @click="listJump(4)" />
          </div>
          <div>
            <p class="every-title01">
              {{ $t("localization.raiseHairFont") }}
            </p>
            <div class="every-title05" v-if="langType !== 'en-US'"></div>
          </div>
        </div>
        <div class="main-every">
          <div>
            <img src="../assets/imgs/home/005.png" @click="listJump(5)" />
          </div>
          <div>
            <p class="every-title01">
              {{ $t("localization.privateRaiseFont") }}
            </p>
            <div class="every-title06" v-if="langType !== 'en-US'"></div>
          </div>
        </div>
        <div class="main-every">
          <div>
            <img src="../assets/imgs/home/006.png" @click="listJump(6)" />
          </div>
          <div>
            <p class="every-title01">
              {{ $t("localization.managementFont") }}
            </p>
            <div class="every-title07" v-if="langType !== 'en-US'"></div>
          </div>
        </div>
        <div class="main-every">
          <div>
            <img src="../assets/imgs/home/007.png" @click="listJump(7)" />
          </div>
          <div>
            <p class="every-title01">
              {{ $t("localization.injectionFont") }}
            </p>
            <div class="every-title08" v-if="langType !== 'en-US'"></div>
          </div>
        </div>
        <div class="main-every">
          <div>
            <img src="../assets/imgs/home/008.png" @click="listJump(8)" />
          </div>
          <div>
            <p class="every-title01">
              {{ $t("localization.shrinkPoresFont") }}
            </p>
            <div class="every-title09" v-if="langType !== 'en-US'"></div>
          </div>
        </div>
        <div class="main-every">
          <div>
            <img
              src="../assets/imgs/home/009.png"
              class="imgGetHeight"
              @click="listJump(9)"
            />
          </div>
          <div>
            <p class="every-title01">
              {{ $t("localization.otherFont") }}
            </p>
            <div class="every-title10" v-if="langType !== 'en-US'"></div>
          </div>
        </div>
        <div class="main-every">
          <div style="position: relative;">
            <img
              src="../assets/imgs/home/100.png"
              class="imgGetHeight"
              @click="listJump(10)"
            />
            <img
              :src="
                langType == 'zh-CN'
                  ? only01
                  : langType == 'zh-TW'
                  ? only02
                  : only03
              "
              class="members"
            />
          </div>
          <div>
            <p class="every-title01">
              {{ $t("localization.membersOnlyFont") }}
            </p>
            <div class="every-title11" v-if="langType !== 'en-US'"></div>
          </div>
        </div>
        <div class="main-every" style="margin: 0;"></div>
        <div class="main-every" style="margin: 0;"></div>
        <!-- <div class="main-nine" :style="{ height: imgHeight + 'px' }">
          <p>{{ $t("localization.help01") }}</p>
          <p>{{ $t("localization.help02") }}</p>
        </div> -->
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
export default {
  components: {
    headerPage,
    footerPage,
  },
  data() {
    return {
      langType: localStorage.getItem("DefaultLanguage"),
      timer: null,
      imgHeight: 124,
      only01: require("../assets/imgs/home/only.png"),
      only02: require("../assets/imgs/home/only02.png"),
      only03: require("../assets/imgs/home/only03.png"),
    };
  },
  mounted() {
    this.setSize();
    // 窗口大小发生改变时,调用一次
    window.onresize = () => {
      this.setSize();
    };
  },
  beforeDestroy() {
    clearTimeout(this.timer);
    this.timer = null;
  },
  methods: {
    // 跳转项目列表
    listJump(val) {
      sessionStorage.setItem("selServicePage", val);
      this.$router.push({
        path: "/list",
        query: {
          listSel: val,
        },
      });
      this.backTop();
    },
    setSize() {
      // 通过图片宽度计算高度
      if (this.$route.name === "Service") {
        this.timer = setTimeout(() => {
          this.imgHeight = document.getElementsByClassName(
            "imgGetHeight"
          )[0].height;
          console.log("000000000000");
          console.log(this.imgHeight);
        }, 1000);
      }
    },
    langChange(value) {
      this.langType = value;
    },
    // 页面回到顶部
    backTop() {
      let timer = null;
      cancelAnimationFrame(timer);
      timer = requestAnimationFrame(function fn() {
        var oTop =
          document.body.scrollTop || document.documentElement.scrollTop;
        if (oTop > 0) {
          document.body.scrollTop = document.documentElement.scrollTop =
            oTop - 100;
          timer = requestAnimationFrame(fn);
        } else {
          cancelAnimationFrame(timer);
        }
      });
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

  .home-page-second {
    width: 100%;
    background-color: #fff;

    .every-title01,
    .every-title02 {
      color: #837a8b;
      text-align: center;
    }

    .second-main {
      .main-every {
        img {
          cursor: pointer;
        }
      }
    }

    .main-nine {
      display: none;
    }
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

  .service-page-first {
    .first-img {
      display: none;
    }

    .pc-banner-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .home-page-second {
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

    .second-main {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .main-every {
        // width: 327px;
        width: 19%;
        margin-bottom: 30px;

        .members {
          width: 170px;
          position: absolute;
          top: 10px;
          right: 10px;
        }

        img {
          width: 100%;
        }

        .every-title01 {
          margin-top: 20px;
          font-size: 20px;
          letter-spacing: 2;
        }

        .every-title02 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font01.png") no-repeat;
          background-size: 100%;
        }

        .every-title03 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font02.png") no-repeat;
          background-size: 100%;
        }

        .every-title04 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font03.png") no-repeat;
          background-size: 100%;
        }

        .every-title05 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font04.png") no-repeat;
          background-size: 100%;
        }

        .every-title06 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font05.png") no-repeat;
          background-size: 100%;
        }

        .every-title07 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font06.png") no-repeat;
          background-size: 100%;
        }

        .every-title08 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font07.png") no-repeat;
          background-size: 100%;
        }

        .every-title09 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font08.png") no-repeat;
          background-size: 100%;
        }

        .every-title10 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font09.png") no-repeat;
          background-size: 100%;
        }

        .every-title11 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font10.png") no-repeat;
          background-size: 100%;
        }
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

  .service-page-first {
    .first-img {
      display: none;
    }

    .pc-banner-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .home-page-second {
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

    .second-main {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .main-every {
        // width: 327px;
        width: 19%;
        margin-bottom: 30px;

        .members {
          width: 120px;
          position: absolute;
          top: 10px;
          right: 10px;
        }

        img {
          width: 100%;
        }

        .every-title01 {
          margin-top: 20px;
          font-size: 20px;
          letter-spacing: 2;
        }

        .every-title02 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font01.png") no-repeat;
          background-size: 100%;
        }

        .every-title03 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font02.png") no-repeat;
          background-size: 100%;
        }

        .every-title04 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font03.png") no-repeat;
          background-size: 100%;
        }

        .every-title05 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font04.png") no-repeat;
          background-size: 100%;
        }

        .every-title06 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font05.png") no-repeat;
          background-size: 100%;
        }

        .every-title07 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font06.png") no-repeat;
          background-size: 100%;
        }

        .every-title08 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font07.png") no-repeat;
          background-size: 100%;
        }

        .every-title09 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font08.png") no-repeat;
          background-size: 100%;
        }

        .every-title10 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font09.png") no-repeat;
          background-size: 100%;
        }

        .every-title11 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font10.png") no-repeat;
          background-size: 100%;
        }
      }
    }
  }

  .second-phone-title {
    display: none;
  }
}

@media screen and (min-width: 1300px) and (max-width: 1500px) {
  .header-page {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .service-page-first {
    .first-img {
      display: none;
    }

    .pc-banner-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .home-page-second {
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

    .second-main {
      width: 85%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .main-every {
        // width: 327px;
        width: 24%;
        margin-bottom: 30px;

        .members {
          width: 135px;
          position: absolute;
          top: 10px;
          right: 10px;
        }

        img {
          width: 100%;
        }

        .every-title01 {
          margin-top: 20px;
          font-size: 20px;
          letter-spacing: 2;
        }

        .every-title02 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font01.png") no-repeat;
          background-size: 100%;
        }

        .every-title03 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font02.png") no-repeat;
          background-size: 100%;
        }

        .every-title04 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font03.png") no-repeat;
          background-size: 100%;
        }

        .every-title05 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font04.png") no-repeat;
          background-size: 100%;
        }

        .every-title06 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font05.png") no-repeat;
          background-size: 100%;
        }

        .every-title07 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font06.png") no-repeat;
          background-size: 100%;
        }

        .every-title08 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font07.png") no-repeat;
          background-size: 100%;
        }

        .every-title09 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font08.png") no-repeat;
          background-size: 100%;
        }

        .every-title10 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font09.png") no-repeat;
          background-size: 100%;
        }

        .every-title11 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font10.png") no-repeat;
          background-size: 100%;
        }
      }
    }
  }

  .second-phone-title {
    display: none;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1299px) {
  .header-page {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .service-page-first {
    .first-img {
      display: none;
    }

    .pc-banner-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .home-page-second {
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

    .second-main {
      width: 85%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .main-every {
        // width: 327px;
        width: 24%;
        margin-bottom: 30px;

        .members {
          width: 135px;
          position: absolute;
          top: 10px;
          right: 10px;
        }

        img {
          width: 100%;
        }

        .every-title01 {
          margin-top: 20px;
          font-size: 20px;
          letter-spacing: 2;
        }

        .every-title02 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font01.png") no-repeat;
          background-size: 100%;
        }

        .every-title03 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font02.png") no-repeat;
          background-size: 100%;
        }

        .every-title04 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font03.png") no-repeat;
          background-size: 100%;
        }

        .every-title05 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font04.png") no-repeat;
          background-size: 100%;
        }

        .every-title06 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font05.png") no-repeat;
          background-size: 100%;
        }

        .every-title07 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font06.png") no-repeat;
          background-size: 100%;
        }

        .every-title08 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font07.png") no-repeat;
          background-size: 100%;
        }

        .every-title09 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font08.png") no-repeat;
          background-size: 100%;
        }

        .every-title10 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font09.png") no-repeat;
          background-size: 100%;
        }

        .every-title11 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font10.png") no-repeat;
          background-size: 100%;
        }
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

  .service-page-first {
    .first-img {
      display: none;
    }

    .pc-banner-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .home-page-second {
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

    .second-main {
      width: 85%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .main-every {
        // width: 327px;
        width: 24%;
        margin-bottom: 30px;

        .members {
          width: 110px;
          position: absolute;
          top: 10px;
          right: 10px;
        }

        img {
          width: 100%;
        }

        .every-title01 {
          margin-top: 20px;
          font-size: 20px;
          letter-spacing: 2;
        }

        .every-title02 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font01.png") no-repeat;
          background-size: 100%;
        }

        .every-title03 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font02.png") no-repeat;
          background-size: 100%;
        }

        .every-title04 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font03.png") no-repeat;
          background-size: 100%;
        }

        .every-title05 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font04.png") no-repeat;
          background-size: 100%;
        }

        .every-title06 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font05.png") no-repeat;
          background-size: 100%;
        }

        .every-title07 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font06.png") no-repeat;
          background-size: 100%;
        }

        .every-title08 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font07.png") no-repeat;
          background-size: 100%;
        }

        .every-title09 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font08.png") no-repeat;
          background-size: 100%;
        }

        .every-title10 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font09.png") no-repeat;
          background-size: 100%;
        }

        .every-title11 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font10.png") no-repeat;
          background-size: 100%;
        }
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

  .service-page-first {
    padding-top: 60px;
    .first-img {
      display: none;
    }

    .pc-banner-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .home-page-second {
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

    .second-main {
      width: 85%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .main-every {
        // width: 327px;
        width: 32%;
        margin-bottom: 30px;

        .members {
          width: 135px;
          position: absolute;
          top: 10px;
          right: 10px;
        }

        img {
          width: 100%;
        }

        .every-title01 {
          margin-top: 20px;
          font-size: 20px;
          letter-spacing: 2;
        }

        .every-title02 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font01.png") no-repeat;
          background-size: 100%;
        }

        .every-title03 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font02.png") no-repeat;
          background-size: 100%;
        }

        .every-title04 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font03.png") no-repeat;
          background-size: 100%;
        }

        .every-title05 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font04.png") no-repeat;
          background-size: 100%;
        }

        .every-title06 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font05.png") no-repeat;
          background-size: 100%;
        }

        .every-title07 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font06.png") no-repeat;
          background-size: 100%;
        }

        .every-title08 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font07.png") no-repeat;
          background-size: 100%;
        }

        .every-title09 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font08.png") no-repeat;
          background-size: 100%;
        }

        .every-title10 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font09.png") no-repeat;
          background-size: 100%;
        }

        .every-title11 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font10.png") no-repeat;
          background-size: 100%;
        }
      }
    }
  }

  .second-phone-title {
    display: none;
  }
}

@media screen and (min-width: 459px) and (max-width: 767px) {
  .header-page {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #fff;
  }

  .service-page-first {
    padding-top: 60px;
    .first-img {
      width: 100%;
      object-fit: cover;
    }

    .pc-banner-img {
      display: none;
    }
  }

  .home-page-second {
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

    .second-main {
      width: 95%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .main-every {
        width: 49%;
        margin-bottom: 15px;

        .members {
          width: 90px;
          position: absolute;
          top: 7px;
          right: 7px;
        }

        div {
          width: 100%;
        }

        img {
          width: 100%;
          object-fit: cover;
        }

        .every-title01 {
          margin-top: 7px;
          font-size: 13px;
          letter-spacing: 2;
        }

        .every-title02 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/Whitening&PigmentRemoval@2x.png")
            no-repeat;
          background-size: 100% auto;
        }

        .every-title03 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/Anti-aging&Facelift@2x.png")
            no-repeat;
          background-size: 100% auto;
        }

        .every-title04 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/Cleansing&Hydrating@2x.png")
            no-repeat;
          background-size: 100% auto;
        }

        .every-title05 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/HairCare@2x.png") no-repeat;
          background-size: 100% auto;
        }

        .every-title06 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/IntimateCare@2x.png") no-repeat;
          background-size: 100% auto;
        }

        .every-title07 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/BodyContouring@2x.png") no-repeat;
          background-size: 100% auto;
        }

        .every-title08 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/Injectables@2x.png") no-repeat;
          background-size: 100% auto;
        }

        .every-title09 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/PoreRefining@2x.png") no-repeat;
          background-size: 100% auto;
        }

        .every-title10 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/OtherTreatment@2x.png") no-repeat;
          background-size: 100% auto;
        }

        .every-title11 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/font10.png") no-repeat;
          background-size: 100% auto;
        }
      }

      .main-nine {
        width: 49%;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        border: 1px solid #f0eef6;
        color: #837a8b;
        font-size: 12px;
      }
    }
  }
}

@media screen and (max-width: 460px) {
  .header-page {
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    background-color: #fff;
  }

  .service-page-first {
    padding-top: 60px;
    .first-img {
      width: 100%;
      object-fit: cover;
    }

    .pc-banner-img {
      display: none;
    }
  }

  .home-page-second {
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

    .second-main {
      width: 95%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .main-every {
        width: 49%;
        margin-bottom: 15px;

        .members {
          width: 90px;
          position: absolute;
          top: 7px;
          right: 7px;
        }

        div {
          width: 100%;
        }

        img {
          width: 100%;
          object-fit: cover;
        }

        .every-title01 {
          margin-top: 7px;
          font-size: 13px;
          letter-spacing: 2;
        }

        .every-title02 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/Whitening&PigmentRemoval@2x.png")
            no-repeat;
          background-size: 100% auto;
        }

        .every-title03 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/Anti-aging&Facelift@2x.png")
            no-repeat;
          background-size: 100% auto;
        }

        .every-title04 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/Cleansing&Hydrating@2x.png")
            no-repeat;
          background-size: 100% auto;
        }

        .every-title05 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/HairCare@2x.png") no-repeat;
          background-size: 100% auto;
        }

        .every-title06 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/IntimateCare@2x.png") no-repeat;
          background-size: 100% auto;
        }

        .every-title07 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/BodyContouring@2x.png") no-repeat;
          background-size: 100% auto;
        }

        .every-title08 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/Injectables@2x.png") no-repeat;
          background-size: 100% auto;
        }

        .every-title09 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/PoreRefining@2x.png") no-repeat;
          background-size: 100% auto;
        }

        .every-title10 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/OtherTreatment@2x.png") no-repeat;
          background-size: 100% auto;
        }

        .every-title11 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/font10.png") no-repeat;
          background-size: 100% auto;
        }
      }

      .main-nine {
        width: 49%;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        border: 1px solid #f0eef6;
        color: #837a8b;
        font-size: 12px;
      }
    }
  }
}
</style>
