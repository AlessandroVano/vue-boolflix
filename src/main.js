import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import 'bootstrap/scss/bootstrap.scss';
import './styles/globals.scss'
new Vue({
  render: h => h(App),
}).$mount('#app')
