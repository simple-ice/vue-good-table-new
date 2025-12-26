<template>
  <Layout>
    <!-- <template #sidebar-top>
      <CarbonAds />
    </template> -->
    <!-- <template #page-top>
      <UserBitAd />
    </template> -->
  </Layout>
</template>

<script>
import Layout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'
import CarbonAds from '../components/CarbonAds.vue'
import Banner from '../components/Banner.vue'
import UserBitAd from '../components/UserBitAd.vue'
export default {
  components: {
    Layout,
    CarbonAds,
    Banner,
    UserBitAd,
  }
}
</script>