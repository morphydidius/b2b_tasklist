<template>
  <div class="header">
    <div class="header__title">
      <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
        <path fill="#24292e" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>
      </svg>
      {{ itemscount }} Open
    </div>
    <div
      v-if="areFiltersSet"
      class="header__clear"
      @click="clearAuthorFilter"
    >
      <svg class="header__clear__icon" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
        <path fill="#fff" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
      </svg>
      Clear current filters
    </div>
    <div class="header__filters">
      <div class="header__filters__author">
        <div class="header__filters__author__title">
          <span @click="openAuthorFilterList">
            Author
            <svg xmlns='http://www.w3.org/2000/svg' width='10' height='7' fill='#63758c'><polygon points='0,0 10,0 5,5'/></svg>
          </span>
          <FilterWindow v-if="isAuthorFilterListOpened" type="author" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FilterWindow from './Filter_window';
export default {
  name: 'Header',
  data() {
    return {}
  },
  props: {
    itemscount: Number
  },
  components: {
    FilterWindow
  },
  computed: {
    ...mapGetters([
      'areFiltersSet',
      'issuesList',
      'isAuthorFilterListOpened'
    ])
  },
  mounted() {},
  methods: {
    clearFilters() {
      this.clearAuthorFilter();
    },
    ...mapActions([
      'openAuthorFilterList',
      'clearAuthorFilter'
    ])
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
  align-items: center;
  font: 16px/24px 'Segoe UI';

  @media (max-width: 400px) {
    padding: 16px 8px;
  }

  &__title {
    color: #24292e;
    font: bold 14px/19px 'Segoe UI';
    display: flex;
    align-items: center;

    @media (max-width: 400px) {
      width: 80px;
    }

    svg {
      margin: 2px 6px 0 0;
    }
  }

  &__clear {
    display: flex;
    align-items: center;
    color: #6a737d;
    font: bold 14px/19px 'Segoe UI';
    margin-left: 50%;
    cursor: pointer;
    transition: all .2s ease-in-out;

    @media (max-width: 768px) {
      margin-left: 0;
    }

    @media (max-width: 400px) {
      flex-direction: column;
      text-align: center;
      margin: 0 10px;
    }

    &__icon {
      width: 18px;
      height: 18px;
      padding: 1px;
      margin-right: 8px;
      text-align: center;
      background-color: #6a737d;
      border-radius: 6px;
    }

    &:hover {
      color: #0366d6;
      svg {
        background-color: #0366d6;
      }
    }
  }

  &__filters {
    
    @media (max-width: 400px) {
      width: 72px;
    }

    &__author {
      
      &__title {
        position: relative;
        color: #586069;

        span {
          cursor: pointer;
          font: 14px/19px 'Segoe UI';
          margin-right: 6px;
        }
      }
    }
  }
}
</style>
