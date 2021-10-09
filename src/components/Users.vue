<template>
    <div class="row" >
        <!-- <div class="col-3">  -->
        <div class="col-3" v-for="user in users" v-bind:key="user.login.uuid">
            <div class="card-img-top" :src="user.picture.large">
            <a :href="'/user/'+user.login.uuid"> 
            <img :src="user.picture.medium" alt="">
             </a>
            <p>{{user.name.first}}</p>
            <p>{{user.location.city}}</p>
            <!-- <h2></h2> -->
            </div>
            </div>
        <!-- </div> -->
    </div>
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
</template>

<script>
export default{
    props:{
        users:{
            type: Array,
            default: () => []
        }
    }
}
// export default{
//     props:{
//         users:{
//             type: Array,
//             default: () => []
//         }
//     }
// }
</script>
