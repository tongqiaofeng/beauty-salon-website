<template>
  <div class="share-page-container" id="share">
    <div class="header-page">
      <headerPage @langChange="langChange"></headerPage>
    </div>
    <div class="share-page-details">
      <div class="details-top">
        <p>
          <span @click="goHome" style="cursor:pointer;color: #837a8b;">{{
            $t("localization.homeFont")
          }}</span>
          <span v-if="newsFrom != 0" style="color: #837a8b;">{{ " > " }}</span>
          <span
            v-if="newsFrom == 3"
            @click="goServiceList"
            style="cursor:pointer;color: #837a8b;"
            >{{ $t("localization.treatmentFont") }}</span
          >
          <span
            v-if="newsFrom == 1"
            @click="goShareList"
            style="cursor:pointer;color: #837a8b;"
            >{{ $t("localization.changeFont") }}</span
          >
          <span
            v-if="newsFrom == 2"
            @click="goNewsList"
            style="cursor:pointer;color: #837a8b;"
            >{{ $t("localization.newsFont") }}</span
          >
          <span
            v-if="newsFrom == 4"
            @click="goTeamList"
            style="cursor:pointer;color: #837a8b;"
            >{{ $t("localization.aboutUsFont") }}</span
          >
          <span v-if="newsFrom == 3" style="color: #837a8b;">{{ " > " }}</span>
          <span
            v-if="newsFrom == 3"
            style="color: #755793;cursor:pointer;"
            @click="goList"
            >{{
              projectSel == 1
                ? $t("localization.whiteningBeautyCreamFont")
                : projectSel == 2
                ? $t("localization.fightDeclineAscensionFont")
                : projectSel == 3
                ? $t("localization.cleanTheFillingWaterFont")
                : projectSel == 4
                ? $t("localization.raiseHairFont")
                : projectSel == 5
                ? $t("localization.privateRaiseFont")
                : projectSel == 6
                ? $t("localization.managementFont")
                : projectSel == 7
                ? $t("localization.injectionFont")
                : projectSel == 8
                ? $t("localization.shrinkPoresFont")
                : projectSel == 9
                ? $t("localization.otherFont")
                : projectSel == 10
                ? $t("localization.membersOnlyFont")
                : ""
            }}</span
          >
        </p>
      </div>
      <div class="details-main">
        <div v-if="JSON.stringify(details) == '{}'" style="text-align: center;">
          <p>{{ detailsMsg }}</p>
        </div>
        <div v-else>
          <p class="main-title">{{ filterTitle(details.title) }}</p>
          <p class="main-time">
            {{
              $t("localization.timeFont") +
                formatDateTimeStringRgx(details.createTime)
            }}
          </p>
          <div class="main-container ql-container">
            <div
              class="ql-editor"
              v-html="filterContainer(details.content)"
            ></div>
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

