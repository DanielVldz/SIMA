import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import {registerToken} from "../firebase";
// asset imports
import MaterialDashboard from "./material-dashboard";
import Chartist from "chartist";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



registerToken()
navigator.serviceWorker.register('firebase-messaging-sw.js', {scope: "firebase-cloud-messaging-push-scope"})

Vue.prototype.$Chartist = Chartist;

Vue.config.productionTip = false
Vue.config.ignoredElements = [
  'custom-crud'
]
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(MaterialDashboard);
Vue.use( VueAxios, Axios)
store.subscribe((mutation, state) => {
  console.log('chaging state',state,mutation)
	// Store the state object as a JSON string
	localStorage.setItem('store', JSON.stringify(state));
});


new Vue({
  el:"#app",
  router,
  store,
  render: h => h(App),
  beforeCreate() {
		this.$store.commit('initialiseStore');
	}
});
