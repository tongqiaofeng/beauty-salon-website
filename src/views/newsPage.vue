<template>
  <div class="news-page-container" id="news">
    <div :style="{ minHeight: newsHeight }">
      <div class="header-page">
        <headerPage @langChange="langChange"></headerPage>
      </div>
      <div class="news-page-first">
        <img :src="app01" class="first-img" />
        <img :src="pc01" class="pc-img" />
      </div>
      <div class="news-page-second">
        <div class="second-container">
          <div class="container">
            <div style="display: flex;margin-bottom: 20px;">
              <el-input
                class="keyInput"
                v-model="newsKeyWords"
                :placeholder="$t('localization.placeFont')"
              >
                <template #suffix>
                  <i
                    class="el-input__icon el-icon-search"
                    @click="getNewsPageList"
                  ></i>
                </template>
              </el-input>
              <!-- <el-button class="keyButton" @click="getNewsPageList">{{
              $t("localization.checkFont")
            }}</el-button> -->
            </div>
            <div v-if="newsPageList.length == 0">
              <p>{{ newsMsg }}</p>
            </div>
            <div v-else>
              <div class="row">
                <div
                  class="col-xl-3 col-lg-4 col-md-4 col-sm-12"
                  v-for="item in newsPageList"
                  :key="item.id"
                >
                  <div class="second-every" @click="checkNewsDetails(item.id)">
                    <div class="every-img">
                      <img :src="img + item.img" class="img-self" />
                    </div>
                    <div class="every-font">
                      <p class="every-title">{{ filterTitle(item.title) }}</p>
                      <p class="every-main" v-if="isChrome">
                        {{ filterCon(item.content) }}
                      </p>
                      <div class="textBox" v-else>
                        <div class="text">{{ filterCon(item.content) }}</div>
                      </div>
                      <p class="every-time">
                        {{ formatDateStringRgx(item.createTime) }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div style="width: 100%;height: 50px;">
                <div style="margin:15px 0;position:absolute;right:6%;">
                  <el-pagination
                    @current-change="handleCurrentChange"
                    :current-page="page"
                    layout="total, prev, pager, next, jumper"
                    :page-size="6"
                    :total="total"
                  >
                  </el-pagination>
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
      langType: localStorage.getItem("DefaultLanguage"),
      newsPageList: [],
      img: this.$store.state.baseUrl,
      page: 1,
      total: 0,
      isChrome: false,
      newsKeyWords: "",
      newsMsg: "数据加载中...",
      newsHeight: 0,

      app01: require("../assets/imgs/news/app01.png"),
      app02: require("../assets/imgs/news/app02.png"),
      app03: require("../assets/imgs/news/app03.png"),
      pc01: require("../assets/imgs/news/pc01.png"),
    };
  },
  created() {
    this.isChrome = navigator.userAgent.indexOf("AppleWebKit") > -1; // 是否是谷歌
    console.log("谷歌" + this.isChrome); // 返回 true  则是 ，false  则不是
    this.getNewsPageList();
  },
  mounted() {
    this.newsHeight = document.documentElement.clientHeight + "px";
  },
  updated() {
    if (!this.isChrome) {
      let oList = document.querySelectorAll(".text");
      oList.forEach(function(item) {
        let oHeight = item.offsetHeight;
        if (oHeight / 14 > 3) {
          item.className = "text texter";
        }
      });
    }
  },
  methods: {
    checkNewsDetails(id) {
      this.$router.push({
        path: "/details",
        query: {
          select: 2,
          id: id,
        },
      });
      this.backTop();
    },
    // 获取新闻资讯列表
    getNewsPageList() {
      if (this.langType == "zh-CN") {
        this.newsMsg = "数据加载中...";
      } else if (this.langType == "zh-TW") {
        this.newsMsg = "數據加載中...";
      } else if (this.langType == "en-US") {
        this.newsMsg = "Data loading...";
      } else {
        this.newsMsg = "Data loading...";
      }
      this.newsPageList = [];
      this.total = 0;

      this.$axios
        .post(this.$store.state.baseUrl + "/articleList", {
          type: this.newsKeyWords == "" ? 2 : null,
          keyword: this.newsKeyWords,
          page: this.page,
          pageNum: 6,
        })
        .then((res) => {
          console.log("蜕变分享");
          console.log(res);
          this.newsPageList = res.data.list;
          if (this.newsPageList.length == 0) {
            if (this.langType == "zh-CN") {
              this.newsMsg = "啊哦~ 暂无数据";
            } else if (this.langType == "zh-TW") {
              this.newsMsg = "啊哦~ 暫無數據";
            } else if (this.langType == "en-US") {
              this.newsMsg = "Uh-oh~ no data yet";
            } else {
              this.newsMsg = "Uh-oh~ no data yet";
            }
          }

          this.total = res.data.total;
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
      let str = value.replace(/<.*?>/gi, "");
      return str;
    },
    langChange(value) {
      this.langType = value;
    },
    // 分页
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.page = val;
      this.getNewsPageList();
      (function smoothscroll() {
        var currentScroll =
          document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, currentScroll - currentScroll / 5);
        }
      })();
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
.news-page-container {
  position: relative;
  z-index: 0;

  .news-page-second {
    width: 100%;
    background-color: #fff;

    .second-every {
      cursor: pointer;

      .every-font {
        width: 100%;
        text-align: left;
      }

      .every-main {
        font-size: 12px;
        color: #727272;
        font-family: "微软雅黑";
        letter-spacing: 1;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
      }

      .text {
        font-size: 12px;
        overflow: hidden;
        position: relative;
        text-align: left;
      }

      .texter:after {
        content: " ... ";
        position: absolute;
        bottom: 0;
        right: 0;
        margin-left: 10px;
        background: -webkit-linear-gradient(left, transparent, #fff 40%);
        /* Safari 5.1-6.0 */
        background: -o-linear-gradient(left, #fff 50%);
        /* Opera 11.1-12.0 */
        background: -moz-linear-gradient(left, #fff 50%);
        /* Firefox 3.6-15 */
        background: linear-gradient();
        /* 标准语法 */
      }

      .img-self {
        object-fit: cover;
      }

      .every-time {
        font-size: 12px;
        color: #727272;
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

  .news-page-first {
    .first-img {
      display: none;
    }

    .pc-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .second-container {
    width: 80%;
    margin: 0 auto;
    padding: 30px 0;

    .el-input {
      width: 30%;
    }

    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
      max-width: 1350px;
      margin: 0 auto;
    }

    .second-every {
      width: 100%;
      height: 458px;
      margin: 0 auto;
      margin-bottom: 30px;
      background-color: #fff;

      .img-self {
        width: 100%;
        height: 260px;
      }

      .every-font {
        padding: 0 20px;

        .every-title {
          margin-top: 35px;
          font-size: 18px;
        }

        .every-main {
          margin-top: 10px;
          // height: 48px;
          line-height: 24px;
          -webkit-line-clamp: 3;
        }

        .text {
          line-height: 24px;
        }

        .textBox {
          padding-top: 10px;
        }

        .texter {
          height: 48px;
        }

        .every-time {
          margin-top: 15px;
        }
      }
    }
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

  .news-page-first {
    .first-img {
      display: none;
    }

    .pc-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .second-container {
    width: 80%;
    margin: 0 auto;
    padding: 30px 0;

    .el-input {
      width: 30%;
    }

    .container,
    .container-lg,
    .container-md,
    .container-sm,
    .container-xl {
      max-width: 1350px;
      margin: 0 auto;
    }

    .second-every {
      width: 100%;
      height: 458px;
      margin: 0 auto;
      margin-bottom: 30px;
      background-color: #fff;

      .img-self {
        width: 100%;
        height: 260px;
      }

      .every-font {
        padding: 0 30px;

        .every-title {
          margin-top: 35px;
          font-size: 18px;
        }

        .every-main {
          margin-top: 10px;
          // height: 48px;
          line-height: 24px;
          -webkit-line-clamp: 3;
        }

        .text {
          line-height: 24px;
        }

        .textBox {
          padding-top: 10px;
        }

        .texter {
          height: 48px;
        }

        .every-time {
          margin-top: 15px;
        }
      }
    }
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

  .news-page-first {
    .first-img {
      display: none;
    }

    .pc-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .second-container {
    width: 100%;
    margin: 0 auto;
    padding: 30px 0;

    .el-input {
      width: 30%;
    }

    .second-every {
      width: 100%;
      height: 458px;
      margin: 0 auto;
      margin-bottom: 30px;
      background-color: #fff;

      .img-self {
        width: 100%;
        height: 250px;
      }

      .every-font {
        padding: 0 30px;

        .every-title {
          margin-top: 35px;
          font-size: 18px;
        }

        .every-main {
          margin-top: 10px;
          // height: 48px;
          line-height: 24px;
          -webkit-line-clamp: 3;
        }

        .text {
          line-height: 24px;
        }

        .textBox {
          padding-top: 10px;
        }

        .texter {
          height: 48px;
        }

        .every-time {
          margin-top: 15px;
        }
      }
    }
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

  .news-page-first {
    .first-img {
      display: none;
    }

    .pc-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .second-container {
    width: 85%;
    margin: 0 auto;
    padding: 30px 0;

    .el-input {
      width: 35%;
    }

    .second-every {
      width: 100%;
      height: 438px;
      margin: 0 auto;
      margin-bottom: 30px;
      background-color: #fff;

      .img-self {
        width: 100%;
        height: 250px;
      }

      .every-font {
        padding: 0 30px;

        .every-title {
          margin-top: 35px;
          font-size: 18px;
        }

        .every-main {
          margin-top: 10px;
          // height: 48px;
          line-height: 24px;
          -webkit-line-clamp: 3;
        }

        .text {
          line-height: 24px;
        }

        .textBox {
          padding-top: 10px;
        }

        .texter {
          height: 48px;
        }

        .every-time {
          margin-top: 15px;
        }
      }
    }
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

  .news-page-first {
    padding-top: 60px;
    .first-img {
      display: none;
    }

    .pc-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .second-container {
    width: 95%;
    margin: 0 auto;
    padding: 30px 0;

    .el-input {
      width: 40%;
    }

    .second-every {
      width: 100%;
      height: 380px;
      margin: 0 auto;
      margin-bottom: 30px;
      background-color: #fff;

      .img-self {
        width: 100%;
        height: 210px;
      }

      .every-font {
        padding: 0 10px;

        .every-title {
          margin-top: 15px;
          font-size: 18px;
        }

        .every-main {
          margin-top: 10px;
          // height: 48px;
          line-height: 24px;
          -webkit-line-clamp: 3;
        }

        .text {
          line-height: 24px;
        }

        .textBox {
          padding-top: 10px;
        }

        .texter {
          height: 48px;
        }

        .every-time {
          margin-top: 15px;
        }
      }
    }
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

  .news-page-first {
    padding-top: 60px;
    .first-img {
      width: 100%;
      object-fit: cover;
    }

    .pc-img {
      display: none;
    }
  }

  .second-container {
    width: 100%;
    margin: 0 auto;
    padding-top: 20px;
    padding-bottom: 20px;

    .el-input {
      width: 100%;
    }

    .row {
      margin-top: -20px;
    }

    .second-every {
      width: 100%;
      height: 128px;
      margin: 0 auto;
      margin-top: 20px;
      padding-bottom: 20px;
      // line-height: 108px;
      display: flex;
      border-bottom: 1px solid #c8c7c7;
      background-color: transparent;

      .img-self {
        width: 100px;
        height: 108px;
      }

      .every-font {
        padding: 5px 10px;
        padding-right: 0;

        .every-title {
          font-size: 14px;
        }

        .every-main {
          margin-top: 5px;
          // height: 48px;
          line-height: 18px;
          -webkit-line-clamp: 4;
        }

        .text {
          line-height: 18px;
        }

        .textBox {
          padding-top: 10px;
        }

        .texter {
          height: 56px;
        }

        .every-time {
          display: none;
          position: absolute;
          left: 10px;
          bottom: 5px;
        }
      }
    }
  }
}
</style>
<style lang="scss">
#news {
  .el-pagination button:disabled {
    background-color: transparent;
  }

  .el-pagination .btn-next,
  .el-pagination .btn-prev {
    background-color: transparent;
  }

  .el-pager li {
    background: transparent;
  }

  .keyInput {
    .el-input__inner {
      border: 1px solid rgb(230, 227, 227) !important;
      border-radius: 0;
    }
  }
}
</style>
