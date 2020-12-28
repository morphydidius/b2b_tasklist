import Vue from 'vue';

export default {
	SETSTATE(state, payload) {
		const param = Object.keys(payload)[0];
		const value = Object.values(payload)[0];
		Vue.set(state, param, value);
	}
}