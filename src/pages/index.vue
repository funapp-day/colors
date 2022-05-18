<template>
  <div class="index">
    <layout-hex-to-rgba
      v-model:hex="colors.hex"
      v-model:rgba="colors.rgba"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  setup () {
    const colors = reactive({
      hex: '#FFFF00',
      rgba: 'rgba(255, 255, 0, 1)'
    });
    return {
      colors
    };
  }
});
</script>
