<template>
    <div class="box">
        <div class="columns">
            <!--Coluna do título de cada rodada cronometrada-->
            <div class="column is-8" role="form" aria-label="Formulário para a criação de um novo título de cronômetro">
                <input type="text" class="input" placeholder="Digite o título do seu cronômetro">
            </div>

            <!--Coluna do temporizador-->
            <div class="column">
                <TemporizadorControle/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TemporizadorControle from './TemporizadorControle.vue'
export default defineComponent({
    name: 'FormularioCronometro',
    components:{
        TemporizadorControle
    },
   
})
</script>