import { quillEditor } from "vue-quill-editor"; //调用编辑器
import * as Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  components: {
    headerPage,
    footerPage,
  },
  data() {
    return {
      img: this.$store.state.baseUrl,
      langType: localStorage.getItem("DefaultLanguage"),
      newsFrom: 0,
      detailsId: "",
      details: {},
      detailsMsg: "文章加载中",
      projectSel: 0,
    };
  },
  created() {
    this.newsFrom = this.$route.query.select;
    this.detailsId = this.$route.query.id;
    this.projectSel = sessionStorage.getItem("selServicePage");
    console.log(this.detailsId);
    this.getShareDetails();
  },
  updated() {
    let main = document.querySelectorAll(".main-container img");
    main.forEach((item) => {
      item.style.maxWidth = "100%";
    });
  },
  methods: {
    checkShareDetails(id) {
      this.$axios
        .post(this.img + "/articleInfo", {
          id: id,
        })
        .then((res) => {
          console.log("新闻详情");
          console.log(res);
          this.details = res.data;
          this.backTop();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goList() {
      this.$router.push({
        path: "/list",
        query: {
          listSel: sessionStorage.getItem("selServicePage"),
        },
      });
    },
    // 获取某一新闻详情
    getShareDetails() {
      this.details = {};
      this.detailsMsg = "文章加载中";
      this.$axios
        .post(this.img + "/articleInfo", {
          id: this.detailsId,
        })
        .then((res) => {
          console.log("新闻详情");
          console.log(res);
          this.details = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    goHome() {
      this.$router.push("/");
      this.backTop();
    },
    goServiceList() {
      console.log("选择", sessionStorage.getItem("selServicePage"));
      this.$router.push("/service");
      this.backTop();
    },
    goShareList() {
      this.$router.push("/share");
      this.backTop();
    },
    goNewsList() {
      this.$router.push("/news");
      this.backTop();
    },
    goTeamList() {
      this.$router.push("/about");
      this.backTop();
    },
    langChange(value) {
      this.langType = value;
    },
    filterContainer(content) {
      if (content !== undefined) {
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
      }
    },
    filterCon(content) {
      if (content !== undefined) {
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
      }
    },
    filterTitle(title) {
      if (title !== undefined) {
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
      }
    },
    regStr(value) {
      let str = value.replace(/<.*?>/gi, "");
      return str;
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
.share-page-container {
  position: relative;
  z-index: 0;

  .header-page {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .share-page-details {
    width: 100%;
    background-color: #fff;

    .details-top {
      width: 100%;
      background-color: #fbf8fe;
      text-align: left;
      color: #2d2d2d;
    }

    .details-main {
      background-color: #fff;
      text-align: left;

      .main-title {
        color: #000;
      }

      .main-time {
        color: #828282;
        font-size: 12px;
      }

      .main-line {
        width: 100%;
        height: 2px;
        background-color: #eeecec;
      }
    }
  }
}

@media screen and (min-width: 1781px) {
  .header-page {
    height: 130px;
  }

  .share-page-details {
    padding-top: 130px;
    padding-bottom: 100px;

    .details-top {
      height: 60px;
      padding-left: 12%;
      line-height: 60px;
      font-size: 18px;
    }

    .details-main {
      width: 75%;
      margin: 0 auto;
      padding-top: 35px;

      .main-title {
        font-size: 30px;
      }

      .main-container {
        margin-top: 40px;
      }
    }
  }
}

@media screen and (min-width: 1499px) and (max-width: 1780px) {
  .header-page {
    height: 130px;
  }

  .share-page-details {
    padding-top: 130px;
    padding-bottom: 100px;

    .details-top {
      height: 60px;
      padding-left: 12%;
      line-height: 60px;
      font-size: 18px;
    }

    .details-main {
      width: 75%;
      margin: 0 auto;
      padding-top: 35px;

      .main-title {
        font-size: 30px;
      }

      .main-container {
        margin-top: 40px;
      }
    }
  }
}

@media screen and (min-width: 1200px) and (max-width: 1500px) {
  .header-page {
    height: 130px;
  }

  .share-page-details {
    padding-top: 130px;
    padding-bottom: 100px;

    .details-top {
      height: 60px;
      padding-left: 12%;
      line-height: 60px;
      font-size: 18px;
    }

    .details-main {
      width: 75%;
      margin: 0 auto;
      padding-top: 35px;

      .main-title {
        font-size: 30px;
      }

      .main-container {
        margin-top: 40px;
      }
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .header-page {
    height: 120px;
  }

  .share-page-details {
    padding-top: 120px;
    padding-bottom: 100px;

    .details-top {
      height: 60px;
      padding-left: 12%;
      line-height: 60px;
      font-size: 18px;
    }

    .details-main {
      width: 75%;
      margin: 0 auto;
      padding-top: 35px;

      .main-title {
        font-size: 26px;
      }

      .main-container {
        margin-top: 40px;
      }
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .header-page {
    height: 120px;
  }

  .share-page-details {
    padding-top: 120px;
    padding-bottom: 100px;

    .details-top {
      height: 60px;
      padding-left: 12%;
      line-height: 60px;
      font-size: 18px;
    }

    .details-main {
      width: 75%;
      margin: 0 auto;
      padding-top: 35px;

      .main-title {
        font-size: 25px;
      }

      .main-container {
        margin-top: 40px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .share-page-details {
    padding-top: 80px;
    padding-bottom: 40px;

    .details-top {
      height: 50px;
      padding-left: 10%;
      line-height: 53px;
      font-size: 16px;
    }

    .details-main {
      width: 80%;
      margin: 0 auto;
      padding-top: 20px;

      .main-title {
        font-size: 20px;
      }

      .main-time {
        margin-top: 10px;
        font-size: 16px;
      }

      .main-line {
        margin-top: 20px;
      }

      .main-container {
        margin-top: 20px;
      }
    }
  }
}

.details-main img {
  display: block;
  max-width: 100% !important;
  height: auto !important;
}
</style>
<style lang="scss">
#share {
  .ql-editor {
    padding: 0;
    overflow: hidden;
  }
}
</style>
