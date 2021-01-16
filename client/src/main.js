// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'
import router from './router.js'
import Vuetify from 'vuetify'
import Layout from './components/layout.vue'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  vuetify: new Vuetify({}),

  components: { App },
  template: '<App/>'
})

// Vue.use(Vuetify)

// const app = new Vue({
//   el: '#app',
//   vuetify: new Vuetify({}),
//   router: router,
//   components: { Layout },
// })

export default new Vuetify(app)

// // require('./bootstrap');
// import Vue from 'vue'
// import Router from './router.js'

// Vue.use(Vuetify)

// const app = new Vue({
//   el: '#app',
//   vuetify: new Vuetify({}),
//   router: Router,
//   components: { Layout }
// })

