<template>
<div>
    <main class="login-1">
        <div class="center">
        <h1>Sistema de control de parqueadero</h1>
        <p>Logeate para ingresar al panel de asignacion</p>
        <router-link to="/home" type="button" class="btn btn-success" href="">Ingresar</router-link>
        </div>
        </main>
    </div>

</template>

<style scoped>
.login-1{
  color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 150px; */
    height: 550px;
    background: url('../assets/Banner2.jpeg');
    background-repeat: no-repeat;
    background-size: cover;

}
.center{
    text-align: center;
}
</style>