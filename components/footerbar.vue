<template>
  <div>
    <div id="footer-1" class="display-flex-center">
      <div class="footer-container display-flex-center">
        <div><img src="../static/img/logo.png"></div>
        <div>
          <div class="footer-title">
            ข้อมูลลงทะเบียนประชาชน
          </div>
          <div class="footer-detail">
            การรับสิทธิ การใช้งานแอปพลิเคชั่น <span>“เป๋าตัง”</span> และ <span>“ถุงเงิน”</span>
          </div>
          <div class="footer-detail">
            ติดต่อ ชิมช้อปใช้ Call Center by Krungthai โทร. <a href="tel:021111144"><span>0 2111 1144</span></a>
          </div>
        </div>
        <div>
          <div class="footer-title">
            ข้อมูลลงทะเบียนผู้ประกอบการ
          </div>
          <div class="footer-detail">
            เงื่อนไขและวิธีการเข้าร่วมมาตรการฯ
          </div>
          <div class="footer-detail">
            ติดต่อ โทร.<a href="tel:022706400"><span>0 2270 6400 กด 7</span></a>
          </div>
        </div>
        <div>
          <div class="footer-title">
            ข้อมูลเที่ยวชิมช้อปใช้
          </div>
          <div class="footer-detail">
            ติดต่อ ททท.
          </div>
          <div class="footer-detail">
            โทร. <a href="tel:1672"><span>1672</span></a>
          </div>
        </div>
      </div>
    </div>
    <div id="footer-2" class="display-flex-center">
      <div class="footer-container display-flex-center">
        <div>Copyright © 2003-2019</div>
        <div v-if="data.navbarItems"><a :href="data.navbarItems[0].href" target="_blank">ลงทะเบียนเข้าร่วมมาตรการ</a></div>
        <div v-if="data.navbarItems"><a :href="data.navbarItems[1].href" target="_blank">ขั้นตอนการเข้าร่วมทั้งหมด</a></div>
        <div v-if="data.navbarItems"><a :href="data.navbarItems[2].href" target="_blank">ร้านค้าที่เข้าร่วมรายการ</a></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('store', [
      'data'
    ])
  }
}
</script>

<style scoped>
  #footer-1 {
    width: 100%;
    background-color: #FAFAFA;
    padding: 30px;
    font-family: TATSanaSuksa;
  }
  .footer-container {
    width: 100%;
    max-width: 1140px;
    align-items: flex-start;
  }
  .footer-container > div{
    width: 25%;
    padding: 0 15px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  #footer-1 img {
    width: 108px;
  }
  .footer-title {
    margin-top: 24px;
    font-weight: bold;
    font-size: 16px;
    color: #E6332A;
    width: 100%;
  }
  .footer-detail {
    font-size: 14px;
    width: 100%;
  }

  #footer-2 {
    width: 100%;
    background-color: #213A8F;
    padding: 0 30px;
    font-family: TATSanaChon-Bold;
    font-size: 14px;
    color: white;
  }
  #footer-2 .footer-container div {
    margin: 8px 0
  }

  @media only screen and (max-width: 1199px) {
    .footer-container {
      max-width: 960px;
    }
  }

  @media only screen and (max-width: 991px) {
    .footer-container {
      max-width: 720px;
    }
  }

  @media only screen and (max-width: 769px) {
    .footer-container {
      max-width: 540px;
      flex-wrap: wrap;
    }
    .footer-container > div {
      width: 33.33%;
    }
    .footer-container > div:nth-child(1) {
      width: 100%;
    }
    #footer-2 {
      font-size: 12px;
    }
  }

  @media only screen and (max-width: 577px) {
    #footer-1 {
      padding: 44px 45px;
    }
    #footer-1 img {
      width: 145px;
    }
    .footer-title {
      margin: 15px 0px 10px 0px;
    }
    #footer-2 {
      padding: 15px 45px;
    }
    .footer-container > div {
      width: 100%;
    }
  }
</style>
