<template>
  <div class="board">
    <template v-for="(image, square) in board">
      <square-history
          v-bind:key      = "square"
          v-bind:image    = "image"
          v-bind:folder   = "folder" >
      </square-history>
    </template>
  </div>  
</template>

<script>
import SquareHistory from './SquareHistory';

export default{
  components: {
    'square-history': SquareHistory
  },
  
  props: {
    board : Array,
    folder: String,
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

