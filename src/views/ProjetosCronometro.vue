<template>
    <div class="projetos">
        <h1 class="title">Projetos</h1>
        <!--Indica onde as rotas aninhadas devem ser geradas-->
        <router-view></router-view>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjetosCronometro'
})
</script>
<!--Estilização bulma-->

<style scoped>
.projetos{
    padding: 1.25rem;
}
</style>