import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'

// vanta.js
import "./modules/vanta/three.min.js"
import "./modules/vanta/vanta.birds.min.js"

const app = createApp(App)

app.use(router)

app.mount('#app')
