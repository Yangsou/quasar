<template>
  <section id="about-us" class="about-us">
    <div class="about-us__main">
      <div class="container tw-h-full tw-flex tw-justify-end tw-items-center">
        <div class="text-white tw-rounded-lg about-us__title text-bold text-h4">
          Hello,<br />We are Lion Team
        </div>
      </div>
    </div>
    <div class="container tw-py-20">
      <div class="tw-flex tw-flex-wrap md:tw-flex-nowrap">
        <div class="tw-w-full tw-px-4 md:tw-w-1/2">
          <div
            class="about-us__card shadow-7 tw-py-4 tw-px-6 tw-transform tw--translate-y-32"
          >
            <p class="text-h4 title">WHO ARE WE?</p>
            <p class="text">
              We are a 360° integrated advertising agency providing a full-site
              of marketing solutions including branding strategy, creative
              collateral design, digital content, online & offline
              communications. Whether you’re rebranding, launching a new brand
              or need design work, we can help you from strategy to
              implementation.
            </p>
            <p class="text-h4 text-svn">Lion Team</p>
          </div>
        </div>
        <div class="tw-w-full md:tw-w-1/2 tw-px-4">
          <div class="about-us__group-imgs">
            <img
              v-for="(item, index) in slides"
              :key="item"
              :data-src="'/imgs/' + item"
              :src="'/imgs/' + item"
              :class="`img lazy ${getClassByIndex(index)}`"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-secondary">
      <p class="text-center text-white tw-text-2xl md:tw-text-6xl tw-py-28">
        <span>Your Vision, Our Passion</span>

        <svg
          width="60px"
          height="40px"
          viewBox="0 0 150 100"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          class="tw-transform tw--translate-y-full"
        >
          <g
            id="Website"
            stroke="none"
            stroke-width="1"
            fill="none"
            fill-rule="evenodd"
          >
            <g
              id="About-Us"
              transform="translate(-1466.000000, -2148.000000)"
              fill="#FBB500"
              fill-rule="nonzero"
            >
              <g id="Quote" transform="translate(0.000000, 2038.000000)">
                <path
                  d="M1553.16216,110 L1553.16216,172.5 L1587.72297,172.5 L1565.72973,210 L1594.00676,210 L1616,172.5 L1616,110 L1553.16216,110 Z M1466,172.5 L1500.56081,172.5 L1478.56757,210 L1506.84459,210 L1528.83784,172.5 L1528.83784,110 L1466,110 L1466,172.5 Z"
                  id="Shape"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </p>
    </div>

    <div class="container">
      <div class="tw-flex tw-flex-wrap md:tw-flex-nowrap">
        <div class="tw-w-1/2"></div>
        <div class="tw-w-full md:tw-w-1/2">
          <div class="about-us__card tw-py-4 tw-px-6 animate-to-left lazy-load">
            <p class="text-h4 title">Lion's Mission</p>
            <p class="text">
              Nobody knows your values, your story, your market and audience
              better than you do. It’s our job to listen to you and convey
              stories into conversations, turn impressions into relationships,
              and run campaigns into results, we are here to build intelligent
              brand experiences that deliver real commercial outcomes for you.
            </p>
          </div>
        </div>
      </div>
      <div class="tw-text-center tw-px-2">
        <img
          src="/imgs/LIO_1046.jpg"
          class="tw-w-full tw-max-w-2xl animate-to-top lazy-load"
        />
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.about-us {
  padding-bottom: 120px;
  &__main {
    padding: 80px 0 40px;
    height: 70vh;
    position: relative;
    background: {
      image: url(../assets/imgs/van-phong-1920x1080.jpeg);
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
  &__card {
    border-radius: 8px;
    background-color: #fff;
    max-width: 450px;
    width: 100%;
    .title {
      position: relative;
      &::before {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 0;
        width: 100px;
        height: 2px;
        background-color: $primary;
      }
    }
  }
  &__group-imgs {
    position: relative;
    @media screen and (min-width: 768x) {
      width: 320px;
      height: 460px;
    }
    width: calc(100% - 64px);
    height: 360px;
    .img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transform-origin: center;
      transform-style: preserve-3d;
      object-fit: cover;
      object-position: top;
      transition: transform 350ms linear, filter 450ms linear;
      &.tw-z-30 {
        filter: none;
        transform: none;
      }
      &.tw-z-20 {
        // z-index: 2;
        // opacity: 0.8;
        filter: blur(2px);
        transform: scale(0.94) translateX(40px);
      }
      &.tw-z-10 {
        // z-index: 1;
        // opacity: 0.8;
        filter: blur(4px);
        transform: scale(0.87) translateX(80px);
      }
    }
  }
}
</style>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import { useGlobalStore } from 'src/stores/global-store';

export default defineComponent({
  name: 'about-us',
  preFetch() {
    const globalStore = useGlobalStore();
    globalStore.footer.title = '';
  },
  setup() {
    const intervalSlide = ref();
    const slidesIndex = ref([30, 20, 10]);
    const slideIndex = ref(0);
    const slides = ref([
      'LIO_1028.jpg',
      'lion-vision-2.jpeg',
      'lion-vision-video-team.png',
    ]);
    const interval = () => {
      intervalSlide.value = setInterval(() => {
        slideIndex.value = slideIndex.value + 1 > 2 ? 0 : slideIndex.value + 1;
      }, 3000);
    };
    const getClassByIndex = (index: number): string => {
      return `tw-z-${slidesIndex.value[index]}`;
    };
    watch(
      () => slideIndex.value,
      (index: number) => {
        if (index === 0) {
          slidesIndex.value = [30, 20, 10];
        }
        if (index === 1) {
          slidesIndex.value = [10, 30, 20];
        }
        if (index === 2) {
          slidesIndex.value = [20, 10, 30];
        }
      }
    );
    onMounted(() => {
      interval();
    });
    onUnmounted(() => (intervalSlide.value = null));
    return {
      slides: slides,
      getClassByIndex,
    };
  },
});
</script>
