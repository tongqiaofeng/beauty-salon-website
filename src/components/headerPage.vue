<template>
  <div class="main-header">
    <div class="header-page-container" id="header-page">
      <div class="top-computer">
        <div class="header-container">
          <div class="header-page-top-img">
            <router-link to="/"
              ><img
                class="img-responsives"
                src="../assets/imgs/header/logo_main.png"
            /></router-link>
          </div>
          <div style="display: flex">
            <nav class="navbar navbar-expand-lg navbar-light">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                @click="toggleClick"
              >
                <span class="navbar-toggler-icon">
                  <img style="width: 30px; height: 20px" :src="lineImg2" />
                </span>
              </button>
              <div class="header-page-top-nav">
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mr-auto">
                    <li
                      :class="{ 'blank-active': routeName === 'Home' }"
                      class="nav-item nav-margin min-liHome"
                    >
                      <router-link
                        :class="
                          routeName === 'Contact' ||
                          routeName === 'Details' ||
                          routeName === 'List'
                            ? 'nav-contact'
                            : routeName === 'Share' ||
                              routeName === 'Home' ||
                              routeName === 'Service'
                            ? 'nav-blank'
                            : 'nav-white'
                        "
                        to="/"
                        exact
                      >
                        {{ $t("localization.homeFont") }}
                      </router-link>
                    </li>
                    <li
                      :class="{ active: routeName === 'About' }"
                      class="nav-item nav-margin min-liHome"
                    >
                      <router-link
                        :class="
                          routeName === 'Contact' ||
                          routeName === 'Details' ||
                          routeName === 'List'
                            ? 'nav-contact'
                            : routeName === 'Share' ||
                              routeName === 'Home' ||
                              routeName === 'Service'
                            ? 'nav-blank'
                            : 'nav-white'
                        "
                        to="/about"
                      >
                        {{ $t("localization.aboutFont") }}</router-link
                      >
                    </li>
                    <li
                      :class="{ 'blank-active': routeName === 'Service' }"
                      class="nav-item nav-margin min-liHome"
                    >
                      <router-link
                        :class="
                          routeName === 'Contact' ||
                          routeName === 'Details' ||
                          routeName === 'List'
                            ? 'nav-contact'
                            : routeName === 'Share' ||
                              routeName === 'Home' ||
                              routeName === 'Service'
                            ? 'nav-blank'
                            : 'nav-white'
                        "
                        to="/service"
                      >
                        {{ $t("localization.treatmentFont") }}</router-link
                      >
                    </li>
                    <li
                      :class="{ active: routeName === 'News' }"
                      class="nav-item nav-margin min-liHome"
                    >
                      <router-link
                        :class="
                          routeName === 'Contact' ||
                          routeName === 'Details' ||
                          routeName === 'List'
                            ? 'nav-contact'
                            : routeName === 'Share' ||
                              routeName === 'Home' ||
                              routeName === 'Service'
                            ? 'nav-blank'
                            : 'nav-white'
                        "
                        to="/news"
                      >
                        {{ $t("localization.newsFont") }}</router-link
                      >
                    </li>
                    <li
                      :class="{ 'contact-active': routeName === 'Contact' }"
                      class="nav-item nav-margin min-liHome"
                    >
                      <router-link
                        :class="
                          routeName === 'Contact' ||
                          routeName === 'Details' ||
                          routeName === 'List'
                            ? 'nav-contact'
                            : routeName === 'Share' ||
                              routeName === 'Home' ||
                              routeName === 'Service'
                            ? 'nav-blank'
                            : 'nav-white'
                        "
                        to="/contact"
                      >
                        {{ $t("localization.contactFont") }}</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div class="nav-margin language-style">
              <el-dropdown trigger="click" @command="switchLanguage">
                <div class="lang-icon" style="display: flex">
                  <span class="el-dropdown-link">
                    <img
                      :src="
                        selectLang == 'zh-CN'
                          ? country1
                          : selectLang == 'en-US'
                          ? country2
                          : selectLang == 'zh-TW'
                          ? country3
                          : country4
                      "
                      style="width: 20px; height: 14px"
                    />
                  </span>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    v-for="item in language"
                    :key="item.value"
                    :command="item.value"
                  >
                    <a class="dropdown_a">
                      <img
                        :src="item.img"
                        style="
                          width: 17px;
                          height: 12px;
                          margin-top: -4px;
                          margin-right: 3px;
                        "
                      />
                      <span :class="{ selected: selectLang == item.value }">{{
                        item.label
                      }}</span>
                    </a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
        </div>
      </div>
      <div class="top-phone">
        <div class="header-container">
          <div style="width: 25px; display: flex">
            <nav class="navbar navbar-expand-lg navbar-light">
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                @click="toggleClick"
              >
                <span class="navbar-toggler-icon">
                  <!-- routeName === 'Contact' || routeName === 'Details' || routeName === 'Service' || routeName === 'Share' ? lineImg2: lineImg1 -->
                  <img style="width: 20px; height: 16px" :src="lineImg2" />
                </span>
              </button>
              <div class="header-page-top-nav">
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav mr-auto">
                    <li
                      :class="{ 'blank-active': routeName === 'Home' }"
                      class="nav-item nav-margin min-liHome"
                    >
                      <router-link
                        :class="
                          routeName === 'Contact' || routeName === 'Details'
                            ? 'nav-contact'
                            : routeName === 'Service' ||
                              routeName === 'Share' ||
                              routeName === 'Home'
                            ? 'nav-blank'
                            : 'nav-white'
                        "
                        to="/"
                        exact
                      >
                        {{ $t("localization.homeFont") }}
                      </router-link>
                    </li>
                    <li
                      :class="{ active: routeName === 'About' }"
                      class="nav-item nav-margin min-liHome"
                    >
                      <router-link
                        :class="
                          routeName === 'Contact' || routeName === 'Details'
                            ? 'nav-contact'
                            : routeName === 'Service' ||
                              routeName === 'Share' ||
                              routeName === 'Home'
                            ? 'nav-blank'
                            : 'nav-white'
                        "
                        to="/about"
                      >
                        {{ $t("localization.aboutFont") }}</router-link
                      >
                    </li>
                    <li
                      :class="{ 'blank-active': routeName === 'Service' }"
                      class="nav-item nav-margin min-liHome"
                    >
                      <router-link
                        :class="
                          routeName === 'Contact' || routeName === 'Details'
                            ? 'nav-contact'
                            : routeName === 'Service' ||
                              routeName === 'Share' ||
                              routeName === 'Home'
                            ? 'nav-blank'
                            : 'nav-white'
                        "
                        to="/service"
                      >
                        {{ $t("localization.treatmentFont") }}</router-link
                      >
                    </li>
                    <li
                      :class="{ active: routeName === 'News' }"
                      class="nav-item nav-margin min-liHome"
                    >
                      <router-link
                        :class="
                          routeName === 'Contact' || routeName === 'Details'
                            ? 'nav-contact'
                            : routeName === 'Service' ||
                              routeName === 'Share' ||
                              routeName === 'Home'
                            ? 'nav-blank'
                            : 'nav-white'
                        "
                        to="/news"
                      >
                        {{ $t("localization.newsFont") }}</router-link
                      >
                    </li>
                    <li
                      :class="{ 'contact-active': routeName === 'Contact' }"
                      class="nav-item nav-margin min-liHome"
                    >
                      <router-link
                        :class="
                          routeName === 'Contact' || routeName === 'Details'
                            ? 'nav-contact'
                            : routeName === 'Service' ||
                              routeName === 'Share' ||
                              routeName === 'Home'
                            ? 'nav-blank'
                            : 'nav-white'
                        "
                        to="/contact"
                      >
                        {{ $t("localization.contactFont") }}</router-link
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
            <div class="nav-margin language-style">
              <el-dropdown trigger="click" @command="switchLanguage">
                <div class="lang-icon">
                  <span class="el-dropdown-link">
                    <img
                      :src="
                        selectLang == 'zh-CN'
                          ? country1
                          : selectLang == 'en-US'
                          ? country2
                          : selectLang == 'zh-TW'
                          ? country3
                          : country4
                      "
                      style="width: 20px; height: 14px"
                    />
                  </span>
                </div>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item
                    v-for="item in language"
                    :key="item.value"
                    :command="item.value"
                  >
                    <a class="dropdown_a">
                      <img
                        :src="item.img"
                        style="
                          width: 17px;
                          height: 12px;
                          margin-top: -4px;
                          margin-right: 3px;
                        "
                      />
                      <span :class="{ selected: selectLang == item.value }">{{
                        item.label
                      }}</span>
                    </a>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <div class="header-page-top-img">
            <router-link to="/"
              ><img
                class="img-responsives"
                src="../assets/imgs/header/logo_main.png"
            /></router-link>
          </div>
          <div class="phone-lang">
            <el-dropdown trigger="click" @command="switchLanguage">
              <div class="lang-icon">
                <span class="el-dropdown-link">
                  <img
                    :src="
                      selectLang == 'zh-CN'
                        ? country1
                        : selectLang == 'en-US'
                        ? country2
                        : selectLang == 'zh-TW'
                        ? country3
                        : country4
                    "
                    style="width: 20px; height: 14px"
                  />
                </span>
              </div>
              <el-dropdown-menu slot="dropdown" placement="bottom">
                <el-dropdown-item
                  v-for="item in language"
                  :key="item.value"
                  :command="item.value"
                >
                  <a class="dropdown_a">
                    <img
                      :src="item.img"
                      style="
                        width: 17px;
                        height: 12px;
                        margin-top: -4px;
                        margin-right: 3px;
                      "
                    />
                    <span :class="{ selected: selectLang == item.value }">{{
                      item.label
                    }}</span>
                  </a>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </div>
    <div class="phone-header-container">
      <div class="phone-header">
        <div class="phone-main">
          <ul>
            <li class="phone-main-every" @click="goTop">
              <router-link
                class="oldType"
                :class="{ phoneClick: routeName === 'Home' }"
                to="/"
                exact
              >
                <img
                  :src="routeName === 'Home' ? indexImg : indexImg02"
                  class="every-img"
                />
                <span>{{ $t("localization.homeFont") }}</span>
              </router-link>
            </li>
            <li class="phone-main-every" @click="goTop">
              <router-link
                class="oldType"
                :class="{ phoneClick: routeName === 'About' }"
                to="/about"
              >
                <img
                  :src="routeName === 'About' ? aboutImg : aboutImg02"
                  class="every-img"
                />
                <span>{{ $t("localization.aboutFont") }}</span>
              </router-link>
            </li>
            <li class="phone-main-every" @click="goTop">
              <router-link
                class="oldType"
                :class="{ phoneClick: routeName === 'Service' }"
                to="/service"
              >
                <img
                  :src="routeName === 'Service' ? serviceImg : serviceImg02"
                  class="every-img"
                />
                <span>{{ $t("localization.treatmentFont") }}</span>
              </router-link>
            </li>
            <li class="phone-main-every" @click="goTop">
              <router-link
                class="oldType"
                :class="{ phoneClick: routeName === 'News' }"
                to="/news"
              >
                <img
                  :src="routeName === 'News' ? newsImg : newsImg02"
                  class="every-img"
                />
                <span>{{ $t("localization.newsFont") }}</span>
              </router-link>
            </li>
            <li class="phone-main-every" @click="goTop">
              <router-link
                class="oldType"
                :class="{ phoneClick: routeName === 'Contact' }"
                to="/contact"
              >
                <img
                  :src="routeName === 'Contact' ? contactImg : contactImg02"
                  class="every-img"
                />
                <span>{{ $t("localization.contactFont") }}</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div @click="closeClick" class="hidden-div"></div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
