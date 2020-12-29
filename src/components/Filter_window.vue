<template>
  <div class="filter" @click.self="closeAuthorFilterList">
    <div class="filter__wrapper">
      <div
        class="filter__close"
        @click="closeAuthorFilterList"
      >
        <svg aria-label="Close menu" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img">
          <path fill="#262626" d="M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z"></path>
        </svg>
      </div>
      <div class="filter__header">Filter by {{ this.type }}</div>
      <div class="filter__enter">
        <input type="text" placeholder="Enter filter" v-model="filter">
      </div>
      <div class="filter__coll">
        <div
          v-for="(item, index) of filteredList"
          :key="index"
          class="filter__coll__item"
          @click="setFilter(item)"
        >
          <div
            :class="[
              'filter__coll__item__mark',
              {
                'active': checkMark(item)
              }
            ]">
            <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
              <path fill="#262626" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
            </svg>
          </div>
          <div v-if="isAuthor" class="filter__coll__item__avatar">
            <img :src="item.avatar" width="20" height="20" alt="">&nbsp;
          </div>
          <div v-if="isAuthor" class="filter__coll__item__nickname">{{ item.nickName }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'FilterWindow',
  data() {
    return {
      filter: ''
    }
  },
  props: {
    type: String
  },
  components: {},
  computed: {
    isAuthor() {
      return this.type === 'author';
    },
    targetList() {
      switch(this.type) {
        case 'author':
          return this.listOfAuthors;
        default:
          return []
      }
    },
    filteredList() {
      return this.filter.length
        ? this.targetList.filter((item) => item.nickName.match(this.filter))
        : this.targetList;
    },
    ...mapGetters([
      'listOfAuthors',
      'authorFilterWord'
    ])
  },
  methods: {
    checkMark(item) {
      if (this.type === 'author') {
        return this.authorFilterWord === item.nickName;
      }
      return false;
    },
    setFilter(item) {
      if (this.type === 'author') {
        this.setAuthorFilterWord(item.nickName);
        this.closeAuthorFilterList();
      }
    },
    ...mapActions(['closeAuthorFilterList', 'setAuthorFilterWord'])
  }
}
</script>

<style lang="scss" scoped>

.filter {

  &::before {
    position: fixed;
    content: '';
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    background-color: rgba(0, 0, 0, .2);
  }

  &__close {
    position: absolute;
    width: 32px;
    height: 32px;
    padding: 6px 8px 8px;
    top: 0;
    right: 0;
    border: none;
    background-color: transparent;
    box-sizing: border-box;
  }

  &__wrapper {
    position: absolute;
    right: 0;
    top: 34px;
    background-color: #fff;
    width: 300px;
    height: 480px;
    border-radius: 6px;
    border: 1px solid rgba(88, 96, 105, .2);
    box-shadow: 0 0 10px 0 rgba(88, 96, 105, .1);
    z-index: 101;
    overflow-y: hidden;

    @media (max-width: 400px) {
      width: 250px;
    }
  }

  &__header {
    padding: 10px 7px 10px 16px;
    font: bold 12px/14px 'Segoe UI';
    color: #586069;
    border-bottom: 1px solid rgba(88, 96, 105, .1);
  }

  &__enter {
    border-bottom: 1px solid rgba(88, 96, 105, .1);
    padding: 7px 16px;

    input {
      border-radius: 6px;
      padding: 5px 12px;
      border: 1px solid rgba(88, 96, 105, .1);
      width: 100%;
      box-sizing: border-box;

      &:active, &:focus {
        outline: none;
        box-shadow: 0 0 0 3px #93b9e6;
      }

      &::placeholder {
        color: rgba(88, 96, 105, .3);
      }
    }
  }

  &__coll {
    overflow-y: scroll;
    height: 403px;

    &__item {
      padding: 7px 16px;
      display: flex;
      align-items: center;
      font: bold 12px/14px 'Segoe UI';
      color: #586069;
      border-bottom: 1px solid rgba(88, 96, 105, .1);
      cursor: pointer;
      transition: all .2s ease-in-out;

      &:hover {
        background-color: #f6f8fa;
      }

      &__mark {
        margin-right: 10px;
        opacity: 0;

        &.active {
          opacity: 1;
        }
      }

      &__avatar {
        margin-right: 10px;

        img {
          border-radius: 50%;
        }
      }

      &__nickname {
        margin-right: 10px;
      }
    }
  }
}
</style>
