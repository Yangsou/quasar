<template>
  <section id="post-detail" class="post-detail">
    <div class="post-detail__main">
      <img
        :src="entry?.fields.heroImage.fields.file?.url"
        class="post-detail__hero-img"
      />
    </div>
    <div class="container tw-relative">
      <div
        class="post-detail__wrap tw-px-4 tw-bg-white tw-py-8 tw-shadow-xl tw-transform tw--translate-y-32"
      >
        <p class="tw-text-3xl tw-font-bold tw-text-center">
          {{ entry?.fields.title }}
        </p>
        <p class="tw-mb-0 tw-mx-auto tw-max-w-xl">
          <span class="tw-uppercase">{{
            entry?.fields.author?.fields?.name
          }}</span>
          <span class="tw-text-sm tw-opacity-75 tw-ml-2">{{
            publishTime
          }}</span>
        </p>
        <div
          class="tw-w-full tw-max-w-xl tw-mx-auto tw-bg-gray-300 tw-my-4"
          style="height: 1px"
        ></div>
        <div class="markdown tw-max-w-3xl tw-mx-auto" v-html="markdownToHtml" />
      </div>
    </div>

    <div class="container">
      <p class="tw-text-2xl tw-font-bold">Interesting Articles to Read</p>
      <div class="tw-grid tw-grid-cols-3 tw-gap-6">
        <post-item
          v-for="item in posts"
          :key="item.sys.id"
          :post="item"
          type="col"
          class="tw-w-full"
        ></post-item>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.pre-line {
  white-space: pre-line;
}
.post-detail {
  &__hero-img {
    width: 100vw;
    height: 50vh;
    object-fit: cover;
  }
  &__wrap {
    img {
      width: 100%;
    }
  }
}
</style>
<script lang="ts">
import { defineComponent, computed } from 'vue';
import { get } from 'lodash';
import { RouteLocationNormalizedLoaded, useRoute } from 'vue-router';
import { marked } from 'marked';
import { useMeta } from 'quasar';
import { usePostStore } from 'src/stores/post-store';
import { formatTimeDuration } from 'src/shared/string';
import PostItem from 'src/components/Posts/PostItem.vue';

export default defineComponent({
  name: 'post-detail',
  preFetch({ currentRoute }: { currentRoute: RouteLocationNormalizedLoaded }) {
    const store = usePostStore();
    return store.getEntryById(currentRoute.params.postId as string);
  },
  // mixins: [createMetaMixin(metaData)],
  setup() {
    const store = usePostStore();
    const route = useRoute();
    const postId = computed<string>(() => route.params.postId as string);
    const entry = computed(() => store.getEntryLocalById(postId.value));
    const markdownToHtml = computed(() => {
      const content = get(entry.value, 'fields.body', '');
      return marked(content);
    });
    useMeta({
      title: entry.value?.fields?.title,
      meta: {
        description: {
          name: 'description',
          content: entry.value?.fields.description,
        },
      },
    });
    return {
      entry,
      get,
      postId,
      markdownToHtml,
      posts: computed(() => store.interestingPosts),
      publishTime: formatTimeDuration(
        entry.value?.fields.publishDate as string
      ),
    };
  },
  components: { PostItem },
});
</script>
