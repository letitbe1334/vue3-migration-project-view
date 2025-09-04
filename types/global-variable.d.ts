import axios from 'axios'

import { toastrOptionData } from '@/composable/message/type'
import { GetTranLanguageFunction } from '@/types/language'

declare module 'vue' {
  interface ComponentCustomProperties {
    $http: typeof axios
    $commMessage: {
      notify: (_option: toastrOptionData) => void
      exceptionNotify: (_option: toastrOptionData) => void
      alert: (_option: toastrOptionData) => void
      confirm: (_option: toastrOptionData) => void
      toast: (_option: toastrOptionData) => void
    }
    $language: GetTranLanguageFunction
  }
}
