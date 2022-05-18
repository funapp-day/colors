<template>
  <div class="default-layout">
    <var-app-bar
      title="Colors"
    >
      <template #right>
        <atom-theme-button
          :theme="app.theme"
          text
          @click="onChangeTheme"
        />
      </template>
    </var-app-bar>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useApp } from '@/store/app';

export default defineComponent({
  name: 'DefaultLayout',
  setup () {
    const app = useApp();
    const onChangeTheme = () => {
      const result = app.theme === 'light' ? 'dark' : 'light';
      app.setTheme(result);
    };
    return {
      app,
      onChangeTheme
    };
  }
});
</script>
