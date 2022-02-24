<template>
  <div class="news-page-container" id="news">
    <div class="header-page">
      <headerPage @langChange="langChange"></headerPage>
    </div>
    <div class="news-page-first">
      <img
        :src="
          listSel == 1
            ? img1
            : listSel == 2
            ? img2
            : listSel == 3
            ? img3
            : listSel == 4
            ? img4
            : listSel == 5
            ? img5
            : listSel == 6
            ? img6
            : listSel == 7
            ? img7
            : listSel == 8
            ? img8
            : listSel == 9
            ? img9
            : img10
        "
        class="first-img"
      />
    </div>
    <div class="list-page-second">
      <div class="second-title">
        <div class="img-left">
          <img src="../assets/imgs/home/left.png" />
        </div>
        <span
          v-if="listSel == 1"
          v-html="$t('localization.whiteningBeautyCreamFont01')"
        ></span>
        <span
          v-if="listSel == 2"
          v-html="$t('localization.fightDeclineAscensionFont01')"
        ></span>
        <span
          v-if="listSel == 3"
          v-html="$t('localization.cleanTheFillingWaterFont01')"
        ></span>
        <span
          v-if="listSel == 4"
          v-html="$t('localization.raiseHairFont01')"
        ></span>
        <span
          v-if="listSel == 5"
          v-html="$t('localization.privateRaiseFont01')"
        ></span>
        <span
          v-if="listSel == 6"
          v-html="$t('localization.managementFont01')"
        ></span>
        <span
          v-if="listSel == 7"
          v-html="$t('localization.injectionFont01')"
        ></span>
        <span
          v-if="listSel == 8"
          v-html="$t('localization.shrinkPoresFont01')"
        ></span>
        <span
          v-if="listSel == 9"
          v-html="$t('localization.otherFont01')"
        ></span>
        <span
          v-if="listSel == 10"
          v-html="$t('localization.membersOnlyFont01')"
        ></span>
        <div class="img-right">
          <img src="../assets/imgs/home/rigth.png" />
        </div>
      </div>
      <div class="second-phone-title">
        <span
          v-if="listSel == 1"
          v-html="$t('localization.whiteningBeautyCreamFont01')"
        ></span>
        <span
          v-if="listSel == 2"
          v-html="$t('localization.fightDeclineAscensionFont01')"
        ></span>
        <span
          v-if="listSel == 3"
          v-html="$t('localization.cleanTheFillingWaterFont01')"
        ></span>
        <span
          v-if="listSel == 4"
          v-html="$t('localization.raiseHairFont01')"
        ></span>
        <span
          v-if="listSel == 5"
          v-html="$t('localization.privateRaiseFont01')"
        ></span>
        <span
          v-if="listSel == 6"
          v-html="$t('localization.managementFont01')"
        ></span>
        <span
          v-if="listSel == 7"
          v-html="$t('localization.injectionFont01')"
        ></span>
        <span
          v-if="listSel == 8"
          v-html="$t('localization.shrinkPoresFont01')"
        ></span>
        <span
          v-if="listSel == 9"
          v-html="$t('localization.otherFont01')"
        ></span>
        <span
          v-if="listSel == 10"
          v-html="$t('localization.membersOnlyFont01')"
        ></span>
      </div>
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
          <div class="details-font">{{ $t("localization.cleanFourFont") }}</div>
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
        <div class="details-every" @click="checkServiceDetails(91)">
          <div class="details-font">
            {{ $t("localization.privateThreeFont") }}
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
        <div class="details-every" @click="checkServiceDetails(89)">
          <div class="details-font">
            {{ $t("localization.shrinkFourFont") }}
          </div>
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
      listSel: 0,
      img1: require("../assets/imgs/list/01.png"),
      img2: require("../assets/imgs/list/02.png"),
      img3: require("../assets/imgs/list/03.png"),
      img4: require("../assets/imgs/list/04.png"),
      img5: require("../assets/imgs/list/05.png"),
      img6: require("../assets/imgs/list/06.png"),
      img7: require("../assets/imgs/list/07.png"),
      img8: require("../assets/imgs/list/08.png"),
      img9: require("../assets/imgs/list/09.png"),
      img10: require("../assets/imgs/list/10.png"),
    };
  },
  created() {
    this.listSel = this.$route.query.listSel;
  },
  methods: {
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
  position: relative;
  z-index: 0;

  .news-page-first {
    .first-img {
      width: 100%;
      object-fit: cover;
    }
  }

  .list-page-second {
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
        background-color: #fbf8fe;
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
    margin-bottom: 20px;

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
          color: #5e5467;
          text-align: left;
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
    margin-bottom: 20px;

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
          color: #5e5467;
          text-align: left;
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
    margin-bottom: 20px;

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
          color: #5e5467;
          text-align: left;
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
    margin-bottom: 20px;

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
          color: #5e5467;
          text-align: left;
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
    margin-bottom: 20px;

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
          color: #5e5467;
          text-align: left;
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
            color: #5e5467;
            text-align: left;
          }

          .details-img {
            display: flex;
            flex-direction: column;
            justify-content: center;

            img {
              width: 10px;
            }
          }
        }
      }
    }
  }
}
</style>
