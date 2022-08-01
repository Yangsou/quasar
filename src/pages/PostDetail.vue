<template>
  <q-page class="row items-center justify-evenly">
    <h1 class="text-h1 text-red-2">
      {{ get(entry, 'fields.title') }}
    </h1>
    <div v-html="markdownToHtml" />
  </q-page>
</template>
<style lang="scss" scoped>
.pre-line {
  white-space: pre-line;
}
</style>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { useStore } from 'src/store';
// import { useMeta } from 'quasar';
import { get } from 'lodash';
import { GlobalActionType } from 'src/store/global/types';
import { useRoute } from 'vue-router';
import { marked } from 'marked';
import { useMeta } from 'quasar';

export default defineComponent({
  name: 'PostDetail',
  preFetch({ store, currentRoute }) {
    return store.dispatch(
      GlobalActionType.GET_ENTRY_BY_ID,
      currentRoute.params.postId
    );
  },
  // mixins: [createMetaMixin(metaData)],
  setup() {
    const store = useStore();
    const route = useRoute();
    const postId = computed(() => route.params.postId);
    const entry = computed(() => store.getters.getEntryById(postId.value));
    const markdownToHtml = computed(() => {
      const content = get(entry.value, 'fields.body', '');

      return marked(content);
    });
    useMeta({
      title: entry.value.fields.title,
      meta: {
        description: {
          name: 'description',
          content: entry.value.fields.description,
        },
      },
    });
    return { entry, get, postId, markdownToHtml };
  },
});
</script>
