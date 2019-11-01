<template>
  <div id="container" class="display-flex-center">
    <div>
      <img src="../static/img/logo.png">
      <div id="error-title">
        ขออภัย! พบข้อผิดพลาด<span>ในการติดต่อระบบ</span>
      </div>
      <div id="error-content">
        กรุณาตรวจสอบการเชื่อมต่ออินเตอร์เน็ต<span>หรือติดต่อเจ้าหน้าที่</span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async fetch ({ store, params, redirect }) {
    try {
      await axios.get('https://panjs.com/ywc.json')
      return redirect('/')
    } catch {
    }
  }
}
</script>

<style scoped>
  #container {
    padding: 0 30px;
    width: 100vw;
    height: 100vh;
    font-family: TATSanaChon;
    font-size: 24px;
    text-align: center;
  }
  img {
    width: 120px;
  }
  #error-title {
    margin: 30px 0 10px 0;
    font-family: TATSanaChon;
    font-weight: bold;
    line-height: 1.3;
  }
  #error-content {
    font-size: 16px;
    line-height: 1.5;
  }
</style>