$(".navbar-toggle").click(function() {
  if ($("#navbarSupportedContent").css("display") == "none") {
    $("#navbarSupportedContent").css("display", "block");
  } else if ($("#navbarSupportedContent").css("display") == "block") {
    $("#navbarSupportedContent").css("display", "none");
  }
});

$(".min-icon").click(function() {
  if ($(".min-navbar").css("display") == "none") {
    $(".min-navbar").css("display", "block");
  } else if ($(".min-navbar").css("display") == "block") {
    $(".min-navbar").css("display", "none");
  }
});

export default {
  data() {
    return {
      lineImg1: require("../assets/imgs/header/line.png"),
      lineImg2: require("../assets/imgs/header/blank_line.png"),
      img1: require("../assets/imgs/home/logo_top.png"),
      img2: require("../assets/imgs/about/logo_white.png"),
      img3: require("../assets/imgs/contact/logo_contact.png"),
      indexImg: require("../assets/imgs/header/index.png"),
      indexImg02: require("../assets/imgs/header/index02.png"),
      aboutImg: require("../assets/imgs/header/about.png"),
      aboutImg02: require("../assets/imgs/header/about02.png"),
      serviceImg: require("../assets/imgs/header/service.png"),
      serviceImg02: require("../assets/imgs/header/service02.png"),
      newsImg: require("../assets/imgs/header/news.png"),
      newsImg02: require("../assets/imgs/header/news02.png"),
      contactImg: require("../assets/imgs/header/contact.png"),
      contactImg02: require("../assets/imgs/header/contact02.png"),

      langImg1: require("../assets/imgs/home/lang.png"),
      langImg2: require("../assets/imgs/contact/lang_con.png"),
      langImg3: require("../assets/imgs/service/lang_blank.png"),
      routeName: this.$route.name,
      value: this.$i18n.locale, //为了把下拉框的默认值和全局变量的值一致，以此实现载入页面时显示的语言和数据配置一致
      country1: require("../assets/imgs/home/china.png"),
      country2: require("../assets/imgs/home/en.png"),
      country3: require("../assets/imgs/home/tai.png"),
      country4: require("../assets/imgs/home/jian.png"),
      language: [
        {
          value: "zh-CN",
          label: "中文简体",
          img: require("../assets/imgs/home/china.png"),
        },
        {
          value: "en-US",
          label: "English",
          img: require("../assets/imgs/home/en.png"),
        },
        {
          value: "zh-TW",
          label: "中文繁體",
          img: require("../assets/imgs/home/tai.png"),
        },
        {
          value: "en-KH",
          label: "Khmer",
          img: require("../assets/imgs/home/jian.png"),
        },
      ],
      selectPage: 0,
      selectLang: localStorage.getItem("DefaultLanguage"),
    };
  },
  mounted() {
    let value =
      localStorage.getItem("DefaultLanguage") == null
        ? "en-US"
        : localStorage.getItem("DefaultLanguage");
    this.switchLanguage(value);
  },
  methods: {
    goTop() {
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
    toggleClick() {
      this.selectPage = 1;
      document.getElementsByClassName(
        "phone-header-container"
      )[0].style.transform = "translate(0, 0)";
      document.getElementsByClassName(
        "phone-header-container"
      )[0].style.transition = "all 500ms";
    },
    closeClick() {
      this.selectPage = 0;
      document.getElementsByClassName(
        "phone-header-container"
      )[0].style.transform = "translate(-101%, 0)";
    },
    switchLanguage(value) {
      console.log(value);
      this.selectLang = value;
      let selList = document.getElementsByClassName("dropdown_a");
      let selectValue;

      if (value == "zh-CN") {
        this.$i18n.locale = "zh-CN";
        document.title = "柬埔寨美奈美颜诊所 | Monet Beauty Clinic";
      } else if (value == "en-US") {
        this.$i18n.locale = "en-US";
        document.title = "Cambodian Monet Beauty Clinic | 美奈美颜诊所";
      } else if (value == "zh-TW") {
        this.$i18n.locale = "zh-TW";
        document.title = "柬埔寨美奈美顏診所 | Monet Beauty Clinic";
      } else if (value == "en-KH") {
        this.$i18n.locale = "en-KH";
        document.title =
          "ម៉ូណែត គ្លីនិកប៊ីយូធីខេមបូឌាខូអិលធីឌី | Monet Beauty Clinic";
      }
      // 在选择了显示的语言后，将配置保存到localStorage中
      localStorage.setItem("DefaultLanguage", value);
      this.$emit("langChange", value);

      for (let m = 0; m < this.language.length; m++) {
        if (this.language[m].value == localStorage.getItem("DefaultLanguage")) {
          selectValue = this.language[m].label;
        }
      }

      for (let i = 0; i < selList.length; i++) {
        if (selList[i].innerHTML == selectValue) {
          // console.log('00000000000000000');
          // console.log(selList[i]);
          selList[i].classList.add("selected");
        } else {
          selList[i].classList.remove("selected");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.main-header {
  .header-page-container {
    .header-container {
      display: flex;
      justify-content: space-between;
    }

    .header-page-top-img {
      margin-top: 34px;
    }

    .min-liHome:hover {
      a {
        font-weight: bold;
      }
    }

    .nav-white,
    .nav-contact {
      padding: 0;
      font-size: 16px;
      font-family: "微软雅黑";
    }

    .nav-contact {
      color: #7f628d !important;
    }

    .nav-white {
      color: #fff !important;
    }

    .nav-blank {
      color: #000 !important;
    }

    .active,
    .contact-active,
    .blank-active {
      position: relative;
      font-weight: bold;
      text-align: center;
    }

    .active::before,
    .contact-active::before,
    .blank-active::before {
      width: 30px;
      height: 2px;
      margin: auto;
      content: "";
      position: absolute;
      top: 40px;
      left: 0;
      bottom: 0;
      right: 0;
    }

    .active::before {
      background-color: #fff;
    }

    .contact-active::before {
      background-color: #7f628d;
    }

    .blank-active::before {
      background-color: #000;
    }

    .nav > li > a {
      padding: 0 !important;
    }

    .navbar {
      padding: 0;
    }

    .navbar-brand {
      height: 0 !important;
    }

    .navbar-toggler-icon {
      background-color: transparent;
      border-radius: 1px;
    }

    .navbar-inverse {
      background-color: transparent !important;
      border-color: transparent !important;
    }

    a:hover {
      text-decoration: none;
    }

    .language-style {
      margin-top: 40px;
    }

    .min-liHome:hover {
      cursor: pointer;
    }
  }

  .phone-header-container {
    position: fixed;
    top: 0;
    left: 0;
    right: auto;
    width: 100%;
    height: 100vh;
    display: flex;
    z-index: 999999;
    transform: translate(-101%, 0);

    .hidden-div {
      width: 50%;
      min-height: 600px;
      background-color: rgba(40, 33, 41, 0.4);
    }

    .phone-header {
      width: 50%;
      height: 100%;
      padding-top: 56px;
      overflow-y: hidden;
      background-color: #281429;

      .phone-top {
        padding-right: 20px;
        display: flex;
        justify-content: flex-end;

        .phone-top-x {
          cursor: pointer;
        }
      }

      .phone-main {
        text-align: left;

        ul {
          padding: 0;
          margin: 0;

          .phone-main-every a:hover {
            color: #fff;
            font-weight: bold;
          }
        }
      }

      .oldType {
        height: 100%;
        display: flex;
        align-items: center;
        padding-left: 23px;
        color: #beb1cb;
        border-left: 3px solid #281429;
        font-size: 12px;

        .every-img {
          width: 15px;
          height: 15px;
          margin-right: 16px;
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .phoneClick {
        color: #fff;
        border-left: 3px solid #9e52a1;
        background: url("../assets/imgs/header/selBack.png");
        box-sizing: border-box;
      }
    }
  }
}

.dropdown_a {
  color: #aaa !important;
  font-size: 14px;
}

.selected {
  color: #7f628d !important;
}

.phone-lang {
  text-align: left;
  color: #2c3e50;

  .lang-icon {
    display: flex;

    p {
      margin-left: 5px;
      color: #2c3e50;
    }
  }
}

@media screen and (min-width: 1781px) {
  .header-page-container {
    padding: 0 208px 0 222px;

    .top-computer {
      display: block;
    }

    .top-phone {
      display: none;
    }

    .nav-margin {
      margin-left: 50px;
    }

    .header-page-top-nav {
      margin-top: 40px;
      display: flex;
    }

    .nav-item {
      line-height: 36px;
      text-align: center;
    }

    .navbar-nav {
      float: right !important;
    }

    .lang-icon {
      margin-top: 10px;
    }
  }
}

@media screen and (min-width: 1499px) and (max-width: 1780px) {
  .header-page-container {
    padding: 0 150px 0 170px;

    .top-computer {
      display: block;
    }

    .top-phone {
      display: none;
    }

    .nav-margin {
      margin-left: 50px;
    }

    .lang-icon {
      margin-top: 10px;
    }
  }
}

@media screen and (min-width: 1200px) and (max-width: 1780px) {
  .header-page-container {
    .top-computer {
      display: block;
    }

    .top-phone {
      display: none;
    }

    .header-page-top-nav {
      margin-top: 40px;
      display: flex;
    }

    .nav-item {
      line-height: 36px;
      text-align: center;
    }

    .navbar-nav {
      float: right !important;
    }

    .lang-icon {
      margin-top: 10px;
    }
  }
}

@media screen and (min-width: 1200px) and (max-width: 1500px) {
  .header-page-container {
    padding: 0 80px 0 80px;

    .top-computer {
      display: block;
    }

    .top-phone {
      display: none;
    }

    .nav-margin {
      margin-left: 40px;
    }

    .lang-icon {
      margin-top: 10px;
    }
  }
}

@media screen and (min-width: 992px) and (max-width: 1199px) {
  .header-page-container {
    padding: 0 40px 0 40px;

    .top-computer {
      display: block;
    }

    .top-phone {
      display: none;
    }

    .nav-margin {
      margin-left: 20px;
    }

    .header-page-top-nav {
      margin-top: 40px;
      display: flex;
    }

    .nav-item {
      text-align: center;
    }

    .navbar-nav {
      float: right !important;
    }

    .lang-icon {
      margin-top: 10px;
    }
  }
}

@media screen and (min-width: 768px) and (max-width: 991px) {
  .header-page-container {
    padding: 0 10px;

    .top-computer {
      display: none;
    }

    .top-phone {
      display: block;
    }

    .header-page-top-nav {
      position: relative;
    }

    .navbar-collapse {
      position: absolute;
      right: 25px;
      z-index: 999;
    }

    .header-page-top-img {
      margin-top: 24px !important;
    }

    .language-style {
      display: none;
    }

    .header-page-top-nav {
      margin-top: 80px;
      display: flex;
    }

    .navbar-toggler {
      position: absolute;
      top: 25px;
      left: 0;
      padding: 0;
    }

    .img-responsives {
      width: 130px;
      height: auto;
    }
  }

  .phone-header {
    .phone-top {
      .phone-top-x {
        font-size: 20px;

        .phone-top-img {
          width: 14px;
          height: 14px;
        }
      }
    }

    .phone-main {
      .phone-main-every {
        height: 46px;
        line-height: 46px;
        margin-bottom: 11px;

        a {
          font-size: 16px;
        }
      }
    }
  }

  .phone-lang {
    margin-top: 28px;

    .lang-icon {
      p {
        font-size: 16px;
      }
    }
  }
}

@media screen and (max-width: 767px) {
  .header-page-container {
    height: 60px;
    padding: 0 10px;

    .top-computer {
      display: none;
    }

    .top-phone {
      display: block;
    }

    .header-page-top-nav {
      position: relative;
    }

    .navbar-collapse {
      position: absolute;
      right: 25px;
      z-index: 999;
    }

    .header-page-top-img {
      margin-top: 0 !important;
      padding-top: 17px;
    }

    .language-style {
      display: none;
    }

    .header-page-top-nav {
      margin-top: 80px;
      display: flex;
    }

    .navbar-toggler {
      position: absolute;
      top: 20px;
      left: 0;
      padding: 0;
    }

    .img-responsives {
      width: 110px;
      height: auto;
    }
  }

  .phone-header {
    .phone-top {
      .phone-top-x {
        font-size: 20px;

        .phone-top-img {
          width: 14px;
          height: 14px;
        }
      }
    }

    .phone-main {
      .phone-main-every {
        height: 46px;
        line-height: 46px;
        margin-bottom: 11px;
        text-align: center;

        a {
          font-size: 15px;
          letter-spacing: 1;
        }
      }
    }
  }

  .phone-lang {
    margin-top: 18px;

    .lang-icon {
      p {
        padding-top: 3px;
        font-size: 13px;
      }
    }
  }
}
</style>
<style lang="scss">
#header-page {
  .navbar-light .navbar-toggler {
    color: #fff;
    border: none;
  }

  .navbar-light .navbar-toggler-icon {
    background-image: none;
  }
}
</style>
