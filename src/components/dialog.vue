<template>
  <transition name="dialog-fade">
    <div class="sf-dialog--wrapper" v-show="visible" @click.self="handleClose">
      <div class="sf-dialog" :style="{width, marginTop: top}">
        <div class="sf-dialog--header">
          <slot name="title">
            <span class="title">{{ title }}</span>
          </slot>
          <i class="sf-icon-delete" @click="handleClose"></i>
        </div>
        <div class="sf-dialog--body">
          <slot>
            <span>这是一段信息</span>
          </slot>
        </div>
        <div class="sf-dialog--footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'sfDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>

<style lang="scss" scoped>
.sf-dialog--wrapper {
  position: fixed;
  left: 0;
  top:0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .5);
  z-index: 2000;

  .sf-dialog {
    box-sizing: border-box;
    position: relative;
    margin: 0 auto 50px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
    z-index: 2001;

    .sf-dialog--header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 20px 10px;

      .title {
        font-size: 18px;
        line-height: 24px;
        color: #303133;
      }

      i {
        cursor: pointer;
      }
    }

    .sf-dialog--body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }

    .sf-dialog--footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
    }
  }
}

.dialog-fade-enter-active {
 animation: fade .3s;
}

.dialog-fade-leave-active {
  animation: fade .3s reverse;
}

@keyframes fade {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
