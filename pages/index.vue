<template>
  <div>
    <navbar v-if="window_width > 577" />
    <navbarmobile v-if="window_width <= 577" />
    <banner />
    <register />
    <detail />
    <callcenter />
    <brand />
    <footerbar />
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

import navbar from '~/components/navbar.vue'
import navbarmobile from '~/components/navbarmobile.vue'
import banner from '~/components/banner.vue'
import register from '~/components/register.vue'
import detail from '~/components/detail.vue'
import callcenter from '~/components/callcenter.vue'
import brand from '~/components/brand.vue'
import footerbar from '~/components/footerbar.vue'

export default {
  components: {
    navbar,
    navbarmobile,
    banner,
    register,
    detail,
    callcenter,
    brand,
    footerbar
  },
  computed: {
    ...mapState('store', [
      'data',
      'window_width'
    ])
  },
  async fetch ({ store, params, redirect }) {
    try {
      const response = await axios.get('https://panjs.com/ywc.json')
      store.commit('store/DATA', response.data)
    } catch {
      return redirect('/error')
    }
  },
  created () {
    window.addEventListener('resize', () => { this.$store.commit('store/WINDOW_WIDTH', window.innerWidth) })
    this.$store.commit('store/WINDOW_WIDTH', window.innerWidth)
  }
}
</script>
