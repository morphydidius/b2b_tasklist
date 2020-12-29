export default {
	async setState({ commit }, url) {
		await fetch(url)
			.then((data) => data.json())
			.then((data) => commit('SETSTATE', { issues: data }))
			.catch((e) => console.error('ERROR SETSTATE', e));
	},
	openAuthorFilterList({ commit }) {
		commit('OPEN_AUTHOR_FILTER_LIST');
	},
	closeAuthorFilterList({ commit }) {
		commit('CLOSE_AUTHOR_FILTER_LIST');
	},
	setAuthorFilterWord({ commit }, word) {
		commit('SET_AUTHOR_FILTER_WORD', word);
	},
	clearAuthorFilter({ commit }) {
		commit('CLEAR_AUTHOR_FILTER');
	}
};