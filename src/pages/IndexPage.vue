<template>
  <home-main />
</template>

<script lang="ts">
// import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, computed } from 'vue';
import { useStore } from 'src/store';
// import { useMeta } from 'quasar';
import { get } from 'lodash';
import { GlobalActionType } from 'src/store/global/types';
import HomeMainVue from 'src/components/Homepages/HomeMain.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    'home-main': HomeMainVue,
  },
  preFetch({ store }) {
    return store.dispatch(GlobalActionType.GET_ENTRIES);
  },
  // mixins: [createMetaMixin(metaData)],
  setup() {
    const store = useStore();
    const entries = computed(() => store.state.global.entries);
    // useMeta({
    //   title: title.value,
    //   meta: {},
    // });
    return { entries, get };
  },
});
</script>
