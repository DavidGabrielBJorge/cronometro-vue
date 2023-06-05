<template>
    <div class="box">
        <div class="columns">
            <!--Coluna do título de cada rodada cronometrada-->
            <div class="column is-8" role="form" aria-label="Formulário para a criação de um novo título de cronômetro">
                <input type="text" class="input" placeholder="Digite o título do seu cronômetro">
            </div>

            <!--Coluna do temporizador-->
            <div class="column">
                <div class="is-flex is-align-items-center is-justify-content-space-between">
                   
                    <CronometroAplicacao :tempoEmSegundos="tempoEmSegundos"/><!--Indica que dentro do conponente Cronometro tem uma variavel chamada tempoEmSegundos que está sendo incrementada-->

                    <button class="button" @click="iniciar"><!--Ao clicar vai chamar a função iniciar-->
                        <span class="icon">
                        <i class="fas fa-play"></i>
                        </span>
                        <span>Iniciar</span>

                    </button>
                    <button class="button" @click="parar">
                        <span class="icon">
                        <i class="fas fa-pause"></i>
                        </span>
                        <span>Parar</span>
                    </button>

                    <button class="button" @click="zerar">
                        <span class="icon">
                        <i class="fas fa-stop"></i>
                        </span>
                        <span>Zerar</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import CronometroAplicacao from './CronometroAplicacao.vue'
export default defineComponent({
    name: 'FormularioCronometro',
    components:{
        CronometroAplicacao
    },
    //Métodos são as funções que são executadas quando o usuário interage com o site

    //Método que retorna um objeto que representa quais são as informções pertinentes para esse componente
    data(){
        return{
            tempoEmSegundos: 0,
            cronometro:0
        }
    },
    
    methods:{
        iniciar(){
            //setInterval é uma função do JavaScript que chama uma função em cada intervalo de tempo, no caso milisegundos
            this.cronometro = setInterval(()=>{
                this.tempoEmSegundos = this.tempoEmSegundos + 1;
            },1000)//1 seg = 1000 ms

        },
        parar(){
            clearInterval(this.cronometro)
        },
        zerar(){
            clearInterval(this.cronometro)
        }

    }
})
</script>

