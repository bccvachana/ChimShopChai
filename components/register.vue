<template>
  <div id="register" class="display-flex-center">
    <div v-if="data.duration">ตั้งแต่วันที่</div>
    <div v-if="data.duration" id="duration">
      {{ data.duration }}
    </div>
    <a v-if="data.navbarItems" id="register-link" :href="data.navbarItems[0].href" target="_blank">
      ลงทะเบียน เฟส 2<br>
      ตั้งแต่วันที่ 24 ต.ค. 62 วันละ 2 รอบ<span> เวลา 6.00 และ 18.00 น. </span><br>
      (จำกัดจำนวนผู้ลงทะเบียนรอบละ<span> 5 แสนคน รวม 1 ล้านคนต่อวัน) </span>
    </a>
    <div v-if="data.navbarItems" id="hr-div">
      <hr>
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
  #register {
    padding: 26px 15px;
    flex-direction: column;
    font-family: TATSanaChon-Bold;
    font-size: 16px;
    text-align: center;
    position: relative;
  }
  #duration {
    margin-top: -10px;
    font-size: 48px;
    color: #E6332A;
  }
  #register-link {
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    max-width: 800px;
    background-color: #213A8F;
    border-radius: 5px;
    box-shadow: 0 15px 30px 0 rgba(28, 78, 132, 0.4);
    font-size: 24px;
    line-height: 1.5;
    color: white;
    z-index: 10;
    transition: all 0.15s ease-in-out 0s;
    -webkit-transition: all 0.15s ease-in-out 0s;
  }
  #register-link:hover {
    background-color: #FBBC33;
    box-shadow: none;
  }
  #hr-div {
    width: 100%;
    padding: 0 15px;
    position: absolute;
    bottom: 55px;
  }
  #register hr {
    border: 0;
    border-top: 1px solid rgba(0,0,0,.1);
    width: 100%;
  }

  @media only screen and (max-width: 769px) {
    #duration {
      font-size: 36px;
    }
    #register-link {
      font-size: 18px;
    }
    #hr-div {
      display: none;
    }
  }

  @media only screen and (max-width: 577px) {
    #duration {
      font-size: 30px;
    }
  }
</style>
