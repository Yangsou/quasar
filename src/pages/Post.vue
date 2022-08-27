<template>
  <section id="posts" class="posts">
    <div class="posts__main">
      <div class="container tw-h-full tw-flex tw-justify-end tw-items-center">
        <div class="text-white tw-rounded-lg posts__title text-bold text-h4">
          Find Out About New<br />
          Trends And Updates<br />
          In Our Field
        </div>
      </div>
    </div>

    <div class="container tw-pt-16">
      <post-item
        class="post-item"
        v-for="item in posts"
        :post="item"
        v-bind:key="item.sys.id"
      >
        <!-- <p>{{ item.fields.title }}</p> -->
      </post-item>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { usePostStore } from 'src/stores/post-store';
import PostItemVue from 'src/components/Posts/PostItem.vue';

export default defineComponent({
  name: 'Post-List',
  components: {
    'post-item': PostItemVue,
  },
  preFetch() {
    const postStore = usePostStore();
    return postStore.getEntries();
  },
  setup() {
    const postStore = usePostStore();

    return {
      posts: computed(() => postStore.entries.items),
    };
  },
});
</script>

<style lang="scss" scoped>
.posts {
  padding-bottom: 120px;
  &__main {
    padding: 80px 0 40px;
    height: 70vh;
    position: relative;
    background: {
      image: url(../assets/imgs/meeting.jpeg);
      position: center;
      size: cover;
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(#000, 0.6);
    }
  }
  &__title {
    background-color: rgba(#fff, 0.4);
    z-index: 1;
    padding: 16px 24px;
  }
}
</style>
