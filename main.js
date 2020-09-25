import Vue from 'vue'
import App from './App'
const F2 = require('@antv/f2')
import mckouWeather from '@/components/mckou-weather/mckouWeather.vue'

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
