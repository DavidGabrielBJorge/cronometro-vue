<template>
    <div class="box has-text-weight-bold" :style="estilos"><!--Outra forma de estilizar um componente-->
          <slot></slot><!--O que estiver dentro do slot será renderizado-->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "BoxCronometro",
    data(){
        return{
            estilos:{
                'background-color': '#b4c4de'
            }
            
            
        }
    }
})
</script>
<!--
<style scoped>
.box{
    background: #b4c4de;
}
</style>
-->