<style lang="less" scoped>
  .hex-to-rgba-form-card {
    width: 100%;
    .form-container {
      padding: 0 12px;
    }
  }
</style>

<template>
  <var-card
    class="hex-to-rgba-form-card"
    :title="title"
  >
    <template #description>
      <div class="form-container">
        <molecule-hex-to-rgba-form
          :hex="hex"
          :rgba="rgba"
          @update:hex="onUpdateValue('hex', $event)"
          @update:rgba="onUpdateValue('rgba', $event)"
        />
      </div>
    </template>
  </var-card>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    title: {
      type: String as PropType<string>,
      required: false,
      default: 'Hex to Rgba'
    },
    hex: {
      type: String as PropType<string>,
      required: false,
      default: '#FFFF00'
    },
    rgba: {
      type: String as PropType<string>,
      required: false,
      default: 'rgba(255, 255, 0, 1)'
    }
  },
  emits: ['update:hex', 'update:rgba'],
  setup (_, { emit }) {
    const onUpdateValue = (key: 'hex' | 'rgba', value: string) => {
      emit(`update:${key}`, value);
    };
    return {
      onUpdateValue
    };
  }
});
</script>
