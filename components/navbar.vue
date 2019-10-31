<template>
  <div id="navbar" class="display-flex-center">
    <div v-for="(navbarItems, index) in data.navbarItems" :key="index">
      <a :href="navbarItems.href" target="_blank">{{ navbarItems.label }}</a>
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
  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 60px;
    background-color: white;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
    visibility: visible;
  }

  #navbar div{
    margin: 0 2px;
    padding: 14px 15px;
  }

  #navbar div a{
    font-family: TATSanaChon;
    font-size: 14px;
    font-weight: bold;
    position: relative;
  }

  #navbar div a:after{
    content: "";
    width: 100%;
    height: 6px;
    position: absolute;
    left: 0;
    bottom: -14px;
    background-color: #213A8F;
    transform: scaleX(0);
    -webkit-transform: scaleX(0);
    transition: all 0.3s ease-in-out 0s;
    -webkit-transition: all 0.3s ease-in-out 0s;
  }

  #navbar div a:hover{
    color: #213A8F;
  }

  #navbar div a:hover::after{
    transform: scaleX(1);
    -webkit-transform: scaleX(1);
  }
</style>
