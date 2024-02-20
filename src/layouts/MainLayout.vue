<template>
  <q-layout view="lHh Lpr lFf">
    <div class="q-pa-xl ma-xl">
      <q-toolbar class="text-blue-grey-10  rounded-borders">
        <q-btn flat label="W." class="btn-w" />
        <q-space />

        <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
        <q-tabs>
          <router-link to="/dialog">
            <q-tab name="tab1" label="Dialog" />
          </router-link>
          <q-tab name="tab2" label="Tab 2" />
          <q-tab name="tab3" label="Tab 3" />
        </q-tabs>
      </q-toolbar>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';


export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup() {
    const leftDrawerOpen = ref(false)

    const router = useRouter()


    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      setup() {

        return {
          tab: ref(''),
          router
        }
      }
    }
  }
});
</script>

<style scoped lang="scss">
.btn-w {
  font-size: 80px;
}

@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
</style>
