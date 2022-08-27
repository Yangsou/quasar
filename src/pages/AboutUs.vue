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
      <div class="tw-flex">
        <div class="tw-w-1/2">
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
        <div class="tw-w-1/2">
          <div class="about-us__group-imgs">
            <img src="../assets/imgs/car.jpeg" class="img is-active" />
            <img src="../assets/imgs/car.jpeg" class="img" />
            <img src="../assets/imgs/car.jpeg" class="img" />
          </div>
        </div>
      </div>
    </div>

    <div class="bg-secondary">
      <p class="text-center text-white text-h3 tw-py-28">
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
      <div class="tw-flex">
        <div class="tw-w-1/2"></div>
        <div class="tw-w-1/2">
          <div class="about-us__card tw-py-4 tw-px-6">
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
      <div class="tw-text-center">
        <img src="../assets/imgs/meeting.jpeg" class="tw-w-full tw-max-w-2xl" />
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
  &__card {
    border-radius: 8px;
    background-color: #fff;
    width: 450px;
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
    width: 320px;
    height: 460px;
    .img {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      transform-origin: center;
      transform-style: preserve-3d;
      z-index: 3;
      &:nth-child(2) {
        z-index: 2;
        // opacity: 0.8;
        filter: blur(2px);
        transform: scale(0.94) translateX(40px);
      }
      &:nth-child(3) {
        z-index: 1;
        // opacity: 0.8;
        filter: blur(4px);
        transform: scale(0.87) translateX(80px);
      }
    }
  }
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'about-us',
  setup() {
    return {
      //
    };
  },
});
</script>
