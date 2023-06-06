<template>
    <div class="box">
        <div class="columns">
            <!--Coluna do título de cada rodada cronometrada-->
            <div class="column is-8" role="form" aria-label="Formulário para a criação de um novo título de cronômetro">
                <input type="text" class="input" placeholder="Digite o título do seu cronômetro" v-model="descricao">
            </div>

            <!--Coluna do temporizador-->
            <div class="column">
                <TemporizadorControle @aoTemporizadorFinalizado="finalizarAcao"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TemporizadorControle from './TemporizadorControle.vue'
export default defineComponent({
    name: 'FormularioCronometro',
    emits: ['aoSalvarTarefa'],
    components:{
        TemporizadorControle
    },
    data(){
        return{
            descricao: ''
        }
    },
    methods:{
        //Ao terminar a contagem de uma ação deve armazenar seu tempo decorrido
        finalizarAcao(tempoDecorrido: number): void{
            //Quando alguém salvar uma tarefa o formulário vai emitit um evento, o App vai ouvir esse evento e vai adicionar na lista de tarefas
            this.$emit('aoSalvarTarefa',{
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao
            })
            this.descricao = ''//Limpa o input
        }
    }
   
})
</script>

