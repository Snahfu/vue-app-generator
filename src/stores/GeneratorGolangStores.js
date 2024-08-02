import { defineStore } from 'pinia'

export const useGeneratorGolangStore = defineStore('generateGolang', {
  state: () => ({
    modelAttributes: [],
    config: {
      name: '',
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
  }),
  actions: {
    updateConfig(key, value) {
      this.config[key] = value
    },
    updateOperation(key, value) {
      this.operations[key] = value
    },
    updateTab(key, value) {
      this.tabs[key] = value
    }
  }
})
