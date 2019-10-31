<template>
  <div>
    ERROR
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
  div {
    font-family: TATSanaChon-Bold;
    font-size: 100px;
  }
</style>
