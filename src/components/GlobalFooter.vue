<template>
  <footer class="bg-secondary tw-relative tw-mt-10 tw-pt-28">
    <div
      class="text-white tw-absolute tw-top-0 tw-left-0 tw-transform tw--translate-y-1/2 bg-primary tw-text-center tw-text-3xl tw-rounded-lg tw-py-4 tw-w-1/2"
    >
      Let's make something <br />
      amazing together
    </div>
    <div class="container">
      <div class="tw-flex tw-justify-between tw-gap-x-6 tw-pb-10">
        <div class="tw-w-1/3" style="border-right: 1px solid #9c8b78">
          <router-link to="/">
            <img src="../assets/imgs/Logo@2x.png" class="tw-h-12" />
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
        <div class="tw-w-1/3">
          <div class="tw-grid tw-grid-cols-2">
            <div v-for="item in links" :key="item.label" class="tw-mt-3">
              <router-link :to="item.url" class="router-link">{{
                item.label
              }}</router-link>
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
        <div class="tw-w-1/3">
          <q-form>
            <q-input label="Full name*" dark outlined v-model="form.name" />
            <q-input
              label="Email*"
              class="tw-mt-4"
              dark
              outlined
              v-model="form.email"
            />
            <q-input
              label="Fill in message*"
              type="textarea"
              class="tw-mt-4"
              dark
              outlined
              v-model="form.message"
            />
            <q-btn size="lg" class="tw-w-full tw-mt-4" color="primary"
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
<script>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'GlobalFooter',
  setup() {
    const links = ref([
      { url: '/', label: 'Homepage' },
      { url: '/lion-people', label: 'Lion People' },
      { url: '/', label: 'Service' },
      { url: '/', label: 'Lion Vision' },
      { url: '/', label: 'Process' },
      { url: '/', label: 'Lion Sharing' },
      { url: '/', label: 'Partner' },
      { url: '/about-us', label: 'Contact Us' },
    ]);
    const form = ref({
      name: '',
      email: '',
      message: '',
    });
    return {
      links,
      form,
    };
  },
});
</script>

<style></style>
