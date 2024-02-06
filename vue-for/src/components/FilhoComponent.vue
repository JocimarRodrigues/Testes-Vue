<template>
    <div class="container" v-for="(categoria, index) in categorias" :key="categoria.nome">
        <div class="card">
            
            <h1>{{ categorias[index].nome }}</h1>
            <!--1 Forma-->
            <!-- <h2>{{ clientesFiltradosPorCategoria(index) }}</h2> -->
            <!--2 forma-->
            <h2>{{ clientesFiltradosPorCategoria[categoria.nome] }}</h2>
        </div>
    </div>
</template>

<script lang="ts">
import { computed, ref } from 'vue';

export default {
    name: 'FilhoComponent',
    props: {
        clientes: {
            type: Object,
        },
    },
    setup(props) {
        const categorias = [
            {
                nome: 'engenheiro'
            },
            {
                nome: 'programador'
            },
            {
                nome: 'analista'
            },
        ]



        // 1 forma
        // const clientesFiltradosPorCategoria = (index: number) => {
        //     return computed(() => {
        //         return props.clientes?.filter((item: any) => item.profissao === categorias[index].nome)
        //     })
        // }
 //-----------------------

  
// 2 Forma
 const clientesFiltradosPorCategoria = computed(() => {
            const clientesFiltrados = [] as any

            categorias.forEach((categoria) => {
                clientesFiltrados[categoria.nome] = props.clientes?.filter((item: any) => item.profissao === categoria.nome);
            });


            return clientesFiltrados;
        });
// ---------

        return {
            categorias,
            clientesFiltradosPorCategoria
        }
    }
}
</script>

<style lang="">
    
</style>
