<template>
  <div class="home-page-container" id="home-page-container">
    <div class="header-page">
      <headerPage @langChange="langChange"></headerPage>
    </div>
    <div class="home-page-first">
      <el-carousel
        class="home-top-banner01"
        :height="bannerHeight + 'px'"
        :interval="6000"
        arrow="never"
        ref="carousel"
      >
        <el-carousel-item>
          <div>
            <img
              :src="
                langType == 'zh-CN'
                  ? banner301
                  : langType == 'zh-TW'
                  ? banner302
                  : banner303
              "
              class="bannerImg pc-img"
            />
            <img
              :src="
                langType == 'zh-CN'
                  ? app301
                  : langType == 'zh-TW'
                  ? app302
                  : app303
              "
              class="bannerImg app-img"
            />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div>
            <img
              :src="
                langType == 'zh-CN'
                  ? banner201
                  : langType == 'zh-TW'
                  ? banner202
                  : banner203
              "
              class="bannerImg pc-img"
            />
            <img
              :src="
                langType == 'zh-CN'
                  ? app201
                  : langType == 'zh-TW'
                  ? app202
                  : app203
              "
              class="bannerImg app-img"
            />
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div>
            <img
              :src="
                langType == 'zh-CN'
                  ? banner101
                  : langType == 'zh-TW'
                  ? banner102
                  : banner103
              "
              class="bannerImg pc-img banner-01"
            />
            <img
              :src="
                langType == 'zh-CN'
                  ? app101
                  : langType == 'zh-TW'
                  ? app102
                  : app103
              "
              class="bannerImg app-img banner-01"
            />
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="home-page-fourth">
      <div class="fourth-phone-title" style="margin-bottom: 15px">
        <img
          :src="
            langType == 'zh-CN'
              ? store03
              : langType == 'zh-TW'
              ? store02
              : langType == 'en-US'
              ? store01
              : store01
          "
        />
      </div>

      <div class="pc-main">
        <div class="fourth-main-pc">
          <div class="main-every">
            <img
              :src="
                langType == 'zh-CN'
                  ? pcStoreLonDon01
                  : langType == 'zh-TW'
                  ? pcStoreLonDon02
                  : langType == 'en-US'
                  ? pcStoreLonDon01
                  : pcStoreLonDon01
              "
              @click="checkStore(1)"
            />
          </div>
          <div class="main-every">
            <img
              :src="
                langType == 'zh-CN'
                  ? pcStoreHongKong01
                  : langType == 'zh-TW'
                  ? pcStoreHongKong02
                  : langType == 'en-US'
                  ? pcStoreHongKong01
                  : pcStoreHongKong01
              "
              @click="checkStore(2)"
            />
          </div>
          <div class="main-every">
            <img
              :src="
                langType == 'zh-CN'
                  ? pcStore01
                  : langType == 'zh-TW'
                  ? pcStore02
                  : langType == 'en-US'
                  ? pcStore01
                  : pcStore01
              "
              @click="checkStore(3)"
            />
          </div>
          <div class="main-every" style="margin-right: 0">
            <img
              :src="
                langType == 'zh-CN'
                  ? pcStorePH01
                  : langType == 'zh-TW'
                  ? pcStorePH02
                  : langType == 'en-US'
                  ? pcStorePH01
                  : pcStorePH01
              "
              @click="checkStore(4)"
            />
          </div>
        </div>
      </div>
      <div class="app-main">
        <div class="fourth-main-app">
          <div class="main-every">
            <img
              :src="
                langType == 'zh-CN'
                  ? appStoreLonDon01
                  : langType == 'zh-TW'
                  ? appStoreLonDon02
                  : langType == 'en-US'
                  ? appStoreLonDon01
                  : appStoreLonDon01
              "
              @click="checkStore(1)"
            />
          </div>
          <div class="main-every">
            <img
              :src="
                langType == 'zh-CN'
                  ? appStoreHongKong01
                  : langType == 'zh-TW'
                  ? appStoreHongKong02
                  : langType == 'en-US'
                  ? appStoreHongKong01
                  : appStoreHongKong01
              "
              @click="checkStore(2)"
            />
          </div>
          <div class="main-every">
            <img
              :src="
                langType == 'zh-CN'
                  ? appStore01
                  : langType == 'zh-TW'
                  ? appStore02
                  : langType == 'en-US'
                  ? appStore01
                  : appStore01
              "
              @click="checkStore(3)"
            />
          </div>
          <div class="main-every" style="margin-right: 0">
            <img
              :src="
                langType == 'zh-CN'
                  ? appStorePH01
                  : langType == 'zh-TW'
                  ? appStorePH02
                  : langType == 'en-US'
                  ? appStorePH01
                  : appStorePH01
              "
              @click="checkStore(4)"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="home-page-second">
      <div class="second-title">
        <img
          :src="
            langType == 'zh-CN'
              ? treat03
              : langType == 'zh-TW'
              ? treat02
              : langType == 'en-US'
              ? treat01
              : treat04
          "
        />
      </div>
      <div class="second-phone-title">
        <img
          :src="
            langType == 'zh-CN'
              ? treat03
              : langType == 'zh-TW'
              ? treat02
              : langType == 'en-US'
              ? treat01
              : treat04
          "
        />
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
            <img src="../assets/imgs/home/110.png" @click="listJump(11)" />
          </div>
          <div>
            <p class="every-title01">
              {{ $t("localization.skinProblemFont") }}
            </p>
            <div class="every-title12" v-if="langType !== 'en-US'"></div>
          </div>
        </div>
        <div class="main-every">
          <!--  @click="listJump(12)" -->
          <div>
            <img src="../assets/imgs/home/120.png" />
          </div>
          <div>
            <p class="every-title01">
              {{ $t("localization.faceAndBodyFont") }}
            </p>
            <div class="every-title13" v-if="langType !== 'en-US'"></div>
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
          <div style="position: relative">
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
        <div class="main-every" style="margin: 0"></div>
        <div class="main-every" style="margin: 0"></div>
        <div class="main-every" style="margin: 0"></div>
      </div>
    </div>
    <div class="home-page-third">
      <div class="second-title">
        <img
          :src="
            langType == 'zh-CN'
              ? brand03
              : langType == 'zh-TW'
              ? brand02
              : langType == 'en-US'
              ? brand01
              : brand04
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
              : brand04
          "
        />
      </div>
      <div class="third-main">
        <div class="list-computer-big">
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(59)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/001.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont01") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(64)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/002.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont02") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(61)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/003.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont03") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(58)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/004.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont04") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(65)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/005.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont05") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(67)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/006.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont06") }}
              </p>
            </div>
          </div>
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(69)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/007.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont07") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(70)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/008.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont08") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(71)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/009.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont09") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(72)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/010.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont10") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(73)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/011.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont11") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(89)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/012.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont12") }}
              </p>
            </div>
          </div>
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(75)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/013.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont13") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(77)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/014.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont14") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(83)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/015.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont15") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(60)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/016.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont16") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(92)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/017.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont17") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(62)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/018.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont18") }}
              </p>
            </div>
          </div>
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(116)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/019.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont19") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(117)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/020.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont20") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(115)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/021.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont21") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(118)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/022.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont22") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
                cursor: 'default',
              }"
            >
              <div
                class="every-img-div"
                style="border: none; cursor: default"
              ></div>
              <p class="every-font"></p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
                cursor: 'default',
              }"
            >
              <div
                class="every-img-div"
                style="border: none; cursor: default"
              ></div>
              <p class="every-font"></p>
            </div>
          </div>
        </div>
        <div class="list-computer">
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(59)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/001.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont01") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(64)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/002.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont02") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(61)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/003.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont03") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(58)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/004.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont04") }}
              </p>
            </div>
          </div>
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(65)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/005.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont05") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(67)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/006.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont06") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(69)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/007.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont07") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(70)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/008.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont08") }}
              </p>
            </div>
          </div>
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(71)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/009.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont09") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(72)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/010.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont10") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(73)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/011.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont11") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(89)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/012.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont12") }}
              </p>
            </div>
          </div>
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(75)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/013.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont13") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(77)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/014.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont14") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(83)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/015.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont15") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(60)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/016.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont16") }}
              </p>
            </div>
          </div>
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(92)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/017.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont17") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(62)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/018.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont18") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(116)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/019.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont19") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(117)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/020.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont20") }}
              </p>
            </div>
          </div>
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(115)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/021.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont21") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(118)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/022.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont22") }}
              </p>
            </div>
            <div
              class="list-main-every"
              style="background-color: transparent"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
                cursor: 'default',
              }"
            >
              <div
                class="every-img-div"
                style="border: none; cursor: default"
              ></div>
              <p
                class="every-font"
                v-if="langType !== 'en-US' && langType !== 'en-KH'"
              ></p>
            </div>
            <div
              class="list-main-every"
              style="background-color: transparent"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
                cursor: 'default',
              }"
            >
              <div
                class="every-img-div"
                style="border: none; cursor: default"
              ></div>
              <p
                class="every-font"
                v-if="langType !== 'en-US' && langType !== 'en-KH'"
              ></p>
            </div>
          </div>
        </div>
        <div class="list-phone">
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(59)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/001.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont01") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(64)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/002.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont02") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(61)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/003.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont03") }}
              </p>
            </div>
          </div>
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(58)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/004.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont04") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(65)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/005.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont05") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(67)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/006.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont06") }}
              </p>
            </div>
          </div>
          <div class="brand-list-main">
            <div class="list-main-every" @click="checkBrandDetails(69)">
              <div class="every-img-div">
                <img src="../assets/imgs/logos/007.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont07") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(70)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/008.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont08") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(71)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/009.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont09") }}
              </p>
            </div>
          </div>
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(72)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/010.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont10") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(73)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/011.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont11") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(89)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/012.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont12") }}
              </p>
            </div>
          </div>
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(75)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/013.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont13") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(77)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/014.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont14") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(83)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/015.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont15") }}
              </p>
            </div>
          </div>
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(60)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/016.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont16") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(92)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/017.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont17") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(62)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/018.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont18") }}
              </p>
            </div>
          </div>
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(116)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/019.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont19") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(117)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/020.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont20") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(115)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/021.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont21") }}
              </p>
            </div>
          </div>
          <div class="brand-list-main">
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
              @click="checkBrandDetails(118)"
            >
              <div class="every-img-div">
                <img src="../assets/imgs/logos/022.png" class="every-img" />
              </div>
              <p class="every-font">
                {{ $t("localization.brandFont22") }}
              </p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
            >
              <div class="every-img-div" style="border: none"></div>
              <p class="every-font"></p>
            </div>
            <div
              class="list-main-every"
              :style="{
                flexDirection: langType !== 'en-US' ? 'column' : 'unset',
              }"
            >
              <div class="every-img-div" style="border: none"></div>
              <p class="every-font"></p>
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
  inject: ["reload"],
  data() {
    return {
      bannerHeight: "",
      langType: localStorage.getItem("DefaultLanguage"),

      pcStoreLonDon01: require("../assets/imgs/home/store01.png"),
      pcStoreLonDon02: require("../assets/imgs/home/storetw01.png"),
      pcStoreLonDon03: require("../assets/imgs/home/storekh01.png"),

      pcStoreHongKong01: require("../assets/imgs/home/store02.png"),
      pcStoreHongKong02: require("../assets/imgs/home/storetw02.png"),
      pcStoreHongKong03: require("../assets/imgs/home/storekh02.png"),

      pcStore01: require("../assets/imgs/home/store03.png"),
      pcStore02: require("../assets/imgs/home/storetw03.png"),
      pcStore03: require("../assets/imgs/home/storekh03.png"),

      pcStorePH01: require("../assets/imgs/home/store04.png"),
      pcStorePH02: require("../assets/imgs/home/storetw04.png"),
      pcStorePH03: require("../assets/imgs/home/storekh04.png"),

      appStoreLonDon01: require("../assets/imgs/home/store001.png"),
      appStoreLonDon02: require("../assets/imgs/home/storetw001.png"),
      appStoreLonDon03: require("../assets/imgs/home/storekh001.png"),

      appStoreHongKong01: require("../assets/imgs/home/store002.png"),
      appStoreHongKong02: require("../assets/imgs/home/storetw002.png"),
      appStoreHongKong03: require("../assets/imgs/home/storekh002.png"),

      appStore01: require("../assets/imgs/home/store003.png"),
      appStore02: require("../assets/imgs/home/storetw003.png"),
      appStore03: require("../assets/imgs/home/storekh003.png"),

      appStorePH01: require("../assets/imgs/home/store004.png"),
      appStorePH02: require("../assets/imgs/home/storetw004.png"),
      appStorePH03: require("../assets/imgs/home/storekh004.png"),

      banner101: require("../assets/imgs/home/banner@101.png"),
      banner102: require("../assets/imgs/home/banner@102.png"),
      banner103: require("../assets/imgs/home/banner@103.png"),

      banner201: require("../assets/imgs/home/banner@201.png"),
      banner202: require("../assets/imgs/home/banner@202.png"),
      banner203: require("../assets/imgs/home/banner@203.png"),

      banner301: require("../assets/imgs/home/banner@301.png"),
      banner302: require("../assets/imgs/home/banner@302.png"),
      banner303: require("../assets/imgs/home/banner@303.png"),

      app101: require("../assets/imgs/home/app101.png"),
      app102: require("../assets/imgs/home/app102.png"),
      app103: require("../assets/imgs/home/app103.png"),

      app201: require("../assets/imgs/home/app201.png"),
      app202: require("../assets/imgs/home/app202.png"),
      app203: require("../assets/imgs/home/app203.png"),

      app301: require("../assets/imgs/home/app301.png"),
      app302: require("../assets/imgs/home/app302.png"),
      app303: require("../assets/imgs/home/app303.png"),

      only01: require("../assets/imgs/home/only.png"),
      only02: require("../assets/imgs/home/only02.png"),
      only03: require("../assets/imgs/home/only03.png"),

      store01: require("../assets/imgs/home/store.png"),
      store02: require("../assets/imgs/home/storeTitle02.png"),
      store03: require("../assets/imgs/home/storeTitle03.png"),
      store04: require("../assets/imgs/home/storeTitle04.png"),

      treat01: require("../assets/imgs/home/treat.png"),
      treat02: require("../assets/imgs/home/treat02.png"),
      treat03: require("../assets/imgs/home/treat03.png"),
      treat04: require("../assets/imgs/home/treat04.png"),

      brand01: require("../assets/imgs/home/brand.png"),
      brand02: require("../assets/imgs/home/brand02.png"),
      brand03: require("../assets/imgs/home/brand03.png"),
      brand04: require("../assets/imgs/home/brand04.png"),
    };
  },
  mounted() {
    this.setSize();
    // 窗口大小发生改变时,调用一次
    window.onresize = () => {
      this.setSize();
    };

    this.slideBanner();
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
      this.backTop();
    },
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
    // 手指左右滑动轮播
    slideBanner() {
      //选中item的盒子
      let box = document.querySelector(".el-carousel__container");
      //手指起点X坐标
      let startPoint = 0;
      //手指滑动重点X坐标
      let stopPoint = 0;

      //重置坐标
      let resetPoint = () => {
        startPoint = 0;
        stopPoint = 0;
      };

      //手指按下
      box.addEventListener("touchstart", (e) => {
        //手指按下的时候停止自动轮播
        this.stopAuto();
        //手指点击位置的X坐标
        startPoint = e.changedTouches[0].pageX;
      });
      //手指滑动
      box.addEventListener("touchmove", (e) => {
        //手指滑动后终点位置X的坐标
        stopPoint = e.changedTouches[0].pageX;
      });
      //当手指抬起的时候，判断图片滚动离左右的距离
      box.addEventListener("touchend", (e) => {
        console.log(e);
        console.log("1：" + startPoint);
        console.log("2：" + stopPoint);
        if (stopPoint == 0 || startPoint - stopPoint == 0) {
          resetPoint();
          return;
        }
        if (startPoint - stopPoint > 0) {
          resetPoint();
          console.log(this.$refs.carousel);
          this.$refs.carousel.next();
          return;
        }
        if (startPoint - stopPoint < 0) {
          resetPoint();
          console.log(this.$refs.carousel);
          this.$refs.carousel.prev();
          return;
        }
      });
    },
    stopAuto() {},
    // 品牌详情
    checkBrandDetails(id) {
      this.$router.push({
        path: "/details",
        query: {
          select: 0,
          id: id,
        },
      });
      this.backTop();
    },
    setSize() {
      // 通过图片宽度计算高度
      this.$nextTick(() => {
        if (document.body.clientWidth > 1200) {
          this.bannerHeight = (document.body.clientWidth * 1000) / 1920;
        } else if (
          document.body.clientWidth < 1200 &&
          document.body.clientWidth > 768
        ) {
          this.bannerHeight = (document.body.clientWidth * 1000) / 1920;
        } else {
          this.bannerHeight = (document.body.clientWidth * 420) / 750;
        }

        // document.getElementsByClassName("banner-01")[0].clientHeight;
      });
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
.vjs-custom-skin > .video-js .vjs-control-bar {
  display: none;
}

.vjs-tech {
  pointer-events: none;
}

.home-page-container {
  position: relative;
  z-index: 0;

  .home-top-banner01 {
    .bannerImg {
      width: 100%;
      height: inherit;
      object-fit: cover;
    }

    .banner-01 {
      width: 100%;
      height: inherit;
      object-fit: cover;
    }

    .multimedia {
      width: 100%;
    }
  }
}

.banner01-font,
.banner01-font-en,
.banner01-font-kh {
  position: absolute;
  color: #2d2d2d;
  font-family: "方正姚体";
}

.home-page-fourth {
  .fourth-phone-title {
    text-align: right;
  }

  .fourth-main-pc,
  .fourth-main-app {
    display: flex;
    justify-content: space-between;

    .main-every {
      cursor: pointer;
    }
  }
}

.home-page-second {
  width: 100%;
  background-color: #fff;

  .second-title {
    display: flex;
    justify-content: flex-start;
  }

  .second-main {
    .main-every {
      img {
        cursor: pointer;
      }
    }
  }
}

.home-page-third {
  width: 100%;
  background-color: #fff;

  .second-title {
    display: flex;
    justify-content: flex-start;
  }

  .third-main {
    .brand-list-main {
      .list-main-every {
        .every-img-div {
          cursor: pointer;
          .every-img {
            width: 60% !important;
            height: 70% !important;
          }
        }
      }
    }
  }
}

.main-nine {
  display: none;
}

@media screen and (min-width: 1781px) {
  .header-page {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .home-page-first {
    .banner01-font {
      top: 33%;
      right: 150px;

      .font-top {
        font-size: 100px;
      }

      .font-bottom {
        margin-top: 36px;
        font-size: 24px;
      }
    }

    .banner01-font-en {
      top: 35%;
      right: 150px;

      .font-top-english {
        text-align: left;
        font-size: 80px;
      }
    }

    .banner01-font-kh {
      top: 35%;
      right: 150px;

      .font-top-kh {
        text-align: left;
        font-size: 50px;
      }

      .font-bottom-kh {
        margin-top: 36px;
        font-size: 24px;
      }
    }
  }

  .second-title {
    img {
      width: 325px;
      height: 98px;
      object-fit: cover;
    }
  }

  .home-page-fourth {
    width: 80%;
    margin: 0 auto;

    .fourth-phone-title {
      margin-top: 80px;

      img {
        width: 325px;
        height: 98px;
        object-fit: cover;
      }
    }

    .app-main {
      display: none;
    }

    .main-every {
      margin-right: 32px;

      img {
        width: 220px;
      }
    }
  }

  .home-page-second {
    .second-title {
      width: 80%;
      margin: 80px auto 15px;
    }

    .second-main {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .main-every {
        // width: 327px;
        // width: 32%;
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
          width: 254px;
          height: 26px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font01.png") no-repeat;
          background-size: 100%;
        }

        .every-title12 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font11.png") no-repeat;
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

  .home-page-third {
    .second-title {
      width: 80%;
      margin: 50px auto 15px;
    }

    .third-main {
      .list-computer-big {
        width: 80%;
        margin: 0 auto;

        .brand-list-main {
          display: flex;
          justify-content: space-between;

          .list-main-every {
            width: 16.66666%;

            .every-img-div {
              width: 216px;
              height: 100px;
              margin: 0 auto;
              margin-bottom: 20px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              border: 1px solid #bebfc2;
              text-align: center;

              .every-img {
                width: 65%;
                height: 65%;
                margin: 0 auto;
              }
            }

            .every-font {
              margin-bottom: 20px;
              font-size: 20px;
              color: #837a8b;
              letter-spacing: 2;
            }
          }
        }
      }

      .list-computer {
        width: 65%;
        margin: 0 auto;
        display: none;

        .brand-list-main {
          display: flex;
          justify-content: space-between;

          .list-main-every {
            width: 24%;

            .every-img-div {
              width: 216px;
              height: 100px;
              margin: 0 auto;
              margin-bottom: 20px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              border: 1px solid #bebfc2;
              text-align: center;

              .every-img {
                width: 90%;
                height: 90%;
                margin: 0 auto;
              }
            }

            .every-font {
              margin-bottom: 20px;
              font-size: 20px;
              color: #837a8b;
              letter-spacing: 2;
            }
          }
        }
      }

      .list-phone {
        display: none;
      }
    }
  }

  .pc-img {
    display: block;
  }

  .app-img {
    display: none;
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

  .home-page-first {
    .banner01-font {
      top: 33%;
      right: 6%;

      .font-top {
        font-size: 95px;
      }

      .font-bottom {
        margin-top: 36px;
        font-size: 24px;
      }
    }

    .banner01-font-en {
      top: 37%;
      right: 10%;

      .font-top-english {
        text-align: left;
        font-size: 75px;
      }
    }

    .banner01-font-kh {
      top: 37%;
      right: 10%;

      .font-top-kh {
        text-align: left;
        font-size: 45px;
      }

      .font-bottom-kh {
        margin-top: 36px;
        font-size: 24px;
      }
    }
  }

  .second-title {
    img {
      width: 325px;
      height: 98px;
      object-fit: cover;
    }
  }
  .home-page-fourth {
    width: 80%;
    margin: 0 auto;

    .fourth-phone-title {
      margin-top: 80px;

      img {
        width: 325px;
        height: 98px;
        object-fit: cover;
      }
    }
    .app-main {
      display: none;
    }
    .main-every {
      margin-right: 32px;

      img {
        width: 220px;
      }
    }
  }

  .home-page-second {
    .second-title {
      width: 80%;
      margin: 80px auto 15px;
    }

    .second-main {
      width: 80%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      .main-every {
        // width: 327px;
        // width: 32%;
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
          width: 254px;
          height: 26px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font01.png") no-repeat;
          background-size: 100%;
        }

        .every-title12 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font11.png") no-repeat;
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

  .home-page-third {
    .second-title {
      width: 80%;
      margin: 50px auto 15px;
    }

    .third-main {
      .list-computer-big {
        width: 80%;
        margin: 0 auto;

        .brand-list-main {
          display: flex;
          justify-content: space-between;

          .list-main-every {
            width: 16%;

            .every-img-div {
              // width: 216px;
              width: 100%;
              height: 100px;
              margin: 0 auto;
              margin-bottom: 20px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              border: 1px solid #bebfc2;
              text-align: center;

              .every-img {
                width: 65%;
                height: 65%;
                margin: 0 auto;
              }
            }

            .every-font {
              margin-bottom: 20px;
              font-size: 20px;
              color: #837a8b;
              letter-spacing: 2;
            }
          }
        }
      }

      .list-computer {
        width: 75%;
        margin: 0 auto;
        display: none;

        .brand-list-main {
          display: flex;
          justify-content: space-between;

          .list-main-every {
            width: 24%;

            .every-img-div {
              width: 216px;
              height: 100px;
              margin: 0 auto;
              margin-bottom: 20px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              border: 1px solid #bebfc2;
              text-align: center;

              .every-img {
                width: 90%;
                height: 90%;
                margin: 0 auto;
              }
            }

            .every-font {
              margin-bottom: 20px;
              font-size: 20px;
              color: #837a8b;
              letter-spacing: 2;
            }
          }
        }
      }

      .list-phone {
        display: none;
      }
    }
  }

  .pc-img {
    display: block;
  }

  .app-img {
    display: none;
  }

  .second-phone-title {
    display: none;
  }
}

@media screen and (min-width: 1301px) and (max-width: 1500px) {
  .header-page {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .home-page-first {
    .banner01-font {
      top: 36%;
      right: 70px;

      .font-top {
        font-size: 80px;
      }

      .font-bottom {
        margin-top: 36px;
        font-size: 24px;
      }
    }

    .banner01-font-en {
      top: 37%;
      right: 10%;

      .font-top-english {
        text-align: left;
        font-size: 65px;
      }
    }

    .banner01-font-kh {
      top: 37%;
      right: 6%;

      .font-top-kh {
        text-align: left;
        font-size: 40px;
      }

      .font-bottom-kh {
        margin-top: 36px;
        font-size: 24px;
      }
    }
  }

  .second-title {
    img {
      width: 325px;
      height: 98px;
      object-fit: cover;
    }
  }
  .home-page-fourth {
    width: 85%;
    margin: 0 auto;

    .fourth-phone-title {
      margin-top: 80px;

      img {
        width: 325px;
        height: 98px;
        object-fit: cover;
      }
    }
    .app-main {
      display: none;
    }
    .main-every {
      margin-right: 32px;

      img {
        width: 220px;
      }
    }
  }

  .home-page-second {
    .second-title {
      width: 85%;
      margin: 80px auto 15px;
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
          width: 254px;
          height: 26px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font01.png") no-repeat;
          background-size: 100%;
        }

        .every-title12 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font11.png") no-repeat;
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

  .home-page-third {
    .second-title {
      width: 85%;
      margin: 50px auto 15px;
    }

    .third-main {
      .list-computer-big {
        display: none;
      }

      .list-computer {
        width: 85%;
        margin: 0 auto;

        .brand-list-main {
          display: flex;
          justify-content: space-between;

          .list-main-every {
            width: 24%;

            .every-img-div {
              width: 216px;
              height: 100px;
              margin: 0 auto;
              margin-bottom: 20px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              border: 1px solid #bebfc2;
              text-align: center;

              .every-img {
                width: 90%;
                height: 90%;
                margin: 0 auto;
              }
            }

            .every-font {
              margin-bottom: 20px;
              font-size: 20px;
              color: #837a8b;
              letter-spacing: 2;
            }
          }
        }
      }

      .list-phone {
        display: none;
      }
    }
  }

  .pc-img {
    display: block;
  }

  .app-img {
    display: none;
  }

  .second-phone-title {
    display: none;
  }
}

@media screen and (min-width: 1200px) and (max-width: 1300px) {
  .header-page {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
  }

  .home-page-first {
    .banner01-font {
      top: 36%;
      right: 70px;

      .font-top {
        font-size: 80px;
      }

      .font-bottom {
        margin-top: 36px;
        font-size: 24px;
      }
    }

    .banner01-font-en {
      top: 37%;
      right: 10%;

      .font-top-english {
        text-align: left;
        font-size: 65px;
      }
    }

    .banner01-font-kh {
      top: 37%;
      right: 6%;

      .font-top-kh {
        text-align: left;
        font-size: 40px;
      }

      .font-bottom-kh {
        margin-top: 36px;
        font-size: 24px;
      }
    }
  }

  .second-title {
    img {
      width: 325px;
      height: 98px;
      object-fit: cover;
    }
  }
  .home-page-fourth {
    width: 85%;
    margin: 0 auto;

    .fourth-phone-title {
      margin-top: 80px;

      img {
        width: 325px;
        height: 98px;
        object-fit: cover;
      }
    }
    .app-main {
      display: none;
    }
    .main-every {
      margin-right: 32px;

      img {
        width: 220px;
      }
    }
  }

  .home-page-second {
    .second-title {
      width: 85%;
      margin: 80px auto 15px;
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
          width: 254px;
          height: 26px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font01.png") no-repeat;
          background-size: 100%;
        }

        .every-title12 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font11.png") no-repeat;
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

  .home-page-third {
    .second-title {
      width: 85%;
      margin: 50px auto 15px;
    }

    .third-main {
      .list-computer-big {
        display: none;
      }

      .list-computer {
        width: 85%;
        margin: 0 auto;

        .brand-list-main {
          display: flex;
          justify-content: space-between;

          .list-main-every {
            width: 24%;

            .every-img-div {
              width: 216px;
              height: 100px;
              margin: 0 auto;
              margin-bottom: 20px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              border: 1px solid #bebfc2;
              text-align: center;

              .every-img {
                width: 90%;
                height: 90%;
                margin: 0 auto;
              }
            }

            .every-font {
              margin-bottom: 20px;
              font-size: 20px;
              color: #837a8b;
              letter-spacing: 2;
            }
          }
        }
      }

      .list-phone {
        display: none;
      }
    }
  }

  .pc-img {
    display: block;
  }

  .app-img {
    display: none;
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

  .home-page-first {
    .banner01-font {
      top: 35%;
      right: 60px;

      .font-top {
        font-size: 75px;
      }

      .font-bottom {
        margin-top: 20px;
        font-size: 24px;
      }
    }

    .banner01-font-en {
      top: 37%;
      right: 8%;

      .font-top-english {
        text-align: left;
        font-size: 50px;
      }
    }

    .banner01-font-kh {
      top: 37%;
      right: 6%;

      .font-top-kh {
        text-align: left;
        font-size: 35px;
      }

      .font-bottom-kh {
        margin-top: 20px;
        font-size: 24px;
      }
    }
  }

  .second-title {
    img {
      width: 325px;
      height: 98px;
      object-fit: cover;
    }
  }

  .home-page-fourth {
    width: 85%;
    margin: 0 auto;

    .fourth-phone-title {
      margin-top: 60px;

      img {
        width: 325px;
        height: 98px;
        object-fit: cover;
      }
    }
    .app-main {
      display: none;
    }
    .main-every {
      margin-right: 32px;

      img {
        width: 190px;
      }
    }
  }

  .home-page-second {
    .second-title {
      width: 85%;
      margin: 60px auto 15px;
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
          width: 254px;
          height: 26px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font01.png") no-repeat;
          background-size: 100%;
        }

        .every-title12 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font11.png") no-repeat;
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

  .home-page-third {
    .second-title {
      width: 85%;
      margin: 30px auto 15px;
    }

    .third-main {
      .list-computer-big {
        display: none;
      }

      .list-computer {
        width: 85%;
        margin: 0 auto;

        .brand-list-main {
          display: flex;
          justify-content: space-between;

          .list-main-every {
            width: 24%;

            .every-img-div {
              width: 100%;
              height: 100px;
              margin: 0 auto;
              margin-bottom: 20px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              border: 1px solid #bebfc2;
              text-align: center;

              .every-img {
                width: 90%;
                height: 90%;
                margin: 0 auto;
              }
            }

            .every-font {
              margin-bottom: 20px;
              font-size: 20px;
              color: #837a8b;
              letter-spacing: 2;
            }
          }
        }
      }

      .list-phone {
        display: none;
      }
    }
  }

  .pc-img {
    display: block;
  }

  .app-img {
    display: none;
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

  .home-page-first {
    margin-top: 80px;

    .banner01-font {
      top: 35%;
      right: 6%;

      .font-top {
        font-size: 60px;
      }

      .font-bottom {
        margin-top: 0;
        font-size: 23px;
      }
    }

    .banner01-font-en {
      top: 40%;
      right: 8%;

      .font-top-english {
        text-align: left;
        font-size: 37px;
      }
    }

    .banner01-font-kh {
      top: 40%;
      right: 6%;

      .font-top-kh {
        text-align: left;
        font-size: 30px;
      }

      .font-bottom-kh {
        margin-top: 0px;
        font-size: 23px;
      }
    }
  }

  .second-title {
    img {
      width: 280px;
      height: 98px;
      object-fit: cover;
    }
  }

  .home-page-fourth {
    width: 85%;
    margin: 0 auto;

    .fourth-phone-title {
      margin-top: 40px;

      img {
        width: 280px;
        height: 98px;
        object-fit: cover;
      }
    }
    .app-main {
      display: none;
    }
    .fourth-main-pc {
      padding: 0 15px;

      .main-every {
        margin-right: 11px;

        img {
          width: 100%;
          // height: auto;
          // object-fit: cover;
        }
      }
    }
  }

  .home-page-second {
    .second-title {
      width: 85%;
      margin: 30px auto 15px;
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
          width: 254px;
          height: 26px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font01.png") no-repeat;
          background-size: 100%;
        }

        .every-title12 {
          width: 200px;
          height: 25px;
          margin: 0 auto;
          // margin-top: 10px;
          background: url("../assets/imgs/home/font11.png") no-repeat;
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

  .home-page-third {
    .second-title {
      width: 85%;
      margin: 0 auto 15px;
    }

    .third-main {
      .list-computer-big {
        display: none;
      }

      .list-computer {
        width: 85%;
        margin: 0 auto;

        .brand-list-main {
          display: flex;
          justify-content: space-between;

          .list-main-every {
            width: 24%;

            .every-img-div {
              width: 100%;
              height: 100px;
              margin: 0 auto;
              margin-bottom: 20px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              border: 1px solid #bebfc2;
              text-align: center;

              .every-img {
                width: 90%;
                height: 90%;
                margin: 0 auto;
              }
            }

            .every-font {
              margin-bottom: 20px;
              font-size: 20px;
              color: #837a8b;
              letter-spacing: 2;
            }
          }
        }
      }

      .list-phone {
        display: none;
      }
    }
  }

  .pc-img {
    display: block;
  }

  .app-img {
    display: none;
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

  .home-page-first {
    margin-top: 60px;

    .banner01-font {
      top: 37%;
      right: 5%;

      .font-top {
        font-size: 20px;
      }

      .font-bottom {
        margin-top: 5px;
        font-size: 13px;
      }
    }

    .banner01-font-en {
      top: 45%;
      right: 8%;

      .font-top-english {
        text-align: left;
        font-size: 18px;
      }
    }

    .banner01-font-kh {
      top: 45%;
      right: 6%;

      .font-top-kh {
        text-align: left;
        font-size: 16px;
      }

      .font-bottom-kh {
        margin-top: 5px;
        font-size: 13px;
      }
    }
  }

  .second-title {
    img {
      width: 280px;
      height: 98px;
      object-fit: cover;
    }
  }

  .home-page-fourth {
    .fourth-phone-title {
      margin-top: 40px;
      text-align: right;

      img {
        width: 280px;
        height: 98px;
        object-fit: cover;
      }
    }

    .app-main {
      display: block;
      padding: 0 15px;

      .main-every {
        margin-right: 11px;

        img {
          width: 100%;
          // height: auto;
          // object-fit: cover;
        }
      }
    }

    .pc-main {
      display: none;
    }
  }

  .second-title {
    img {
      width: 280px;
      height: 98px;
      object-fit: cover;
    }
  }
  .home-page-second {
    .second-phone-title {
      margin: 30px auto 15px;
      text-align: left;

      img {
        width: 280px;
        height: 98px;
        object-fit: cover;
      }
    }

    .second-title {
      display: none;
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
          // width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/Whitening&PigmentRemoval@2x.png")
            no-repeat;
          background-size: 100% auto;
        }

        .every-title12 {
          width: 85%;
          height: 17px;
          margin: 0 auto;
          margin-top: 3px;
          background: url("../assets/imgs/font/skinProblem.png") no-repeat;
          background-size: 100%;
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
        border: 1px solid #bebfc2;
        color: #837a8b;
        font-size: 12px;
      }
    }
  }

  .home-page-third {
    .second-phone-title {
      margin: 15px auto 15px;
      text-align: left;

      img {
        width: 280px;
        height: 98px;
        object-fit: cover;
      }
    }

    .second-title {
      display: none;
    }

    .third-main {
      .list-computer-big {
        display: none;
      }

      .list-computer {
        display: none;
      }

      .list-phone {
        width: 95%;
        margin: 0 auto;
        display: block;

        .brand-list-main {
          display: flex;
          justify-content: space-between;

          .list-main-every {
            width: 30%;
            margin: 0 auto;

            .every-img-div {
              width: 100%;
              height: 60px;
              margin: 0 auto;
              margin-bottom: 5px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              border: 1px solid #bebfc2;
              text-align: center;

              .every-img {
                width: 65%;
                height: 65%;
                margin: 0 auto;
              }
            }

            .every-font {
              margin-bottom: 10px;
              font-size: 13px;
              color: #837a8b;
              letter-spacing: 2;
            }
          }
        }
      }
    }
  }

  .pc-img {
    display: none;
  }

  .app-img {
    display: block;
  }
}

.open {
  display: block;
}

.close {
  display: none;
}
</style>
<style lang="scss">
@media screen and (min-width: 767px) {
  #home-page-container {
    .el-carousel__button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
    }
  }
}

@media screen and (max-width: 766px) {
  #home-page-container {
    .el-carousel__button {
      width: 6px;
      height: 6px;
      border-radius: 50%;
    }
  }
}
</style>
