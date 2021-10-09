<template>
    <div class="main">
 <Dashboar />

    <!-- inputs -->
<!-- <div class="col-md-4 panel"> -->
        <!-- <h1>Panel de usuario</h1>  @submit="addTicke" -->



    <form  @submit.prevent="addTicke()" class="container gestion mx-5 ">
       <b-alert
 :show="dismissCountDown"
 dismissible
 :variant="mensaje.color"
 @dismissed="dismissCountDown=0"
 @dismiss-count-down="countDownChanged"
>
 {{mensaje.texto}}
</b-alert>
      <h2 class="my-1">Ingrese informacion correpondiente</h2>
    <div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Ingrese placa</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="ticketDato.placa">
  <!-- <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="placa"> -->
</div>
<div class="input-group mb-3">
  <span class="input-group-text" id="inputGroup-sizing-default">Ingrese puesto</span>
  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="ticketDato.Puesto" />
  <!-- <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" v-model="puesto" /> -->
</div>

  <div class="input-group mb-3">
  <label class="input-group-text" for="inputGroupSelect01" >Seleccione tipo de vehiculo</label>
  <select class="form-select" v-model="ticketDato.TipoVehiculo" id="inputGroupSelect01">
    <!-- <select class="form-select" v-model="tipoVehiculo" id="inputGroupSelect01"> -->
    <option selected>Seleccione</option>
    <option value="Motocicleta">Motocicleta</option>
    <option value="Carro">Carro</option>
    <option value="Camionetas">Camionetas</option>
    <option value="Camion">Camion</option>
    <option value="Vans">Vans</option>
  </select>

  </div>
  <div class="input-group mb-3">
  <!-- <span class="input-group-text" id="inputGroup-sizing-default" >{{ticketDato.tiempoI}}</span> -->
  <!-- <input v-model="ticketDato.tInicio" /> -->
</div>
  <button type="submit" class="btn btn-success" >Ingresar</button>
</form> 
</div>

</template>
<script>
import Dashboar from './Dashboar.vue';
// import moment from 'moment';
// import axios from 'axios';

export default {
//   name: 'App',
  data(){
    return{
      datotickets: [],
      mensaje: {color: 'success', texto: ''},
      dismissSecs: 5,
      dismissCountDown: 0,
      
      ticketDato: {placa:'', tipoVehiculo: '', Puesto: '', tiempoI: Date.now(), valorP: 0},
    }
  },
  created(){
 
  },
  methods: {
       addTicke(){
            this.axios.post('/nuevoticket', this.ticketDato )
            .then(res => {
              this.datotickets.push(res.data)
            this.ticketDato.placa='';
             this.ticketDato.Puesto='';
             this.ticketDato.tipoVehiculo='';
             this.mensaje.color='success',
             this.mensaje.texto='Ticket agregado',
             this.showAlert()
             })
            .catch(e => {
               console.log(e.res);
            })
        },
        countDownChanged(dismissCountDown) { this.dismissCountDown = dismissCountDown
         },
        showAlert() { this.dismissCountDown = this.dismissSecs }
      },
  components: {
      Dashboar 
  }
}

</script>

    <style>
.main{
    height: 600px;
    margin: 0%;
    padding: 0%;
    display: flex;
}
h2{ 
  margin: 35px 0;
  padding: 35px 0;
  text-align: center;
}
.gestion{
  margin-top: 80px;
}
button{
  text-align: center;
}
.container{
    /* top: 300px; */
}
.panel{
    /* margin: 150px; */
    display: flex;
    justify-items: center;
    justify-content: center;
}


</style>