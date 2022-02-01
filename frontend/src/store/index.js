import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
  },
  mutations: {
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, payload) {
      state.status = 'success'
      state.token = payload.token
      state.user = payload.user
    },
    auth_error(state) {
      state.status = 'error'
    }
  },
  actions: {
    login({commit}, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: '/user/login', data: user, method: 'POST' })
        .then(res => {
          const token = res.data.token
          const user = res.data.user
  
          localStorage.setItem('user', JSON.stringify(res.data))
          axios.defaults.headers.common['Authorization'] = token
          commit('auth_success', { token: token, user: user })
          resolve(res)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
    },
  signup({commit}, user) {
    return new Promise((resolve, reject) => {
      commit('auth_request')
      axios({ url: '/user/signup', data: user, method: 'POST' })
      .then(res => {
        const token = res.data.token
        const user = res.data.user

        localStorage.setItem('token', JSON.stringify(res.data))
        axios.defaults.headers.common['Authorization'] = token
        commit('auth_success', { token: token, user: user })
        resolve(res)
      })
      .catch(err => {
        commit('auth_error', err)
        localStorage.removeItem('token')
        reject(err)
        })
      })
    },
  }
})
