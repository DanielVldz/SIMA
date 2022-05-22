import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'custom-crud'
]
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use( VueAxios, Axios)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  el:"#app",
  router,
  store,
  render: h => h(App),
  methods:{
    onLoadCrud: async function (tag,callback) {
      console.log('weps')
      let innerHtml = await callback()
      console.log(innerHtml)
      console.log(this.$el.querySelector(tag))
      this.$el.querySelector(tag).innerText = innerHtml;

  }
  }
});
