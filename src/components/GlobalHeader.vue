<template>
  <div class="header full-width">
    <div class="row justify-between items-center header__container">
      <router-link to="/">
        <img class="header__logo" src="../assets/Logo@3x.png" />
      </router-link>
      <div class="header__menu">
        <ul>
          <li
            v-bind:class="{ 'is-active': currentSection === item.key }"
            v-for="item in links"
            :key="item.key"
            @click="moveToSection(item.key)"
          >
            {{ item.label }}
          </li>
          <li>
            <button
              v-bind:class="{ 'is-active': currentSection === 'contact-us' }"
              class="btn-default btn-toggle-menu lazy-effect"
            >
              <!-- <span class="line"></span> -->
            </button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 90;
  &__container {
    width: 100%;
    max-width: 1440px;
    margin: auto;
    border-bottom: 1px solid #ffffff;
    padding: 16px 16px 8px;
  }
  &__logo {
    height: 56px;
  }
  &__menu {
    ul {
      list-style: none;
    }
    li {
      position: relative;
      color: #ffffff;
      display: inline-block;
      cursor: pointer;
      padding: 4px 8px 4px 0;
      &:hover {
        color: $primary;
      }
      &::after {
        content: '';
        position: absolute;
        bottom: -2px;
        left: 0;
        height: 2px;
        width: 50%;
        background-color: transparent;
      }
      &.is-active {
        color: $primary;
        &::after {
          background-color: currentColor;
        }
      }
      + li {
        margin-left: 16px;
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
</style>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { HeaderLinkKey } from './models';

export default defineComponent({
  name: 'GlobalHeader',
  // props: {
  //   //
  // },
  setup() {
    const currentSection = ref<HeaderLinkKey>(HeaderLinkKey.Homepage);

    const moveToSection = (key: HeaderLinkKey) => {
      currentSection.value = key;
    };
    return {
      currentSection,
      links: [
        { label: 'Homepage', key: HeaderLinkKey.Homepage },
        { label: 'Service', key: HeaderLinkKey.Service },
        { label: 'Process', key: HeaderLinkKey.Process },
        { label: 'Partner', key: HeaderLinkKey.Partner },
        { label: 'Contact Us', key: HeaderLinkKey.ContactUs },
      ],
      moveToSection,
    };
  },
});
</script>
