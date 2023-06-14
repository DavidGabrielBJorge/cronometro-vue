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

        <!--Exibir todas as categorias criadas-->
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                </tr>
            </tbody>
        </table>
    </section>
    
</template>

<script lang="ts">
import { useStore } from '@/store'
import { computed, defineComponent } from 'vue';

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
            this.nomeProjeto = ''
        }
    },
    setup(){
        const store  = useStore()
        return {
            store,
            projetos: computed(()=>store.state.projetos)
        }
    }
})
</script>

<style scoped>
.projetos{
    padding: 1.25rem;
}
</style>