import Vue from 'vue'
import App from './App.vue'
import sfButton from './components/button.vue'
import './style/font/iconfont.scss'

Vue.component(sfButton.name, sfButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
