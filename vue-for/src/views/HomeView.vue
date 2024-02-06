<script lang="ts">
import FilhoComponent from '@/components/FilhoComponent.vue';

export default {
  name: 'HomeView',
  components: { FilhoComponent },
  setup() {
    const clientes = [
      { nome: 'Cliente1', idade: 25, email: 'cliente1@email.com', telefone: '123456789', cidade: 'CidadeA', profissao: 'programador' },
      { nome: 'Cliente2', idade: 30, email: 'cliente2@email.com', telefone: '987654321', cidade: 'CidadeB', profissao: 'programador' },
      { nome: 'Cliente3', idade: 22, email: 'cliente3@email.com', telefone: '111222333', cidade: 'CidadeC', profissao: 'programador' },
      { nome: 'Cliente4', idade: 28, email: 'cliente4@email.com', telefone: '444555666', cidade: 'CidadeD', profissao: 'engenheiro' },
      { nome: 'Cliente5', idade: 35, email: 'cliente5@email.com', telefone: '999888777', cidade: 'CidadeE', profissao: 'engenheiro' },
      { nome: 'Cliente6', idade: 26, email: 'cliente6@email.com', telefone: '777888999', cidade: 'CidadeF', profissao: 'engenheiro' },
      { nome: 'Cliente4', idade: 28, email: 'cliente4@email.com', telefone: '444555666', cidade: 'CidadeD', profissao: 'analista' },
      { nome: 'Cliente5', idade: 35, email: 'cliente5@email.com', telefone: '999888777', cidade: 'CidadeE', profissao: 'analista' },
      { nome: 'Cliente6', idade: 26, email: 'cliente6@email.com', telefone: '777888999', cidade: 'CidadeF', profissao: 'analista' }
    ]
    return {
      clientes
    }
  },


}
</script>

<template>
  <main>
    <FilhoComponent :clientes="clientes" />
  </main>
</template>
