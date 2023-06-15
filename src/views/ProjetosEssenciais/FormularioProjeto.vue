<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
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
import { useStore } from '@/store'
import {  defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjetosCronometro',
    data(){
        return{
            nomeProjeto: ''
        };
    },
    methods:{
        criar(){
            /*
            Método para criar o projeto de forma básica
            const projeto: InterfaceProjeto ={
                nome: this.nomeProjeto,
                id: new Date().toISOString()
            }
            this.projetos.push(projeto)
            */
           this.store.commit('ADICIONA_PROJETO', this.nomeProjeto)
           this.nomeProjeto = '';
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

<style scoped>
.projetos{
    padding: 1.25rem;
}
</style>