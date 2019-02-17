import Vue from 'vue'
import App from './App.vue'
import router from './router'

import './plugins/element.js'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBook,faGlasses,faThLarge,faBriefcase,faCalendarAlt,faPhone,faEnvelope,faCode,faUser,faProjectDiagram,faBars,faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBook,faGlasses,faThLarge,faBriefcase,faCalendarAlt,faPhone,faEnvelope,faCode,faUser,faProjectDiagram,faBars,faFileAlt)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
