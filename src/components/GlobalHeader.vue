<template>
  <div class="header full-width">
    <div class="items-center justify-between row header__container">
      <router-link to="/">
        <img class="header__logo" src="../assets/imgs/Logo@3x.png" />
      </router-link>
      <div class="header__menu">
        <ul>
          <li
            v-bind:class="{
              'is-active': currentSection === item.key,
              'tw-hidden md:tw-inline-block': true,
              'drop-to-down tw-relative': true,
            }"
            v-for="item in links"
            :key="item.key"
            @click="moveToSection(item)"
          >
            <router-link
              v-if="item.path"
              :to="item.path"
              class="tw-no-underline tw-bg-transparent"
              >{{ item.label }}</router-link
            >
            <span v-else>{{ item.label }}</span>
            <div
              class="header__menu__child tw-absolute tw-bottom-0 tw-left-0 tw-transform tw-translate-y-full tw-rounded-lg tw-w-36"
            >
              <div class="tw-bg-white tw-rounded-lg">
                <div v-for="child in item?.children" :key="child.key">
                  <router-link
                    :to="child.path"
                    class="tw-text-black tw-no-underline tw-px-4 tw-py-2 tw-block"
                    >{{ child.label }}</router-link
                  >
                </div>
              </div>
            </div>
          </li>
          <li class="tw-inline-block md:tw-hidden">
            <button
              v-bind:class="{
                'is-active': currentSection === 'contact-us',
              }"
              class="btn-default btn-toggle-menu lazy-effect"
              @click="isShowMenu = true"
            >
              <!-- <span class="line"></span> -->
            </button>
          </li>
        </ul>
      </div>
    </div>
    <q-dialog
      v-model="isShowMenu"
      persistent
      :maximized="true"
      transition-show="slide-down"
      transition-hide="slide-up"
    >
      <div class="bg-secondary header__dialog tw-px-6">
        <div class="container">
          <div class="text-center tw-relative tw-pt-4">
            <img
              class="header__logo header__logo--sm"
              src="../assets/imgs/Logo@3x.png"
            />
            <q-btn
              class="tw-absolute tw-bottom-0 tw-right-0"
              v-close-popup
              icon="close"
              flat
              round
              color="white"
            />
          </div>

          <div class="item">
            <router-link
              class="tw-text-3xl text-white-600 tw-no-underline"
              :exact-active-class="'text-primary'"
              to="/"
              >Homepage</router-link
            >
          </div>
          <div class="item tw-mt-6">
            <router-link
              class="tw-text-3xl text-white-600 tw-no-underline"
              :active-class="'text-primary'"
              to="/about-us"
              >About Us</router-link
            >
            <div class="tw-pl-6 tw-mt-2">
              <router-link
                class="tw-text-md text-white-600 tw-no-underline"
                :active-class="'text-primary'"
                to="/lion-people"
                >Lion People</router-link
              >
            </div>
            <div class="tw-pl-6 tw-mt-2">
              <router-link
                :active-class="'text-primary'"
                class="tw-text-md text-white-600 tw-no-underline"
                to="/lion-people"
                >Lion Vision</router-link
              >
            </div>
          </div>
          <div class="item tw-mt-6">
            <router-link
              class="tw-text-3xl text-white-600 tw-no-underline"
              :active-class="'text-primary'"
              to="/lion-sharing"
              >Lion Sharing</router-link
            >
          </div>
        </div>
      </div>
    </q-dialog>
  </div>
