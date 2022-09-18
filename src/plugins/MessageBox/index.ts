import Vue from 'vue'
import MessageBox from '@/plugins/MessageBox/MessageBox.vue'
// import { MessageBoxBaseType } from './MessageBoxType'

const MessageConstructor = Vue.extend(MessageBox)

let instance
const instances: any[] = []
let messageId = 1

type Message = {
  (option: any): any
  success (option: any): any
  info (option: any): any
  error (option: any): any
  warning (option: any): any
  close (id: string, userOnClose: any): void
  closeAll (): void
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Message: Message = (option: any) => {
  if (Vue.prototype.$isServer) return

  option = option || {}
  if (typeof option === 'string') {
    option = {
      message: option
    }
  }
  const userOnClose = option.onClose
  const id = 'message_' + messageId++
  option.onClose = () => {
    Message.close(id, userOnClose)
  }

  instance = new MessageConstructor({
    data: option
  })
  instance.id = id

  instance.$mount()
  document.body.appendChild(instance.$el)
  let verticalOffset = 20
  instances.forEach(instance => {
    verticalOffset += instance.$el.offsetHeight + 16
  })
  instance.verticalOffset = verticalOffset
  instance.visible = true
  instances.push(instance)
  return instance
}

const typeArr: Array<string> = ['success', 'error', 'warning', 'info']
typeArr.forEach((type: string) => {
  (Message as any)[type] = (option: any) => {
    if (typeof option === 'object') {
      return Message({
        ...option,
        type
      })
    }
    return Message({
      message: option,
      type
    })
  }
})

Message.close = (id: string, userOnClose: any) => {
  const len = instances.length
  // 被删除的message的index
  let index = -1
  // 被删除的实例的本身高度
  let removedHeight = 0
  // 找到对应id的实例  调用内部close  此外还要重新计算高度
  for (let i = 0; i < len; i++) {
    if (instances[i].id === id) {
      removedHeight = instances[i].$el.offsetHeight
      index = i
      if (typeof userOnClose === 'function') {
        userOnClose(instances[i])
      }
      instances.splice(i, 1)
      break
    }
  }
  // 原数组一个或没有时 或未找到指定实例时返回
  if (len <= 1 || index === -1 || index >= len - 1) return
  for (let i = index; i < len - 1; i++) {
    const el = instances[i].$el
    const elTop = el.style.top
    el.style.top = parseInt(elTop, 10) - removedHeight - 16 + 'px'
  }
}

Message.closeAll = () => {
  for (let i = 0; i < instances.length; i++) {
    instances[i].close()
  }
}

export default Message
