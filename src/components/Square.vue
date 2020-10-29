<template>
  <div
       v-bind:class="{showcard: show, disabled:disabled}" 
       v-bind:style="{backgroundImage}"
       v-on:click="clickHandler">
  </div>
</template>

<script>

export default {
  props: {
    image: Number,
    square: Number,
    show: Boolean,
    disabled: Boolean,
    folder: String
  },

  computed: {
    backgroundImage() {
      const imageFolder = "https://firebasestorage.googleapis.com/v0/b/puzzle-ebd10.appspot.com/o/images%2F";
      return `url(${imageFolder}${this.folder}%2F${this.image}.jpg?alt=media), url(${imageFolder}square.jpg?alt=media)`;
    }
  },

  methods: {
    clickHandler() {
      this.$emit('squareClicked',this.square);
    }
  }

}
</script>

<style scoped>
div{
  width: 24%;
  display: inline-block;
  border: 1px solid green;
  background-size: 100% 100%;
  background-position: -300px, top left;
  background-repeat: no-repeat, no-repeat;
  background-color: green;  
}

div:after{
  content: "";
  display: block;
  padding-bottom: 100%;
}

.showcard{
  background-position: initial;
}

.disabled{
  pointer-events:none;
  animation: showcard 1s;  
}
 
@keyframes showcard{
  from{opacity: 1  }
  to  {opacity: 0.5}
}
</style>