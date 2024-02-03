<script lang="ts">


import apiService from '@/services/apiService';
import { computed, defineComponent, onMounted, ref } from 'vue';

interface dadosUsuario {
  nome: string,
  foto: string,
  sobrenome: string
}

export default defineComponent({
  name: 'ComputedArrView',
  setup() {
    const data = ref()
    onMounted(async () => {

      data.value = await apiService.fetchData()

    })

    const nomeCompleto = computed(() => { return data.value.map((item: dadosUsuario) => `${item.nome} ${item.sobrenome}`) })
    console.log(nomeCompleto)
    return {
      data,
      nomeCompleto
    }
  }


})





// const data = await apiService.fetchData()
// console.log(data)



</script>

<template>
  <main>
    <div class="container" v-for="(item, index) in data" :key="item.nome">
      <img :src="item.foto" alt="">
      <h1>{{ nomeCompleto[index] }}</h1>
    </div>
  </main>
</template>

<style scoped>
.container img {
  width: 200px;
  height: 200px;
}
</style>