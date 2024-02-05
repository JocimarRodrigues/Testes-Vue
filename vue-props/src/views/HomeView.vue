<script  lang="ts">
import Props1Forma from '@/components/Props1Forma.vue';
import { ref } from 'vue';


export default {
  name: 'HomeView',
  components: {
    Props1Forma
  },
  setup() {
    const nomeInicial = ref('')
    const nomeFinal = ref('')

    return {
      nomeInicial,
      nomeFinal
    }
  }
}

</script>

<template>
  <main>
    <Props1Forma  :nomeInicial="'John'" :nomeFinal="'Rodrigues'"/>
  </main>
</template>
