require('./bootstrap');

import { createApp, h } from 'vue';
import { createInertiaApp, Link } from '@inertiajs/inertia-vue3'; 
import { InertiaProgress } from '@inertiajs/progress';

createInertiaApp({ 
    resolve: name => require(`./Pages/${name}`), 
    setup({ el, App, props, plugin }) { 
        createApp({ render: () => h(App, props) }) 
            .mixin({
                methods: {route}
            })
            .use(plugin) 
            .component('InertiaLink', Link)
            .mount(el) 
    }, 
})

InertiaProgress.init({
    // The delay after which the progress bar will
    // appear during navigation, in milliseconds.
    delay: 1,
  
    // The color of the progress bar.
    color: '#29d',
  
    // Whether to include the default NProgress styles.
    includeCSS: true,
  
    // Whether the NProgress spinner will be shown.
    showSpinner: true,
});