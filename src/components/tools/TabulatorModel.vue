<template>
  <div>
    <h5 class="mb-3">Tabulator Model</h5>
    <button class="btn btn-secondary mb-2 me-2" @click="addRow">Add Row</button>
    <button class="btn btn-secondary mb-2 me-2" @click="clearTable">Remove All Rows</button>
    <button class="btn btn-secondary mb-2 me-2" @click="consoleTable">Check Value</button>
    <div id="tabulator-table"></div>
  </div>
</template>

<script>
import { onMounted, ref, watch } from 'vue'
import { TabulatorFull as Tabulator } from 'tabulator-tables'
import 'tabulator-tables/dist/css/tabulator.min.css'
import { useGeneratorGolangStore } from '@/stores/GeneratorGolangStores'

export default {
  setup() {
    const store = useGeneratorGolangStore()
    const table = ref(null)

    const initializeTable = () => {
      table.value = new Tabulator('#tabulator-table', {
        data: store.modelAttributes,
        layout: 'fitColumns',
        reactiveData: true,
        selectableRange: true,
        editTriggerEvent: 'dblclick',
        columns: [
          {
            title: 'Name',
            field: 'name',
            editor: 'input',
            hozAlign: 'center',
            vertAlign: 'middle',
            headerHozAlign: 'center',
            headerSort: false
          },
          {
            title: 'Type',
            field: 'type',
            hozAlign: 'center',
            vertAlign: 'middle',
            headerHozAlign: 'center',
            headerSort: false,
            editor: 'list',
            editorParams: {
              values: {
                bool: 'Boolean',
                char: 'Varchar',
                string: 'Text',
                date: 'Date',
                time: 'Time',
                int64: 'Integer',
                float64: 'Decimal',
                enum: 'Enum'
              },
              autocomplete: true,
              listOnEmpty: true,
              clearable: true
            },
            formatter: 'lookup',
            formatterParams: {
              bool: 'Boolean',
              char: 'Varchar',
              string: 'Text',
              date: 'Date',
              time: 'Time',
              int64: 'Integer',
              float64: 'Decimal',
              enum: 'Enum'
            }
          },
          {
            title: 'Value',
            field: 'value',
            hozAlign: 'center',
            vertAlign: 'middle',
            headerHozAlign: 'center',
            headerSort: false,
            editor: 'input'
          },
          {
            title: 'Primary',
            field: 'primary',
            hozAlign: 'center',
            vertAlign: 'middle',
            headerHozAlign: 'center',
            headerSort: false,
            editor: 'list',
            editorParams: {
              values: {
                true: 'Yes',
                false: 'No'
              },
              autocomplete: true,
              listOnEmpty: true,
              clearable: true
            },
            formatter: 'lookup',
            formatterParams: {
              true: 'Yes',
              false: 'No'
            }
          },
          {
            title: 'Column Name',
            field: 'columnName',
            editor: 'input',
            hozAlign: 'center',
            vertAlign: 'middle',
            headerHozAlign: 'center',
            headerSort: false
          },
          {
            title: 'JSON',
            field: 'json',
            editor: 'input',
            hozAlign: 'center',
            vertAlign: 'middle',
            headerHozAlign: 'center',
            headerSort: false
          },
          {
            title: 'Omitable',
            field: 'omitable',
            hozAlign: 'center',
            vertAlign: 'middle',
            headerHozAlign: 'center',
            headerSort: false,
            editor: 'list',
            editorParams: {
              values: {
                true: 'Yes',
                false: 'No'
              },
              autocomplete: true,
              listOnEmpty: true,
              clearable: true
            },
            formatter: 'lookup',
            formatterParams: {
              true: 'Yes',
              false: 'No'
            }
          },
          {
            title: 'Action',
            hozAlign: 'center',
            vertAlign: 'middle',
            headerHozAlign: 'center',
            headerSort: false,
            formatter: () => '<button>Delete</button>',
            cellClick: (e, cell) => {
              var row = cell.getRow()
              table.value.deleteRow(row)
            }
          }
        ],
        dataLoaded: () => {
          store.modelAttributes = table.value.getData()
        },
        dataEdited: () => {
          store.modelAttributes = table.value.getData()
        }
      })
    }

    const addRow = () => {
      table.value.addRow({
        value: '',
        type: 'string',
        primary: 'false',
        omitable: 'false',
        json: '',
        columnName: '',
        name: ''
      })

      store.modelAttributes = table.value.getData()
    }

    const clearTable = () => {
      table.value.clearData()
      store.modelAttributes = []
    }

    const consoleTable = () => {
      console.log(store.modelAttributes)
    }

    onMounted(() => {
      initializeTable()
    })

    watch(
      () => store.modelAttributes,
      (newData) => {
        if (table.value) {
          table.value.setData(newData)
        }
      },
      { deep: true }
    )

    return {
      addRow,
      clearTable,
      consoleTable
    }
  }
}
</script>

<style scoped></style>
