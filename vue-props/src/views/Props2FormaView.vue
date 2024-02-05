<template>
  <div class="about">
    <Props2FormaComponent :nomeInicial="nomeInicial = 'Maria'" :nomeFinal="nomeFinal = 'Souza'"/>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
import { ref } from 'vue';
import Props2FormaComponent from '@/components/Props2FormaComponent.vue';

  const nomeInicial = ref('')
  const nomeFinal = ref('')

</script>
