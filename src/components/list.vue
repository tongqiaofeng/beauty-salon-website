<template>
  <div class="news-page-container" id="news">
    <div class="header-page">
      <headerPage @langChange="langChange"></headerPage>
    </div>
    <div class="news-page-first">
      <img :src="imgUrl(listSel, langType)" class="first-img" />
    </div>
    <div class="list-page-second">
      <div v-if="listSel == 1" class="second-main">
        <div class="details-every" @click="checkServiceDetails(69)">
          <div class="details-font">
            {{ $t("localization.whiteningOneFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(69)">
          <div class="details-font">
            {{ $t("localization.whiteningTwoFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(75)">
          <div class="details-font">
            {{ $t("localization.whiteningThreeFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(58)">
          <div class="details-font">
            {{ $t("localization.whiteningFourFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(61)">
          <div class="details-font">
            {{ $t("localization.whiteningFiveFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(64)">
          <div class="details-font">
            {{ $t("localization.whiteningSixFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(88)">
          <div class="details-font">
            {{ $t("localization.whiteningSevenFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
      </div>
      <div v-if="listSel == 2" class="second-main">
        <div class="details-every" @click="checkServiceDetails(70)">
          <div class="details-font">{{ $t("localization.fightOneFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(71)">
          <div class="details-font">{{ $t("localization.fightTwoFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(62)">
          <div class="details-font">{{ $t("localization.fightTenFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(85)">
          <div class="details-font">
            {{ $t("localization.fightThreeFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(65)">
          <div class="details-font">{{ $t("localization.fightFourFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(66)">
          <div class="details-font">{{ $t("localization.fightFiveFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(64)">
          <div class="details-font">{{ $t("localization.fightSixFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(59)">
          <div class="details-font">
            {{ $t("localization.fightSevenFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(59)">
          <div class="details-font">
            {{ $t("localization.fightEightFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(92)">
          <div class="details-font">{{ $t("localization.fightNineFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(115)">
          <div class="details-font">
            {{ $t("localization.fightElevenFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
      </div>
      <div v-if="listSel == 3" class="second-main">
        <div class="details-every" @click="checkServiceDetails(67)">
          <div class="details-font">{{ $t("localization.cleanOneFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(59)">
          <div class="details-font">{{ $t("localization.cleanTwoFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(61)">
          <div class="details-font">
            {{ $t("localization.cleanThreeFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(64)">
          <div class="details-font">{{ $t("localization.cleanFiveFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
      </div>
      <div v-if="listSel == 4" class="second-main">
        <div class="details-every" @click="checkServiceDetails(70)">
          <div class="details-font">{{ $t("localization.hairOneFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(82)">
          <div class="details-font">{{ $t("localization.hairTwoFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(86)">
          <div class="details-font">{{ $t("localization.hairThreeFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(113)">
          <div class="details-font">{{ $t("localization.hairFourFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
      </div>
      <div v-if="listSel == 5" class="second-main">
        <div class="details-every" @click="checkServiceDetails(70)">
          <div class="details-font">
            {{ $t("localization.privateOneFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(69)">
          <div class="details-font">
            {{ $t("localization.privateTwoFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(90)">
          <div class="details-font">
            {{ $t("localization.privateFourFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
      </div>
      <div v-if="listSel == 6" class="second-main">
        <div class="details-every" @click="checkServiceDetails(72)">
          <div class="details-font">
            {{ $t("localization.managementOneFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(73)">
          <div class="details-font">
            {{ $t("localization.managementTwoFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(63)">
          <div class="details-font">
            {{ $t("localization.managementThreeFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
      </div>
      <div v-if="listSel == 7" class="second-main">
        <div class="details-every" @click="checkServiceDetails(77)">
          <div class="details-font">
            {{ $t("localization.injectionOneFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(83)">
          <div class="details-font">
            {{ $t("localization.injectionTwoFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(60)">
          <div class="details-font">
            {{ $t("localization.injectionThreeFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(87)">
          <div class="details-font">
            {{ $t("localization.injectionFourFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(85)">
          <div class="details-font">
            {{ $t("localization.injectionFiveFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
      </div>
      <div v-if="listSel == 8" class="second-main">
        <div class="details-every" @click="checkServiceDetails(69)">
          <div class="details-font">{{ $t("localization.shrinkOneFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(62)">
          <div class="details-font">{{ $t("localization.shrinkTwoFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
      </div>
      <div v-if="listSel == 9" class="second-main">
        <div class="details-every" @click="checkServiceDetails(89)">
          <div class="details-font">{{ $t("localization.otherOneFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(69)">
          <div class="details-font">{{ $t("localization.otherTwoFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(69)">
          <div class="details-font">
            {{ $t("localization.otherThreeFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(68)">
          <div class="details-font">{{ $t("localization.otherFourFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(64)">
          <div class="details-font">{{ $t("localization.otherFiveFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(76)">
          <div class="details-font">{{ $t("localization.otherSixFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(84)">
          <div class="details-font">
            {{ $t("localization.otherSevenFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(59)">
          <div class="details-font">
            {{ $t("localization.otherEightFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
      </div>
      <div v-if="listSel == 10" class="second-main">
        <div class="details-every" @click="checkServiceDetails(82)">
          <div class="details-font">{{ $t("localization.hairTwoFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(86)">
          <div class="details-font">{{ $t("localization.hairThreeFont") }}</div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(109)">
          <div class="details-font">
            {{ $t("localization.membersOneFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(110)">
          <div class="details-font">
            {{ $t("localization.membersTwoFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(61)">
          <div class="details-font">
            {{ $t("localization.membersThreeFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(112)">
          <div class="details-font">
            {{ $t("localization.membersFourFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
      </div>
      <div v-if="listSel == 11" class="second-main">
        <div class="details-every" @click="checkServiceDetails(116)">
          <div class="details-font">
            {{ $t("localization.skinProblemOneFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(117)">
          <div class="details-font">
            {{ $t("localization.skinProblemTwoFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
        <div class="details-every" @click="checkServiceDetails(118)">
          <div class="details-font">
            {{ $t("localization.skinProblemThreeFont") }}
          </div>
          <div class="details-img">
            <img src="../assets/imgs/serviceList/right.png" />
          </div>
        </div>
      </div>
    </div>
    <div style="position: absolute;bottom: 0;left: 0;right: 0;">
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
      listSel: 0,
      imgcn1: require("../assets/imgs/list/01cn.png"),
      imgtw1: require("../assets/imgs/list/01tw.png"),
      img1: require("../assets/imgs/list/01.png"),
      imgkh1: require("../assets/imgs/list/01kh.png"),

      imgcn2: require("../assets/imgs/list/02cn.png"),
      imgtw2: require("../assets/imgs/list/02tw.png"),
      img2: require("../assets/imgs/list/02.png"),
      imgkh2: require("../assets/imgs/list/02kh.png"),

      imgcn3: require("../assets/imgs/list/03cn.png"),
      imgtw3: require("../assets/imgs/list/03tw.png"),
      img3: require("../assets/imgs/list/03.png"),
      imgkh3: require("../assets/imgs/list/03kh.png"),

      imgcn4: require("../assets/imgs/list/04cn.png"),
      imgtw4: require("../assets/imgs/list/04tw.png"),
      img4: require("../assets/imgs/list/04.png"),
      imgkh4: require("../assets/imgs/list/04kh.png"),

      imgcn5: require("../assets/imgs/list/05cn.png"),
      imgtw5: require("../assets/imgs/list/05tw.png"),
      img5: require("../assets/imgs/list/05.png"),
      imgkh5: require("../assets/imgs/list/05kh.png"),

      imgcn6: require("../assets/imgs/list/06cn.png"),
      imgtw6: require("../assets/imgs/list/06tw.png"),
      img6: require("../assets/imgs/list/06.png"),
      imgkh6: require("../assets/imgs/list/06kh.png"),

      imgcn7: require("../assets/imgs/list/07cn.png"),
      imgtw7: require("../assets/imgs/list/07tw.png"),
      img7: require("../assets/imgs/list/07.png"),
      imgkh7: require("../assets/imgs/list/07kh.png"),

      imgcn8: require("../assets/imgs/list/08cn.png"),
      imgtw8: require("../assets/imgs/list/08tw.png"),
      img8: require("../assets/imgs/list/08.png"),
      imgkh8: require("../assets/imgs/list/08kh.png"),

      imgcn9: require("../assets/imgs/list/09cn.png"),
      imgtw9: require("../assets/imgs/list/09tw.png"),
      img9: require("../assets/imgs/list/09.png"),
      imgkh9: require("../assets/imgs/list/09kh.png"),

      imgcn10: require("../assets/imgs/list/10cn.png"),
      imgtw10: require("../assets/imgs/list/10tw.png"),
      img10: require("../assets/imgs/list/10.png"),
      imgkh10: require("../assets/imgs/list/10kh.png"),

      imgcn11: require("../assets/imgs/list/11cn.png"),
      imgtw11: require("../assets/imgs/list/11tw.png"),
      img11: require("../assets/imgs/list/11.png"),
      imgkh11: require("../assets/imgs/list/11.png"),
    };
  },
  created() {
    this.listSel = this.$route.query.listSel;
  },
  methods: {
    imgUrl(page, lang) {
      let img = "";
      if (lang == "zh-CN") {
        img =
          page == 1
            ? this.imgcn1
            : page == 2
            ? this.imgcn2
            : page == 3
            ? this.imgcn3
            : page == 4
            ? this.imgcn4
            : page == 5
            ? this.imgcn5
            : page == 6
            ? this.imgcn6
            : page == 7
            ? this.imgcn7
            : page == 8
            ? this.imgcn8
            : page == 9
            ? this.imgcn9
            : page == 10
            ? this.imgcn10
            : this.imgcn11;
      } else if (lang == "zh-TW") {
        img =
          page == 1
            ? this.imgtw1
            : page == 2
            ? this.imgtw2
            : page == 3
            ? this.imgtw3
            : page == 4
            ? this.imgtw4
            : page == 5
            ? this.imgtw5
            : page == 6
            ? this.imgtw6
            : page == 7
            ? this.imgtw7
            : page == 8
            ? this.imgtw8
            : page == 9
            ? this.imgtw9
            : page == 10
            ? this.imgtw10
            : this.imgtw11;
      } else if (lang == "en-US") {
        img =
          page == 1
            ? this.img1
            : page == 2
            ? this.img2
            : page == 3
            ? this.img3
            : page == 4
            ? this.img4
            : page == 5
            ? this.img5
            : page == 6
            ? this.img6
            : page == 7
            ? this.img7
            : page == 8
            ? this.img8
            : page == 9
            ? this.img9
            : page == 10
            ? this.img10
            : this.img11;
      } else if (lang == "en-KH") {
        img =
          page == 1
            ? this.imgkh1
            : page == 2
            ? this.imgkh2
            : page == 3
            ? this.imgkh3
            : page == 4
            ? this.imgkh4
            : page == 5
            ? this.imgkh5
            : page == 6
            ? this.imgkh6
            : page == 7
            ? this.imgkh7
            : page == 8
            ? this.imgkh8
            : page == 9
            ? this.imgkh9
            : page == 10
            ? this.imgkh10
            : this.imgkh11;
      }

      return img;
    },
    langChange(value) {
      this.langType = value;
    },
    // 项目详情
    checkServiceDetails(id) {
      this.$router.push({
        path: "/details",
        query: {
          select: 3,
          id: id,
        },
      });
      // this.backTop();
    },
  },
  // 页面回到顶部
  backTop() {
    let timer = null;
    cancelAnimationFrame(timer);
    timer = requestAnimationFrame(function fn() {
      var oTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (oTop > 0) {
        document.body.scrollTop = document.documentElement.scrollTop =
          oTop - 100;
        timer = requestAnimationFrame(fn);
      } else {
        cancelAnimationFrame(timer);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.news-page-container {
  min-height: 100vh;
  position: relative;
  z-index: 0;

  .news-page-first {
    .first-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .list-page-second {
    margin-top: 80px;
    padding-bottom: 100px;

    .second-title {
      width: 90%;
      display: flex;
      justify-content: center;
      color: #755793;

      img {
        height: 18px;
      }
    }

    .second-main {
      .details-every {
        background-color: #f2f3f5;
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
      height: inherit;
    }
  }

  .list-page-second {
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

      .details-every {
        width: 49%;
        height: 116px;
        margin-bottom: 20px;
        padding: 0 40px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;

        .details-font {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 25px;
          color: #272729;
          text-align: left;
          font-weight: 400;
        }

        .details-img {
          display: flex;
          flex-direction: column;
          justify-content: center;
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

  .news-page-first {
    .first-img {
      height: inherit;
    }
  }

  .list-page-second {
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

      .details-every {
        width: 49%;
        height: 116px;
        margin-bottom: 20px;
        padding: 0 40px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;

        .details-font {
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 25px;
          color: #272729;
          text-align: left;
          font-weight: 400;
        }

        .details-img {
          display: flex;
          flex-direction: column;
          justify-content: center;
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

  .news-page-first {
    .first-img {
      height: inherit;
    }
  }

  .list-page-second {
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

      .details-every {
        width: 49%;
        height: 116px;
        margin-bottom: 20px;
        padding: 0 40px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;

        .details-font {
          width: 90%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 25px;
          color: #272729;
          text-align: left;
          font-weight: 400;
        }

        .details-img {
          display: flex;
          flex-direction: column;
          justify-content: center;
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

  .news-page-first {
    .first-img {
      height: inherit;
    }
  }

  .list-page-second {
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
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .details-every {
        width: 49%;
        height: 116px;
        margin-bottom: 20px;
        padding: 0 40px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;

        .details-font {
          width: 90%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 22px;
          color: #272729;
          text-align: left;
          font-weight: 400;
        }

        .details-img {
          display: flex;
          flex-direction: column;
          justify-content: center;
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

  .news-page-first {
    padding-top: 60px;

    .first-img {
      height: inherit;
    }
  }

  .list-page-second {
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
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .details-every {
        width: 49%;
        height: 116px;
        margin-bottom: 20px;
        padding: 0 40px;
        display: flex;
        justify-content: space-between;
        cursor: pointer;

        .details-font {
          width: 90%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          font-size: 20px;
          color: #272729;
          text-align: left;
          font-weight: 400;
        }

        .details-img {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }

  .second-phone-title {
    display: none;
  }
}

@media screen and (max-width: 767px) {
  .news-page-container {
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
        min-height: 210px;
      }
    }

    .list-page-second {
      margin-top: 20px;

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
        width: 100%;
        margin: 0 auto;
        margin-bottom: 20px;

        .details-every {
          width: 100%;
          // height: 116px;
          height: auto;
          margin-bottom: 10px;
          padding: 20px 20px;
          display: flex;
          justify-content: space-between;
          cursor: pointer;

          .details-font {
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: 14px;
            color: #272729;
            text-align: left;
            font-weight: 400;
          }

          .details-img {
            display: flex;
            flex-direction: column;
            justify-content: center;

            img {
              width: 20px;
              height: 20px;
            }
          }
        }
      }
    }
  }
}
</style>
