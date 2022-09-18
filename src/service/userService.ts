import request from '@/utils/request'

interface AdminAuthenticateInterface {
  Key: string,
  AdminKey: string
}

export interface AdminAuthenticateResult {
  token: string
  AdmToken?: string
  message: string
  code: number
}

export const AdminAuthenticatePort = (AuthKey: AdminAuthenticateInterface): Promise<AdminAuthenticateResult> => {
  return request.post('/users/AdminAuth', AuthKey).catch(err => err)
}
