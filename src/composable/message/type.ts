import { SweetAlertIcon } from 'sweetalert2'
export type toastrOptionData = {
  title: string
  message: string
  type: SweetAlertIcon
  buttonLabel?: string
  errorDetail?: {
    timestamp: string
    httpStatus: string
    path: string
  }
  duration?: number
  confirmCallback?: Function
  cancelCallback?: Function
}
export type alertOptionData = {
  title?: string
  message: string
  type?: SweetAlertIcon
  buttonLabel?: string
  errorDetail?: {
    status: string
    cause: string
    causeDetail: string
    url: string
    config?: {
      method: string
      url: string
    }
  }
  duration?: number
  confirmCallback?: Function
  cancelCallback?: Function
}
export type AlertFunction = (option: alertOptionData) => void
export type ConfirmFunction = (option: toastrOptionData) => void
export type RequestSuccessFunction = (message?: string) => void
export type RequestErrorFunction = (message: string, returnCode: string) => void
export type ExceptionNotifyFunction = (option: toastrOptionData) => void
export type ValidErrorFunction = () => void

export interface message {
  alert: AlertFunction
  confirm: ConfirmFunction
  requestSuccess: RequestSuccessFunction
  requestError: RequestErrorFunction
  exceptionNotify: ExceptionNotifyFunction
  validError: ValidErrorFunction
}
