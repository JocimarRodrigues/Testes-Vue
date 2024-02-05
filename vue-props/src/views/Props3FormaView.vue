<template>
    <div>
        <div class="form">
            <input type="text" name="nome" v-model="nomeInicial">
            <input type="text" name="sobrenome" v-model="nomeFinal">
        </div>
        <Props3FormaComponent :nomeCompleto="nomeCompleto"  :card="card" :cardFiltro="cardFiltro"/>
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
        const nomeFIltrado = ref('')

        const card = computed(() => {
            return `<h2 style="color: red">${nomeInicial.value} </h2> <h3 style="color: blue">${nomeFinal.value} </3> `
        })

        const cardFiltro = computed(() => {
            nomeInicial.value  == 'John' ? nomeFIltrado.value : 'Nome não passou no filtro.' 
            // eslint-disable-next-line vue/no-side-effects-in-computed-properties
            nomeFIltrado.value = nomeInicial.value === 'John' ? 'Nome passou no filtro.' : 'Nome não passou no filtro.';
            // Essa lógica está errada porque uma propriedade computada não deve alterar o valor de um estado.
            return `<h1>${nomeFIltrado.value} </h1>`
        })





        const nomeCompleto = computed(() => { return `${nomeInicial.value}${nomeFinal.value} ` })

        console.log(nomeFIltrado.value)

        return {
            nomeInicial,
            nomeFinal,
            nomeCompleto,
            card,
            cardFiltro
        }
    }
}
</script>
<style lang="">
    
</style>