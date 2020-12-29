import Vue from 'vue';

export default {
	SETSTATE(state, payload) {
		const param = Object.keys(payload)[0];
		const value = Object.values(payload)[0];
		Vue.set(state, param, value);
	},
	OPEN_AUTHOR_FILTER_LIST(state) {
		state.filters.author.isAuthorListOpened = true;
	},
	CLOSE_AUTHOR_FILTER_LIST(state) {
		state.filters.author.isAuthorListOpened = false;
	},
	SET_AUTHOR_FILTER_WORD(state, word) {
		state.filters.author.filterWord = word;
		state.filters.author.isAuthorFilterOn = true;
	},
	CLEAR_AUTHOR_FILTER(state) {
		state.filters.author.filterWord = '';
		state.filters.author.isAuthorFilterOn = false;
	}
}