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
    tabs: [
      {
        name: 'Repository',
        isActive: false,
        isShown: false,
        desc: 'Hi',
        position: null
      },
      {
        name: 'Service',
        isActive: false,
        isShown: false,
        desc: 'Hi',
        position: null
      },
      {
        name: 'Controller',
        isActive: false,
        isShown: false,
        desc: 'Hi',
        position: null
      },
      {
        name: 'Router',
        isActive: false,
        isShown: false,
        desc: 'Hi',
        position: null
      },
      {
        name: 'Views',
        isActive: false,
        isShown: false,
        desc: 'Hi',
        position: null
      },
      {
        name: 'Params',
        isActive: false,
        isShown: false,
        desc: 'Hi',
        position: null
      },
      {
        name: 'Models',
        isActive: false,
        isShown: false,
        desc: 'Hi',
        position: null
      },
      {
        name: 'Vue Front End',
        isActive: false,
        isShown: false,
        desc: 'Hi',
        position: null
      }
    ],
    nextShowOrder: 1,
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
    toggleTabIsShown(index) {
      if (index >= 0 && index < this.tabs.length) {
        var currentTab = this.tabs[index]
        if (currentTab.isShown) {
          currentTab.isShown = false
          if (currentTab.isActive) {
            var tempTab = this.tabs
              .filter((tab) => tab.isShown === true)
              .sort((a, b) => a.position - b.position)
            if (tempTab.length > 0) {
              this.toggleTabIsActive(tempTab[0].name)
            } else {
              this.toggleTabIsActive(null)
            }
          }
          currentTab.position = null
        } else {
          if (this.tabs.filter((tab) => tab.isShown).length == 0) {
            this.toggleTabIsActive(currentTab.name)
          }
          currentTab.isShown = true
          currentTab.position = this.nextShowOrder++
        }
      } else {
        console.log('Error Invalid index')
      }
    },

    toggleTabIsActive(name) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === name
      })
    },

    closeTab(name) {
      var currentTab = this.tabs.find((tab) => tab.name === name)
      if (currentTab) {
        currentTab.isShown = false
        if (currentTab.isActive) {
          var tempTab = this.tabs
            .filter((tab) => tab.isShown === true)
            .sort((a, b) => a.position - b.position)
          if (tempTab.length > 0) {
            this.toggleTabIsActive(tempTab[0].name)
          } else {
            this.toggleTabIsActive(null)
          }
        }
        currentTab.position = null
      } else {
        console.log('Error Invalid name')
      }
    },

    updateConfig(key, value) {
      this.config[key] = value
    },
    updateOperation(key, value) {
      this.operations[key] = value
    }
  }
})
