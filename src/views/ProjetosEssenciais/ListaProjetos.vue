<template>
    <section>
        <!--Adicionar um novo projeto-->
        <router-link to="/projetos/novo" class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>Novo projeto</span>
        </router-link>

        <!--Exibir todas as categorias criadas-->
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>{{ projeto.id }}</td>
                    <td>{{ projeto.nome }}</td>
                    <td>
                        <router-link :to="`/projetos/${projeto.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </router-link>

                        <button class="button ml-2 excluir" @click="excluir(projeto.id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
    
</template>

<script lang="ts">
import { useStore } from '@/store'
import { EXCLUIR_PROJETO } from '@/store/tipo-mutacoes';
import { computed, defineComponent } from 'vue';

export default defineComponent({
    name: 'ListaProjetos',
    methods:{
        excluir(id: string){
            this.store.commit(EXCLUIR_PROJETO, id)
        }
    },

    setup(){
        const store  = useStore()
        return {
            projetos: computed(()=>store.state.projetos),
            store
        }
    }
})
</script>

<style scoped>

.excluir{
    background-color: #E54B4B;
    margin-top: -0%;
}
</style>