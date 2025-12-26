import { path } from '@vuepress/utils'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { localTheme } from './theme'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { googleAnalyticsPlugin } from '@vuepress/plugin-google-analytics'
import { searchPlugin } from '@vuepress/plugin-search'

export const title = 'vue-good-table-next'
export const description = 'A powerful data table plugin for Vue 3.X'
export const base = '/vue-good-table-next/'
export const head = [['link', { rel: 'icon', href: '/vue-good-table-next/favicon.png' }]]

export const plugins = [
  registerComponentsPlugin({
    componentsDir: path.resolve(__dirname, './components'),
  }),
  googleAnalyticsPlugin({
    id: 'G-0V4SMPYCC4',
  }),
  searchPlugin({
    locales: {
      '/': {
        placeholder: 'Search',
      },
    },
  }),
]

export const theme = localTheme({
  repo: 'borisflesch/vue-good-table-next',
  logo: '/vgt-logo.png',
  lastUpdated: true,
  darkMode: false,
  navbar: [
    { text: 'Home', link: '/' },
    { text: 'Guide', link: '/guide/' },
  ],
  sidebar: {
    '/guide/': [
      {
        text: 'Introduction',
        children: ['/guide/'],
      },
      {
        text: 'Configuration',
        children: [
          '/guide/configuration/',
          '/guide/configuration/table-events',
          '/guide/configuration/search-options',
          '/guide/configuration/sort-options',
          '/guide/configuration/pagination-options',
          '/guide/configuration/column-options',
          '/guide/configuration/column-filter-options',
        ],
      },
      {
        text: 'Advanced Configuration',
        children: [
          '/guide/advanced/',
          '/guide/advanced/checkbox-table',
          '/guide/advanced/grouped-table',
          '/guide/advanced/remote-workflow',
          '/guide/advanced/row-details-table',
        ],
      },
      {
        text: 'Style Configuration',
        children: [
          '/guide/style-configuration/',
          '/guide/style-configuration/style-classes',
          '/guide/style-configuration/sass',
        ],
      },
    ],
  },
})

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  theme,
  plugins,
  title: 'vue-good-table-next',
  description: 'A powerful data table plugin for Vue 3.X',
  base: '/vue-good-table-next/',
  head: [
    ['link', { rel: 'icon', href: '/vue-good-table-next/favicon.png' }]
  ],
})