import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from './filters/date.filter'
import currencyFilter from './filters/currency.filter'
import messageplugin from './utils/message.plugin'
import Loader from './components/app/Loader'
import 'materialize-css/dist/js/materialize.min'
import './registerServiceWorker'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messageplugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)

firebase.initializeApp({
  apiKey: 'AIzaSyBmrFbuq6wB03OXfU3i7fnBpagecRQXEn4',
  authDomain: 'vue-practice-13.firebaseapp.com',
  databaseURL: 'https://vue-practice-13-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'vue-practice-13',
  storageBucket: 'vue-practice-13.appspot.com',
  messagingSenderId: '971445363815',
  appId: '1:971445363815:web:91150cc231559decdba0c2',
  measurementId: 'G-ZGR1Y2ZKSD'
})

let app
firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
