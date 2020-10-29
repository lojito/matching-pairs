<template>
  <div v-if="folder" class="board">
    <template v-for="(image, square) in board">
      <square 
          v-bind:key         = "square"
          v-bind:image       = "image.name"
          v-bind:square      = "square"
          v-bind:show        = "image.show"
          v-bind:disabled    = "image.disabled"
          v-bind:folder      = "folder"
          v-on:squareClicked = "onSquareClicked">
      </square>
    </template>
  </div> 
</template>

<script>
import Square from './Square';

export default{
  components: {
    square: Square
  },
  
  data(){
    return {
      board : []
    }
  },

  props: {
    boardHistory : Array,
    folder: String,
    resetBoard: Number,
    history: Number
  },

  watch: {
    'resetBoard'() {
      if (this.resetBoard > 0) {
        this.reset();
      }  
    }
  },

  methods: {

    shuffleImages() {
      let images = [];
      let image;
      const imagesPerCategory = 20;

      for (let i = 0; i < this.totalSquares/2; i++){
        image = Math.floor(Math.random() * imagesPerCategory);
        while (images.indexOf(image) != -1){
          image = Math.floor(Math.random() * imagesPerCategory);
        }
        images.push(image);
      }
      return images;
    },

    shuffleBoard() {
      let board = [];
      let square;
      let images;

      images = this.shuffleImages();
      for (let i = 0; i < images.length; i++){
        for (let j = 0; j < 2; j++){
          square = Math.floor(Math.random() * this.totalSquares);
          while (square in board){
            square = Math.floor(Math.random() * this.totalSquares);
          }
          board[square] = {
            name : images[i],
            show : false,
            disabled : false
          }
        }
      }
      this.board = board;
    },

    reset() {
      this.moves = 0;
      this.fails = 0;
      this.clicks = 0;
      this.guessed = 0;
      this.totalSquares = 16;
      this.squares = [];
      this.shuffleBoard();
    },

    compareSquares(square1, square2) {
        return (this.board[square1].name === this.board[square2].name);
    },

    showSquare(square) {
      this.board[square].show = true;
    },

    hideSquare(square) {
      this.board[square].show = false;
    },

    hideSquares(square1, square2) {
      this.hideSquare(square1);
      this.hideSquare(square2);
    },

    enableSquare(square) {
      this.board[square].disabled = false;
    },

    enableSquares(square1, square2) {
      this.enableSquare(square1);
      this.enableSquare(square2);
    },

    disableSquare(square) {
      this.board[square].disabled = true;
    },

    disableSquares(square1, square2) {
      this.disableSquare(square1);
      this.disableSquare(square2);
    },

    gameOver() {
      if (this.guessed == this.totalSquares) {
        let board = [];
        for (let i = 0; i < this.totalSquares; i++) {
          board[i] = this.board[i].name;
        }
        this.$emit('gameOver', board);
      }
    },

    onSquareClicked(square) {
      this.disableSquare(square);
      this.showSquare(square);
      this.clicks++;
      this.squares.push(square);
      if (this.squares.length == 2) {
        let square1 = this.squares[0];
        let square2 = this.squares[1];
        if (this.compareSquares(square1, square2)) {
          this.disableSquares(square1, square2);
          this.guessed += 2;
          this.squares = [];
        } else {
          this.fails++;
          window.setTimeout(() => {
            this.hideSquares(square1, square2);
            this.enableSquares(square1, square2);
            this.squares = [];
          },300);
        }
      }
      this.$emit('statsChange', {clicks: this.clicks, fails: this.fails});
      this.gameOver();
    }

  },

  created() {
    if (this.history == undefined) {
      this.reset();
    }
  } 

}  
</script>

<style scoped>
.board{
  width: 100%;
  text-align: center;
  margin: 0 auto;
  font-size: 0;
}
</style>