export default {
	async setState({ commit }, url) {
		await fetch(url)
			.then((data) => data.json())
			.then((data) => commit('SETSTATE', { issues: data }))
			.catch((e) => console.error('ERROR SETSTATE', e));
	}
};