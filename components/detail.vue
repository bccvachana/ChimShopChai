<template>
  <div id="detail" class="display-flex-center">
    <div v-if="window_width > 577" id="detail-title">
      มาตรการส่งเสริมการบริโภค <br> ในประเทศ <span>“ชิมช้อปใช้”</span>
    </div>
    <div v-if="window_width <= 577" id="detail-title">
      มาตรการส่งเสริมการบริโภคในประเทศ <span>“ชิมช้อปใช้”</span>
    </div>
    <div id="detail-content" v-html="data.detail" />
    <div id="condition-title">
      เงื่อนไขการเข้าร่วมมาตรการ
    </div>
    <div id="detail-content" v-html="data.condition" />
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
  #detail {
    width: 100%;
    max-width: 1140px;
    margin: 27px auto;
    flex-direction: column;
    align-items: flex-start;
  }
  #detail div {
    max-width: 83.333%;
    padding: 0 15px;
  }

  #detail-title {
    margin: 0 0 24px 0;
    font-family: TATSanaChon-Bold;
    font-size: 36px;
    color: #E6332A;
  }
  #detail-content {
    font-family: TATSanaSuksa;
    font-size: 18px;
  }

  #condition-title {
    margin: 24px 0 8px 0;
    font-family: TATSanaChon-Bold;
    font-size: 18px;
  }

  @media only screen and (max-width: 1199px) {
    #detail {
        max-width: 960px;
    }
  }

  @media only screen and (max-width: 991px) {
    #detail {
        max-width: 720px;
    }
  }

  @media only screen and (max-width: 769px) {
    #detail {
      max-width: 540px;
    }
    #detail div {
      max-width: 100%;
    }
    #detail-title {
      font-size: 24px;
      line-height: 1.3;
    }
    #detail-content {
      font-size: 14px;
    }
    #condition-title {
      font-size: 14px;
    }
  }

  @media only screen and (max-width: 577px) {
    #detail div {
      padding: 0 30px;
    }
    #detail-title {
      line-height: 1.6;
    }
    #detail-content {
      font-size: 16px;
    }
    #condition-title {
      font-size: 16px;
    }
  }
</style>
