/**
 * Created by Stevenzwzhai on 2017/4/4.
 */
import Vue from 'vue'

import App from './App.vue'

new Vue({
    render:h=>h(App)
}).$mount('#app');
console.log('this is main.js');

document.write(`
    <script src="http://${(location.host||'localhost').split(':')[0]}:35729/livereload.js?snipver=1"></script>
`);