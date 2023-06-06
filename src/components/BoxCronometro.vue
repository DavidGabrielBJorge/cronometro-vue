<template>
    <div class="box has-text-weight-bold">
          <slot></slot><!--O que estiver dentro do slot será renderizado-->
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: "BoxCronometro"
})
</script>

<style scoped>
.box{
    background: #b4c4de;
}
</style>