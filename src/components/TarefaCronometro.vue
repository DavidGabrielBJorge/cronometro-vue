<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                Descrição da tarefa
            </div>
            <div class="column">
                <CronometroAplicacao :tempoEmSegundos="15"/>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CronometroAplicacao from './CronometroAplicacao.vue';
export default defineComponent({
    name: 'TarefaCronometro',
    components:{
        CronometroAplicacao
    }
})
</script>

<!--Estilo "scoped" indica que somente aquele componente e seus
filhos serão estilizadas daquela forma específica

Nesse caso apenas o box da tarefa cronometro terá background dessa cor
-->
<style scoped>
.box{
    background: #b4c4de;
}
</style>