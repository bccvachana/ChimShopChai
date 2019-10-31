<template>
  <div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState } from 'vuex'

export default {
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

<style>
  div {
    font-family: TATSanaChon-Bold;
    font-size: 16px;
  }
</style>
