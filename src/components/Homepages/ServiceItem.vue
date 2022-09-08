<template>
  <div class="service-item tw-relative tw-overflow-hidden">
    <!-- src="../../assets/imgs/meeting.png" -->
    <img
      :data-src="'/imgs/' + service.img"
      class="tw-w-full tw-h-full tw-object-cover lazy"
    />
    <div
      class="service-item__content tw-items-center tw-justify-center tw-absolute"
    >
      <div class="text-center q-animate--fade">
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
      type: Object as PropType<{
        title: string;
        description?: string;
        img: string;
      }>,
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
  height: 200px;
  img {
    transition: transform 550ms linear;
  }
  &:hover {
    img {
      transform: scale3d(1.2, 1.2, 1.2);
    }
  }
  @media screen and (min-width: 992px) {
    height: 300px;
  }
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