</template>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 90;
  transition: all 450ms;
  &.active {
    background-color: $secondary;
    .header__container {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
  &__container {
    width: 100%;
    max-width: 1280px;
    margin: auto;
    padding: 16px 16px 0;
    @media screen and (min-width: 768px) {
      border-bottom: 1px solid #ffffff;
    }
  }
  &__logo {
    height: 48px;
    opacity: 0;
    animation-fill-mode: forwards;
    animation-name: semi-rotate;
    animation-duration: 500ms;
    animation-timing-function: linear;
    animation-delay: 500ms;
    transform-style: preserve-3d;
    @keyframes semi-rotate {
      from {
        opacity: 0.6;
        transform: scale(0.9) rotate(22.5deg);
      }
      to {
        opacity: 1;
        transform: scale(1) rotate(0);
      }
    }
    &--sm {
      height: 32px;
    }
  }
  &__menu {
    ul {
      list-style: none;
      margin: 0;
    }
    li,
    li > a {
      position: relative;
      color: #ffffff;
      cursor: pointer;
      border-radius: 4px;
      padding: 4px 8px 4px 8px;
      &:hover {
        color: #ffffff;
        background: rgba(#ffffff, 0.2);
        > .header__menu__child {
          display: block;
          padding-top: 24px;
        }
      }
      &.is-active {
        color: $primary;
        background: $dark-page;
      }
      + li {
        margin-left: 8px;
        @media screen and (min-width: 1024px) {
          margin-left: 16px;
        }
      }
    }
    li > a {
      &:hover {
        background: transparent;
      }
    }
    &__child {
      display: none;
      a {
        border-radius: 8px;
        &:hover {
          font-weight: bold;
          background: rgba($primary, 0.6);
        }
      }
    }
  }
  &__dialog {
    .item {
      a {
        transition: all 450ms linear;
      }
      .text-primary {
        position: relative;
        padding-left: 42px;
        &::before {
          content: '';
          position: absolute;
          left: 0;
          top: calc(50% - 1px);
          height: 2px;
          width: 32px;
          background-color: $primary;
        }
      }
    }
  }
}
.btn-default {
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
}
.btn-toggle-menu {
  width: 36px;
  height: 36px;
  // position: fixed;
  // top: 22px;
  // right: 8px;
  z-index: 100;
  transition: all 550ms ease-in-out;
  // .header.active & {
  //   top: 10px;
  // }
  &.is-active {
    right: -48px;
    // background-color: $color-black-thirty;
    &::before {
      // transform: rotate(45deg);
      top: 12px;
      width: 23.3px;
      transform: rotate(33.7deg);
    }
    &::after {
      top: 24px;
      width: 23.3px;
      transform: rotate(-33.7deg);
    }
    .line {
      opacity: 0;
    }
  }
  &::before {
    content: '';
    width: 20px;
    height: 1px;
    position: absolute;
    top: 14px;
    left: 8px;
    background: #ffffff;
    transform-origin: left;
    transition: all 450ms linear;
  }
  &::after {
    content: '';
    width: 20px;
    height: 1px;
    position: absolute;
    top: 22px;
    left: 8px;
    background: #ffffff;
    transform-origin: left;
    transition: all 450ms linear;
  }
  // @media (min-width: 992px) {
  //   display: none;
  // }
  // .line{
  //   width: 30px;
  //   height: 1px;
  //   display: block;
  //   position: absolute;
  //   top: 18px;
  //   left: 8px;
  //   width: 20px;
  //   background: #ffffff;
  //   transition: opacity 550ms ease-in;
  // }
}
.text-white-600 {
  color: #949799;
  &:hover {
    color: #ffffff;
  }
}
.drop-to-down {
  opacity: 0;
  animation-fill-mode: forwards;
  animation-name: drop-to-down;
  animation-duration: 400ms;
  animation-timing-function: linear;
  @for $i from 1 through 15 {
    &:nth-child(#{$i}) {
      animation-delay: $i * 150ms;
    }
  }
}
@keyframes drop-to-down {
  from {
    opacity: 0.4;
    transform: translateY(-40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
<script lang="ts">
import { doScrolling } from 'src/shared/functional';
import { defineComponent, nextTick, onMounted, onUnmounted, ref } from 'vue';
import { HeaderLinkKey } from './models';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'GlobalHeader',
  setup() {
    const currentSection = ref<HeaderLinkKey>(HeaderLinkKey.Homepage);
    const isShowMenu = ref(false);
    const router = useRouter();
    const route = useRoute();

    const moveToSection = async ({
      key,
      path,
    }: {
      key: HeaderLinkKey;
      path: string;
    }) => {
      if (!path && route.path !== '/') {
        await router.push('/');
      }
      nextTick(() => {
        currentSection.value = key;
        const el = document.getElementById(key);
        if (el) {
          doScrolling(el, 500, 100);
        }
      });
    };
    function activeHeaderWhenScroll() {
      var scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : (
              document.documentElement ||
              document.body.parentNode ||
              document.body
            ).scrollTop;
      var header = document.getElementsByClassName('header')[0];
      if (scrollTop > 196) {
        header.classList.add('active');
      } else {
        header.classList.remove('active');
      }
    }
    onMounted(() => {
      window.addEventListener('scroll', activeHeaderWhenScroll);
    });
    onUnmounted(() => {
      window.removeEventListener('scroll', activeHeaderWhenScroll);
    });
    return {
      currentSection,
      isShowMenu,
      links: [
        { label: 'Homepage', key: HeaderLinkKey.Homepage },
        {
          label: 'About Us',
          key: HeaderLinkKey.AboutUs,
          children: [
            {
              label: 'Lion People',
              key: HeaderLinkKey.People,
              path: '/lion-people',
            },
            {
              label: 'Lion Vision',
              key: HeaderLinkKey.Vision,
              path: '/lion-vision',
            },
          ],
        },
        {
          label: 'Lion Sharing',
          key: HeaderLinkKey.Sharing,
          path: '/lion-sharing',
        },
        { label: 'Service', key: HeaderLinkKey.Service },
        { label: 'Process', key: HeaderLinkKey.Process },
        { label: 'Partner', key: HeaderLinkKey.Partner },
        { label: 'Contact Us', key: 'footer' as HeaderLinkKey },
      ],
      moveToSection,
    };
  },
});
</script>
