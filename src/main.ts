import { createApp } from 'vue'
import App from './App.vue'
import router from "./views/router";
import "virtual:windi.css";
import "../public/assets/style/basic.css";


const app = createApp(App)
app.use( router );

app.mount('#app')
