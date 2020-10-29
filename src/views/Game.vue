<template>
    <div v-if="dictionary && categories" class="game-wrapper">
      <div class="info">{{dictionary[language].GAME_GOAL}}</div>

      <category v-on:categoryChange="onCategoryChange"></category>  

      <stats 
          v-bind:time   = "time"
          v-bind:clicks = "clicks"
          v-bind:fails  = "fails" >
      </stats>
    
      <keep-alive>
        <board
          v-bind:folder = "category.folder"
          v-bind:resetBoard = "resetBoard"
          v-on:statsChange = "onStatsChange"
          v-on:gameOver = "onGameOver">
        </board>
      </keep-alive>

      <a href="#" class="btn start-over" v-on:click="reset">{{dictionary[language].START_OVER}}</a>
    </div>  
</template> 

<script>
import Category      from '../components/Category';
import Stats         from '../components/Stats';
import Board         from '../components/Board';

export default {
  components: {
    category: Category,
    stats: Stats,
    board: Board
  },
  
  data() {
    return {
      clicks: 0,
      time: '',
      fails: 0,
      category: {},
      board : [],
      resetBoard: -1
    }
  },

  methods: {

    refreshTimer() {
     this.intervalId = setInterval(() => {
        if (this.over){
          clearInterval(this.intervalId);
        }else{
          this.seconds++;
          let minutes = Math.floor(this.seconds / this.secondsInAMinute);
          let seconds = this.seconds % this.secondsInAMinute + 's';
          this.time =  minutes ? minutes + 'm '  + seconds : seconds;
        }
      }, 1000);
    },

    reset() {
      this.secondsInAMinute = 60;
      this.clicks = 0;
      this.seconds = 0;
      this.fails = 0;
      this.over = false;
      if (this.intervalId){
        clearInterval(this.intervalId);
      }
      this.refreshTimer();
      this.resetBoard++;
    },

    onCategoryChange(category) {
      this.category = category;
      this.reset();
    },

    onStatsChange({clicks, fails}) {
      this.clicks = clicks;
      this.fails  = fails;
    },

    onGameOver(board) {
      this.over = true;
      this.board = board;
      this.saveGame();
    },

    saveGame() {
        this.$store.dispatch('addGame', {
          time       : this.time,
          clicks     : this.clicks,
          fails      : this.fails,
          categoryId : this.category.categoryId,
          folder     : this.category.folder,
          board      : this.board
        });
    }
  },

  computed: {
    language() {
      return this.$store.getters.getLanguage();
    },

    dictionary() {
      return this.$store.getters.getDictionary;
    },

    categories() {
      return this.$store.getters.getCategories;
    }    
  }

};
</script>