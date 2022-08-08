<template>
  <div class="service-item tw-relative tw-overflow-hidden">
    <img src="../../assets/Branding@2x.png" class="tw-w-full tw-h-full" />
    <div
      class="service-item__content tw-items-center tw-justify-center tw-absolute"
    >
      <div class="text-center">
        <p class="text-h3">Brand Strategy</p>
        <p class="text-light">Position</p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ServiceItem',
  setup() {
    //
  },
});
</script>

<style lang="scss" scoped>
.service-item {
  height: 300px;
  &__content {
    display: none;
    background-color: #ffffff;
    top: 12px;
    right: 12px;
    bottom: 12px;
    left: 12px;
    .service-item:hover & {
      display: flex !important;
    }
  }
}
</style>
