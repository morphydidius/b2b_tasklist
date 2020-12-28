<template>
  <div class="filter" :style="windowStyles">
    <div class="filter__header">Filter by {{ this.type }} {{ targetList.length }}</div>
    <div class="filter__enter">
      <input type="text" placeholder="Enter filter">
    </div>
    <div class="filter__coll">
      <div v-for="(item, index) of targetList" :key="index" class="filter__coll__item">
        <div class="filter__coll__item__mark">
          <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
            <path fill="#262626" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
          </svg>
        </div>
        <div class="filter__coll__item__avatar">
          <img :src="item.avatar" width="20" height="20" alt="">&nbsp;
        </div>
        <div class="filter__coll__item__nickname">{{ item.nickName }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'FilterWindow',
  props: {
    type: String,
    right: Number
  },
  components: {},
  computed: {
    targetList() {
      switch(this.type) {
        case 'author':
          return this.listOfAuthors;
        default:
          return []
      }
    },
    windowStyles() {
      return {
        right: `${this.right}px`
      }
    },
    ...mapGetters([
      'listOfAuthors'
    ])
  }
}
</script>

<style lang="scss" scoped>

.filter {
  position: absolute;
  right: 20px;
  top: 48px;
  background-color: #fff;
  z-index: 100;
  width: 300px;
  height: 480px;
  border-radius: 6px;
  overflow-y: scroll;
  border: 1px solid rgba(88, 96, 105, .2);
  box-shadow: 0 0 10px 0 rgba(88, 96, 105, .1);

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
        outline: 1px solid gray;
        box-shadow: 0 0 0 3px #93b9e6;
        border-radius: 6px;
      }

      &::placeholder {
        color: rgba(88, 96, 105, .3);
      }
    }
  }

  &__coll {
    &__item {
      padding: 7px 16px;
      display: flex;
      align-items: center;
      font: bold 12px/14px 'Segoe UI';
      color: #586069;
      border-bottom: 1px solid rgba(88, 96, 105, .1);

      &__mark {
        margin-right: 10px;
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
