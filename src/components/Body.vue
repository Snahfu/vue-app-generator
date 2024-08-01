<template>
  <div>
    <Tabs :tabs="activeTabs" @changeTab="changeTab" />
    <Detail :activeTab="activeTab" :savedData="savedData[activeTab]" @saveData="saveData" />
  </div>
</template>

<script>
import Tabs from './Tabs.vue'
import Detail from './Detail.vue'

export default {
  name: 'Body',
  components: {
    Tabs,
    Detail
  },
  props: {
    activeTabs: Array
  },
  data() {
    return {
      activeTab: 'Model',
      savedData: {
        Model: {},
        Repository: {},
        Controller: {},
        Router: {},
        Service: {},
        Views: {},
        Params: {}
      }
    }
  },
  methods: {
    changeTab(tab) {
      this.activeTab = tab
    },
    saveData(data) {
      this.$set(this.savedData, this.activeTab, data)
    }
  }
}
</script>
