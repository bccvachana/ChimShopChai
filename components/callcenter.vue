<template>
  <div id="callcenter" class="display-flex-center">
    <a class="display-flex-center" href="tel:021111144"><img src="../static/img/Banner_KTB_SQ.png"></a>
    <a class="display-flex-center" href="tel:022706400"><img src="../static/img/Banner_CGD_Sq.png"></a>
    <a class="display-flex-center" href="tel:1672"><img src="../static/img/Banner_TAT_Hotline_Sq.png"></a>
  </div>
</template>

<style scoped>
  #callcenter {
    width: 100%;
    max-width: 1140px;
    margin: 100px auto 0 auto;
  }
  #callcenter a{
    padding: 0 15px;
    width: 33.333%;
  }
  #callcenter img{
    width: 100%;
  }

  @media only screen and (max-width: 1199px) {
    #callcenter {
      max-width: 960px;
    }
  }

  @media only screen and (max-width: 991px) {
    #callcenter {
      max-width: 720px;
    }
  }

  @media only screen and (max-width: 769px) {
    #callcenter {
      max-width: 540px;
      flex-direction: column;
    }
    #callcenter a{
      width: 100%;
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
