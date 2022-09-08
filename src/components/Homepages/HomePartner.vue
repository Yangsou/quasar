<template>
  <section id="partner" class="bg-white-500 tw-py-10">
    <div class="container">
      <div
        class="tw-grid tw-grid-cols-2 md:tw-grid-cols-4 tw-gap-y-5 partner-list lazy-load"
      >
        <div class="tw-flex tw-items-center tw-justify-center">
          <img
            class="tw-h-32 tw-max-w-full"
            src="../../assets/imgs/Partner/Assa@2x.png"
          />
        </div>
        <div class="tw-flex tw-items-center tw-justify-center">
          <img
            class="tw-h-32 tw-max-w-full"
            src="../../assets/imgs/Partner/Bosch@2x.png"
          />
        </div>
        <div class="tw-flex tw-items-center tw-justify-center">
          <img
            class="tw-h-32 tw-max-w-full"
            src="../../assets/imgs/Partner/Highland@2x.png"
          />
        </div>
        <div class="tw-flex tw-items-center tw-justify-center">
          <img
            class="tw-h-32 tw-max-w-full"
            src="../../assets/imgs/Partner/L&L@2x.png"
          />
        </div>
        <div class="tw-flex tw-items-center tw-justify-center">
          <img
            class="tw-h-32 tw-max-w-full"
            src="../../assets/imgs/Partner/Masterise@2x.png"
          />
        </div>
        <div class="tw-flex tw-items-center tw-justify-center">
          <img
            class="tw-h-32 tw-max-w-full"
            src="../../assets/imgs/Partner/Sunlife@2x.png"
          />
        </div>
        <div class="tw-flex tw-items-center tw-justify-center">
          <img
            class="tw-h-32 tw-max-w-full"
            src="../../assets/imgs/Partner/The-Grand@2x.png"
          />
        </div>
        <div class="tw-flex tw-items-center tw-justify-center">
          <img
            class="tw-h-32 tw-max-w-full"
            src="../../assets/imgs/Partner/Yale@2x.png"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePartner',
  setup() {
    //
  },
});
</script>
<style lang="scss" scoped>
.partner-list {
  > div {
    opacity: 0;
    transform: translateY(50px);
    transition: all 450ms linear;
    @for $i from 1 through 18 {
      &:nth-child(#{$i}) {
        transition-delay: ($i - 1) * 200ms;
      }
    }
  }
  &.lazy-load.active {
    > div {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
</style>
