import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'

const app = createApp(App)

app.use(vue3GoogleLogin, {
  clientId: '451369076473-95vtql6937n297ck4e6dp94h6dr62tq6.apps.googleusercontent.com'
})

app.mount('#app')
