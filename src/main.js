import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource);

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    this.$store.dispatch('loadGames');
    this.$store.dispatch('loadDictionary');
    this.$store.dispatch('loadCategories');
	}
}).$mount('#wrapper');

router.beforeEach((to, from, next) => {
  document.querySelector('input#menu').checked = false;
  next();
});
