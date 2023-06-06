<template>
  <!-- Usando a biblioteca Bulma para estilizar o site, nesse caso implica um layout de colunas, o "s-gapless" indica sem espaçamento entre essas colunas e "is-multiline" indica que permite múltiplas linhas-->
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral/>
    </div>
    <div class="column is-three-quarter">
      <FormularioCronometro @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <TarefaCronometro v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/><!--Para adicionar cada componente tarefa é preciso usar o "v-for"-->
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import FormularioCronometro from './components/FormularioCronometro.vue';
import TarefaCronometro from './components/TarefaCronometro.vue';
import InterfaceTarefas from './interfaces/InterfaceTarefa'

export default defineComponent({
  name: 'App',
  components:{
    BarraLateral, 
    FormularioCronometro,
    TarefaCronometro
  },
  data(){
    return{
      tarefas: [] as InterfaceTarefas[] //Criando uma lista de tarefas
    }
  },
  methods:{
    //criando a função de salvar a tarefa
    salvarTarefa(tarefa: InterfaceTarefas){
      this.tarefas.push(tarefa)//adicionando a tarefa na lista tarefas
    }
  }
});
</script>

<style>

.lista{
  padding: 1.25rem;
}
</style>
