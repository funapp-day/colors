<style lang="less" scoped>
  .hex-to-rgba {
    padding: 16px 12px;
  }
</style>

<template>
  <div class="hex-to-rgba">
    <var-row
      :gutter="24"
      justify="center"
    >
      <var-col
        :xl="12"
        :md="16"
      >
        <organism-hex-to-rgba-form-card
          :hex="hex"
          :rgba="rgba"
          @update:hex="onUpdateValue('hex', $event)"
          @update:rgba="onUpdateValue('rgba', $event)"
        />
      </var-col>
      <var-col
        :xl="4"
        :md="16"
      >
        <atom-color-palette
          :color="hex"
        />
      </var-col>
    </var-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
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
