<!--Componente do cronometro-->
<template>
    
    <FormularioCronometro @aoSalvarTarefa="salvarTarefa"/>
    <div class="lista">     
        <BoxCronometro v-if="listaVazia"><!--O v-if verifica se a lista está vazia ou não para aparecer o box-->
        Não há nenhuma tarefa cadastrada
        </BoxCronometro>
        <TarefaCronometro v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/><!--Para adicionar cada componente tarefa é preciso usar o "v-for"-->
    </div>

  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import FormularioCronometro from '../components/FormularioCronometro.vue';
  import TarefaCronometro from '../components/TarefaCronometro.vue';
  import InterfaceTarefas from '../interfaces/InterfaceTarefa'
  import BoxCronometro from '../components/BoxCronometro.vue';
  
  export default defineComponent({
    name: 'App',
    components:{
      FormularioCronometro,
      TarefaCronometro,
      BoxCronometro
    },
    data(){
      return{
        tarefas: [] as InterfaceTarefas[] //Criando uma lista de tarefas
       
      }
    },
    computed:{
      //verifica se a lista de tarefa está vazia
      listaVazia() : boolean{
        return this.tarefas.length === 0
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
  