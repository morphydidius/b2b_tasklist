<template>
  <span class="labels">
    <div
      v-for="(label, index) in labels"
      :key="index"
      class="labels__item"
      :style="setLabelStyle(label)"
    >
      {{ label.name }}
    </div>
  </span>
  
</template>

<script>
export default {
  name: 'Labels',
  data() {
    return {
      darkLabelColors: [
        'b60205',
        '5319e7',
        '009800',
        'd93f0b',
        'eb6420',
        '0052cc'
      ]
    }
  },
  props: {
    labels: Array
  },
  methods: {
    checkDarkLabel(label) {
      return this.darkLabelColors.some((color) => label.color === color); 
    },
    setLabelStyle(label) {
      return {
        backgroundColor: `#${label.color}`,
        color: this.checkDarkLabel(label) ? '#fff' : '#000'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.labels {
  display: inline-block;
  margin-bottom: 2px;

  &__item {
    padding: 0 7px;
    border: 1px solid transparent;
    border-radius: 10px;
    display: inline-block;
    font: bold 12px/17px 'Segoe UI';
    margin-right: 5px;
  }
}
</style>
