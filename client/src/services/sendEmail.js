import { api } from './apiConfig'

export const sendEmail = async (emailData) => {
  const res = await api.post('/send-email', { data: emailData })
  return res
}