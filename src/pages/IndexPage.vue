<template>
  <q-page class="row items-center justify-evenly">
    <ul>
      <li v-for="entry in entries.items" v-bind:key="entry.sys.id">
        <router-link :to="`/post/${get(entry, 'sys.id')}`">
          <!-- <a v-bind:href="`/post/${get(entry, 'sys.id')}`"> -->
          {{ get(entry, 'fields.title') }}
          <!-- </a> -->
        </router-link>
      </li>
    </ul>
  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
// import ExampleComponent from 'components/ExampleComponent.vue';
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'src/store';
// import { useMeta } from 'quasar';
import { get } from 'lodash';
import { GlobalActionType } from 'src/store/global/types';

export default defineComponent({
  name: 'IndexPage',
  // components: { ExampleComponent },
  preFetch({ store }) {
    return store.dispatch(GlobalActionType.GET_ENTRIES);
  },
  // mixins: [createMetaMixin(metaData)],
  setup() {
    const store = useStore();
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1',
      },
      {
        id: 2,
        content: 'ct2',
      },
      {
        id: 3,
        content: 'ct3',
      },
      {
        id: 4,
        content: 'ct4',
      },
      {
        id: 5,
        content: 'ct5',
      },
    ]);
    const meta = ref<Meta>({
      totalCount: 1200,
    });
    const entries = computed(() => store.state.global.entries);
    // useMeta({
    //   title: title.value,
    //   meta: {},
    // });
    return { todos, meta, entries, get };
  },
});
</script>
