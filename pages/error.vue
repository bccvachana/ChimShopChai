<template>
  <div>
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

<style>
  div {
    font-family: TATSanaChon-Bold;
    font-size: 50px;
  }
</style>
