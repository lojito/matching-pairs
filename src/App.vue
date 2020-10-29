<template>
  <div class="wrapper">
    <app-header></app-header>
    <navigation></navigation>
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader';
import Navigation from './components/Navigation';

export default {
  components: {
    navigation: Navigation,
    'app-header': AppHeader
  },

  created(){
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      if (redirect == "/" || redirect == "/history" || redirect == "/about" || redirect == "/contact" || redirect == "/game"){
        this.$router.push(redirect);
      }else{
        this.$router.push('/');
      }
    }else{
      const arr = location.pathname.split("/");
      if (arr.length > 1 && (arr[2] == "index" || arr[2] == "index.html")){
        this.$router.push('/');
      }
    }
  }

}
</script>

<style>
body{
  background-color:darkseagreen;
  margin: 0;
}

.wrapper{
  max-width: 640px;
  margin: 5px auto 0;
}

a{
  color: green;
  text-decoration: none;  
}

.info{
  text-align: center;
  font-weight: bold;
  margin-bottom: 10px;
}

.start-over{
  margin-top: 10px;
}

.delete{
  margin-top: 10px;
  margin-right: 5px;
}

hr{
  margin: 15px;
}

.games-history, .game-history, .game-wrapper{
  text-align: center
}

.btn {
	background-color: #44c76754;
	border-radius: 28px;
	border: 1px solid #18ab29;
	display: inline-block;
	cursor: pointer;
	color: green;
	font-family: Arial;
	font-size: 17px;
	padding: 6px;
	text-decoration: none;
	text-shadow: 0px 1px 0px #2f6627;
}

@media screen and (max-width: 500px) {
  .wrapper{
    margin: 10px 2px 0;
  }
}
</style>
