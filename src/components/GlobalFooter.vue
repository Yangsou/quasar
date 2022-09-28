<template>
  <footer id="footer" class="bg-secondary tw-relative tw-mt-10 tw-pt-28">
    <div
      v-if="!!title"
      class="text-white tw-absolute tw-top-0 tw-left-0 tw-transform tw--translate-y-1/2 bg-primary tw-text-center tw-text-3xl tw-rounded-lg tw-py-4 tw-w-full lg:tw-w-1/2 tw-whitespace-pre-line"
    >
      {{ title }}
    </div>
    <div class="container">
      <div
        class="tw-flex-wrap md:tw-flex-nowrap tw-flex tw-justify-between tw-gap-x-6 tw-pb-10"
      >
        <div
          class="tw-w-full md:tw-w-1/3 tw-px-4"
          style="border-right: 1px solid #9c8b78"
        >
          <router-link to="/">
            <img
              src="../assets/imgs/Logo@2x.png"
              class="tw-w-4/5 tw-mx-auto tw-block md:tw-mx-0 md:tw-w-auto md:tw-h-12"
            />
          </router-link>
          <div class="tw-pl-8 tw-mt-4 tw-relative">
            <img
              src="../assets/imgs/map-pin-line-duotone@2x.png"
              class="tw-w-6 tw-h-6 tw-absolute tw-top-0 tw-left-0"
            />
            <p class="relative text-primary text-bold tw-mb-0">Head Office</p>
            <p class="text-white tw-max-w-xs">
              No.A2, 793/43 Tran Xuan Son, Tan Hung Ward, District 7, HCMC
            </p>
          </div>
          <div class="tw-pl-8 tw-mt-4">
            <p class="text-primary text-bold tw-mb-0">Brand Office</p>
            <p class="text-white tw-max-w-xs">
              8th Floor, Serepok Anh Minh Tower, 56 Nguyen Dinh Chieu, Da Kao
              Ward, District 1, HCMC
            </p>
          </div>
          <div class="tw-pl-8 tw-mt-4 tw-relative">
            <img
              src="../assets/imgs/phone-incoming-duotone@2x.png"
              class="tw-w-6 tw-h-6 tw-absolute tw-top-0 tw-left-0"
            />
            <p class="text-primary text-bold tw-mb-0">Contact</p>
            <p class="text-white">
              +84 896624239
              <br />hello@lioncomms.vn
            </p>
          </div>
        </div>
        <div class="tw-w-full md:tw-w-1/3 tw-px-4 tw-mb-6">
          <div class="tw-grid tw-grid-cols-2">
            <div v-for="item in links" :key="item.label" class="tw-mt-3">
              <q-btn
                type="text"
                flat
                @click="(e) => handleClickLinks(e, item)"
                :to="item.url"
                class="router-link tw-deep-"
                >{{ item.label }}</q-btn
              >
            </div>
          </div>
          <div class="divider tw-my-6" />

          <p class="text-white">Follow Us On</p>
          <router-link to="#">
            <img
              src="../assets/imgs/Social/facebook-app-symbol@3x.png"
              class="tw-w-6 tw-h-6"
            />
          </router-link>
          <router-link to="#" class="tw-ml-2">
            <img
              src="../assets/imgs/Social/linkedin@3x.png"
              class="tw-w-6 tw-h-6"
            />
          </router-link>
        </div>
        <div class="tw-w-full md:tw-w-1/3 tw-px-4">
          <q-form
            class="tw-bg-white tw-px-4 tw-py-8 tw-rounded-lg"
            ref="contactForm"
            @submit="handleSendEmail"
          >
            <p class="tw-text-xl tw-uppercase tw-font-bold">Get in touch</p>
            <q-input
              label="Full name*"
              outlined
              v-model="form.name"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type your name',
              ]"
            />
            <q-input
              type="email"
              required
              label="Email*"
              class="tw-mt-4"
              outlined
              v-model="form.email"
            />
            <q-input
              label="Fill in message*"
              type="textarea"
              class="tw-mt-4"
              outlined
              v-model="form.message"
              lazy-rules
              :rules="[
                (val) => (val && val.length > 0) || 'Please type your message',
              ]"
            />
            <q-btn
              size="lg"
              type="submit"
              :loading="loading"
              class="tw-w-full tw-mt-4 d-btn-secondary"
              >Send</q-btn
            >
          </q-form>
        </div>
      </div>
      <div
        class="text-center text-white tw-py-6 tw-mt-4"
        style="border-top: 1px solid #9c8b78"
      >
        &copy; 2022 @Lion Advertising & Communications. All Rights Reserved.
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
.divider {
  clear: both;
  height: 1px;
  background-color: #9c8b78;
}
.router-link {
  color: #ffffff;
  text-decoration: none;
}
</style>
<script lang="ts">
import { defineComponent, ref, computed, nextTick } from 'vue';
import { useGlobalStore } from 'src/stores/global-store';
import { emailJsAPI } from 'src/shared/emailjs';
import { QForm, useQuasar } from 'quasar';
import { HeaderLinkKey } from './models';
import { useRoute, useRouter } from 'vue-router';
import { doScrolling } from 'src/shared/functional';

export default defineComponent({
  name: 'GlobalFooter',
  setup() {
    const globalStore = useGlobalStore();
    const $q = useQuasar();
    const route = useRoute();
    const router = useRouter();
    const contactForm = ref<QForm | null>(null);
    const links = ref([
      { label: 'Homepage', key: HeaderLinkKey.Homepage },
      { url: '/lion-people', label: 'Lion People' },
      { label: 'Service', key: HeaderLinkKey.Service },
      { url: '/lion-vision', label: 'Lion Vision' },
      { label: 'Process', key: HeaderLinkKey.Process },
      { url: '/lion-sharing', label: 'Lion Sharing' },
      { label: 'Partner', key: HeaderLinkKey.Partner },
      { label: 'Contact Us', key: HeaderLinkKey.ContactUs },
    ]);
    const loading = ref(false);
    const form = ref({
      name: '',
      email: '',
      message: '',
    });
    const handleSendEmail = () => {
      loading.value = true;
      emailJsAPI
        .send({
          email: form.value.email,
          name: form.value.name,
          message: form.value.message,
        })
        .then(() => {
          form.value = {
            name: '',
            email: '',
            message: '',
          };
          $q.notify({
            type: 'positive',
            message: 'Send email successful!',
          });
          contactForm.value?.resetValidation();
        })
        .catch((error) => {
          $q.notify({
            type: 'Negative',
            message: 'Send email failure, please try again!',
          });
          console.error(error);
        })
        .finally(() => {
          loading.value = false;
        });
    };
    const handleClickLinks = async (
      e: Event,
      item: { key: string; url: unknown }
    ) => {
      if (item.key) {
        e.preventDefault();
        e.stopPropagation();
        if (!item.url && route.path !== '/') {
          await router.push('/');
        }
        nextTick(() => {
          // currentSection.value = key;
          const el = document.getElementById(item.key);
          if (el) {
            doScrolling(el, 500, -60);
          }
        });
        return;
      }
    };
    return {
      title: computed(() => globalStore.footer.title),
      links,
      form,
      loading,
      contactForm,
      handleSendEmail,
      handleClickLinks,
    };
  },
});
</script>

<style></style>
