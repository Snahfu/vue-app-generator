<template>
  <div id="app">
    <Header />
    <!-- <TabManager :tabs="tabs" /> -->
    <TabManager />
  </div>
</template>

<script>
import Header from '@/components/Header.vue' // Use @ as alias for src/components
import Body from '@/components/Body.vue'
import TabManager from '@/components/content/TabManager.vue'
import { useGeneratorGolangStore } from '@/stores/GeneratorGolangStores'

export default {
  name: 'MainView',
  components: {
    Header,
    Body,
    TabManager
  },
  setup() {
    const generatorStore = useGeneratorGolangStore()
    return {
      tabs: generatorStore.tabs
    }
  }
}
</script>

<style scoped>
/* Add component-specific styles here */
</style>
