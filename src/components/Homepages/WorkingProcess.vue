<template>
  <div id="process" class="working-process">
    <div
      class="container tw-flex tw-items-center tw-flex-wrap lg:tw-flex-nowrap tw-py-16"
    >
      <div
        class="xl:tw-w-3/5 md:tw-w-full lg:tw-w-1/2 tw-justify-center tw-flex tw-items-center tw-flex-col"
      >
        <div class="tw-max-w-md tw-pl-8 md:tw-pl-32">
          <p
            class="tw-text-6xl text-svn text-primary tw-relative working-process__title animate-to-right lazy-load"
          >
            <span class="tw-z-10 tw-relative">
              Working <br />
              Process
            </span>
          </p>
          <p class="text-black animate-to-top lazy-load">
            Establishing a create workflow is not just about transforming
            creative work into a standardized process. It will make everyone's
            live easier while enhancing its effectiveness.
          </p>
        </div>
      </div>
      <div class="xl:tw-w-2/5 tw-px-4 tw-w-full lg:tw-w-1/2">
        <div
          class="md:tw-flex tw-gap-x-6 tw-justify-center lg:tw-justify-start tw-w-full"
        >
          <div
            class="tw-w-full tw-flex tw-justify-start tw-flex-wrap tw-gap-6 working-process__list lazy-load"
          >
            <div class="working-process__item">
              <p class="working-process__index">1</p>
              <img
                src="../../assets/imgs/lightbulb@2x.png"
                class="tw-w-24 tw-h-16 tw-object-cover"
              />
              <p class="text-h4">Discover</p>
              <p class="working-process__description">
                Market research<br />Brand knowledge<br />
                Marketing solutions
              </p>
            </div>
            <div
              class="working-process__item tw-transform md:tw-translate-y-1/2"
            >
              <p class="working-process__index">2</p>
              <img
                src="../../assets/imgs/presentation@2x.png"
                class="tw-w-24 tw-h-16 tw-object-cover"
              />
              <p class="text-h4">Design</p>
              <p class="working-process__description">
                Comprehensive strategic plan <br />
                Conceptualization
              </p>
            </div>
            <div class="working-process__item">
              <p class="working-process__index">3</p>
              <img
                src="../../assets/imgs/online-class@2x.png"
                class="tw-w-24 tw-h-16 tw-object-cover"
              />
              <p class="text-h4">Engage</p>
              <p class="working-process__description">
                Contract signing <br />
                Benchmark setting
              </p>
            </div>

            <div
              class="working-process__item tw-transform md:tw-translate-y-1/2"
            >
              <p class="working-process__index">4</p>
              <img
                src="../../assets/imgs/paint-palette@2x.png"
                class="tw-w-24 tw-h-16 tw-object-cover"
              />
              <p class="text-h4">Execute</p>
              <p class="working-process__description">
                Media approaching <br />
                Consumer engagement <br />
                Drive action
              </p>
            </div>
            <div class="working-process__item">
              <p class="working-process__index">5</p>
              <img
                src="../../assets/imgs/registered-document@2x.png"
                class="tw-w-24 tw-h-16 tw-object-cover"
              />
              <p class="text-h4">Evolve</p>
              <p class="working-process__description">
                Result evaluation <br />
                Ongoing support <br />
                Optimization
              </p>
            </div>
          </div>
          <!-- <div class="tw-flex tw-justify-center tw-flex-col tw-gap-y-6">
            </div> -->
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.working-process {
  &__title {
    z-index: 2;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 128px;
      height: 128px;
      background-color: #fbf9f3;
      border-radius: 100%;
      transform: translate(-50%, -50%);
      z-index: 1;
    }
  }
  &__item {
    overflow: hidden;
    position: relative;
    // width: 220px;
    border-radius: 8px;
    padding: 12px;
    color: #ffffff;
    background-color: $secondary;
    width: 100%;
    opacity: 0;
    transform: translateY(50px);
    transition: all 450ms linear;
    @for $i from 1 through 5 {
      &:nth-child(#{$i}) {
        transition-delay: $i * 200ms;
      }
    }
    @media screen and (min-width: 768px) {
      &:nth-child(2),
      &:nth-child(4) {
        transform: translateY(calc(50% + 50px));
      }
      width: 220px;
    }
  }
  &__list.lazy-load.active {
    .working-process__item {
      opacity: 1;
      transform: translateY(0);
      @media screen and (min-width: 768px) {
        &:nth-child(2),
        &:nth-child(4) {
          transform: translateY(50%);
        }
      }
    }
  }
  &__index {
    position: absolute;
    top: 0;
    opacity: 0.4;
    right: -18px;
    font-weight: bold;
    font-size: 96px;
    line-height: 1;
    color: #f4f4f4;
  }
  &__description {
    opacity: 0.6;
  }
}
</style>
<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WorkingProcess',
  setup() {
    return {
      //
    };
  },
});
</script>

<style></style>
