import Vue from 'vue'
import Router from 'vue-router'
import Game from './views/Game.vue'
import History from './views/History.vue'
import Repository from './views/Repository.vue'
import About from './views/About.vue'
import Contact from './views/Contact.vue'
import GameHistory from './views/GameHistory.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Game',
      component: Game
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/repository',
      name: 'Repository',
      component: Repository
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },

    { path: '/game',
      name: 'GameHistory',
      component: GameHistory,
      beforeEnter: (to, from, next) => {
        if (typeof(to.params.id) !== undefined){
          next();
        }else{
          next({ name: 'Game'});
        }
      }
    }
  ]
})