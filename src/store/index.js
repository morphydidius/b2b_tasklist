import Vue from 'vue';
import Vuex from 'vuex';
import state from './index';
import getters from './getters';
import mutations from './mutations';
import actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
	state: state,
	getters,
	mutations,
	actions
});