<template>
  <div class="block">
    <el-carousel
      :height="bannerHeight + 'px'"
      :width="bannerWidth + 'px'"
      :autoplay="false"
      trigger="click"
      ref="carousel"
      @click.native="activeIndex"
    >
      <el-carousel-item v-for="(item, i) in centerList" :key="i" name="i">
        <button
          type="button"
          class="el-carousel__arro el-carousel__arrow--left"
          @click.stop="prevIndex"
        >
          <i class="el-icon-arrow-left"></i>
        </button>
        <button
          type="button"
          class="el-carousel__arro el-carousel__arrow--right"
          @click.stop="nextIndex"
        >
          <i class="el-icon-arrow-right"></i>
        </button>
        <img
          class="shufflingImg"
          v-if="item.type == 1"
          :src="item.url"
          alt=""
        />
        <video
          v-else
          class="shufflingVideo"
          :id="'v_' + Id + i"
          :src="item.url"
          ref="audio"
        ></video>
        <!-- <div class="lengthTime" v-if="item.type == 2">
          <span>{{ item.time}}</span>
        </div> -->
        <div class="imgControls" v-if="item.type == 2">
          <span v-if="currentPlay" @click.stop="currentState(0, i)"
            ><img src="../assets/imgs/home/close.png" alt=""
          /></span>
          <span v-if="currentPause" @click.stop="currentState(1, i)"
            ><img src="../assets/imgs/home/down.png" alt=""
          /></span>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
export default {
  props: ["centerlist", "width", "height", "id", "autoplay", "videoplay"],
  data() {
    return {
      centerList: [],
      autoPlay: "", //自动播放
      videoPlay: "", //是否可播放
      Id: "", //视频数组id
      currentVideoId: "", //当前video
      currentPlay: true, //当前播放
      currentPause: "", //当前暂停
      bannerHeight: "", //高度
      bannerWidth: "", //宽度
    };
  },
  mounted() {
    this.centerList = this.centerlist;
    this.bannerWidth = this.width;
    this.bannerHeight = this.height;
    this.Id = this.id;
    this.videoPlay = this.videoplay;
    this.centerList = [
      // {
      //   type: 2,
      //   url: require("../assets/imgs/home/banner.mp4"),
      //   time: 20,
      // },
      // {
      //   type: 1,
      //   url: require("../assets/imgs/home/banner01.png"),
      // },
    ];
  },
  methods: {
    //当前id
    activeIndex() {
      let activeIndex = this.$refs.carousel.activeIndex; //element ui内置方法获取点击轮播对id
      return activeIndex;
    },
    //上
    prevIndex() {
      this.activeIndex();
      this.currentPlay = true;
      this.currentPause = false;
      this.currentVideoId = document.getElementById(
        "v_" + this.Id + this.activeIndex()
      );
      this.currentVideoId == null ? "" : this.currentVideoId.pause();
      this.$refs.carousel.setActiveItem(this.activeIndex() - 1);
    },
    //下
    nextIndex() {
      this.activeIndex();
      this.currentPlay = true;
      this.currentPause = false;
      this.currentVideoId = document.getElementById(
        "v_" + this.Id + this.activeIndex()
      );
      this.currentVideoId == null ? "" : this.currentVideoId.pause();
      //this.currentVideoId.pause();
      this.$refs.carousel.setActiveItem(this.activeIndex() + 1);
    },
    currentState(numb, i) {
      if (numb == 0) {
        this.currentVideoId = document.getElementById(
          "v_" + this.Id + this.activeIndex()
        );
        if (this.videoPlay == false) {
          this.currentPlay = true;
          this.currentPause = false;
        } else {
          this.currentPlay = false;
          this.currentPause = true;
          this.currentVideoId.play();
        }
      } else {
        this.currentPlay = true;
        this.currentPause = false;
        this.currentVideoId = document.getElementById(
          "v_" + this.Id + this.activeIndex()
        );
        let allVideo = document.getElementsByTagName("video");
        // console.log('所有video---->',allVideo)
        this.currentVideoId !== null ? this.currentVideoId.pause() : "";
      }
    },
    //后台传过来的是秒，所以需要对时间进行处理，播放时间倒计时没做出来，欢迎大佬补充讨论
    lengthTime(s) {
      var day = Math.floor(s / (24 * 3600));
      var hour = Math.floor((s - day * 24 * 3600) / 3600);
      var minute = Math.floor((s - day * 24 * 3600 - hour * 3600) / 60);
      var second = s - day * 24 * 3600 - hour * 3600 - minute * 60;
      if (second < 10) {
        if (minute < 10) {
          return "0" + minute + ":" + second + "0";
        } else {
          return minute + ":" + second + "0";
        }
      } else {
        return minute + ":" + second;
      }
    },
  },
};
</script>
<style lang="scss" scope>
.shufflingImg {
  width: 100%;
  height: 100%;
}
.shufflingVideo {
  width: 100%;
  height: 100%;
}
.el-carousel__item {
  z-index: -4;
}
.el-carousel__indicators {
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}
.el-carousel__indicator {
  display: inline-block;
  padding: 12px 4px;
}
.el-carousel__indicators > .is-active > .el-carousel__button {
  width: 10px;
  height: 10px;
}
.el-carousel__button {
  width: 8px;
  height: 8px;
  background: rgba(254, 254, 254, 1);
  border-radius: 50%;
}
.el-carousel__arrow--left {
  left: -10px;
}
.el-carousel__arrow--right {
  right: -10px;
}
.el-carousel__arrow {
  display: none; //因为需要点击下一个停止播放，所以重新写了elemennt 的左右切换按钮
}
.el-carousel__arrow:hover {
  color: #929292;
  background-color: #ffffff;
}
.block:hover .el-carousel__arro {
  display: block;
}
.el-carousel__arro {
  display: none;
  border: 1px solid rgba(220, 220, 220, 1) !important;
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  transition: 0.3s;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  z-index: 996;
  transform: translateY(-50%);
  text-align: center;
  color: #bfbfbf;
  background-color: #ffffff;
  font-size: 15px;
  height: 30px;
  width: 30px;
}
.el-carousel__arro:hover {
  color: #929292;
  background-color: #ffffff;
}
.imgControls {
  z-index: 999999;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  right: 10px;
}
.lengthTime {
  z-index: 256;
  width: 36px;
  height: 15px;
  line-height: 15px;
  text-align: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(33, 33, 33, 1);
  opacity: 0.6;
  border-radius: 8px;
  span {
    font-size: 12px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
  }
}
</style>
