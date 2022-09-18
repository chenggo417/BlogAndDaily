const localStore = Object.create(localStorage)
localStore.setItem = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value))
}

localStore.getItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key) || 'null')
}

localStore.removeItem = (key: string) => {
  localStorage.removeItem(key)
}

localStore.clear = () => {
  localStorage.clear()
}
export default localStore
