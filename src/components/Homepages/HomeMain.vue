<template>
  <section id="homepage">
    <q-carousel
      v-model="slide"
      swipeable
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
        <div class="items-center justify-center row">
          <img
            class="home-slide__logo-brand"
            src="../../assets/imgs/Graphic@3x.png"
          />
          <p class="text-white tw-text-3xl md:tw-text-6xl">
            <span class="text-svn tw-text-9xl tw-opacity-25">Lion</span><br />
            Build Your Brand <br />
            Create Your Power
          </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="integrated"
        class="bg-primary column no-wrap flex-center tw-relative"
      >
        <div class="items-center justify-center row">
          <img
            class="tw-absolute tw-h-full tw-w-auto tw-opacity-25 tw-top-0 tw--left-72"
            src="../../assets/imgs/Logo@3x.png"
          />
          <div>
            <p class="text-white text-svn tw-text-9xl tw-mb-0 tw-opacity-25">
              Welcome
            </p>
            <p class="text-white tw-text-3xl md:tw-text-6xl">
              We are 360° Integrated<br />
              Advertising Agency
            </p>
          </div>
        </div>
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
    <div class="container bg-light branding tw-mt-20 tw-pb-20">
      <div
        class="items-center justify-between row tw-flex-wrap md:tw-flex-nowrap tw-px-4"
      >
        <div class="md:tw-w-1/2 tw-flex tw-justify-end">
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
        <div class="md:tw-w-1/2">
          <p class="tw-text-6xl text-svn text-primary tw-mb-0">Branding</p>
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
          <div class="tw-relative tw-pl-16">
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
        <div class="md:tw-w-1/2 tw-flex tw-justify-end">
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
        <div class="md:tw-w-1/2 tw-flex tw-justify-end">
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
        <div class="md:tw-w-1/2">
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
      <div class="container tw-py-28">
        <div class="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-4">
          <div
            v-for="(item, index) in services"
            :key="item.title"
            v-bind:class="{ 'tw-col-span-2': [0, 5, 6].includes(index) }"
          >
            <service-item :service="item" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.home {
  &__wrap-md {
    max-width: 490px;
    margin: auto;
    padding: 80px 0;
  }
  &-slide {
    &__logo-brand {
      width: 140px;
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
import { defineComponent, ref } from 'vue';
import ServiceItem from './ServiceItem.vue';

export default defineComponent({
  name: 'HomeMain',
  setup() {
    const services = ref([
      {
        title: 'Brand Strategy',
        description: 'Positioning',
        img: 'service-brand.webp',
      },
      {
        title: 'Market Research',
        description: 'Analysis',
        img: 'service-market.jpeg',
      },
      {
        title: 'Integrated Marketing Plans',
        img: 'service-integrated.webp',
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
        img: 'service-development.webp',
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

    return {
      slide: ref('brand'),
      services: services.value,
    };
  },
  components: { ServiceItem },
});
</script>
