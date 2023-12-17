import { createApp } from 'vue'
import './style.scss'
import App from './App.vue'
import { MotionPlugin } from '@vueuse/motion'

createApp(App).use(MotionPlugin).mount('#app')
