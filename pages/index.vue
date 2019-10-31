<template>
  <div>
    <navbar v-if="window_width > 577" />
    <navbarMobile v-if="window_width <= 577" />
    <banner/>
    <register/>
    <detail/>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

import navbar from '~/components/navbar.vue'
import navbarMobile from '~/components/navbar-mobile.vue'
import banner from '~/components/banner.vue'
import register from '~/components/register.vue'
import detail from '~/components/detail.vue'

export default {
  components: {
    navbar,
    navbarMobile,
    banner,
    register,
    detail
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
