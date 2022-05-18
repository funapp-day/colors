import { defineStore } from 'pinia';
import dark from '@varlet/ui/es/themes/dark';
import { StyleProvider } from '@varlet/ui';
import { Ref } from 'vue';

export type ThemeType = 'light' | 'dark';

export const useApp = defineStore('app', () => {
  const theme: Ref<ThemeType> = ref('light');
  const isDark = computed(() => theme.value === 'dark');
  const setTheme = (value: ThemeType) => {
    theme.value = value;
  };
  watch([isDark], () => {
    StyleProvider(isDark ? dark : null);
  });
  return {
    theme,
    isDark,
    setTheme
  };
});
