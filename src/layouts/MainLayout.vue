<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <l-header />
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import GlobalHeaderVue from 'src/components/GlobalHeader.vue';

export default defineComponent({
  name: 'MainLayout',
  components: {
    'l-header': GlobalHeaderVue,
  },
  setup() {
    return {
      essentialLinks: [],
    };
  },
});
</script>
