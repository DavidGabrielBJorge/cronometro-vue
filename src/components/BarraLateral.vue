<template>
    <header>
        <h1>
            <img src="../assets/cronometro.jpg" alt="">
        </h1>
        <button class="button" @click="alterarTema">
          {{ textoBotao }}
        </button>
    </header>
</template>

<script lang="ts">
/*Lógica do componente*/
import { defineComponent } from 'vue'

//Vai exportar o componente criado
export default defineComponent({
    name: 'BarraLateral',
    emits:['temaAlterado'],
    data(){
      return{
        modoEscuroAtivo: false
      }
    },
    computed:{
      textoBotao(){
        if(this.modoEscuroAtivo){
          return 'Desativar modo escuro'
        }
        return 'Ativar modo escuro'
      }
    },
    methods:{
      alterarTema(){
        this.modoEscuroAtivo=!this.modoEscuroAtivo
        this.$emit('temaAlterado', this.modoEscuroAtivo)
      }
    }
})
</script>

<style>
/*Estlização do componente */

button{
  margin-top: 0.5rem;
}
header {
  padding: 1rem;
  background: #b4c4de;
  width: 100%;
  height: 100vh;
  text-align: center;
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

<!--
Crédito da foto: 
EKATERINA BOLOVTSOVA

-->