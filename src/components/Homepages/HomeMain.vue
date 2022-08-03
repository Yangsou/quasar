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
        <div class="relative-position tw-">
          <img class="branding__mockup" src="../../assets/Branding@2x.png" />
          <p class="text-h2 absolute-bottom-right">01</p>
        </div>
        <div>
          <p class="text-h3">Branding</p>
          <p class="text-dark">
            Our job is to tell your brand story, create an authentic and
            memorable identity, and turn them into an interactive communications
            experience.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.bg-white-500 {
  background-color: #fbf9f3;
}
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
  }
}
</style>
<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'HomeMain',
  setup() {
    return {
      slide: ref('brand'),
    };
  },
});
</script>
