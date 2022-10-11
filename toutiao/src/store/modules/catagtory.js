import axios from 'axios'
export default {
    namespaced: true,
    state: {
        catagtory: [],
        currentCatatgory: ''
    },
    mutations: {
        updateCatagtory(state, playload) {
            state.catagtory = playload
        },
        updatecurrentCatatgory(state, playload) {
            state.currentCatatgory = playload
        }
    },
    actions: {
        async getCatagtory(context){
            const {
                data:{
                    data:{
                        channels
                    }
            }
        } = await axios.get('http://toutiao.itheima.net/v1_0/channels')
        context.commit('updateCatagtory',channels),
        context.commit('updatecurrentCatatgory',channels[0].id)
        
        }
    }
}
