import { createApp } from 'vue';
import App from './App.vue';
import { createI18n } from 'vue-i18n';  // Importation pour Vue 3

import fr from './locales/fr.json';
import en from './locales/en.json';

const i18n = createI18n({
    locale: localStorage.getItem('language') || navigator.language.substr(0,2),
    messages: {
        fr,
        en
    }
});

createApp(App)
    .use(i18n)  // Utiliser Vue I18n
    .mount('#app');
