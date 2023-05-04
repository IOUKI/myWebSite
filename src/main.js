import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/router'

// vanta.js
import "./modules/vanta/three.min.js"
import "./modules/vanta/vanta.globe.min.js"
import "./modules/vanta/vanta.fog.min.js"
import "./modules/vanta/vanta.net.min.js"

import Aos from 'aos'
import "aos/dist/aos.css"

const app = createApp(App)

app.use(router)
app.use(Aos.init({}))

app.mount('#app')
