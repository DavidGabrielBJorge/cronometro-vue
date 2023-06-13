<template>
  <!-- Usando a biblioteca Bulma para estilizar o site, nesse caso implica um layout de colunas, o "s-gapless" indica sem espaçamento entre essas colunas e "is-multiline" indica que permite múltiplas linhas-->
  <main class="columns is-gapless is-multiline" :class="{ 'modo-escuro': modoEscuroAtivo }">
    <div class="column is-one-quarter">
      <BarraLateral @temaAlterado="trocarTema"/>
    </div>
    <div class="column is-three-quarter conteudo">

      <!--AQUI VAI A VIEW DAS Tarefas-->
      <router-view></router-view>

    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';

export default defineComponent({
  name: 'App',
  components:{
    BarraLateral
  },
  data(){
    return{
      modoEscuroAtivo: false 
    }
  },
  computed:{

  },
  methods:{
    //criando a função de salvar a tarefa
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
