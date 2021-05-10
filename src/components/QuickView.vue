<template>
<div>
  <b-list-group horizontal class = "ticker-group">
    <b-list-group-item class = "ticker">
        <template>
        <p> <b>{{ socket.message[0].name }}</b></p>
        <p :class ="[ socket.message[0].changePercent > 0 ? 'changePositive' : 'changeNegative']">
        {{ socket.message[0].price }} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         {{ socket.message[0].changePercent }}% <br></p><p>
         High: {{ socket.message[0].high }}<br>
         Low: {{ socket.message[0].low }}</p>
        </template>
    
    </b-list-group-item>
        <b-list-group-item class = "ticker">
        
              <template>
        <p> <b>{{ socket.message[1].name }}</b></p>
        <p :class ="[ socket.message[1].changePercent > 0 ? 'changePositive' : 'changeNegative']">
        {{ socket.message[1].price }} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         {{ socket.message[1].changePercent }}% <br></p><p>
         High: {{ socket.message[1].high }}<br>
         Low: {{ socket.message[1].low }}</p>
        </template>
    
    
    </b-list-group-item>
       <b-list-group-item class = "ticker">
        
              <template>
        <p> <b>{{ socket.message[2].name }}</b></p>
        <p :class ="[ socket.message[2].changePercent > 0 ? 'changePositive' : 'changeNegative']">
        {{ socket.message[2].price }} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         {{ socket.message[2].changePercent }}% <br></p><p>
         High: {{ socket.message[2].high }}<br>
         Low: {{ socket.message[2].low }}</p>
        </template>
    
    
    </b-list-group-item>
        <b-list-group-item class = "ticker">
        
                <template>
        <p> <b>{{ socket.message[3].name }}</b></p>
        <p :class ="[ socket.message[3].changePercent > 0 ? 'changePositive' : 'changeNegative']">
        {{ socket.message[3].price }} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         {{ socket.message[3].changePercent }}% <br></p><p>
         High: {{ socket.message[3].high }}<br>
         Low: {{ socket.message[3].low }}</p>
        </template>
    
    </b-list-group-item>
       <b-list-group-item class = "ticker">
        
                     <template>
        <p> <b>{{ socket.message[4].name }}</b></p>
        <p :class ="[ socket.message[4].changePercent > 0 ? 'changePositive' : 'changeNegative']">
        {{ socket.message[4].price }} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
         {{ socket.message[4].changePercent }}% <br></p><p>
         High: {{ socket.message[4].high }}<br>
         Low: {{ socket.message[4].low }}</p>
        </template>
    
    
    
    </b-list-group-item>
  </b-list-group>
 
</div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
export default {
    data(){
        return {
           news: null
        }
    },
    computed: {
        ...mapState([
            'socket'
        ])
    },
    mounted () {
    axios
      .get('https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=fe872b8f53444a4da59e9bbccd54c07c')
      .then(response => (this.news = response.data))
  }
}
</script>

<style>

.ticker:hover {
    background-color: #EEE;
}
.ticker {
    width:100%;
    height:40%;
    margin-bottom: 2px;
}
.changePositive {
    color: green;
}
.changeNegative{
    color: red;
}
</style>