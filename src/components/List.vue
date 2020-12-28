<template>
  <div v-if="areIssuesDownloaded" class="list">
    <Header />
    <div class="list__body">
      <Issue v-for="(issue, index) in issuesList" :key="index" :issue="issue" />
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
    ...mapGetters([
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

  &__body {
    border: 1px solid #e1e4e8;
    border-top: none;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
}

</style>
