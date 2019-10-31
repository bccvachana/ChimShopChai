export const state = () => ({
  data: {},
  window_width: 0
})

export const mutations = {
  DATA (state, payload) {
    state.data = payload
  },
  WINDOW_WIDTH (state, payload) {
    state.window_width = payload
  }
}
