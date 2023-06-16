<template>
    <section>
        <form @submit.prevent="criar">
            <div class="field">
                <label for="nomeProjeto" class="label">
                    Nome da categoria da tarefa
                </label>
                <input type="text" class="input" v-model="nomeProjeto" id="nomeProjeto">
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Criar
                </button>
            </div>
        </form>

    </section>
    
</template>

<script lang="ts">
import { TipoNotificacao } from '@/interfaces/InterfaceNotificacao';
import { useStore } from '@/store'
import { ALTERA_PROJETO, ADICIONA_PROJETO, NOTIFICAR } from '@/store/tipo-mutacoes';
import {  defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjetosCronometro',
    props:{
        id: {
            type: String
        }
    },
    mounted(){
        //Vai pegar o nome já criado do projeto e mostrar para a edição
        if(this.id){
            const projeto = this.store.state.projetos.find(proj => proj.id == this.id)//Procurar pelo id nos projetos
            this.nomeProjeto = projeto?.nome || '' //Coloca o ? para indicar que projeto pode ser indefinido caso o nome não exista ou não seja encontrado, se for undefined a string será vazia

        }
    },
    data(){
        return{
            nomeProjeto: ''
        };
    },
    methods:{
        criar(){
            //Se tiver id mostra que deve ser editado
            if(this.id){
                this.store.commit(ALTERA_PROJETO,{
                    id: this.id,
                    nome: this.nomeProjeto
                })
            }
            else{
                /*
                Método para criar o projeto de forma básica
                const projeto: InterfaceProjeto ={
                    nome: this.nomeProjeto,
                    id: new Date().toISOString()
                }
                this.projetos.push(projeto)
                */
                this.store.commit(ADICIONA_PROJETO, this.nomeProjeto)
            }

           this.nomeProjeto = '';
           this.store.commit(NOTIFICAR, {
            titulo: 'Novo projeto salvo',
            texto:'Projeto disponível',
            tipo: TipoNotificacao.SUCESSO
           })
           this.$router.push('/projetos')

        }
    },
    setup(){
        const store  = useStore()
        return {
            store
        }
    }
})
</script>

