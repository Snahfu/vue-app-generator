<template>
  <div class="row mx-1 mt-2">
    <div class="col-12">
      <ul class="nav nav-tabs custom-tabs bg-danger" style="min-height: 41px">
        <li class="nav-item" v-for="(tab, index) in shownTabs" :key="index">
          <button
            class="nav-link d-flex align-items-center"
            @click="toggleActiveTab(tab.name)"
            :class="{ active: tab.isActive }"
          >
            <span class="tab-text">{{ tab.name }}</span>
            <button
              class="btn-close ms-2"
              aria-label="Close"
              @click.stop="closeTab(tab.name)"
            ></button>
          </button>
        </li>
        <li v-if="!shownTabs.length" class="nav-item">
          <button class="nav-link placeholder-tab" style="min-height: 41px"></button>
        </li>
      </ul>
      <div class="tab-content bg-success">
        <div class="tab-pane active" v-if="activeTab">
          <TabContent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useGeneratorGolangStore } from '@/stores/GeneratorGolangStores'
import TabContent from './TabContent.vue'

export default {
  setup() {
    const store = useGeneratorGolangStore()
    const shownTabs = computed(() => {
      return store.tabs
        .filter((tab) => tab.isShown === true)
        .sort((a, b) => a.position - b.position)
    })

    const activeTab = computed(() => {
      return store.tabs.find((tab) => tab.isActive)
    })

    const toggleActiveTab = (name) => {
      store.toggleTabIsActive(name)
    }

    const closeTab = (name) => {
      store.closeTab(name)
    }

    return {
      shownTabs,
      activeTab,
      toggleActiveTab,
      closeTab
    }
  },
  components: {
    TabContent
  }
}
</script>

<style scoped>
.custom-tabs .nav-item {
  flex: 0 0 150px;
}

.custom-tabs .nav-link {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
  transition:
    background-color 0.2s,
    border-color 0.2s;
  color: #6c757d;
  background-color: #e9e9e9;
}

.custom-tabs .nav-link:hover {
  background-color: #64ceff; /* Slightly darker grey on hover */
}

.custom-tabs .nav-link.active {
  background-color: #007bff; /* Bootstrap primary blue for active tab */
  border-color: #007bff; /* Matching border color */
  color: #ffffff; /* White text for active tab */
}

.custom-tabs .btn-close {
  font-size: 0.75rem;
  line-height: 1;
  color: #6c757d; /* Grey color for close button */
}

.custom-tabs .btn-close:hover {
  color: #ffffff; /* White close button on hover */
}

.tab-text {
  flex-grow: 1; /* Ensure the text spans the available space */
  text-align: left; /* Align text to the left */
}

.tab-content {
  min-height: 200px;
}
</style>
