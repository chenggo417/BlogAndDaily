<template>
  <transition name="message-box" @after-leave="handleAfterLeave">
    <div
      :class="[
        'message-box',
        type ? `message-box-${type}` : '',
        showClose ? 'closable' : ''
      ]"
      :style="stylePosition"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    >
      <i class="icon"></i>
      <p class="message-content">{{ message }}</p>
      <i class="close-btn"></i>
    </div>
  </transition>
</template>

<script lang='ts'>
import Vue from 'vue'
import { MessageBoxData } from '@/plugins/MessageBox/MessageBoxType'

export default Vue.extend({
  name: 'MessageBox',
  data: (): MessageBoxData => ({
    visible: true,
    closed: false,
    duration: 3000,
    timer: undefined,
    message: '',
    type: '',
    iconClass: '',
    customClass: '',
    onClose: null,
    showClose: false,
    verticalOffset: 20
  }),
  computed: {
    stylePosition () {
      return {
        top: this.verticalOffset + 'px'
        //  @mouseleave="startTimer"
      }
    }
  },
  watch: {
    closed (newValue) {
      if (newValue) {
        this.visible = false
      }
    }
  },
  methods: {
    startTimer () {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          //  @TODO close
          if (!this.closed) {
            this.close()
          }
        }, this.duration)
      }
    },
    clearTimer () {
      clearTimeout(this.timer)
    },
    // 销毁实例
    close () {
      this.closed = true
      if (typeof this.onClose === 'function') {
        this.onClose(this)
      }
    },
    // transition 动画结束后 移除dom节点
    handleAfterLeave () {
      this.$destroy()
      this.$el.parentNode?.removeChild(this.$el)
    }
  },
  mounted () {
    this.startTimer()
  }
})
</script>

<style scoped lang='less'>
.message-box {
  min-width: 380px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #2196f3;
  top: 20px;
  background-color: #2196f3;
  transition: opacity .3s, transform .4s, top .4s;
  overflow: hidden;
  padding: 15px 15px 15px 20px;
  display: flex;
  align-items: center;
  color: #fff;

  &-enter, &-leave-to {
    opacity: 0;
  }

  &-success {
    background-color: @--color-success;
    border-color: @--color-success;
  }

  &-info {
    background-color: @--color-info;
    border-color: @--color-info;
  }

  &-warning {
    background-color: @--color-warning;
    border-color: @--color-warning;
  }

  &-error {
    background-color: @--color-error;
    border-color: @--color-error;
  }
}
</style>
