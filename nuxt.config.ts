import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: './src',
  components: [
    { path: '@/components/atoms', prefix: 'Atom' },
    { path: '@/components/molecules', prefix: 'Molecule' },
    { path: '@/components/organisms', prefix: 'Organism' },
    { path: '@/components/templates', prefix: 'Layout' }
  ],
  css: [
    '@/assets/styles/common.less'
  ],
  modules: [
    '@pinia/nuxt'
  ]
});
