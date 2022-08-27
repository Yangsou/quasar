<template>
  <main>
    <home-main />
    <working-process />
    <home-partner />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { useMeta } from 'quasar';
import HomeMainVue from 'src/components/Homepages/HomeMain.vue';
import WorkingProcessVue from 'src/components/Homepages/WorkingProcess.vue';
import HomePartnerVue from 'src/components/Homepages/HomePartner.vue';
import { useGlobalStore } from 'src/stores/global-store';

export default defineComponent({
  name: 'IndexPage',
  components: {
    'home-main': HomeMainVue,
    'working-process': WorkingProcessVue,
    'home-partner': HomePartnerVue,
  },
  preFetch({}) {
    // return store.dispatch(GlobalActionType.GET_ENTRIES);
    const globalStore = useGlobalStore();
    globalStore.footer.title = "Let's make something \namazing together";
  },
  // mixins: [createMetaMixin(metaData)],
  setup() {
    return {
      title: '',
    };
  },
});
</script>
