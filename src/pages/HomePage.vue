<template>
  <div class="flex w-full gap-5 justify-center">
    <q-card style="width: 40vw;" class="h-full w-[40vw] bg-[--q-primary]">
      <q-card-section>
        <q-banner rounded class="col-span-3">
          <q-img :ratio="16 / 9" src="https://cdn.quasar.dev/img/mountains.jpg" style="max-height: 220px;">
          </q-img>
        </q-banner>
      </q-card-section>
      <q-card-section class="grid grid-cols-2 gap-10">
        <div class="">
          <h1 class="leading-tight text-2xl whitespace-normal">
            Texto do 1, TExto 2, TExto 3
          </h1>
        </div>
        <div class="">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum qui
            ?
          </p>
          -<q-btn flat color="accent">Teste</q-btn>
        </div>
      </q-card-section>
    </q-card>
    <q-card style="width: 20vw; height: max-content">
      <q-card-section style="width: 650px" v-for="cli in clientes" :key="cli.nome">
        <h1>News</h1>
        <div v-for="value in values" :key="value">
          <p>{{ cli[value.key] }}</p>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>
<script>
export default {
  name: 'HomePage',
  setup() {
    // const values = [
    //     {
    //         key: 'label',
    //     },
    //     {
    //         key: 'nome',
    //     },
    //     {
    //         key: 'idade',
    //     },
    // ]

    const values = [
      { key: 'nome' },
      { key: 'idade' },
      { key: 'email' },
      { key: 'telefone' },
      { key: 'cidade' },
      { key: 'profissao' },
    ];

    const keys = ['nome', 'idade', 'email', 'telefone', 'cidade', 'profissao'];

    const values2 = ['label', 'nome', 'idade'];

    const textos = [
      {
        label: 'Label do paragrafo 1,',
        nome: 'Nome do Paragrafo 1',
        idade: 'Idade do paragrafo 1',
      },
      {
        label: 'Label do paragrafo 2',
        nome: 'Nome do Paragrafo 2',
        idade: 'Idade do paragrafo 2',
      },
      {
        label: 'Label do paragrafo 3',
        nome: 'Nome do Paragrafo 3',
        idade: 'Idade do paragrafo 3',
      },
    ];

    const clientes = [
      {
        nome: 'Cliente1',
        idade: '25',
        email: 'cliente1@email.com',
        telefone: '123456789',
        cidade: 'CidadeA',
        profissao: 'programador',
      },
      {
        nome: 'Cliente2',
        idade: 30,
        email: 'cliente2@email.com',
        telefone: '987654321',
        cidade: 'CidadeB',
        profissao: 'programador',
      },
      {
        nome: 'Cliente3',
        idade: 22,
        email: 'cliente3@email.com',
        telefone: '111222333',
        cidade: 'CidadeC',
        profissao: 'programador',
      },
      {
        nome: 'Cliente4',
        idade: 28,
        email: 'cliente4@email.com',
        telefone: '444555666',
        cidade: 'CidadeD',
        profissao: 'engenheiro',
      },
      {
        nome: 'Cliente5',
        idade: 35,
        email: 'cliente5@email.com',
        telefone: '999888777',
        cidade: 'CidadeE',
        profissao: 'engenheiro',
      },
      {
        nome: 'Cliente6',
        idade: 26,
        email: 'cliente6@email.com',
        telefone: '777888999',
        cidade: 'CidadeF',
        profissao: 'engenheiro',
      },
      {
        nome: 'Cliente4',
        idade: 28,
        email: 'cliente4@email.com',
        telefone: '444555666',
        cidade: 'CidadeD',
        profissao: 'analista',
      },
      {
        nome: 'Cliente5',
        idade: 35,
        email: 'cliente5@email.com',
        telefone: '999888777',
        cidade: 'CidadeE',
        profissao: 'analista',
      },
      {
        nome: 'Cliente6',
        idade: 26,
        email: 'cliente6@email.com',
        telefone: '777888999',
        cidade: 'CidadeF',
        profissao: 'analista',
      },
    ];

    return {
      values,
      clientes,
      textos,
      keys,
    };
  },
};
</script>
<style lang="scss"></style>
