<template>
  <div class="container-fluid mb-2">
    <!-- Model Setup Placeholder -->
    <div class="row mx-1">
      <div class="col-12 bg-info p-3 rounded">
        <h5 class="mb-3">Model Setup</h5>
        <!-- Model Name -->
        <div class="mb-2">
          <label for="modelName">Model Name:</label>
          <input type="text" id="modelName" v-model="model.name" class="form-control" />
        </div>
        <TabulatorModel />
        <!-- Model Attributes -->
        <!-- <div v-for="(attribute, index) in model.attributes" :key="index" class="row mb-2">
          <div class="col-5">
            <label :for="'attributeName' + index">Attribute Name:</label>
            <input
              type="text"
              :id="'attributeName' + index"
              v-model="attribute.name"
              class="form-control"
            />
          </div>
          <div class="col-5">
            <label :for="'attributeType' + index">Attribute Type:</label>
            <input
              type="text"
              :id="'attributeType' + index"
              v-model="attribute.type"
              class="form-control"
            />
          </div>
          <div class="col-2 d-flex align-items-end">
            <button class="btn btn-danger" @click="removeAttribute(index)">Remove</button>
          </div>
        </div>
        <button class="btn btn-secondary" @click="addAttribute">Add Attribute</button> -->
      </div>
    </div>

    <!-- Config Group -->
    <div class="row mx-1 mt-2">
      <div class="col-12 bg-info p-3 rounded">
        <h5 class="mb3">Config Group</h5>
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
import TabulatorModel from './tools/TabulatorModel.vue'

export default {
  components: {
    TabulatorModel
  },
  data() {
    return {
      model: {
        name: '',
        attributes: []
      },
      config: {
        ctx: '',
        tx: '',
        err: '',
        requestVarName: '',
        setting: false,
        utils: false
      },
      tabs: {
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
    },
    logData(type) {
      console.log(`Tabs (${type}):`, this.tabs)
      console.log(`Operations (${type}):`, this.operations)
      console.log(`Config (${type}):`, this.config)
      console.log(`Model (${type}):`, this.model)
    },
    addAttribute() {
      this.model.attributes.push({ name: '', type: '' })
    },
    removeAttribute(index) {
      this.model.attributes.splice(index, 1)
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
