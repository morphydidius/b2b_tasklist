<template>
  <div class="issues">
    <Preloader />
    <List />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Preloader from './components/Preloader';
import List from './components/List';

export default {
  name: 'App',
  data() {
    return {}
  },
  components: {
    List,
    Preloader
  },
  mounted() {
    this.setState('https://api.github.com/repos/vuejs/vue/issues?per_page=100');
  },
  computed: {
    ...mapGetters(['issuesList', 'areIssuesDownloaded'])
  },
  methods: {
    ...mapActions(['setState'])
  }
}
</script>

<style lang="scss" scoped>
</style>
