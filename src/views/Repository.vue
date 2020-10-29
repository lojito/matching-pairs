<template>
  <div class="repository">
    <category v-on:categoryChange="onCategoryChange"></category>

    <div class="repository-images">  
        <div v-bind:key="index" v-for="(i, index) in this.arrayTemp">        
          <img v-bind:src="backgroundImage(index)" alt="user" />
        </div>
    </div>

  </div>
</template> 

<script>
import Category  from '../components/Category';

export default {

  components: {
    category: Category
  },

  data() {
    return {
      publicPath: process.env.BASE_URL,
      category: {},
      arrayTemp: []
    }
  },

  methods: {
    onCategoryChange(category) {
      const imagesPerCategory = 20;
      this.category = category;
      this.arrayTemp = Array(imagesPerCategory).fill(1);
    },

    backgroundImage(image){
     return `https://firebasestorage.googleapis.com/v0/b/puzzle-ebd10.appspot.com/o/images%2F${this.category.folder}%2F${image}.jpg?alt=media`
    }

  }
}
</script>

<style scoped>
.repository {
  padding-top: 10px;
}

.repository-images {
  margin-top: 20px;
}

.repository-images div{
  width: 23.75%;
  display: inline-block;
  margin-right: 1%;
}

.repository-images div:nth-child(4n+1){
  margin-left: 1%;
}

.repository-images div img{
  max-width: 100%;
}

@media screen and (max-width: 500px) {

  .repository-images div{
    width: 48.50%;
  }

  .repository-images div:nth-child(2n+1){
    margin-left: 1%;
  }

}
</style>