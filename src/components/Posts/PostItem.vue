<template>
  <div
    :class="`flex ${
      type ? `tw-flex-${type}` : ''
    } tw-shadow-2xl tw-rounded-lg post-item tw-justify-between tw-mb-6 tw-px-2 md:tw-px-0`"
  >
    <video
      autoplay
      loop
      class="tw-w-full md:tw-w-2/5 tw-max-h-64 tw-object-cover post-item__hero-img"
      v-if="post.fields.heroImage?.fields?.file?.contentType === 'video/mp4'"
    >
      <source
        :src="`https:${post.fields.heroImage?.fields?.file.url}`"
        type="video/mp4"
      />
    </video>
    <img
      v-else
      :src="heroImage"
      class="post-item__hero-img tw-object-cover md:tw-rounded-tl-xl md:tw-rounded-bl-xl tw-w-full md:tw-w-2/5"
    />
    <div class="post-item__content tw-w-full md:tw-w-3/5 md:tw-pl-6 tw-py-6">
      <p class="tw-mb-0">
        <span class="tw-uppercase tw-font-bold tw-text-sm">{{
          post.fields.author?.fields?.name
        }}</span>
        <span class="tw-text-sm tw-opacity-75 tw-ml-2">{{ publishTime }}</span>
      </p>
      <router-link
        :to="`/lion-sharing/${post.sys.id}`"
        class="tw-font-bold tw-text-3xl tw-text-black tw-no-underline"
        >{{ post.fields.title }}</router-link
      >
      <p class="text-3-lines tw-max-w-xl">{{ post.fields.description }}</p>
      <q-btn class="d-btn-secondary" :href="`/lion-sharing/${post.sys.id}`"
        >Read more</q-btn
      >
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { PostType } from 'src/stores/post-store';
import { usePost } from '../../compositions/Post';
import { Entry } from 'contentful';
import { formatTimeDuration } from '../../shared/string';

export default defineComponent({
  name: 'post-item',
  props: {
    post: {
      type: Object as PropType<Entry<PostType>>,
      required: true,
    },
    type: String as PropType<'row' | 'col'>,
  },
  setup(props) {
    const { useGetAssetById } = usePost();
    const { data: heroImage } = useGetAssetById(
      props.post.fields.heroImage?.sys?.id,
      true
    );

    return {
      heroImage,
      publishTime: formatTimeDuration(props.post.fields.publishDate),
    };
  },
});
</script>

<style lang="scss" scoped>
.post-item {
  &.tw-flex-col {
    box-shadow: none;
    .post-item__content,
    .post-item__hero-img {
      padding-left: 0;
      padding-right: 0;
      border-radius: 0;
      width: 100% !important;
    }
  }
}
</style>
