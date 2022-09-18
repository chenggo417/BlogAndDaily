import Message from './MessageBox/index'

const install = (Vue: any) => {
  Vue.prototype.$message = Message
}

export default {
  install
}
