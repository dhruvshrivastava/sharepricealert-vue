<template>
<div>
<b-container>
<b-row>
<b-col><h1> News Flash </h1><hr></b-col>
<b-col></b-col>
</b-row>
</b-container>
<slither-slider :options="{controls:false, autoplay:true, dots:false}">
  <ul class="list-unstyled" v-for="article in news.articles " :key="article">
    <b-media tag="li">
      <h5 class="mt-0 mb-1">{{ article.title }}</h5>
      <p class="mb-0">
   {{ article.description}}
      </p>
    </b-media>
  </ul></slither-slider></div>

</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
           news: null
        }
    },
    mounted () {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fe872b8f53444a4da59e9bbccd54c07c')
      .then(response => (this.news = response.data))
  }
}
</script>