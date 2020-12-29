import { mount, shallowMount } from '@vue/test-utils';
import FilterWindow from '@/components/Filter_window.vue';
import getters from "../src/store/getters.js";

const state = {
	issues: [
		{
			pull_request: {
				diff_url:"https://github.com/vuejs/vue/pull/11842.diff",
				html_url:"https://github.com/vuejs/vue/pull/11842",
				patch_url:"https://github.com/vuejs/vue/pull/11842.patch",
				url:"https://api.github.com/repos/vuejs/vue/pulls/11842",
			},
			state:"open",
			title:"ci: add issue reply",
			user: {
				avatar_url:"https://avatars1.githubusercontent.com/u/29775873?v=4",
				id:29775873,
				login:"xrkffgg"
			}
		},
		{
			state:"open",
			title:"feat(ssr): add csp nonce to all elements",
			user: {
				avatar_url:"https://avatars1.githubusercontent.com/u/7272211?v=4",
				id:7272211,
				login:"blake-newman"
			}
		},
		{
			state:"open",
			title:"Remove IE11 support for v-html SVGs when IE support is not needed",
			user: {
				avatar_url:"https://avatars1.githubusercontent.com/u/630449?v=4",
				id:630449,
				login:"blimmer"
			}
		}
	],
	filters: {
		author: {
			isAuthorFilterOn: false,
			isAuthorListOpened: false,
			filterWord: 'blimmer'
		}
	}
};

const listOfAuthors_rightcheck = [
	{
		avatar: 'https://avatars1.githubusercontent.com/u/7272211?v=4',
		nickName: 'blake-newman'
	},
	{
		avatar: 'https://avatars1.githubusercontent.com/u/630449?v=4',
		nickName: 'blimmer'
	}
];

describe('FilterWindow.vue', () => {
  it('Getters test', () => {
  	const issuesList = getters.issuesList(state);
  	expect(issuesList.length).toBe(2);

  	expect(getters.areFiltersSet(state)).toBe(false);

  	expect(getters.listOfAuthors(state, { issuesList })).toEqual(listOfAuthors_rightcheck);
  })
})
