<template>
  <div>
    <navbar v-if="window_width > 577" />
    <navbarMobile v-if="window_width <= 577" />
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

import navbar from '~/components/navbar.vue'
import navbarMobile from '~/components/navbar-mobile.vue'

export default {
  components: {
    navbar,
    navbarMobile
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
