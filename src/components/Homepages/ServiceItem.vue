<template>
  <div class="service-item tw-relative tw-overflow-hidden">
    <img
      src="../../assets/imgs/meeting.png"
      class="tw-w-full tw-h-full tw-object-cover"
    />
    <div
      class="service-item__content tw-items-center tw-justify-center tw-absolute"
    >
      <div class="text-center">
        <p class="text-h3 text-svn">{{ service.title }}</p>
        <p class="text-light" v-if="service.description">
          {{ service.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'ServiceItem',
  props: {
    service: {
      type: Object as PropType<{ title: string; description?: string }>,
      required: true,
    },
  },
  setup() {
    return {};
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
