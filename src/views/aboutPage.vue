<template>
  <div class="about-page-container">
    <div class="header-page">
      <headerPage @langChange="langChange"></headerPage>
    </div>
    <div class="about-page-first">
      <img src="../assets/imgs/about/about_top.png" class="pc-banner-img" />
      <img src="../assets/imgs/about/banner-pc.png" class="first-img" />
    </div>
    <div class="about-page-second">
      <div class="about-page-third">
        <div class="second-title">
          <img
            :src="
              langType == 'zh-CN'
                ? titleOne02
                : langType == 'zh-TW'
                ? titleOne03
                : langType == 'en-US'
                ? titleOne01
                : titleOne01
            "
          />
        </div>
        <div class="second-phone-title">
          <img
            :src="
              langType == 'zh-CN'
                ? titleOne02
                : langType == 'zh-TW'
                ? titleOne03
                : langType == 'en-US'
                ? titleOne01
                : titleOne01
            "
          />
        </div>
        <p class="second-font-one bottomNum">
          {{ $t("localization.aboutUsConFont") }}
        </p>

        <p class="second-font-one bottomNum">
          {{ $t("localization.aboutUsConSecondFont") }}
        </p>
        <p class="second-font-one">
          {{ $t("localization.aboutUsConThirdFont") }}
        </p>
      </div>
    </div>

    <div class="about-page-third">
      <div class="second-title">
        <img
          :src="
            langType == 'zh-CN'
              ? titleTwo02
              : langType == 'zh-TW'
              ? titleTwo03
              : langType == 'en-US'
              ? titleTwo01
              : titleTwo01
          "
        />
      </div>
      <div class="second-phone-title">
        <img
          :src="
            langType == 'zh-CN'
              ? titleTwo02
              : langType == 'zh-TW'
              ? titleTwo03
              : langType == 'en-US'
              ? titleTwo01
              : titleTwo01
          "
        />
      </div>
      <div class="third-img">
        <div class="container">
          <div class="row">
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px;">
                <img src="../assets/imgs/about/01.png" style="width: 100%;" />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px;">
                <img src="../assets/imgs/about/02.png" style="width: 100%;" />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px;">
                <img src="../assets/imgs/about/03.png" style="width: 100%;" />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px;">
                <img src="../assets/imgs/about/04.png" style="width: 100%;" />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px;">
                <img src="../assets/imgs/about/05.png" style="width: 100%;" />
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div style="padding: 5px;">
                <img src="../assets/imgs/about/06.png" style="width: 100%;" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-page-fourth">
      <div class="about-page-third">
        <div class="second-title">
          <img
            :src="
              langType == 'zh-CN'
                ? titleThree02
                : langType == 'zh-TW'
                ? titleThree03
                : langType == 'en-US'
                ? titleThree01
                : titleThree01
            "
          />
        </div>
        <div class="second-phone-title">
          <img
            :src="
              langType == 'zh-CN'
                ? titleThree02
                : langType == 'zh-TW'
                ? titleThree03
                : langType == 'en-US'
                ? titleThree01
                : titleThree01
            "
          />
        </div>
      </div>

      <div class="fourth-top">
        <div class="fourth-main">
          <div class="container">
            <div class="row">
              <div
                class="col-xl-3 col-lg-6 col-md-6 col-sm-6"
                v-for="(item, index) in teamList"
                :key="index"
              >
                <div
                  class="fourth-main-every"
                  @click="checkTeamDetails(item.id)"
                >
                  <img
                    class="team-img"
                    :src="img + item.img"
                    :style="{ height: 'auto' }"
                  />
                  <div class="every-normal">
                    <p class="normal-name">
                      {{ filterTitle(item.title).split("/")[0] }}
                    </p>
                    <p class="normal-details">
                      {{ filterTitle(item.title).split("/")[1] }}
                    </p>
                  </div>
                  <div class="every-hover">
                    <p class="hover-name">
                      {{ filterTitle(item.title).split("/")[0] }}/<span>{{
                        filterTitle(item.title).split("/")[1]
                      }}</span>
                    </p>
                    <p class="hover-details">{{ filterCon(item.content) }}</p>
                  </div>
                </div>
              </div>
            </div>
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
export default {
  components: {
    headerPage,
    footerPage,
  },
  data() {
    return {
      img: this.$store.state.baseUrl,
      langType: localStorage.getItem("DefaultLanguage"),
      teamList: [],

      titleOne01: require("../assets/imgs/about/titleOne01.png"),
      titleOne02: require("../assets/imgs/about/titleOne02.png"),
      titleOne03: require("../assets/imgs/about/titleOne03.png"),

      titleTwo01: require("../assets/imgs/about/titleTwo01.png"),
      titleTwo02: require("../assets/imgs/about/titleTwo02.png"),
      titleTwo03: require("../assets/imgs/about/titleTwo03.png"),

      titleThree01: require("../assets/imgs/about/titleThree01.png"),
      titleThree02: require("../assets/imgs/about/titleThree02.png"),
      titleThree03: require("../assets/imgs/about/titleThree03.png"),
    };
  },
  created() {
    this.getTeamList();
  },
  methods: {
    checkTeamDetails(id) {
      this.$router.push({
        path: "/details",
        query: {
          select: 4,
          id: id,
        },
      });
      this.backTop();
    },
    // 获取专家团队列表
    getTeamList() {
      this.$axios
        .post(this.$store.state.baseUrl + "/articleList", {
          type: 4,
          // page: this.page,
          // pageNum: 6
        })
        .then((res) => {
          console.log("专家团队");
          console.log(res);
          this.teamList = res.data.list;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    filterContainer(content) {
      switch (this.langType) {
        case "zh-CN":
          return content.cn;
        case "zh-TW":
          return content.hk;
        case "en-US":
          return content.en;
        case "en-KH":
          return content.kh;
      }
    },
    filterCon(content) {
      switch (this.langType) {
        case "zh-CN":
          return this.regStr(content.cn);
        case "zh-TW":
          return this.regStr(content.hk);
        case "en-US":
          return this.regStr(content.en);
        case "en-KH":
          return this.regStr(content.kh);
      }
    },
    filterTitle(title) {
      switch (this.langType) {
        case "zh-CN":
          return title.cn;
        case "zh-TW":
          return title.hk;
        case "en-US":
          return title.en;
        case "en-KH":
          return title.kh;
      }
    },
    regStr(value) {
      let str = value.replace(/<.*?>/gi, " ").replace(/&nbsp;/gi, " ");
      return str;
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

.about-page-container {
  position: relative;
  z-index: 0;

  .about-page-second {
    width: 100%;

    background: url("../assets/imgs/about/back.png") no-repeat;

    .second-font-one {
      margin: 0 auto;
      color: #272729;
      text-align: left;
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
    }
  }

  .about-page-fourth {
    position: relative;

    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
      margin: 0 auto;
    }

    .fourth-top {
      width: 100%;
      background-color: #fff;

      .fourth-title,
      .fourth-title-con {
        margin: 0 auto;
      }

      .fourth-main {
        width: 100%;
        // position: absolute;

        .fourth-main-every {
          cursor: pointer;
          background-size: cover;
          position: relative;

          .team-img {
            width: 100%;
            height: auto;
            // position: absolute;
            // left: 0;
            // top: 0;
          }

          .every-normal {
            width: 100%;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: rgba(117, 87, 147, 0.2);
            text-align: left;

            p {
              color: #fff;
            }
          }

          .every-hover {
            width: 100%;
            display: none;
            position: absolute;
            left: 0;
            bottom: 0;
            background-color: rgba(127, 98, 141, 0.9);
            text-align: left;

            .hover-name,
            .hover-details {
              color: #fff;
            }

            .hover-details {
              text-overflow: -o-ellipsis-lastline;
              overflow: hidden;
              text-overflow: ellipsis;
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 4;
            }

            .hover-name {
              span {
                font-size: 12px;
              }
            }

            .hover-details {
              font-size: 12px;
            }
          }
        }
      }
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

  .about-page-first {
    .first-img {
      width: 100%;
      object-fit: cover;
    }

    .pc-banner-img {
      display: none;
    }
  }

  .about-page-second {
    padding-bottom: 45px;
    .second-font-one {
      // width: 85%;
      font-size: 20px;
      line-height: 34px;
    }

    .bottomNum {
      margin-bottom: 30px !important;
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

  .about-page-fourth {
    padding-top: 30px;
    margin-bottom: 50px;

    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
      max-width: 75%;
    }

    .fourth-top {
      // height: 450px;

      .fourth-title {
        padding-top: 164px;
        font-size: 36px;
      }

      .fourth-title-con {
        padding-top: 30px;
        font-size: 20px;
      }

      .fourth-main {
        padding: 0;

        .fourth-main-every {
          width: 360px;
          // height: 464px;
          // height: 420px;
          position: relative;

          .every-normal {
            // height: 114px;
            padding: 20px 0 10px 10px;

            .normal-name {
              margin-bottom: 5px;
              font-size: 20px;
            }

            .normal-details {
              font-size: 16px;
            }
          }

          .every-hover {
            // height: 258px;
            padding: 30px 30px 30px;

            .hover-name {
              line-height: 15px;
              font-size: 20px;
            }

            .hover-details {
              margin-top: 24px;
              line-height: 18px;
            }
          }
        }

        .fourth-main-every:hover {
          // width: 400px;
          // height: 516px;
          margin-top: -25px;
          transform: scale(1.1) translate(0, 20px);
          z-index: 999;

          .every-hover {
            display: block;
          }

          .every-normal {
            display: none;
          }
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

  .about-page-first {
    .first-img {
      width: 100%;
      object-fit: cover;
    }

    .pc-banner-img {
      display: none;
    }
  }

  .about-page-second {
    padding-bottom: 45px;
    .second-font-one {
      // width: 85%;
      font-size: 20px;
      line-height: 34px;
    }

    .bottomNum {
      margin-bottom: 30px !important;
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

  .about-page-fourth {
    padding-top: 30px;
    margin-bottom: 50px;

    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
      max-width: 1350px;
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
      padding-right: 0;
      padding-left: 0;
    }

    .fourth-top {
      // height: 450px;

      .fourth-title {
        padding-top: 164px;
        font-size: 36px;
      }

      .fourth-title-con {
        padding-top: 30px;
        font-size: 20px;
      }

      .fourth-main {
        padding: 0;
        top: 0;

        .fourth-main-every {
          width: 100%;
          // height: 464px;
          // height: 420px;
          position: relative;

          .every-normal {
            // height: 114px;
            padding: 20px 0 10px 10px;

            .normal-name {
              margin-bottom: 5px;
              font-size: 20px;
            }

            .normal-details {
              font-size: 16px;
            }
          }

          .every-hover {
            // height: 258px;
            padding: 30px 30px 30px;

            .hover-name {
              line-height: 15px;
              font-size: 20px;
            }

            .hover-details {
              margin-top: 24px;
              line-height: 18px;
            }
          }
        }

        .fourth-main-every:hover {
          // width: 400px;
          // height: 516px;
          margin-top: -25px;
          transform: scale(1.1) translate(0, 20px);
          z-index: 999;

          .every-hover {
            display: block;
          }

          .every-normal {
            display: none;
          }
        }
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
      width: 100%;
      object-fit: cover;
    }

    .pc-banner-img {
      display: none;
    }
  }

  .about-page-second {
    padding-bottom: 45px;
    .second-font-one {
      // width: 90%;
      font-size: 20px;
      line-height: 34px;
    }

    .bottomNum {
      margin-bottom: 30px !important;
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

  .about-page-fourth {
    padding-top: 30px;
    margin-bottom: 50px;

    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
      max-width: 90%;
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
      padding-right: 0;
      padding-left: 0;
    }

    .fourth-top {
      // height: 480px;

      .fourth-title {
        padding-top: 164px;
        font-size: 36px;
      }

      .fourth-title-con {
        padding-top: 30px;
        font-size: 20px;
      }

      .fourth-main {
        padding: 0;
        top: 0;

        .fourth-main-every {
          width: 100%;
          // height: 420px;
          position: relative;

          .every-normal {
            // height: 114px;
            padding: 20px 0 10px 10px;

            .normal-name {
              margin-bottom: 5px;
              font-size: 20px;
            }

            .normal-details {
              font-size: 16px;
            }
          }

          .every-hover {
            // height: 258px;
            padding: 30px 20px 30px;

            .hover-name {
              line-height: 15px;
              font-size: 20px;
            }

            .hover-details {
              margin-top: 24px;
              line-height: 18px;
            }
          }
        }

        .fourth-main-every:hover {
          // width: 400px;
          // height: 516px;
          margin-top: -25px;
          transform: scale(1.2) translate(0, 20px);
          z-index: 999;

          .every-hover {
            display: block;
          }

          .every-normal {
            display: none;
          }
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

  .about-page-first {
    .first-img {
      width: 100%;
      object-fit: cover;
    }

    .pc-banner-img {
      display: none;
    }
  }

  .about-page-second {
    padding-bottom: 45px;
    .second-font-one {
      // width: 95%;
      font-size: 20px;
      line-height: 34px;
    }

    .bottomNum {
      margin-bottom: 20px !important;
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

  .about-page-fourth {
    padding-top: 30px;
    margin-bottom: 50px;

    .container,
    .container-md,
    .container-sm {
      max-width: 75%;
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
      padding-right: 0;
      padding-left: 0;
    }

    .fourth-top {
      // height: 1000px;

      .fourth-title {
        padding-top: 60px;
        font-size: 36px;
      }

      .fourth-title-con {
        padding-top: 30px;
        font-size: 20px;
      }

      .fourth-main {
        padding: 0;
        top: 0;

        .fourth-main-every {
          width: 97%;
          // height: 464px;
          margin: 0 auto;
          margin-top: 10px;
          position: relative;

          .every-normal {
            // height: 114px;
            padding: 20px 0 10px 10px;

            .normal-name {
              margin-bottom: 5px;
              font-size: 20px;
            }

            .normal-details {
              font-size: 16px;
            }
          }

          .every-hover {
            // height: 258px;
            padding: 30px 30px 30px;

            .hover-name {
              line-height: 15px;
              font-size: 20px;
            }

            .hover-details {
              margin-top: 24px;
              line-height: 18px;
            }
          }
        }

        .fourth-main-every:hover {
          // width: 400px;
          // height: 516px;
          margin-top: -12px;
          transform: scale(1.1) translate(0, 20px);
          z-index: 999;

          .every-hover {
            display: block;
          }

          .every-normal {
            display: none;
          }
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

  .about-page-first {
    .first-img {
      width: 100%;
      object-fit: cover;
    }

    .pc-banner-img {
      display: none;
    }
  }

  .about-page-first {
    padding-top: 60px;
  }

  .about-page-second {
    padding-bottom: 25px;
    .second-font-one {
      width: 100%;
      font-size: 18px;
      line-height: 32px;
    }

    .bottomNum {
      margin-bottom: 20px !important;
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

  .about-page-fourth {
    padding-top: 30px;
    margin-bottom: 50px;

    .container,
    .container-md,
    .container-sm {
      max-width: 80%;
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
      padding-right: 0;
      padding-left: 0;
    }

    .fourth-top {
      // height: 800px;

      .fourth-title {
        padding-top: 50px;
        font-size: 20px;
      }

      .fourth-title-con {
        padding-top: 20px;
        font-size: 16px;
      }

      .fourth-main {
        padding: 0;
        top: 0;

        .fourth-main-every {
          width: 95%;
          // height: 360px;
          margin: 0 auto;
          margin-top: 15px;
          position: relative;

          .every-normal {
            // height: 100px;
            padding: 20px 0 10px 10px;

            .normal-name {
              margin-bottom: 5px;
              font-size: 20px;
            }

            .normal-details {
              font-size: 16px;
            }
          }

          .every-hover {
            // height: 200px;
            padding: 20px;

            .hover-name {
              font-size: 20px;
              line-height: 15px;
            }

            .hover-details {
              margin-top: 24px;
              line-height: 16px;
            }
          }
        }

        .fourth-main-every:hover {
          // width: 400px;
          // height: 516px;
          margin-top: -8px;
          transform: scale(1.1) translate(0, 20px);
          z-index: 999;

          .every-hover {
            display: block;
          }

          .every-normal {
            display: none;
          }
        }
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
    padding-top: 60px;
  }

  .about-page-first {
    .first-img {
      display: none;
    }

    .pc-banner-img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
  }

  .second-title {
    display: none;
  }

  .second-phone-title {
    display: block;
    margin: 20px auto 0;
    text-align: left;

    img {
      width: 325px;
      height: 97px;
      object-fit: cover;
    }
  }

  .about-page-second {
    padding-bottom: 10px;
    .second-font-one {
      width: 100%;
      padding: 0 10px;
      font-size: 14px;
      line-height: 20px;
    }

    .bottomNum {
      margin-bottom: 10px !important;
    }
  }

  .about-page-third {
    // padding: 0 10px;
    padding-top: 10px;

    .third-img {
      display: flex;
      justify-content: space-between;

      div > img {
        width: 90%;
      }
    }
  }

  .about-page-fourth {
    padding-top: 10px;

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
      padding-right: 0;
      padding-left: 0;
    }

    .fourth-top {
      // height: 470px;

      .fourth-title {
        padding-top: 40px;
        font-size: 20px;
      }

      .fourth-title-con {
        padding-top: 20px;
        font-size: 16px;
      }

      .fourth-main {
        padding: 0;
        top: 0;

        .fourth-main-every {
          width: 95%;
          height: auto;
          margin: 0 auto;
          margin-bottom: 10px;
          position: relative;

          .every-normal {
            // height: 50px;
            padding: 7px 0 5px 10px;

            .normal-name {
              // margin-bottom: 5px;
              font-size: 16px;
            }

            .normal-details {
              font-size: 12px;
            }
          }

          .every-hover {
            display: none;
          }
        }
      }
    }
  }
}
</style>
