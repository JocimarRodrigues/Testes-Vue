<template>
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <h1>Dialog aberto</h1>

      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onOKClick" />
        <q-btn color="primary" label="Cancel" @click="onCancelClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>
<script>
import { useDialogPluginComponent } from 'quasar'
export default {
  name: 'DialogComponent',
  props: {
    text: String
  },
  emits: [...useDialogPluginComponent.emits],
  setup(props) {
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } = useDialogPluginComponent()
    console.log('Dialog aberto')

    const onOKClick = () => {
      try {

        console.log('Confirmando modal'),
          onDialogOK(console.log())
      } catch (error) {
        console.error('Erro durante o tratamento do evento onDialogOK:', error);
      }
    }

    return {
      dialogRef,
      onDialogHide,
      onOKClick,
      onCancelClick: onDialogCancel
    }
  }

}
</script>
<style lang="">

</style>
