import Vue from 'vue';
import Vuex from 'vuex';
//vue要使用插件一次
Vue.use(Vuex);

import home from './home';
import search from './search';
export default new Vuex.Store({
    modules: {
        home,
        search
    }
})
