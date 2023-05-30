<template>
  <div class="banner-body">
    <div class="banner-popover">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, index) in bannerList" :key="index">
            <div class="banner-first" v-if="item.id  === '1'" >
              <img :src="item.img" alt="">
              <div class="register-btns">
                <a :href="item.url1" _blank>安全注册网址通道一</a>
                <a :href="item.url2" _blank>安全注册网址通道二</a>
                <a :href="item.url3" _blank>安全注册网址通道三</a>
              </div>
            </div>
            <img v-else  :src="item.img" alt="">
          </van-swipe-item>
        </van-swipe>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';
export default {
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
  },
  data() {
    return {
      activeId: '1',
      activeTimer: null,
      isMobile: true,
      bannerList: [
        {
          id: '1',
          name: '福利彩票，百万大奖',
          isEditor: true,
          img: require('../../assets/banner/register.jpg'),
          url1: 'https://www.baidu.com',
          url2: 'https://baidu.com',
          url3: 'https://352123.xyz/#/',
        },
        {
          id: '2',
          name: '感恩大回馈，豪礼送不停',
          isEditor: false,
          img: require('../../assets/banner/recharge.jpg'),
        },
        {
          id: '3',
          name: '累计充值，豪礼送不停',
          isEditor: false,
          img:  require('../../assets/banner/cumulativeRecharge.jpg'),
        },
        {
          id: '4',
          name: '会员招募，火热进行中',
          isEditor: false,
          img: require('../../assets/banner/recruit.jpg')
        },
        {
          id: '5',
          name: '红包雨，每天都不停',
          isEditor: false,
          img: require('../../assets/banner/red-enevlope.jpg')
        },
      ]
    };
  },
  methods: {
    // 当前选中tab
    getActiveInfo() {
      return this.bannerList.find(item => item.id === this.activeId);
    },
  },
  created() {
    
   
  },
  beforeDestroy() {
    clearInterval(this.activeTimer);
    this.activeTimer = null;
  },
  mounted(){
  },
};
</script>

<style lang="scss" scoped>
.banner-body {
  height: 100vh;
  width: 100vw;
  background: url("../../assets/banner/logbg1.jpg") no-repeat center center;
  background-size: 100% 100%;
  .banner-popover {
    position:absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
  .my-swipe {
    margin: 0 20px;
    margin-top: 80px;
    overflow: hidden;
    border-radius: 20px;
    .van-swipe-item {
    
      img {
        width: 100%;
        min-height: 600px;
      }
    }
  } 
.banner-first {
  img {
    width: 100%;
    height: 100%;
  }
  .register-btns {
    position: absolute;
    left: 50%;
    bottom: 30px;
    transform: translate(-50%);
    a {
      font-size: 16px;
      display: flex;
      justify-content: center;
      color: #000;
      text-decoration: none;
      text-align: center;
      margin-bottom: 10px;
    }
  }
}
}
</style>