<template>
  <div v-if="dictionary" class="about">
    <p>
      <span>{{dictionary[language].TECH_STACK}}</span>
      <ul>
        <li>
          <a target="_blank" href="https://vuejs.org/">Vue.js</a>
        </li>
        <li>
          <a target="_blank" href="https://vuex.vuejs.org/">Vuex</a>
        </li>
        <li>
          <a target="_blank" href="http://es6-features.org">ES6</a>
        </li>
        <li>
          <a target="_blank" href="https://firebase.google.com/">Firebase</a>
        </li>
        <li>
          <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5">HTML5</a>
        </li>
        <li>
          <a target="_blank" href="https://www.w3.org/TR/selectors-3/">CSS3</a>
        </li>
      </ul>  
    </p>

    <p>
        <span>{{dictionary[language].SOURCE_CODE}} </span>
        <a target="_blank" href="https://github.com/lojito/matching-pairs">https://github.com/lojito/matching-pairs</a>
    </p>
    
    <span>{{dictionary[language].OTHER_GAMES}} </span>
    <ul>
      <li>
        <a target="_blank" href="https://github.com/lojito/puzzle">Puzzle (Angular)</a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/lojito/tic-tac-toe">Tic-tac-toe (React.js)</a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/lojito/python-tic-tac-toe">Tic-tac-toe (Python)</a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/lojito/django-tictactoe">Tic-tac-toe 4x4 (Django)</a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/lojito/c_champions_league">UEFA Champions League (C)</a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/lojito/assembly-bubble-sort">Bubble sort algorithm (Assembly)</a>
      </li>
    </ul> 

  </div>
</template>

<script>

export default {

  computed: {
    language() {
      return this.$store.getters.getLanguage();
    },

    dictionary() {
      return this.$store.getters.getDictionary;
    }    
  }  
}
</script>

<style scoped>
.about{
  width: 95%;
  margin: 0 auto;
  margin-bottom: 20px;
}

ul {
  margin-top: 0;
}

li {
  margin-top: 5px;
}

span{
  font-weight: bold;
}
</style>
