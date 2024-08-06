import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './components/router'

/**
 * Creates and mounts the Vue application.
 */
const app = createApp(App)

/**
 * Uses the Vue Router for the application.
 */
app.use(router);


/**
 * Mounts the Vue application to the DOM element with the id 'app'.
 */
app.mount('#app');