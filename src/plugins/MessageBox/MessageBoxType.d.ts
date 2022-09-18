type MessageBoxTempBaseType<string> = 'success' | 'error' | 'warning' | 'info'
export type MessageBoxBaseType = MessageBoxTempBaseType
export type MessageBoxType = MessageBoxBaseType | ''

export interface MessageBoxData {
  visible: boolean,
  closed: boolean,
  duration: number,
  message: string,
  type: MessageBoxType,
  iconClass: string,
  customClass: string,
  onClose: any,
  showClose: boolean,
  verticalOffset: number,
  timer: number | undefined
  // dangerouslyUseHTMLString: false,
  // center: false
}
