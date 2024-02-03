<script lang="ts">
import apiService from '@/services/apiService';
import { defineComponent, computed, onMounted, ref } from 'vue';



export default defineComponent({
    name: 'ComputedObjView.',
    setup() {
        const data = ref()
        const idUsuario = ref(0)

        const colors = {
            ativo: "green",
            aguardando: "yellow",
            inativo: "red"
        }

        // const buscarUsuario = computed(() => { return data.value = await apiService.fetchUserById(idUsuario.value)} )
        const filtrar = computed(() => {
      return  data.value.status
        ? data.value.status == 'ativo'
          ? colors.ativo
          : data.value.status == 'aguardando'
          ? colors.aguardando
          : colors.inativo
        : '';
    });




        const buscarUsuario = async () => {
            try {
                data.value = await apiService.fetchUserById(idUsuario.value)

            } catch (error) {
                console.log(error)
            }
        }
        return {
            data,
            idUsuario,
            buscarUsuario,
            filtrar

        }
    }
})
</script>

<template>
    <div class="container">
        <div class="form">
            <input type="number" v-model="idUsuario">
            <button type="submit" @click="buscarUsuario">Buscar</button>
        </div>

        <div class="card" v-if="data">
            <img :src="data.foto" alt="">
            <p :style="{ color: filtrar }">status: {{ data.status }}</p>
            <h1>{{ data.nome }}</h1>
        </div>

    </div>
</template>


<style scoped>
.container .card img {
    width: 300px;
    height: 300px;
}



</style>