<template>
  <div id="banner">
    <div id="banner-left"></div>
    <div id="banner-center" class="display-flex-center">
        <img src="../static/img/banner/banner-logo.png">
    </div>
    <div id="banner-right"></div>
  </div>
</template>

<style scoped>
  #banner {
    margin-top: 60px;
    height: 350px;
    display: flex;
  }
  #banner-left{
    width: 33.333%;
    background: url(../static/img/banner/banner-left.png) top/cover no-repeat;
  }
  #banner-center {
    width: 33.334%;
    background: url(../static/img/banner/banner-center.png) top/cover no-repeat;
  }
  #banner-center img {
    width: 240px;
  }
  #banner-right{
    width: 33.333%;
    background: url(../static/img/banner/banner-right.png) top/cover no-repeat;
  }

  @media only screen and (max-width: 769px) {
    #banner {
      height: 242px;
    }
    #banner-left{
    background: url(../static/img/banner/banner-left.png) left/cover no-repeat;
    }
    #banner-center {
      background: url(../static/img/banner/banner-center.png) left/cover no-repeat;
    }
    #banner-center img {
      width: 106px;
    }
    #banner-right{
      background: url(../static/img/banner/banner-right.png) left/cover no-repeat;
    }
  }

  @media only screen and (max-width: 577px) {
    #banner {
      height: 221px;
    }
    #banner-left{
      background: url(../static/img/banner/banner-left-s.png) top/cover no-repeat;
    }
    #banner-center {
      background: url(../static/img/banner/banner-center-s.png) top/cover no-repeat;
    }
    #banner-center img {
      width: 110px;
    }
    #banner-right{
      background: url(../static/img/banner/banner-right-s.png) top/cover no-repeat;
    }
  }
</style>
