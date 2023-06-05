<template>
    <div class="is-flex is-align-items-center is-justify-content-space-between">
                   
    <CronometroAplicacao :tempoEmSegundos="tempoEmSegundos"/><!--Indica que dentro do conponente Cronometro tem uma variavel chamada tempoEmSegundos que está sendo incrementada-->

        <button class="button" @click="iniciar" :disabled="cronometroRodando"><!--Ao clicar vai chamar a função iniciar-->
            <span class="icon">
            <i class="fas fa-play"></i>
            </span>
            <span>Iniciar</span>
        </button>

        <button class="button" @click="parar" :disabled="!cronometroRodando"><!--Linka o estado do botão com a variável "cronometroRodando", impedindo o usuário de clicar-->
            <span class="icon">
            <i class="fas fa-pause"></i>
            </span>
            <span>Parar</span>
        </button>

        <button class="button" @click="zerar" :disabled="!cronometroRodando">
            <span class="icon">
            <i class="fas fa-stop"></i>
            </span>
            <span>Zerar</span>
        </button>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CronometroAplicacao from './CronometroAplicacao.vue'
export default defineComponent({
    name: 'TemporizadorControle',
    emits:['aoTemporizadorFinalizado'],
    components:{
        CronometroAplicacao
    },
    //Métodos são as funções que são executadas quando o usuário interage com o site

    //Método que retorna um objeto que representa quais são as informções pertinentes para esse componente
    data(){
        return{
            tempoEmSegundos: 0,
            cronometro:0,
            cronometroRodando: false
        }
    },
    
    methods:{
        iniciar(){
            //setInterval é uma função do JavaScript que chama uma função em cada intervalo de tempo, no caso milisegundos
            this.cronometroRodando = true;//O botão vai aparecer como clicável
            this.cronometro = setInterval(()=>{
                this.tempoEmSegundos = this.tempoEmSegundos + 1;
            },1000)//1 seg = 1000 ms

        },
        parar(){
            this.cronometroRodando = false;
            clearInterval(this.cronometro)
        },
        zerar(){
            this.cronometroRodando =false;
            clearInterval(this.cronometro)//Ao clicar para parar, o botão "parar" não será mais clicável
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos)
            this.tempoEmSegundos = 0//reseta o cronometro
        }

    }
})
</script>

