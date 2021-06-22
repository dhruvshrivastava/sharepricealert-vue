<template>
 <div>

 <table class = "table is-striped">

            <thead> 
                <th></th>
                <th>Price</th>
                <th> % Change </th>
            
             </thead>
            <tr>
                  
                   <td> <p> <b>{{ socket.message[4].name }}</b></p></td>
                    <td><p :class ="[ socket.message[4].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[4].price }}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>
                    <td><p :class ="[ socket.message[4].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[4].changePercent }}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>                   
             

            </tr>
            <tr>
                  
                   <td> <p> <b>{{ socket.message[5].name }}</b></p></td>
                    <td><p :class ="[ socket.message[5].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[5].price }}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>
                     <td><p :class ="[ socket.message[5].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[5].changePercent}}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>           

            </tr>
            <tr>
                  
                   <td> <p> <b>{{ socket.message[6].name }}</b></p></td>
                    <td><p :class ="[ socket.message[6].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[6].price }}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>
                    <td><p :class ="[ socket.message[6].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[6].changePercent }}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>         

            </tr>
            <tr>
                  
                   <td> <p> <b>{{ socket.message[7].name }}</b></p></td>
                    <td><p :class ="[ socket.message[7].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[7].price }}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>
                    <td><p :class ="[ socket.message[7].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[7].changePercent }}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>

            </tr>
      

    </table>
    <br>
    <h4 class = "title is-4">Commodities </h4><br>
     <table class = "table is-striped">

            <thead> 
                <th></th>
                <th>Price</th>
                <th> % Change </th>
            
             </thead>
            <tr>
                  
                   <td> <p> <b>{{ socket.message[3].name }}</b></p></td>
                    <td><p :class ="[ socket.message[3].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[3].price }}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>
                    <td><p :class ="[ socket.message[3].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[3].changePercent }}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>                   
             

            </tr>
            <tr>
                  
                   <td> <p> <b>{{ socket.message[8].name }}</b></p></td>
                    <td><p :class ="[ socket.message[8].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[8].price }}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>
                     <td><p :class ="[ socket.message[8].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[8].changePercent}}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>           

            </tr>
            <tr>
                  
                   <td> <p> <b>{{ socket.message[9].name }}</b></p></td>
                    <td><p :class ="[ socket.message[9].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[9].price }}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>
                    <td><p :class ="[ socket.message[9].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[9].changePercent }}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>         

            </tr>
            <tr>
                  
                   <td> <p> <b>{{ socket.message[10].name }}</b></p></td>
                    <td><p :class ="[ socket.message[10].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[10].price }}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>
                    <td><p :class ="[ socket.message[10].changePercent > 0 ? 'changePositive' : 'changeNegative']">
                    <b>{{ socket.message[10].changePercent }}</b> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;</p></td>

            </tr>
      

    </table>
       
    </div>

</template>
<script>
import { mapState } from 'vuex'
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

}
</script>