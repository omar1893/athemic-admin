import './styles.css';
import 'primeicons/primeicons.css';
import './styles/main.scss';

import { createApp } from 'vue';
import PrimeVue from 'primevue/config';
import { createPinia } from 'pinia';
import { PiniaColada } from '@pinia/colada';

import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';

import primeVueTheme from './prime-vue-theme';

import router from './router';
import App from './App.vue';

const app = createApp(App);

app.use(PrimeVue, {
    theme: primeVueTheme,
});

app.use(ToastService);
app.directive('tooltip', Tooltip);

app.use(createPinia());
app.use(PiniaColada, {});

app.use(router);
app.mount('#app');
