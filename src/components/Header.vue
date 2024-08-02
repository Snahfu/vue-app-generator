<template>
  <div class="container-fluid mb-2">
    <!-- Model Setup Placeholder -->
    <div class="row mx-1">
      <div class="col-12 bg-info p-3 rounded">
        <h5 class="mb-3">Model Setup</h5>
        <!-- Model Name -->
        <div class="mb-2">
          <label for="modelName">Model Name:</label>
          <input type="text" id="modelName" v-model="config.name" class="form-control" />
        </div>
        <TabulatorModel />
        <h5 class="mt-3">Config Group</h5>
        <div class="row">
          <div class="col-6 mb-2">
            <label>Variable Name Context (Gin):</label>
            <input type="text" v-model="config.ctx" class="form-control" />
          </div>
          <div class="col-6 mb-2">
            <label>Variable Name Transaction (Gorm):</label>
            <input type="text" v-model="config.tx" class="form-control" />
          </div>
          <div class="col-6 mb-2">
            <label>Variable Name Error (Golang):</label>
            <input type="text" v-model="config.err" class="form-control" />
          </div>
          <div class="col-6 mb-2">
            <label>Variable Name Request (Parameters):</label>
            <input type="text" v-model="config.requestVarName" class="form-control" />
          </div>
          <div class="col-6 mb-2">
            <label class="form-check-label">Include Underscore For Naming:</label>
            <input type="checkbox" v-model="config.setting" class="form-check-input" />
          </div>
          <div class="col-6 mb-2">
            <label class="form-check-label">Hans Framework:</label>
            <input type="checkbox" v-model="config.utils" class="form-check-input" />
          </div>
        </div>
      </div>
    </div>

    <!-- Checkbox Group 1 -->
    <div class="row mx-1 mt-3">
      <div class="col-12 bg-info p-3 rounded">
        <h5 class="mb-3">Tab Selection</h5>
        <div class="d-flex flex-wrap">
          <label
            v-for="(checked, tab) in tabs"
            :key="tab"
            class="form-check form-check-inline me-2"
          >
            <input
              type="checkbox"
              :value="tab"
              v-model="tabs[tab]"
              @change="emitToggle(tab, tabs[tab])"
              class="form-check-input"
            />
            <span class="form-check-label">{{ tab }}</span>
          </label>
        </div>
      </div>
    </div>

    <!-- Checkbox Group 2 -->
    <div class="row mx-1 mt-2">
      <div class="col-12 bg-info p-3 rounded">
        <h5 class="mb-3">Operations</h5>
        <div class="d-flex flex-wrap">
          <label
            v-for="(checked, operation) in operations"
            :key="operation"
            class="form-check form-check-inline me-2"
          >
            <input
              type="checkbox"
              :value="operation"
              v-model="operations[operation]"
              @change="emitToggle(operation, operations[operation])"
              class="form-check-input"
            />
            <span class="form-check-label">{{ operation }}</span>
          </label>
        </div>
      </div>
    </div>
  </div>

  <button class="btn btn-success me-1" @click="logData('success')">Test Variable Success</button>
</template>

<script>
import { computed } from 'vue'
import TabulatorModel from './tools/TabulatorModel.vue'
import { useGeneratorGolangStore } from '@/stores/GeneratorGolangStores'

export default {
  components: {
    TabulatorModel
  },
  setup() {
    const store = useGeneratorGolangStore()

    const config = computed(() => store.config)
    const tabs = computed(() => store.tabs)
    const operations = computed(() => store.operations)

    const logData = (status) => {
      console.log('Test Data:', {
        config: config.value,
        tabs: tabs.value,
        operations: operations.value
      })
    }

    const emitToggle = (key, value) => {
      if (key in tabs.value) {
        store.updateTab(key, value)
      } else if (key in operations.value) {
        store.updateOperation(key, value)
      }
    }

    return {
      config,
      tabs,
      operations,
      logData,
      emitToggle
    }
  }
}
</script>

<style scoped>
/* Additional styles for better spacing and layout */
.bg-light {
  background-color: #f8f9fa !important;
}

.form-check-inline {
  margin-right: 10px; /* Adjust spacing between checkboxes */
}

h5 {
  font-weight: bold;
  margin-bottom: 10px;
}
</style>
