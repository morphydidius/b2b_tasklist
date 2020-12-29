<template>
  <div class="issue">
    <div class="issue__icon">
      <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
        <path fill="#22863a" d="M8 1.5a6.5 6.5 0 100 13 6.5 6.5 0 000-13zM0 8a8 8 0 1116 0A8 8 0 010 8zm9 3a1 1 0 11-2 0 1 1 0 012 0zm-.25-6.25a.75.75 0 00-1.5 0v3.5a.75.75 0 001.5 0v-3.5z"></path>
      </svg>
    </div>
    <div class="issue__text">
      <span><b>{{ issue.title }}</b></span>&nbsp;
      <Labels :labels="issue.labels" />
    </div>
    <div class="issue__tags">
      #{{ issue.number }} opened {{ date }} by {{ issue.user.login }}
    </div>
    <div v-if="issue.comments" class="issue__comments">
      <svg viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true">
        <path fill="#586069" d="M2.75 2.5a.25.25 0 00-.25.25v7.5c0 .138.112.25.25.25h2a.75.75 0 01.75.75v2.19l2.72-2.72a.75.75 0 01.53-.22h4.5a.25.25 0 00.25-.25v-7.5a.25.25 0 00-.25-.25H2.75zM1 2.75C1 1.784 1.784 1 2.75 1h10.5c.966 0 1.75.784 1.75 1.75v7.5A1.75 1.75 0 0113.25 12H9.06l-2.573 2.573A1.457 1.457 0 014 13.543V12H2.75A1.75 1.75 0 011 10.25v-7.5z"></path>
      </svg>&nbsp;
      <span>{{ issue.comments }}</span>
    </div>
  </div>
</template>

<script>
import Labels from './Labels.vue';
export default {
  name: 'Issue',
  props: {
    issue: Object
  },
  components: {
    Labels
  },
  computed: {
    date() {
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec' ];
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const issueDate = new Date(this.issue.created_at);
      const issueYear = issueDate.getFullYear();
      return issueYear === currentYear
        ? `${issueDate.getDate()} ${months[issueDate.getMonth()]}`
        : `${issueDate.getDate()} ${months[issueDate.getMonth()]} ${issueYear}`;
    }
  }
}
</script>

<style lang="scss" scoped>

.issue {
  padding: 8px 60px 8px 40px;
  position: relative;
  transition: .2s;

  @media (max-width: 400px) {
    padding-left: 30px;
  }

  &:hover {
    background-color: #f6f8fa;
  }

  &:not(:last-of-type) {
    border-bottom: 1px solid #e1e4e8;
  }

  &__icon {
    position: absolute;
    content: '';
    top: 8px;
    left: 16px;

    @media (max-width: 400px) {
      left: 8px;
      top: 12px;
    }
  }

  &__text {
    span b {
      vertical-align: bottom;
    }
  }

  &__tags {
    color: #586069;
    font: 12px/17px 'Segoe UI';

    @media (max-width: 400px) {
      margin-top: 10px;
    }
  }

  &__linked-pull-requests {
    position: absolute;
    top: 14px;
    right: 30px;

    span {
      font: bold 12px/14px 'Segoe UI';
    }
  }

  &__comments {
    position: absolute;
    top: 14px;
    right: 16px;
    font: bold 12px/14px 'Segoe UI';

    span {
      vertical-align: top;
      color: #586069;
    }
  }
}
</style>
