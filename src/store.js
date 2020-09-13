import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [ 
      { text: 'Home', to: '/', icon:'home'},
      { text: 'Schedule', to: '/schedule', icon:'rounded_corner'},
      // { text: 'Events', to: '/events', icon: 'rounded_corner'},
      { text: 'Speakers', to: '/speakers', icon:'group'},
      { text: 'Team', to: '/team', icon:'group'},
      { text: 'About', to: '/about', icon: 'toc'},
      { text: 'Contact', to: '/contact', icon:'person'},
      { text: 'Contributors', to: '/contributors', icon:'group'},

    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
