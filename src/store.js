import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    games: [],
    language: 0,
    dictionary: '',
    categories: ''
  },

  getters: {
    getGame: (state) => {
      return id => {
        return state.games.find((game) => { return game.id == id});
      }
    },

    getGames: (state) => {
      return state.games;
    },

    getLanguage: (state) => {
      return () => {
        return state.language;
      }
    },

    getCategories: (state) => {
      return state.categories;
    },

    getDictionary: (state) => {
      return state.dictionary;
    }
  },

  mutations: {
    setLanguage(state, language){
      state.language = language;
    },

    loadGames(state) {
      if (typeof(Storage) !== "undefined") {
        let games;
        if (localStorage.matchingpairs) {
          games = JSON.parse(localStorage.matchingpairs);
          this.replaceState(Object.assign(state, {games} ));
        }
      }
    },

    setDictionary(state, dictionary){
      state.dictionary = dictionary;
    },

    setCategories(state, categories){
      state.categories = categories;
    },

    addGame(state, game){
      game.id = state.games.length ? state.games[state.games.length - 1].id + 1 : 0;
      state.games.push(game);
      localStorage.matchingpairs = JSON.stringify(state.games);
    },

    removeGame(state, id){
      let gamesNumber = state.games.length;
      if (gamesNumber > 0){
        state.games = state.games.filter((game) =>{
          return game.id != id
        });
        if (gamesNumber > state.games.length){
          localStorage.matchingpairs = JSON.stringify(state.games);
        }        
      }  
    }
  },

  actions: {
    setLanguage(context, language){
      context.commit('setLanguage', language);
    },

    loadGames(context){
      context.commit('loadGames');
    },

    loadDictionary(context){
      Vue.http.get('https://matching-pairs-b62ac.firebaseio.com/dictionary.json')
        .then(res => {
          context.commit('setDictionary', res.body);
        })
    },

    loadCategories(context){
      Vue.http.get('categories.json')
        .then(res => {
          context.commit('setCategories', res.body);
        })
    },

    addGame: (context, game) => {
      context.commit('addGame', game);
    },

    removeGame: (context, id) => {
      context.commit('removeGame',id);
    }
  }

})
