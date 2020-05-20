import TimerComponent from './TimerComponent.vue'

function install(Vue) {
  if (install.installed) return
  install.installed = true
  Vue.component('TimerComponent', TimerComponent)
}

const plugin = {
  install,
}

let GlobalVue = null
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue
} else if (typeof global !== 'undefined') {
  GlobalVue = global.vue
}

if (GlobalVue) {
  GlobalVue.use(plugin)
}

TimerComponent.install = install

export default TimerComponent
