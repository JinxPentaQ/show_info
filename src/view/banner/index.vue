<template>
  <div class="banner-body">
    <div class="banner-popover">
      <div class="banner-wrap">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, index) in bannerList" :key="index">
            <div v-if="item.id  === '1'">
              <img :src="item.img" alt="">
            </div>
            <img v-else  :src="item.img" alt="">
          </van-swipe-item>
        </van-swipe>
      </div>
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
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  .banner-popover {
    width: 100%;
    height: 100%;
    float: left;
    color: #fff;
    background: url("../../assets/banner/logbg1.jpg") no-repeat center center;
    background-size: 100% 100%;
  }
  .banner-popover p:first-child {
    font-size: 50px;
    margin-top: 24%;
    letter-spacing: 15px;
    padding-left: 35%;
    margin-bottom: 20px;
  }
  .banner-popover label {
    font-size: 20px;
    text-align: center;
    padding-left: 36%;
  }
  .banner-popover p:last-child {
    width: 140px;
    height: 40px;
    font-size: 17px;
    color: #fff;
    background-color: #926dde;
    margin: 30px 0 20px 20%;
    line-height: 40px;
    border-radius: 10px;
    text-align: center;
  }
  .banner-wrap {
    position:absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba($color: #000000, $alpha: 0.5);
  }
  .banner-container {
    width: 936px;
    height: 560px;
    position: absolute;
    left: calc((100% - 936px) / 2);
    top: calc((100% - 560px) / 2);
    border-radius: 10px;
    overflow: hidden;
    background: url("../../assets/banner/bannerBg.png") no-repeat center center;
  }
  .banner-header {
    height: 70px;
    font-size: 24px;
    text-align: center;
    color: #fbe59c;
    position: relative;
    padding: 10px;
    padding-bottom: 0;
    .name {
      text-align: center;
      padding-top: 10px;
    }
  } 
  .banner-content {
    height: 460px;
    display: flex;
    flex-direction: row;
  }
  .banner-left {
    width: 180px;
    height: 100%;
    overflow: auto;
    margin-left: 18px;
    background-color: #fff;
  }
  .banner-right {
    width: 719px;
    overflow: hidden;
    
    .banner-img {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
.banner-container-mobile {
  position: relative;
  top: calc(100vh / 10);
  left: 50%;
  transform: translate(-50%);
  width: calc(100vw - 40px);
  height: calc(100vh - (100vh / 10) * 2); 
  max-width: 480px;
  overflow: hidden;
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
</style>