import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6KHFl7xz0GyyvU9M0PALHlJZYQVmF1Y8",
  authDomain: "book-search-2f610.firebaseapp.com",
  projectId: "book-search-2f610",
  storageBucket: "book-search-2f610.appspot.com",
  messagingSenderId: "145961343974",
  appId: "1:145961343974:web:7190b36380cab8f70b1427",
  measurementId: "G-B42N5GMCMB"
};

firebase.initializeApp(firebaseConfig);


Vue.prototype.$axios = axios;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
