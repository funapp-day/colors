<style lang="less" scoped>
  .color-palette {
    width: 100%;
    position: relative;
    border-radius: 4px;
    padding: 8px;
    padding-bottom: 100%;
    z-index: 1;
    .content {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      .color-viewer {
        width: 100%;
        height: 100%;
        border-radius: 4px;
      }
    }
  }
</style>

<template>
  <div class="color-palette">
    <div class="content">
      <div
        class="color-viewer"
        :style="{ backgroundColor }"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ColorPalette',
  props: {
    color: {
      type: String,
      required: false,
      default: '#FFFF00'
    }
  },
  setup (props) {
    const backgroundColor = computed(() => {
      return useHex(props.color).isHex() ? props.color : '#000';
    });
    return {
      backgroundColor
    };
  }
});
</script>
