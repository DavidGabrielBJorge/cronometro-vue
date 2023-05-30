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
                    <section>
                        {{ tempoDecorrido }}<!--O Vue não vai enxergar o tempoDecorrido como uma função mas sim uma propriedade do componente porém calculado-->
                    </section>

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

export default defineComponent({
    name: 'FormularioCronometro',
    //Métodos são as funções que são executadas quando o usuário interage com o site

    //Método que retorna um objeto que representa quais são as informções pertinentes para esse componente
    data(){
        return{
            tempoEmSegundos: 0,
            cronometro:0
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

