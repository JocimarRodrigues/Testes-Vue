<template>
    <div>
        <div class="form">
            <input type="text" name="nome" v-model="nomeInicial">
            <input type="text" name="sobrenome" v-model="nomeFinal">
        </div>
        <Props3FormaComponent :nomeCompleto="nomeCompleto" />
    </div>
</template>
<script lang="ts">
import { computed, ref } from 'vue';
import Props3FormaComponent from '@/components/Props3FormaComponent.vue';

export default {
    name: 'Props3FormaView',
    components: {
        Props3FormaComponent
    },
    setup() {
        const nomeInicial = ref('')
        const nomeFinal = ref('')




        const nomeCompleto = computed(() => { return `${nomeInicial.value}${nomeFinal.value} ` })

        console.log(nomeCompleto)

        return {
            nomeInicial,
            nomeFinal,
            nomeCompleto
        }
    }
}
</script>
<style lang="">
    
</style>