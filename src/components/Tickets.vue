<template>
    <div class="main">
    <Dashboar />
    <div class="container">
        <h1>Gestion tickets</h1>
      <div class="control"> 

      <input type="text" v-model="search" class="input is rounded" @keyup="searchData" />
       <button class="success" @click="searchData"> Buscar </button>      
      </div>
        <div class="item-resul" >
        <table class="table">
               <thead>
                   <tr>
                       <th scope="col">Placa</th>
                       <th scope="col">tiempo</th>
                       <th scope="col">puesto</th>
                       <th scope="col">vehiculo</th>
                       <th scope="col">tiempo</th>
                       <th scope="col">Pagar</th>
                       <th scope="col">Acciones</th>
                   </tr>
               </thead>
               <tbody>
                   <tr  >
                       <th scope="row">{{ticket.placa}}</th>
                       <td >{{ticket.tiempoInicio}} </td>
                       <td>{{ticket.Puesto}}</td>
                       <td>{{ticket.TipoVehiculo}}</td>
                       <td>{{ ticket.tiempoFinal }}</td>
                       <td >${{ticketeditar.valorP}}</td>
                   
                       <td><button type="button" @click="finTickt" class="btn btn-danger">Finalizar tiempo</button>
                       <button type="button" @click="valorPagar" class="btn btn-warning">Valor a pagar</button> 
                        </td>
                   </tr>
               </tbody>
 
            </table>   
</div>
                  <b-alert :show="dismissCountDown" 
                dismissible
                :variant="mensaje.color"
                @dismissed="dismissCountDown=0"
                @dismiss-count-down="countDownChanged"
                >
              {{mensaje.texto}}
          </b-alert>
        </div>
        </div>
</template>
<script>
// import api from '@/api';
import Dashboar from './Dashboar.vue'

// import ViewTicket from './ViewTicket.vue';
// import Users from '@/components/Users.vue';

export default {
//   name: 'App',
  data(){
      return{
        //   props:{
          ticketeditar: { tiempoFinal: Date() ,valorP: Number },
          // viewPago: false,
          tickets: [],
          search: '',
          ticket: {
 
            "placa": "",
            "tiempoInicio": "",
            "TipoVehiculo": "",
            "Puesto": "",
            "tiempoFinal":"",
            
          },
         mensaje: {color: 'success', texto: ''},
         dismissSecs: 5,
         dismissCountDown: 0,
          diffe: Number,
          star: '',
          end: '',
          min: Number,
          
        //   }
      }
  },
  components: {
      Dashboar,
  },
  created(){
},
  methods:{
//   mostralist(){
//       this.axios.get('/tickets')
//         .then(res => {
//         console.log(res.data)
//         this.tickets = res.data
//           })
//         .catch(e => {
//         console.log(e.response);
//         })
//   },
    searchData(){
        this.axios.get('/tickets/placa/' + this.search)
        .then(res => {
            this.ticket = res.data
        this.ticket.placa = res.data[0].placa;
        this.ticket.tiempoInicio = res.data[0].tiempoInicio;
        this.ticket.TipoVehiculo = res.data[0].TipoVehiculo;
        this.ticket.Puesto= res.data[0].Puesto;
        this.ticket.tiempoFinal= res.data[0].tiempoFinal;
        console.log(this.ticket)
          })
        .catch(e => {
        console.log(e.res);
        })
  },
  finTickt(){
    
      this.axios.put('/tickets/placa/' + this.search , this.ticketeditar)
      .then(res => {
          this.ticketeditar=res.data.tiempoFinal
          console.log(res)
          this.mensaje.color='danger',
          this.mensaje.texto=' Finalizacion de tiempo',
          this.showAlert()

      })
      .catch(e=>{
    console.log(e);
      })
  },
     valorPagar(){
      //  this.viewPago = true
         this.end = new Date(this.ticket.tiempoFinal)
         this.star = new Date(this.ticket.tiempoInicio)
         this.diffe = Math.abs(this.end-this.star)
         this.min = Math.floor((this.diffe/1000)/60) 
         if (this.ticket.TipoVehiculo === 'Camion' && this.ticket.TipoVehiculo ==='Carro' && this.ticket.TipoVehiculo === 'Camionetas' && this.ticket.TipoVehiculo === 'Vans' ){
             this.ticketeditar.valorP = this.min * 75
         }else{
             this.ticketeditar.valorP = this.min * 52
         }

    //   this.axios.put('/tickets/placa/' + this.search , this.ticketeditar)
    //   .then(res => {
    //       this.ticketeditar=res.data.valorP
    //        })
    //   .catch(e=>{
    // console.log(e);
    //   })
          this.mensaje.color='warning',
          this.mensaje.texto='Ticket Guardado y valor a pagar ',
          this.showAlert()
         console.log(this.min)
    },
    countDownChanged(dismissCountDown) { this.dismissCountDown = dismissCountDown
         },
    showAlert() { this.dismissCountDown = this.dismissSecs },
   }
}
</script>

<style scoped>
.container{
    height: 600px;
}
.ticket{

    /* width: 100%; */
}
.item-resul{
    margin-top: 25px;
    text-align: center;
    width: 100%;
    border: medium double #369; 
}
p{   
    width: 100%;
    text-align: center;
}

</style>