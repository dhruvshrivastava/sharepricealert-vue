<template>
<div>

<div class = "content is-medium">
<slither-slider :options="{controls:false, autoplay:true, dots:false}">
  <dl v-for="article in news.articles " :key="article">
    <dt>
      <strong><h6>{{ article.title }}</h6></strong>
    </dt>
    <dt>
      {{ article.description }}
    </dt>


    
  </dl></slither-slider></div>
</div>

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
      .then(response => console.log(response))
  }
}
</script>