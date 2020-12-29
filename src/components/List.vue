<template>
  <div v-if="areIssuesDownloaded" class="list">
    <Header :itemscount="issuesCount" />
    <div class="list__body">
      <Issue v-for="(issue, index) in issuesListModified" :key="index" :issue="issue" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Header from './Header';
import Issue from './Issue';
export default {
  name: 'List',
  props: {},
  components: {
    Header,
    Issue
  },
  computed: {
    issuesListModified() {
      return this.authorFilterWord
        ? this.issuesList.filter((issue) => issue.user.login === this.authorFilterWord)
        : this.issuesList;
    },
    issuesCount() {
      return this.issuesListModified.length;
    },
    ...mapGetters([
      'authorFilterWord',
      'areIssuesDownloaded',
      'issuesList'
    ])
  }
}
</script>

<style lang="scss" scoped>
.list {
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1216px;
  width: 90%;
  font: 16px/24px 'Segoe UI';

  @media (max-width: 400px) {
    font-size: 14px;
    line-height: 21px;
  }

  &__body {
    border: 1px solid #e1e4e8;
    border-top: none;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
}

</style>
