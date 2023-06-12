import { createApp } from 'vue'
import App from './App.vue'
// import VueGoodTable from '../dist/vue-good-table.esm';
// import '../dist/vue-good-table-draggable-next.css';
import VueGoodTable from '../src';

const app = createApp(App)
app.use(VueGoodTable);
// app.config.productionTip = false;

app.mount('#app');
