<template>
  <div class="items-center justify-center row">
    <div class="items-center justify-center row">
      <img :class="className" :src="img" />
    </div>
    <div>
      <p
        class="text-white text-svn tw-text-8xl sm:tw-text-9xl tw-mb-0 tw-opacity-25"
      >
        <span ref="titleRef" />
      </p>
      <p class="text-white tw-text-3xl md:tw-text-6xl">
        <span ref="subTitleRef" />
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
export default defineComponent({
  name: 'HomeSlideItem',
  props: {
    name: String,
    title: String,
    subTitle: String,
    img: String,
    className: String,
  },
  setup(props) {
    const titleRef = ref<HTMLSpanElement>();
    const subTitleRef = ref<HTMLSpanElement>();

    const typingTitle = (titles: string[], target: HTMLSpanElement) => {
      let i = 0;
      let _title = '';
      const _interval = setInterval(() => {
        if (target) {
          if (i >= titles.length - 1) {
            clearInterval(_interval);
          }
          _title = _title + titles[i];
          target.innerHTML = _title;
          i++;
        }
      }, 100);
    };

    const animate = () => {
      let subTitleToArray = props.subTitle?.split('<br>') || [];
      subTitleToArray = [
        ...subTitleToArray[0].split(''),
        '<br>',
        ...subTitleToArray[1].split(''),
      ];
      setTimeout(() => {
        typingTitle(
          props.title?.split('') || [],
          titleRef.value as HTMLSpanElement
        );
      }, 100);
      setTimeout(() => {
        typingTitle(subTitleToArray, subTitleRef.value as HTMLSpanElement);
      }, 1100);
    };

    onMounted(() => {
      animate();
    });
    return {
      titleRef,
      subTitleRef,
    };
  },
});
</script>
