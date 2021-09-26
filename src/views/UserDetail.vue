<template>
    <div v-if="loaded">
        <img :src="user.picture.large" alt="" >
        <h4>{{user.name.first}}</h4>
    </div>
    <div v-else>
          <b-spinner variant="primary" label="Spinning"></b-spinner>
    </div>
</template>

<script>
import api from '@/api';
export default{
    data(){ //nos permite tener un dato es una funcion que retorna un dato
    return{
        user: {},//mostrar una informacin de ese objeto de dato
        loaded: false
    }
   },
   created(){
       this.getUser(this.$route.query.id);//devuelve el usuario desde el id por medi de la url
   },
   methods:{
       getUser(id){
           (async ()=>{
               this.user = await api.getUserData(id);
               this.loaded = true;
               console.log(this.user);
           })();
       }
   }
}
</script>
