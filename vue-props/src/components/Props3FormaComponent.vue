<template>
    <div>
        <h2>{{ nomeCompleto }}</h2>
    </div>
    <div class="card" v-html="card">
    </div>
    <div class="cardFiltro" v-html="cardFiltro"></div>
</template>
<script lang="ts">

export default {
    name: 'Props3FormaComponent',
    props: {
        nomeCompleto: String,
        card: String,
        cardFiltro: String
    },
    setup(props) {
        console.log(props.nomeCompleto)
    }
}


</script>
<style lang="">
    
</style>