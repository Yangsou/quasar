<template>
  <section id="homepage">
    <q-carousel
      v-model="slide"
      animated
      :padding="true"
      arrows
      :navigation="false"
      height="70vh"
      infinite
    >
      <q-carousel-slide
        name="brand"
        class="bg-secondary column no-wrap flex-center"
      >
        <home-slide-item
          title="Lion"
          subTitle="Build Your Brand<br>Create Your Power"
          img="/imgs/Graphic@3x.png"
          className="home-slide__logo-brand"
        />
      </q-carousel-slide>
      <q-carousel-slide
        name="integrated"
        class="bg-primary column no-wrap flex-center tw-relative"
      >
        <home-slide-item
          title="Welcome"
          subTitle="We are 360° Integrated<br>Advertising Agency"
          img="/imgs/Logo@3x.png"
          className="tw-absolute tw-h-full tw-w-auto tw-opacity-25 tw-top-0 tw--left-72"
        />
      </q-carousel-slide>
    </q-carousel>
    <div class="bg-white-500">
      <div class="home__wrap-md">
        <p class="text-center text-h2 text-svn">Who We Are?</p>
        <p class="text-dark tw-px-4">
          We are 360° integrated advertising agency providing a full-site of
          marketing solutions including branding strategy, creative collateral
          design, digital content, online & offline communications. Whether
          you're rebranding, launching a new brand or need design work, we can
          help you from strategy to implementation.
        </p>
      </div>
    </div>
    <div
      class="container bg-light branding tw-mt-10 md:tw-mt-20 tw-pb-10 md:tw-pb-20"
    >
      <div
        class="items-center justify-between row tw-flex-wrap md:tw-flex-nowrap tw-px-4"
      >
        <div
          class="md:tw-w-1/2 tw-flex tw-justify-end animate-to-right lazy-load"
        >
          <div class="tw-relative tw-pr-14">
            <p
              class="text-h1 tw-font-bold tw-absolute tw-right-0 tw-bottom-6 text-white-400"
            >
              01
            </p>
            <img
              class="branding__mockup tw-z-10 tw-relative"
              src="../../assets/imgs/Branding@2x.png"
            />
          </div>
        </div>
        <div class="md:tw-w-1/2 animate-to-left lazy-load">
          <p class="tw-text-6xl text-svn text-primary tw-mb-0 tw-mt-2">
            Branding
          </p>
          <p class="text-dark tw-max-w-md">
            Our job is to tell your brand story, create an authentic and
            memorable identity, and turn them into an interactive communications
            experience.
          </p>
        </div>
      </div>
      <div
        class="items-center justify-between tw-flex tw-flex-row-reverse with-pattern tw-mt-20 tw-flex-wrap md:tw-flex-nowrap tw-px-4"
      >
        <div class="md:tw-w-1/2 tw-flex">
          <div class="tw-relative tw-pl-16 animate-to-left lazy-load">
            <p
              class="text-h1 tw-font-bold tw-absolute tw--left-4 tw-bottom-16 text-white-400"
            >
              02
            </p>
            <img
              class="branding__mockup tw-relative"
              src="../../assets/imgs/Creative.png"
            />
          </div>
        </div>
        <div
          class="md:tw-w-1/2 tw-flex tw-justify-end animate-to-right lazy-load"
        >
          <div class="tw-max-w-md tw-text-right md:tw-text-left md:tw-pl-20">
            <p class="tw-text-6xl text-svn text-primary tw-mb-0">Creative</p>
            <p class="text-dark tw-max-w-md">
              Creative design is one key of elements of your brand's journey.
              Whether you need a logo, print design, digital graphic or
              persuasive copywriting, We build a personality and consistent
              brand experiences for your brand.
            </p>
          </div>
        </div>
      </div>
      <div
        class="items-center justify-between row tw-mt-20 tw-flex-wrap md:tw-flex-nowrap tw-px-4"
      >
        <div
          class="md:tw-w-1/2 tw-flex tw-justify-end animate-to-right lazy-load"
        >
          <div class="tw-relative tw-pr-16">
            <p
              class="text-h1 tw-font-bold tw-absolute tw-right-0 tw-bottom-16 text-white-400"
            >
              03
            </p>
            <img
              class="branding__mockup tw-relative"
              src="../../assets/imgs/Digital.png"
            />
          </div>
        </div>
        <div class="md:tw-w-1/2 animate-to-left lazy-load">
          <p class="tw-text-6xl text-svn text-primary tw-mb-0">Digital</p>
          <p class="text-dark tw-max-w-md">
            When the simplifying the complex solutions we engage the target
            audience and initiate participation, bringing traffic to your
            website and increasing brand awareness.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-white-500" id="service">
      <div class="container tw-py-16">
        <div class="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-4">
          <div
            v-for="(item, index) in services"
            :key="item.title"
            v-bind:class="{
              'tw-col-span-2': [0, 5, 6].includes(index),
              'animate-to-top lazy-load': true,
            }"
          >
            <service-item :service="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss">
