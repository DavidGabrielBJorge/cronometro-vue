<template>
  <!-- Usando a biblioteca Bulma para estilizar o site, nesse caso implica um layout de colunas, o "s-gapless" indica sem espaçamento entre essas colunas e "is-multiline" indica que permite múltiplas linhas-->
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @temaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">
      <FormularioCronometro @aoSalvarTarefa="salvarTarefa"/>

      <div class="lista">
        <TarefaCronometro v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/><!--Para adicionar cada componente tarefa é preciso usar o "v-for"-->

        <BoxCronometro v-if="listaVazia"><!--O v-if verifica se a lista está vazia ou não para aparecer o box-->
        Não há nenhuma tarefa cadastrada
        </BoxCronometro>
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
import BoxCronometro from './components/BoxCronometro.vue';

export default defineComponent({
  name: 'App',
  components:{
    BarraLateral, 
    FormularioCronometro,
    TarefaCronometro,
    BoxCronometro
  },
  data(){
    return{
      tarefas: [] as InterfaceTarefas[], //Criando uma lista de tarefas
      modoEscuroAtivo: false 
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
    },
    trocarTema(modoEscuroAtivo: boolean){
      this.modoEscuroAtivo = modoEscuroAtivo

    }
  }
});
</script>

<style>

.lista{
  padding: 1.25rem;
}

main{
  --bg-primary: #fff;
  --text-primary: #000;
}

main.modo-escuro{
  --bg-primary: #263337;
  --text-primary: #ddd;
}

.conteudo{
  background-color: var(--bg-primary)
}
</style>
