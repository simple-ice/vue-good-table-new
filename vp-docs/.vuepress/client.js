import { defineClientConfig } from '@vuepress/client'
import VueGoodTable from '../../src';

export default defineClientConfig({
  enhance({ app }) {
    app.use(VueGoodTable);
  },
  setup() {},
  rootComponents: [],
})