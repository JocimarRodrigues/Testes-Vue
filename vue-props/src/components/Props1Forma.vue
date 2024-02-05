<template>
    <div class="container">
        {{ nomeInicial }} {{ nomeFinal }}
    </div>
</template>

<script lang="ts">
    export default {
        name: 'Props1FormaComponent.vue',
        props: ['nomeInicial', 'nomeFinal']
    }
</script>