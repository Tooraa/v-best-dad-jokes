
export const state = () => ({
  jokes: []
})

export const actions = {
  
  async getJokes({ commit }) {
    const response = await this.$axios.$get(
      `http://127.0.0.1:3001/posts`
    )
    commit('setJokes', response)
  },
}

export const mutations = {
  setJokes(state, jokes) {
    state.jokes = [...jokes]
  }
}
