<template>
  <button
    class="sf-button"
    :class="[`sf-button--${type}`, {
    'is-plain': plain,
    'is-round': round,
    'is-circle': circle,
    'is-disable': disable
    }]"
    :disable="disable"
    @click="handleClick">
    <i v-if="icon" :class="icon"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'sfButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    disable: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
.sf-button {
  display: inline-block;
  box-sizing: border-box;
  margin: 10px;
  padding: 12px 24px;
  font-size: 14px;
  text-align: center;
  line-height: 1;
  border: 1px solid {
    radius: 5px;
  };
  white-space: nowrap;
  outline: none;
  transition: .1s;
  -webkit-user-select: none;
  cursor: pointer;

  &--default {
    color: $default-color;
    border-color: $default-bd-color;
    background-color: #fff;

    &:hover {
      color: $default-select-color;
      border-color: $default-bd-select-color;
      background-color: $default-bg-select-color;
    }

    &.is-disable {
      cursor: not-allowed;
      color: $default-select-color;
      border-color: $default-bd-select-color;
      background-color: $default-bg-select-color;
    }

    &.is-plain {
      &:hover {
        color: $plain-default-select-color;
        border-color: $plain-default-bd-select-color;
        background-color: #fff;
      }
      &.is-disable {
        cursor: not-allowed;
        color: $plain-default-select-color;
        border-color: $plain-default-bd-select-color;
        background-color: #fff;
      }
    }
  }

  &--primary {
    color: #fff;
    border-color: $primary-bd-color;
    background-color: $primary-bg-color;

    &:hover {
      border-color: $primary-bd-select-color;
      background-color: $primary-bg-select-color;
    }

    &.is-disable {
      cursor: not-allowed;
      border-color: $primary-bd-select-color;
      background-color: $primary-bg-select-color;
    }

    &.is-plain {
      color: $plain-primary-color;
      background-color: $plain-primary-bg-color;

      &:hover {
        color: #fff;
        border-color: $primary-bd-color;
        background-color: $primary-bg-color;
      }

      &.is-disable {
        cursor: not-allowed;
        color: $plain-primary-color;
        background-color: $plain-primary-bg-color;
      }
    }
  }

  &--success {
    color: #fff;
    border-color: $success-bd-color;
    background-color: $success-bg-color;

    &:hover {
      border-color: $success-bd-select-color;
      background-color: $success-bg-select-color;
    }

    &.is-disable {
      cursor: not-allowed;
      border-color: $success-bd-select-color;
      background-color: $success-bg-select-color;
    }

    &.is-plain {
      color: $plain-success-color;
      background-color: $plain-success-bg-color;

      &:hover {
        color: #fff;
        border-color: $success-bd-color;
        background-color: $success-bg-color;
      }

      &.is-disable {
        cursor: not-allowed;
        color: $plain-success-color;
        background-color: $plain-success-bg-color;
      }
    }
  }

  &--info {
    color: #fff;
    border-color: $info-bd-color;
    background-color: $info-bg-color;

    &:hover {
      border-color: $info-bd-select-color;
      background-color: $info-bg-select-color;
    }

    &.is-disable {
      cursor: not-allowed;
      border-color: $info-bd-select-color;
      background-color: $info-bg-select-color;
    }

    &.is-plain {
      color: $plain-info-color;
      background-color: $plain-info-bg-color;

      &:hover {
        color: #fff;
        border-color: $info-bd-color;
        background-color: $info-bg-color;
      }

      &.is-disable {
        cursor: not-allowed;
        color: $plain-info-color;
        background-color: $plain-info-bg-color;
      }
    }
  }

  &--warning {
    color: #fff;
    border-color: $warning-bd-color;
    background-color: $warning-bg-color;

    &:hover {
      border-color: $warning-bd-select-color;
      background-color: $warning-bg-select-color;
    }

    &.is-disable {
      cursor: not-allowed;
      border-color: $warning-bd-select-color;
      background-color: $warning-bg-select-color;
    }

    &.is-plain {
      color: $plain-warning-color;
      background-color: $plain-warning-bg-color;

      &:hover {
        color: #fff;
        border-color: $warning-bd-color;
        background-color: $warning-bg-color;
      }

      &.is-disable {
        cursor: not-allowed;
        color: $plain-warning-color;
        background-color: $plain-warning-bg-color;
      }
    }
  }

  &--danger {
    color: #fff;
    border-color: $danger-bd-color;
    background-color: $danger-bg-color;

    &:hover {
      border-color: $danger-bd-select-color;
      background-color: $danger-bg-select-color;
    }

    &.is-disable {
      cursor: not-allowed;
      border-color: $danger-bd-select-color;
      background-color: $danger-bg-select-color;
    }

    &.is-plain {
      color: $plain-danger-color;
      background-color: $plain-danger-bg-color;

      &:hover {
        color: #fff;
        border-color: $danger-bd-color;
        background-color: $danger-bg-color;
      }

      &.is-disable {
        cursor: not-allowed;
        color: $plain-danger-color;
        background-color: $plain-danger-bg-color;
      }
    }
  }

  &.is-round {
    border-radius: 22px;
  }

  &.is-circle {
    border-radius: 50%;
    padding: 12px;
  }

  i[class*='sf-icon-'] + span {
    margin-left: 5px;
  }
}
</style>
