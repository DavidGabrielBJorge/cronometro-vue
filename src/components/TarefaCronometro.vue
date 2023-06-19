<template>
    <BoxCronometro>
        <div class="columns">
            <div class="column is-4">
                {{ tarefa.descricao || 'Sem descrição' }}
            </div>
            <div class="column is-3">
                {{ tarefa.projeto?.nome || 'Não disponível' }}
            </div>
            <div class="column">
                <CronometroAplicacao :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
            </div>
        </div>

    </BoxCronometro>
</template>

<script lang="ts">
import { defineComponent,PropType } from 'vue';
import CronometroAplicacao from './CronometroAplicacao.vue';
import InterfaceTarefa from '../interfaces/InterfaceTarefa';
import BoxCronometro from './BoxCronometro.vue'

export default defineComponent({
    name: 'TarefaCronometro',
    components:{
        CronometroAplicacao,
        BoxCronometro
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
