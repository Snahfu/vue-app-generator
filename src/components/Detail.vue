<template>
  <div>
    <!-- Tab Section -->
    <ul class="nav nav-tabs">
      <li class="nav-item" v-for="(isActive, tab) in tabs" :key="tab">
        <a
          class="nav-link"
          :class="{ active: activeTab === tab }"
          href="#"
          @click.prevent="selectTab(tab)"
        >
          {{ tab }}
        </a>
      </li>
    </ul>

    <!-- Tab Content -->
    <div class="tab-content mt-3">
      <div v-if="activeTab === 'Model'">
        <h2>Model Details</h2>
        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <label class="form-label">Field Name:</label>
            <input class="form-control" v-model="localData.fieldName" />
          </div>
          <div class="mb-3">
            <label class="form-label">Data Type:</label>
            <input class="form-control" v-model="localData.dataType" />
          </div>
          <button class="btn btn-primary" type="submit">Save</button>
        </form>
      </div>
      <div v-if="activeTab === 'Repository'">
        <h2>Repository Details</h2>
        <!-- Add Repository specific form fields here -->
      </div>
      <div v-if="activeTab === 'Controller'">
        <h2>Controller Details</h2>
        <!-- Add Controller specific form fields here -->
      </div>
      <!-- Add other tab contents similarly -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    activeTab: {
      type: String,
      required: true
    },
    savedData: {
      type: Object,
      required: true
    },
    tabs: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localData: { ...this.savedData }
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('saveData', this.localData)
    },
    selectTab(tab) {
      this.$emit('updateActiveTab', tab)
    }
  },
  watch: {
    savedData: {
      handler(newData) {
        this.localData = { ...newData }
      },
      deep: true
    }
  }
}
</script>

<style scoped>
/* Additional styles for better spacing and layout */
.nav-tabs {
  margin-bottom: 15px;
}

.nav-link {
  cursor: pointer;
}

.tab-content {
  border: 1px solid #dee2e6;
  padding: 15px;
  border-radius: 5px;
  background-color: #f8f9fa;
}
</style>
