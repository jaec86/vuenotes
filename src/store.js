import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    notes: []
  },
  getters: {
    getNote: state => id => {
      return state.notes.find(note => note.id === id)
    }
  },
  mutations: {
    addNote (state, note) {
      let id = Math.random().toString(36).substr(2, 9)
      state.notes.push({
        id,
        ...note
      })
    },
    deleteNote (state, id) {
      state.notes = state.notes.filter(note => note.id !== id)
    },
    editNote (state, note) {
      state.notes = state.notes.map(item => note.id === item.id ? note : item)
    }
  }
})