.home {
  &__wrap-md {
    max-width: 490px;
    margin: auto;
    padding: 80px 0;
    @media screen and (max-width: 640px) {
      padding: 40px 0;
    }
  }
  &-slide {
    &__logo-brand {
      width: 140px;
      transition: transform 5s linear;
      margin-right: 32px;
      &:hover {
        transform: scale3d(1.2, 1.2, 1.2);
      }
      + p {
        margin-left: 24px;
        padding-top: 8px;
      }
    }
  }
}
.branding {
  &__mockup {
    width: 300px;
    @media screen and (min-width: 992px) {
      width: 380px;
    }
  }
  .with-pattern {
    background: {
      image: url(../../assets/imgs/Pattern@2x.png);
      size: 500px;
      repeat: no-repeat;
      position: right;
    }
  }
}
</style>
<script lang="ts">
import { defineComponent, onMounted, ref, watch } from 'vue';
import ServiceItem from './ServiceItem.vue';
import HomeSlideItem from './HomeSlideItem.vue';

export default defineComponent({
  name: 'HomeMain',
  setup() {
    const services = ref([
      {
        title: 'Brand Strategy',
        description: 'Positioning',
        img: 'service-brand.jpeg',
      },
      {
        title: 'Market Research',
        description: 'Analysis',
        img: 'service-market.jpeg',
      },
      {
        title: 'Integrated Marketing Plans',
        img: 'service-integrated.jpeg',
      },
      {
        title: 'Collateral Design',
        description: 'Video / Photography',
        img: 'service-Collateral.jpeg',
      },
      {
        title: 'Advertising',
        description: 'TV / Events / Tradeshows',
        img: 'service-advertising.jpeg',
      },
      {
        title: 'PR',
        description: 'Articles',
        img: 'service-pr.jpeg',
      },
      {
        title: 'Website Design',
        description: 'Development',
        img: 'service-development.jpeg',
      },
      {
        title: 'Social Media',
        description: 'Strategy Management',
        img: 'service-social.jpeg',
      },
      {
        title: 'Rich Media Advertising',
        description: 'Banner Ads',
        img: 'service-rich-media.jpeg',
      },
    ]);
    const title = ref<HTMLSpanElement>();
    const titleWelcome = ref<HTMLSpanElement>();
    const slide = ref('integrated');

    onMounted(() => {
      animate();
    });

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
      const dataTitle = 'We are 360° Integrated<br>Advertising Agency';
      const dataTitleWelcome = 'Welcome';
      let titleToArray = dataTitle.split('<br>');
      titleToArray = [
        ...titleToArray[0].split(''),
        '<br>',
        ...titleToArray[1].split(''),
      ];
      setTimeout(() => {
        typingTitle(
          dataTitleWelcome.split(''),
          titleWelcome.value as HTMLSpanElement
        );
      }, 100);
      setTimeout(() => {
        typingTitle(titleToArray, title.value as HTMLSpanElement);
      }, 1100);
    };
    watch(
      () => slide.value,
      () => {
        animate();
      }
    );

    return {
      title,
      titleWelcome,
      slide,
      services: services.value,
    };
  },
  components: { ServiceItem, HomeSlideItem },
});
</script>
