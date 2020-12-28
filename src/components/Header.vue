<template>
  <div ref="header" class="header">
    <div class="header__title">{{ issuesList.length }} Open</div>
    <div class="header__filters">
      <div class="header__filters__author">
        <div ref="author" class="header__filters__author__title">Author</div>
        <FilterWindow type="author" :right="filterWindowRightSpace" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FilterWindow from './Filter_window';
export default {
  name: 'Header',
  data() {
    return {
      headerRightSpace: null,
      authorLinkLeftSpace: null
    }
  },
  props: {},
  components: {
    FilterWindow
  },
  computed: {
    filterWindowRightSpace() {
      if (this.headerRightSpace && this.authorLinkLeftSpace) {
        return Math.round(this.headerRightSpace - this.authorLinkLeftSpace);
      }
      return 0;
    },
    ...mapGetters([
      'issuesList'
    ])
  },
  mounted() {
    this.refreshData();
    window.addEventListener('resize', this.refreshData);
  },
  methods: {
    refreshData() {
      this.headerRightSpace = this.$refs.header.getBoundingClientRect().right;
      this.authorLinkLeftSpace = this.$refs.author.getBoundingClientRect().right;
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.refreshData);
  }
}
</script>

<style lang="scss" scoped>

.header {
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: #f6f8fa;
  padding: 16px;
  border: 1px solid #e1e4e8;
  display: flex;
  justify-content: space-between;
  font: 16px/24px 'Segoe UI';

  &__filters {
    &__author {}
  }
}
</style>
