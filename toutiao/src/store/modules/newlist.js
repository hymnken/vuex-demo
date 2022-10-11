import axios from 'axios'
import vuex from 'vuex'
export default {
    namespaced: true,
    state: {
        allData:{

        }
    },
    mutations: {
        updataList (state , {currentCatagtory,list}){
            state.allData = {...state.allData,[currentCatagtory]:list}
        }
    },
    actions: {
        async getNewList(context,cataId){
         const {data:{data:{results}}} = await axios.get(`http://toutiao.itheima.net/v1_0/articles?channel_id=${cataId}&timestamp=${Date.now()}&with_top=1`)
         context.commit('updataList',{currentCatagtory : cataId , list:results})   
        
        }
    }
}