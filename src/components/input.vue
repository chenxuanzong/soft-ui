<template>
  <div class="container">
    <input
      class="sf-input"
      :class="{
      'is-disabled': disabled
      }"
      :disabled="disabled"
      :type="isShowPassword ? 'password': type"
      :placeholder="placeholder"
      :name="name"
      :value="value"
      @input="handlerInput"
    >
    <span class="icon">
      <i v-if="clearable && value" class="sf-icon-eraser" @click="clearValue"></i>
      <span class="eyes" v-if="showPassword" @click="toggleStates">
      <i v-if="isShowPassword" class="sf-icon-hide"></i>
      <i v-else class="sf-icon-display"></i>
      </span>
    </span>
  </div>
</template>

<script>
export default {
  name: 'sfInput',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isShowPassword: this.showPassword
    }
  },
  methods: {
    handlerInput (e) {
      this.$emit('input', e.target.value)
    },
    clearValue () {
      this.$emit('input', '')
    },
    toggleStates () {
      this.isShowPassword = !this.isShowPassword
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  width: 100%;

  .sf-input {
    box-sizing: border-box;
    padding: 0 15px;
    margin: 10px;
    width: inherit;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: $default-color;
    background-color: #fff;
    border: 1px solid $default-bd-color;
    border-radius: 4px;
    outline: none;
    transition: border-color .2s cubic-bezier(.645, .045, .355, 1);

    &:focus {
      border-color: $default-bd-select-color;
    }

    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: $default-color;
      cursor: not-allowed;
    }
  }

  .icon {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
  }
}
</style>
