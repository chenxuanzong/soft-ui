import Vue from 'vue'
import App from './App.vue'
import sfButton from './components/button.vue'
import sfDialog from './components/dialog.vue'
import sfInput from './components/input.vue'
import sfSwitch from './components/switch.vue'
import './style/font/iconfont.scss'

Vue.component(sfButton.name, sfButton)
Vue.component(sfDialog.name, sfDialog)
Vue.component(sfInput.name, sfInput)
Vue.component(sfSwitch.name, sfSwitch)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
