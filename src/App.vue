<template>
  <!-- Usando a biblioteca Bulma para estilizar o site, nesse caso implica um layout de colunas, o "s-gapless" indica sem espaçamento entre essas colunas e "is-multiline" indica que permite múltiplas linhas-->
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarter">
      <FormularioCronometro/>
      <div class="lista">
        <TarefaCronometro/>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioCronometro from './components/FormularioCronometro.vue';
import TarefaCronometro from './components/TarefaCronometro.vue';
export default defineComponent({
  name: 'App',
  components:{
    BarraLateral, 
    FormularioCronometro,
    TarefaCronometro
  }
});
</script>

<style>

.lista{
  padding: 1.25rem;
}
</style>
