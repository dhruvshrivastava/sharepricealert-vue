<template>
  <div class="home">
<b-container>
      <QuickView />
</b-container><br>
<b-container>
  <b-row>
    <b-col>  <News /> </b-col>
    <b-col>Column 2</b-col>
  </b-row>
</b-container>
  </div>
</template>

<script>
// @ is an alias to /src
import QuickView from '../components/QuickView.vue'
import News from '../components/News.vue'

export default {
  name: 'Home',
  components: {
    QuickView,
    News
  }
}
</script>
