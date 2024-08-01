<template>
  <div id="app">
    <Header @toggleTab="toggleTab" />
    <Body :activeTabs="activeTabs" />
  </div>
</template>

<script>
import Header from '@/components/Header.vue' // Use @ as alias for src/components
import Body from '@/components/Body.vue'

export default {
  name: 'MainView',
  components: {
    Header,
    Body
  },
  data() {
    return {
      activeTabs: ['Model'] // Default tab
    }
  },
  methods: {
    toggleTab(tab, isChecked) {
      if (isChecked) {
        if (!this.activeTabs.includes(tab)) {
          this.activeTabs.push(tab)
        }
      } else {
        this.activeTabs = this.activeTabs.filter((t) => t !== tab)
      }
    }
  }
}
</script>

<style scoped>
/* Add component-specific styles here */
</style>
