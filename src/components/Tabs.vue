<template>
  <div>
    <ul>
      <li v-for="tab in tabs" :key="tab" @click="selectTab(tab)">
        {{ tab }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tabs: Array
  },
  methods: {
    selectTab(tab) {
      this.$emit('changeTab', tab)
    }
  }
}
</script>
