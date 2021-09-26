<template>
  <div class="container-fluid" >
    <UserTable :users="users" > </UserTable>
    <users v-bind:users="users"></users>
  </div>
</template>


<script>
import api from '@/api';
import Users from '@/components/Users.vue';
// import UserTable from '@/components/UserTable.vue';
export default{
  components: { 
      Users,
      // UserTable
      },
    data(){
        return{
            users: []
        }
    },
    created(){
        // api.getUsersPromise().then(data => this.users = console.log(data));
        // api.getUsersPromise().then(data => this.users = data);
        (async()=>{this.users = await api.getUserAsync()})();
    }
}
</script>
