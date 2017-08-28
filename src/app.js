import Vue from 'vue'
import app from './app.vue'
import iView from 'iview';
import 'minireset.css'
import 'iview/dist/styles/iview.css';
import router from './route/index'
Vue.use(iView)
var vm = new Vue({
    el:"#index",
    router,
    render: h => h(app)
})