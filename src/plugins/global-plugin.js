import Swal from 'sweetalert2'
import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export default {
  install(app) {
    app.config.globalProperties.$swal = Swal

    app.config.globalProperties.$toastify = Toastify
  }
}
