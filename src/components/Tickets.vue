<template>
    <div class="main">
    <Dashboar />
<!-- <div class="col"> -->
    <div class="container">
        <h1>Gestion tickets</h1>
      <div class="field has-addons is-pulled-right">
      <div class="control"> 
<!-- @keyup="searchData" -->
      <input type="text" v-model="search" class="input is rounded" @keyup="searchData" />
       <button class="success" @click="searchData"> Buscar </button>      
      
      </div>
      <div class="control"> 
<!-- <table class="table">
               <thead>
                   <tr>
                       <th scope="col">Placa</th>
                        <th scope="col">puesto</th>
                       <th scope="col">vehiculo</th>
                       <th scope="col">tiempo</th>
                       <th scope="col">Pagar</th>
                       <th scope="col">Acciones</th>
                   </tr>
               </thead>
               <tbody>
                   <tr  v-for="(plac, placa) in tickets" :key="placa">
                       <th scope="row">{{placa.placa}}</th>
                       <td >{{placa.tiempoInicio}} </td>
                       <td>{{placa.Puesto}}</td>
                       <td>{{placa.TipoVehiculo}}</td>
                       <td>{{ ticketeditar.tFinal}}</td>
                       <td>{{ placa.diferen}}</td>
                       <td><button type="button" @submit="finTickt(item._id)" class="btn btn-warning">Editar</button></td>
                       

                   </tr>
               </tbody>
            </table>     -->
                 </div> 
      </div>
        <div class="item-resul">
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
                   <tr  v-for="(item, index) in ticket" :key="index">
                       <th scope="row">{{item.placa}}</th>
                       <td >{{item.tiempoInicio}} </td>
                       <td>{{item.Puesto}}</td>
                       <td>{{item.TipoVehiculo}}</td>
                       <td>{{ ticketeditar.tiempoFinal}}</td>
                       <td>{{ item.diferen}}</td>
                       <td><button type="button" @click="finTickt" class="btn btn-warning">Editar</button></td>
                       

                   </tr>
               </tbody>
            </table>   
        </div>
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
          ticketeditar: { tiempoFinal :Date.now()},
          editar: false,
          tickets: [],
          search: '',
          setTimeoutBuscador:'',
          ticket: {},
        //   tFinal:Date.now()

      }
  },
  components: {
      Dashboar,
  },
  created(){
// this.mostralist();
// this.finTickt();  
this.getId();
  },
  methods:{
    getId(id){
        (async ()=>  {
            this.ticket = await this.axios.get('/tickets/:id' , id)
            console.log(this.ticket)
        })
    },
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
        this.ticket = res.data;
        console.log(this.ticket)
        
          })
        .catch(e => {
        console.log(e.res);
        })

  },
  finTickt(){
      this.axios.put('/tickets/placa/' + this.search , this.ticketeditar)
      .then(res => {
          this.ticketeditar = res.data.tiempoFinal
          console.log(res)
        //   const index = this.ticket.fiendIndex(n => n._id === res.data.placa);
        //   this.ticket[index].tiempoFinal = res.data.tiempoFinal;
      })
      .catch(e=>{
    console.log(e);
      })
  },
  
//   searchData(){
//       clearTimeout(this.setTimeoutBuscador)
//       this.setTimeoutBuscador = setTimeout(this.mostralist, 360)
//   },
//   finTickt(item){
//       this.axios.put('tickets/placa/:placa'+ this.search , this.ticketeditar )
//       .then(res =>{
//         let index = this.tickets.findIndex(n => n.placa === this.ticketeditar.placa);
//         this.tickets[index].tiempoFinal = this.ticketeditar.tiempoFinal;
//           console.log(res);
//       })
//       .catch(e=>{
//     console.log(e);
//       })
//   },
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

    /* display: flex; */
    width: 100%;
    height: 300px;
    border: medium double #369; 
}
 label{
      /* text-align: center; */
 }
p{   
    width: 100%;
    text-align: center;
}
.btn-danger {
    width: 100px;
    height: 60px;
}
</style>