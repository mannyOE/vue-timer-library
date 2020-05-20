import Vue from 'vue'
import App from './App.vue'
import simpleVueTimer from './TimerComponent'

Vue.config.productionTip = false
Vue.component('svt', simpleVueTimer)
new Vue({
  render: function(h) {
    return h(App)
  },
}).$mount('#app')
