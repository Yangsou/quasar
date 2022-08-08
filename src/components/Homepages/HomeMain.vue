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
        <div class="row items-center justify-center">
          <img
            class="home-slide__logo-brand"
            src="../../assets/Graphic@3x.png"
          />
          <p class="text-h3 text-white">
            Build Your Brand <br />
            Create Your Power
          </p>
        </div>
      </q-carousel-slide>
      <q-carousel-slide
        name="integrated"
        class="bg-primary column no-wrap flex-center"
      >
        <div class="row items-center justify-center">
          <!-- <img
            class="home-slide__logo-brand"
            src="../../assets/Graphic@3x.png"
          /> -->
          <p class="text-h3 text-white">
            We are 360° Integrated<br />
            Advertising Agency
          </p>
        </div>
      </q-carousel-slide>
    </q-carousel>
    <div class="bg-white-500">
      <div class="home__wrap-md">
        <p class="text-h2 text-center">Who We Are?</p>
        <p class="text-dark">
          We are 360° integrated advertising agency providing a full-site of
          marketing solutions including branding strategy, creative collateral
          design, digital content, online & offline communications. Whether
          you're rebranding, launching a new brand or need design work, we can
          help you from strategy to implementation.
        </p>
      </div>
    </div>
    <div class="bg-light branding container">
      <div class="row items-center justify-between">
        <div class="tw-w-1/2 tw-flex tw-justify-end">
          <div class="tw-relative">
            <img class="branding__mockup" src="../../assets/Branding@2x.png" />
            <p class="text-h2 absolute-bottom-right">01</p>
          </div>
        </div>
        <div class="tw-w-1/2">
          <p class="text-h3">Branding</p>
          <p class="text-dark tw-max-w-xl">
            Our job is to tell your brand story, create an authentic and
            memorable identity, and turn them into an interactive communications
            experience.
          </p>
        </div>
      </div>
      <div
        class="tw-flex tw-flex-row-reverse items-center justify-between with-pattern"
      >
        <div class="tw-w-1/2 tw-flex">
          <div class="tw-relative">
            <img class="branding__mockup" src="../../assets/Creative.png" />
            <p class="text-h2 absolute-bottom-right">02</p>
          </div>
        </div>
        <div class="tw-w-1/2 tw-justify-end">
          <p class="text-h3">Creative</p>
          <p class="text-dark tw-max-w-xl">
            Creative design is one key of elements of your brand's journey.
            Whether you need a logo, print design, digital graphic or persuasive
            copywriting, We build a personality and consistent brand experiences
            for your brand.
          </p>
        </div>
      </div>
      <div class="row items-center justify-between">
        <div class="tw-w-1/2 tw-flex tw-justify-end">
          <div class="tw-relative">
            <img class="branding__mockup" src="../../assets/Digital.png" />
            <p class="text-h2 absolute-bottom-right">03</p>
          </div>
        </div>
        <div class="tw-w-1/2">
          <p class="text-h3">Digital</p>
          <p class="text-dark tw-max-w-xl">
            When the simplifying the complex solutions we engage the target
            audience and initiate participation, bringing traffic to your
            website and increasing brand awareness.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-white-500">
      <div class="container tw-py-6">
        <div class="tw-grid tw-grid-cols-4 tw-gap-2">
          <div class="tw-col-span-2"><service-item /></div>
          <div><service-item /></div>
          <div><service-item /></div>
          <div><service-item /></div>
          <div><service-item /></div>
          <div class="tw-col-span-2"><service-item /></div>
          <div class="tw-col-span-2"><service-item /></div>
          <div><service-item /></div>
          <div><service-item /></div>
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
    width: 500px;
  }
  .with-pattern {
    background: {
      image: url(../../assets/Pattern@2x.png);
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
    return {
      slide: ref('brand'),
    };
  },
  components: { ServiceItem },
});
</script>
