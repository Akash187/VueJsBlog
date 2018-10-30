import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

// Vue.directive('rainbow', {
//   bind(el, binding, vnode){
//     el.style.color = "#" + Math.random().toString().slice(2,8);
//   }
// });
//
// Vue.filter('to-uppercase', function (value) {
//   return value.toUpperCase();
// });

Vue.filter('snippet', function (value) {
  return value.slice(0, 100) + "...";
});

new Vue({
  render: h => h(App)
}).$mount('#app');
