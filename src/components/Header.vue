<template>
  <div class="container-fluid mb-2">
    <!-- Header Section -->
    <div class="row mx-1">
      <nav class="navbar navbar-light bg-info">
        <div class="container-fluid justify-content-between">
          <div class="d-flex justify-content-start">
            <button class="btn btn-light me-1">
              <span class="h5">Proceed</span>
            </button>
          </div>
          <div class="d-flex justify-content-end">
            <div class="navbar-text">
              <button class="btn btn-light">
                <span class="text-black h5">Hi</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
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
</template>

<script>
export default {
  data() {
    return {
      tabs: {
        Model: true,
        Repository: false,
        Controller: false,
        Service: false,
        Router: false,
        Views: false,
        Params: false
      },
      operations: {
        GetAll: false,
        GetByID: false,
        GetByName: false,
        Update: false,
        Create: false,
        SoftDeleteByID: false,
        DeleteByID: false,
        SoftDeleteByName: false,
        DeleteByName: false
      }
    }
  },
  methods: {
    emitToggle(item, isChecked) {
      this.$emit('toggleItem', item, isChecked)
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
