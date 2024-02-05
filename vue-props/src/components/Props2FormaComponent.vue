<script setup lang="ts">
     const props = defineProps(['nomeInicial', 'nomeFinal'])

     // Para você usar a props no script você precisa declarra a const props
    // Já no template é só chamar o nome da props.

</script>
<template>
    <div class="container">
        <h1>{{ nomeInicial }} {{ nomeFinal }}</h1>
    </div>
</template>
