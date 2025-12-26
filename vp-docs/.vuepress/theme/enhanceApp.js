// import VueGoodTable from '../../../src';

// export default ({
//   Vue, // the version of Vue being used in the VuePress app
//   options, // the options for the root Vue instance
//   router, // the router instance for the app
//   siteData, // site metadata
// }) => {
//   // ...apply enhancements to the app
//   console.log("========");
//   alert('hooked');
//   Vue.use(VueGoodTable);
// }

import { defineClientAppEnhance } from '@vuepress/client'
import VueGoodTable from '../../../src';

export default defineClientAppEnhance(({ app, router, siteData }) => {
  app.use(VueGoodTable);
})