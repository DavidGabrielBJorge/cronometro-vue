<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.descricao }}
            </div>
            <div class="column">
                <CronometroAplicacao :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue';
import CronometroAplicacao from './CronometroAplicacao.vue';
import InterfaceTarefa from '../interfaces/InterfaceTarefa';

export default defineComponent({
    name: 'TarefaCronometro',
    components:{
        CronometroAplicacao
    },
    props:{
        tarefa:{
            type: Object as PropType<InterfaceTarefa>,//o PropType foi usado pois precisa pegar um tipo específico de um objeto
            required: true
        }
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