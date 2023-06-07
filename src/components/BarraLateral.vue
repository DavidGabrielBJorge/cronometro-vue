<template>
    <header>
        <h1>
            <img src="../assets/cronometro.jpg" alt="">
        </h1>
    </header>
</template>

<script lang="ts">
/*Lógica do componente*/
import { defineComponent } from 'vue'

//Vai exportar o componente criado
export default defineComponent({
    name: 'BarraLateral'
})
</script>

<style>
/*Estlização do componente */
header {
  padding: 1rem;
  background: #b4c4de;
  width: 100%;
  height: 100vh;
}
img{
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>