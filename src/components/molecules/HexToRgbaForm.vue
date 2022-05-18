<template>
  <var-form>
    <var-input
      :model-value="hex"
      :placeholder="hexPlaceholder"
      @input="onUpdateValue('hex', $event)"
    />
    <var-input
      :model-value="rgba"
      :placeholder="rgbaPlaceholder"
      @input="onUpdateValue('rgba', $event)"
    />
  </var-form>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    hex: {
      type: String as PropType<string>,
      required: false,
      default: null
    },
    rgba: {
      type: String as PropType<string>,
      required: false,
      default: null
    },
    hexPlaceholder: {
      type: String as PropType<string>,
      required: false,
      default: 'hex'
    },
    rgbaPlaceholder: {
      type: String as PropType<string>,
      required: false,
      default: 'rgba'
    }
  },
  emits: ['update:hex', 'update:rgba'],
  setup (props, { emit }) {
    const hex = useHex(props.hex);
    const rgba = useRgba(props.rgba);
    const onUpdateValue = (key: 'hex' | 'rgba', value: string) => {
      emit(`update:${key}`, value);
    };
    watch(() => props.hex, () => {
      hex.setHex(props.hex);
      onUpdateValue('rgba', hex.hex2rgba() || props.rgba);
    });
    watch(() => props.rgba, () => {
      rgba.setRgba(props.rgba);
      onUpdateValue('hex', rgba.rgba2hex() || props.hex);
    });
    return {
      onUpdateValue
    };
  }
});
</script>
