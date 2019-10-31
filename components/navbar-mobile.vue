<template>
  <div id="navbar-mobile" :class="{ 'ham-clicked': !collapse }">
    <div id="navbar-mobile-menu" class="display-flex-center">
      <div id="navbar-mobile-menu-1" class="display-flex-center">
        <a class="display-flex-center" href="#"><img src="../static/img/logo.png"></a>
        <a
          id="hamburger"
          :class="{ 'ham-clicked': !collapse }"
          @click="collapse = !collapse"
        >
          <div />
          <div />
          <div />
        </a>
      </div>
      <transition name="navbar-mobile-menu-2-fade">
        <div v-show="!collapse" id="navbar-mobile-menu-2" class="display-flex-center">
          <div v-for="(navbarItems, index) in data.navbarItems" :key="index">
            <a :href="navbarItems.href" target="_blank">{{ navbarItems.label }}</a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      collapse: true
    }
  },
  computed: {
    ...mapState('store', [
      'data',
      'window_width'
    ])
  }
}
</script>

<style scoped>
  #navbar-mobile {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100%;
    height: 60px;
    background-color: white;
    box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.1);
    transition: all 0.25s ease-in-out 0s;
    -webkit-transition: all 0.25s ease-in-out 0s;
  }

  #navbar-mobile.ham-clicked {
    height: 191px;
  }

  #navbar-mobile-menu {
    padding: 8px 16px;
    flex-direction: column;
  }

  #navbar-mobile-menu div {
    width: 100%;
  }

  #navbar-mobile-menu-1 {
    height: 100%;
    justify-content: space-between;
  }

  #navbar-mobile-menu-1 a img {
    width: 33px;
    height: 43px;
  }

  #hamburger {
    width: 30px;
    height: 23px;
    position: relative;
  }

  #hamburger div {
    height: 3px;
    width: 100%;
    background-color: #333333;
    position: absolute;
    transition: all 0.25s ease-in-out 0s;
    -webkit-transition: all 0.25s ease-in-out 0s;
  }

  #hamburger div:nth-child(1) { top: 0; transform: rotate(0); -webkit-transform: rotate(0); }
  #hamburger.ham-clicked div:nth-child(1) { top: 10px; transform: rotate(135deg); -webkit-transform: rotate(135deg); }
  #hamburger div:nth-child(2) { top: 10px; left: 0; opacity: 100%; }
  #hamburger.ham-clicked div:nth-child(2) { left: -60px; opacity: 0; }
  #hamburger div:nth-child(3) { top: 20px; transform: rotate(0); -webkit-transform: rotate(0); }
  #hamburger.ham-clicked div:nth-child(3) { top: 10px; transform: rotate(-135deg); -webkit-transform: rotate(-135deg);}

  #navbar-mobile-menu-2 {
    flex-direction: column;
  }

  .navbar-mobile-menu-2-fade-enter-active {
    transition: all 0.10s ease-in-out 0.15s;
    -webkit-transition: all 0.10s ease-in-out 0.15s;
  }
  .navbar-mobile-menu-2-fade-leave-active {
    transition: all 0.10s ease-in-out 0s;
    -webkit-transition: all 0.10s ease-in-out 0s;
  }
  .navbar-mobile-menu-2-fade-enter, .navbar-mobile-menu-2-fade-leave-to {
    opacity: 0;
  }

  #navbar-mobile-menu-2 div {
    padding: 8px 0;
    font-family: TATSanaSuksa;
    font-size: 16px;
    color: rgba(0,0,0,0.5);
    text-align: right;
  }

  #navbar-mobile-menu-2 div a:hover {
    color: #333333;
  }
</style>
