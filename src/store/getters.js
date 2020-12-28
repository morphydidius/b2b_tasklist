export default {
	areIssuesDownloaded(state, { issuesList }) {
		return issuesList && issuesList.length > 0;
	},
	issuesList(state) {
		return state.issues && state.issues.filter(e => !e.pull_request);
	},
	listOfAuthors(state, { issuesList }) {
		return issuesList && issuesList
		.map((elem) => ({
			nickName: elem.user.login,
			avatar: elem.user.avatar_url
		}))
		.reduce((acc, elem) => {
			if (!acc.length || acc.findIndex((accElem) => accElem.nickName === elem.nickName) === -1) {
				acc.push(elem);
			}
			return acc;
		}, [])
		.sort((currItem, nextItem) => {
			const currNickName = currItem.nickName.toLowerCase();
			const nextNickName = nextItem.nickName.toLowerCase();
			if (currNickName > nextNickName) {
              return 1;
            }
            if (currNickName < nextNickName) {
              return -1;
            }
            return 0;
		})
	}
}