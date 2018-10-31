import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import Routes from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
});

Vue.config.productionTip = false;

Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + "...";
});

new Vue({
  render: h => h(App),
  router
}).$mount('#app');
