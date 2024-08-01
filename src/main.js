import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router';
import store from './store';

App.use(router);
App.use(store);

createApp(App).mount('#app')


