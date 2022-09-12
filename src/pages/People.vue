<template>
  <section id="lion-people" class="about-us">
    <div class="about-us__main">
      <div class="container tw-h-full tw-flex tw-justify-end tw-items-center">
        <div class="text-white tw-rounded-lg about-us__title text-bold text-h4">
          We Go Beyond The,<br />Ordinary
        </div>
      </div>
    </div>
    <div class="container tw-py-20">
      <div class="tw-flex tw-flex-wrap md:tw-flex-nowrap">
        <div class="tw-w-full md:tw-w-1/2 tw-text-right">
          <img src="/imgs/LIO_0917_edit.jpeg" class="tw-max-w-md tw-w-full" />
        </div>
        <div class="tw-w-full md:tw-w-1/2">
          <div class="about-us__card tw-py-4 tw-px-6">
            <p class="text-h4">WE ARE A TEAM OF GREATS</p>
            <p class="text">
              Thanks to our dedicated group of creative marketing professionals
              consisting of designers, developers, copywriters, producers, event
              planners and many others, we can fulfill all projects
              qualitatively and operatively.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="people__wrap">
      <p class="tw-text-2xl tw-font-bold">LION TEAM</p>
      <div class="tw-relative people__content tw-py-16">
        <div class="xl:tw--ml-8">
          <div
            v-for="item in teams"
            v-bind:key="item.title"
            class="people__item tw-block md:tw-inline-block tw-mx-auto md:tw-mx-0"
          >
            <p class="text-white md:tw-pl-16 tw-mb-2 tw-uppercase">
              {{ item.title }}
            </p>
            <div
              class="people__guy md:tw-w-52 md:tw-h-52 lg:tw-w-64 lg:tw-h-64 xl:tw-w-72 xl:tw-h-72"
              data-title="Ralph Salazar"
            >
              <img
                :src="item.url"
                class="tw-w-full tw-h-full tw-relative tw-object-cover tw-object-top"
              />
            </div>
            <p class="text-white tw-font-bold tw-mt-2 tw-text-right">
              Ralph Salazar
            </p>
          </div>
        </div>
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
      image: url(/imgs/LIO_1097.jpeg);
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
.people {
  &__wrap {
    padding-left: calc((100vw - 1280px) / 2);
  }
  &__content {
    background: #292929;
  }
  &__item {
    // display: inline-block;
    + .people__item {
      @media screen and (min-width: 768px) {
        margin-left: 32px;
      }
    }
    &:nth-child(2) {
      .people__guy::before {
        background-color: #fb0054;
      }
    }
    &:nth-child(3) {
      .people__guy::before {
        background-color: #0067fb;
      }
    }
    &:nth-child(4) {
      .people__guy::before {
        background-color: #8bf67f;
      }
    }
  }
  &__guy {
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: -8px;
      width: 100%;
      height: 100%;
      background-color: $primary;
    }
    &::after {
      content: attr(data-title);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #292929;
      color: #fff;
      display: none;
      align-items: center;
      justify-content: center;
      font-size: large;
      font-weight: 600;
    }
    &:hover {
      &::after {
        display: flex;
      }
    }
  }
}
</style>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useGlobalStore } from 'src/stores/global-store';

export default defineComponent({
  name: 'about-us',
  preFetch() {
    const globalStore = useGlobalStore();
    globalStore.footer.title = 'A true king’s power is his \ncompassion';
  },
  setup() {
    const teams = ref([
      { url: '/imgs/team_account.png', title: 'ACCOUNT' },
      { url: '/imgs/team_planner.png', title: 'PLANNER' },
      { url: '/imgs/team_designer.png', title: 'DESIGNER' },
      { url: '/imgs/team_copywriter.png', title: 'COPYWRITER' },
    ]);
    return {
      teams,
    };
  },
});
</script>
