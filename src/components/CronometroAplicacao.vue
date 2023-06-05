<template>
    <section>
        <strong>{{ tempoDecorrido }}</strong><!--O Vue não vai enxergar o tempoDecorrido como uma função mas sim uma propriedade do componente porém calculado-->
    </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
    name: 'CronometroAplicacao',
    props:{//propriedades que vamos receber para esse componente
        tempoEmSegundos: {
            type: Number,
            default:0
        }
    },
    //O computed monitora uma informação e conforme altera vai reagir de uma forma e atualizar
    computed:{
        tempoDecorrido(): string{
            return new Date(this.tempoEmSegundos*1000).toISOString().substr(11,8)

            /* 
            Ao digitar Date().toISOString() vai retirnar essa data:
            "2023-05-30T13:58:38.952Z"
            Precisamos realmente desse valor: 13:58:38
            Para isso nós usamos a função substr, que vai pegar a string a partir do 8 caracter até o 11
            */
        }
    }
})
</script>