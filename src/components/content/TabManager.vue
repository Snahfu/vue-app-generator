<template>
  <div class="row mx-1 mt-2">
    <div class="col-12">
      <ul class="nav nav-tabs">
        <li
          class="nav-item"
          v-for="(tab, index) in tabs"
          :key="index"
          :class="{ active: tab.isActive }"
        >
          <button class="nav-link" @click="selectTab(index)">{{ tab.title }}</button>
        </li>
      </ul>
      <div class="tab-content">
        <div class="tab-pane active" v-if="activeTab">
          <p>{{ activeTab.title }}</p>
          <div v-html="activeTab.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: 'Repository', isActive: true, content: 'Repository content' },
        { title: 'Controller', isActive: false, content: 'Controller content' }
      ]
    }
  },
  computed: {
    activeTab() {
      return this.tabs.find((tab) => tab.isActive)
    }
  },
  methods: {
    selectTab(index) {
      this.tabs.forEach((tab) => (tab.isActive = false))
      this.tabs[index].isActive = true
    },
    closeTab(index) {
      // Remove tab from the tabs array
      this.tabs.splice(index, 1)
    }
  }
}
</script>

<style scoped>
/* Custom CSS */
.tab-bar {
  border-bottom: 1px solid #ddd;
}

.nav-link.active {
  background-color: #f0f0f0;
}

/* Assuming bg-primary is a blue color */
.nav-tabs .nav-link.active {
  background-color: #007bff; /* Adjust to your specific bg-primary color */
  color: #fff;
}

.tab-content {
  padding: 20px;
  border: 1px solid #ddd;
  border-top: none; /* Remove top border */
}
</style>
