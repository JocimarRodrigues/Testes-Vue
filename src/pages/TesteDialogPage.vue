<template lang="">
  <div class='flex justify-center items-center'>
   <q-btn @click="openDialog">Abrir Dialog</q-btn>
  </div>
</template>
<script>
import { useQuasar } from 'quasar';
import DialogComponent from 'src/components/DialogComponent.vue';


export default {
  name: 'TesteDialogPage',
  setup() {
    const $q = useQuasar()


    const openDialog = () => {
      console.log('Abriou o modal')

      $q.dialog({
        component: DialogComponent,
        componentProps: {
          text: 'Passando um texto',
        },
      }).onOk(() => {
        console.log('Finalizou o Dialog, sempre acontece quando tu clica no OK do botao do Modal')
      }).onCancel(() => {
        console.log('Dialog cancelado, Acontece quando tu fecha o modal, mesmo que tu clique fora do botao cancelar.')
      }).onDismiss(() => {
        console.log('Essa propriedade sempre acontece, independente do modal abrir ou fechar.')
      })
    }
    return {
      openDialog
    }
  }
}


</script>
<style lang="">

</style>
