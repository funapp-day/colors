import * as Varlet from '@varlet/ui';
import '@varlet/ui/es/style';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Varlet);
});
