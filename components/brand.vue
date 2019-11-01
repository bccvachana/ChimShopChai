<template>
  <div>
    <div v-if="window_width > 650" id="brand" class="display-flex-center">
      <a class="display-flex-center" href="https://www.mof.go.th/th/home" target="_blank"><img src="../static/img/brand-logo/MOF.png"></a>
      <a class="display-flex-center" href="http://www.fpo.go.th" target="_blank"><img src="../static/img/brand-logo/FPO.png"></a>
      <a class="display-flex-center" href="https://www.cgd.go.th" target="_blank"><img src="../static/img/brand-logo/CGD.png"></a>
      <a class="display-flex-center" href="https://www.newcb.ktb.co.th" target="_blank"><img src="../static/img/brand-logo/Krungthai.png"></a>
      <a class="display-flex-center" href="https://www.mots.go.th" target="_blank"><img src="../static/img/brand-logo/MOTS.png"></a>
      <a class="display-flex-center" href="https://thai.tourismthailand.org" target="_blank"><img src="../static/img/brand-logo/TAT.png"></a>
    </div>
    <div v-if="window_width <= 650" id="brand-mobile" class="display-flex-center">
      <div id="brand-mobile-row" class="display-flex-center">
        <div class="display-flex-center right">
          <a class="display-flex-center" href="https://www.mof.go.th/th/home" target="_blank"><img src="../static/img/brand-logo/MOF.png"></a>
        </div>
        <div class="display-flex-center">
          <a class="display-flex-center" href="http://www.fpo.go.th" target="_blank"><img src="../static/img/brand-logo/FPO.png"></a>
        </div>
        <div class="display-flex-center left">
          <a class="display-flex-center" href="https://www.cgd.go.th" target="_blank"><img src="../static/img/brand-logo/CGD.png"></a>
        </div>
      </div>
      <div id="brand-mobile-row" class="display-flex-center">
        <div class="display-flex-center right">
          <a class="display-flex-center" href="https://www.newcb.ktb.co.th" target="_blank"><img src="../static/img/brand-logo/Krungthai.png"></a>
        </div>
        <div class="display-flex-center">
          <a class="display-flex-center" href="https://www.mots.go.th" target="_blank"><img src="../static/img/brand-logo/MOTS.png"></a>
        </div>
        <div class="display-flex-center left">
          <a class="display-flex-center" href="https://thai.tourismthailand.org" target="_blank"><img src="../static/img/brand-logo/TAT.png"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('store', [
      'data',
      'window_width'
    ])
  }
}
</script>

<style scoped>
  #brand {
    width: 100%;
    max-width: 1140px;
    margin: 150px auto 100px auto;
    justify-content: space-around;
  }
  #brand img{
    width: 102px;
  }
  #brand img:hover{
    transform: scale(1.2);
    transition: all 0.55s ease-in-out;
    -webkit-transition: all 0.55s ease-in-out 0s;
  }

  #brand-mobile {
    width: 100%;
    max-width: 1140px;
    margin: 80px auto 100px auto;
    padding: 0 15px;
    flex-direction: column;
  }
  #brand-mobile-row {
    width: 100%;
    justify-content: space-around;
  }
  #brand-mobile-row div{
    width: 33.333%;
    padding: 0 15px;
  }
  .right { justify-content: flex-end; } .left { justify-content: flex-start; }
  #brand-mobile img {
    width: 56px;
  }
  #brand-mobile img:hover {
    transform: scale(1.2);
    transition: all 0.55s ease-in-out;
    -webkit-transition: all 0.55s ease-in-out 0s;
  }

  @media only screen and (max-width: 1199px) {
    #brand {
      max-width: 960px;
    }
  }

  @media only screen and (max-width: 991px) {
    #brand {
      max-width: 720px;
    }
  }

  @media only screen and (max-width: 769px) {
    #brand {
      max-width: 540px;
    }
  }

  @media only screen and (max-width: 577px) {
    #callcenter {
      padding: 0 15px;
    }
    #callcenter img{
      width: 80%;
    }
  }
</style>
