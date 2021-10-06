<template>
    <div class="main">
 <Dashboar />

    <!-- inputs -->
<!-- <div class="col-md-4 panel"> -->
        <!-- <h1>Panel de usuario</h1>  @submit="addTicke" -->
    <form  @submit="addTicke()" class="container gestion mx-5 ">
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
  <span class="input-group-text" id="inputGroup-sizing-default" >{{ticketDato.tiempoI}}</span>
  <!-- <input v-model="ticketDato.tInicio" /> -->
</div>
  <button type="submit" class="btn btn-success" >Ingresar</button>
</form> 
</div>

</template>
<script>
import Dashboar from './Dashboar.vue';
// import axios from 'axios';

// import pruebas from '../task/pruebas.json';
export default {
//   name: 'App',
  data(){
    return{
      datotickets: [],

      // placa: '',
      // puesto: '',
      // tipoVehiculo: '',
      // // tInicio: ''
      // tInicio: Date.now()
      
      ticketDato: {placa:'', tipoVehiculo: '', Puesto: '', tiempoI: Date.now() },
      
      // ticketDato: null      // placa:'',
      // TipoVehiculo: '',
      // Puesto: '',
      // tiempoInicio: Date
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
             this.ticketDato.puesto='';
             this.ticketDato.tipoVehiculo=''
             })
            .catch(e => {
               console.log(e.res);
            })
            //  this.mensaje.color='success',
            // this.mensaje.texto='Agredado';
            // this.showAlert();
          //  })
        },
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