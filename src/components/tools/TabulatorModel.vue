<template>
  <h5 class="mb-3">Tabulator Model</h5>
  <!-- Add Row Button -->
  <button class="btn btn-secondary mb-2" @click="addRow">Add Row</button>
  <!-- Tabulator Table -->
  <div id="tabulator-table"></div>
</template>

<script>
import { TabulatorFull as Tabulator } from 'tabulator-tables'
import 'tabulator-tables/dist/css/tabulator.min.css'

export default {
  data() {
    return {
      table: null,
      data: [] // This will hold our table data
    }
  },
  methods: {
    addRow() {
      // Add a new empty row to the table data
      this.data.push({
        value: '',
        type: '',
        primary: false,
        omitable: false,
        json: '',
        params: '',
        name: ''
      })
    },
    removeRow(row) {
      // Remove the specified row from the table data
      const index = this.data.indexOf(row)
      if (index > 0) {
        this.data.splice(index, 1)
      }
    }
  },
  mounted() {
    this.table = new Tabulator('#tabulator-table', {
      data: this.data, // Link to our data array
      layout: 'fitColumns',
      reactiveData: true, // Enable reactive data
      columns: [
        { title: 'Value', field: 'value', editor: 'input' },
        { title: 'Type', field: 'type', editor: 'input' },
        { title: 'Primary', field: 'primary', formatter: 'tickCross', editor: true },
        { title: 'Omitable', field: 'omitable', formatter: 'tickCross', editor: true },
        { title: 'JSON', field: 'json', editor: 'input' },
        { title: 'Params', field: 'params', editor: 'input' },
        { title: 'Name', field: 'name', editor: 'input' },
        {
          title: 'Action',
          formatter: () => '<button>Delete</button>',
          align: 'center',
          cellClick: (e, cell) => {
            this.removeRow(cell.getRow().getData())
          }
        }
      ]
    })
  }
}
</script>

<style scoped></style>
