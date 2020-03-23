<template>
  <div class="container"
       :class="active ? 'active' : ''"
       ref="color">
    <div
      class="sf-button" @click="changeState"></div>
  </div>
</template>

<script>
  export default {
    name: 'sfSwitch',
    model: {
      prop: 'active',
      event: 'change'
    },
    props: {
      active: {
        type: Boolean,
        default: false
      },
      activeColor: {
        type: String,
        default: ''
      },
      inactiveColor: {
        type: String,
        default: ''
      }
    },
    methods: {
      async changeState () {
        this.$emit('change', !this.active)
        await this.$nextTick()
        this.setColor()
      },
      setColor () {
        if (this.activeColor || this.inactiveColor) {
          let color = this.active ? this.activeColor : this.inactiveColor
          // this.$refs.color.style.cssText = `border-color=${color}; background-color=${color}`
          this.$refs.color.style.borderColor = color
          this.$refs.color.style.backgroundColor = color
        }
      }
    },
    mounted () {
      this.setColor()
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    width: 40px;
    height: 20px;
    position: relative;
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    border-radius: 10px;
    background-color: #dcdfe6;
    transition: all 0.3s ease;
    cursor: pointer;

    &.active {
      border-color: #409eff;
      background-color: #409eff;

      & > .sf-button {
        transform: translateX(20px);
      }
    }

    .sf-button {
      position: absolute;
      top: 1px;
      left: 1px;
      width: 16px;
      height: 16px;
      border-radius: 100%;
      background-color: #fff;
      transition: transform 0.3s ease;
    }
  }
</style>
