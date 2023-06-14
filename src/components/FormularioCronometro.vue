<template>
    <div class="box formulario">
        <div class="columns">
            <!--Coluna do título de cada rodada cronometrada-->
            <div class="column is-5" role="form" aria-label="Formulário para a criação de um novo título de cronômetro">
                <input type="text" class="input" placeholder="Digite o título do seu cronômetro" v-model="descricao">
            </div>

            <div class="column is-3">
                        <div class="select">
                            <select v-model="idProjeto">
                                <option value="">Selecione o projeto</option>
                                <option
                                :value="projeto.id"
                                v-for="projeto in projetos"
                                :key="projeto.id"
                                >
                                {{ projeto.nome }}
                                </option>
                            </select>
                        </div>
                </div>

            <!--Coluna do temporizador-->
            <div class="column">
                <TemporizadorControle @aoTemporizadorFinalizado="finalizarAcao"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import TemporizadorControle from './TemporizadorControle.vue'
import { useStore } from 'vuex'

import { key } from '@/store'

export default defineComponent({
    name: 'FormularioCronometro',
    emits: ['aoSalvarTarefa'],
    components:{
        TemporizadorControle
    },
    data(){
        return{
            descricao: '',
            idProjeto: ''
        }
    },
    methods:{
        //Ao terminar a contagem de uma ação deve armazenar seu tempo decorrido
        finalizarAcao(tempoDecorrido: number): void{
            //Quando alguém salvar uma tarefa o formulário vai emitit um evento, o App vai ouvir esse evento e vai adicionar na lista de tarefas
            this.$emit('aoSalvarTarefa',{
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(proj => proj.id == this.idProjeto)
            })
            this.descricao = ''//Limpa o input
        }
    },
    //Para pegar o store, onde estão os projetos, é preciso usar o setup
    setup(){
        const store = useStore(key)
        return{
            projetos: computed(() => store.state.projetos)
        }
    }
   
})
</script>

<style>
.formulario{
    color: var(--text-primary);
    background-color: var(--bg-primary);
}

</style>


