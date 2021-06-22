<template>
  <div class="home">
<div class = "columns">
  <div class = "column"> <QuickView /></div>
  <div class = "column"><News /></div>
</div>
<div class = "columns">
  <div class = "column"></div>
  <div class = "column"></div>
  <div class = "column"></div>
  <div class = "column"><h4 class = "title is-4"><strong>CryptoCorner</strong></h4><br><CrytoCorner /></div>
</div>
<br>


  </div>

  
</template>

<script>
// @ is an alias to /src
import QuickView from '../components/QuickView.vue'
import News from '../components/News.vue'
import CrytoCorner from '../components/CrytoCorner.vue'


export default {
  name: 'Home',
  components: {
    QuickView,
    News,
    CrytoCorner
  }
}
</script>
