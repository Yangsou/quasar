<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <l-header />
      <router-view />
      <global-footer />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GlobalHeaderVue from 'src/components/GlobalHeader.vue';
import GlobalFooter from 'src/components/GlobalFooter.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    'l-header': GlobalHeaderVue,
    GlobalFooter,
  },
  setup() {
    return {
      essentialLinks: [],
    };
  },
});
</script>
