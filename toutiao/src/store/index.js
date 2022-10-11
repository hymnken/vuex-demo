import Vue from 'vue'
import Vuex from 'vuex'
import catagtory from './modules/catagtory'
import newlist from './modules/newlist'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {

    },

    mutations: {

    },

    actions: {

    },

    modules: {
        catagtory,
        newlist
    },

    getters: {
        catagtory: state => state.catagtory.catagtory,
        currentCatatgory: state => state.catagtory.currentCatatgory,
        currentList:state => state.newlist.allData[state.catagtory.currentCatagtory]
    }
})