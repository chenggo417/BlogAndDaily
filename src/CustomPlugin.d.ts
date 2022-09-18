import Message from './plugins/MessageBox'

declare module 'vue/types/vue' {
  export interface Vue {
    $message: typeof Message
  }
}

declare
