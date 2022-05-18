<template>
  <var-button
    v-bind="{ ...$attrs }"
  >
    <var-icon
      v-if="theme === 'light'"
      name="white-balance-sunny"
    />
    <var-icon
      v-else
      name="weather-night"
    />
  </var-button>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export type ThemeType = 'light' | 'dark';

export default defineComponent({
  props: {
    theme: {
      type: String as PropType<ThemeType>,
      required: false,
      default: 'light'
    }
  }
});
</script>
