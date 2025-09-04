// import Vue from 'vue'
import { storeToRefs } from 'pinia'
import Cookies from 'js-cookie'
import $format from 'string-format'

import { useLangTranStore } from '@stores/langTran'


/** file */
// Base64로 인코딩된 이미지, 텍스트 데이터 등을 Blob 유형으로 변환한다.
export function base64ToBlob(base64Data: string, contentType?: string, sliceSize?: number) {
  contentType = contentType || ''
  sliceSize = sliceSize || 512

  const byteCharacters = atob(base64Data)
  const byteArrays = []

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize)
    if (slice && slice.length > 0) {
      const byteNumbers = new Array(slice.length)
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i)
      }

      const byteArray = new Uint8Array(byteNumbers)
      byteArrays.push(byteArray)
    }
  }

  const blob = new Blob(byteArrays, {
    type: contentType
  })

  return blob
}
export function bytesToSize(bytes: number) {
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
  if (bytes === 0) return '0 Bytes'
  const i: number = parseInt(`${Math.floor(Math.log(bytes) / Math.log(1024))}`, 10)
  if (i === 0) return `${bytes} ${sizes[i]}`
  return `${(bytes / 1024 ** i).toFixed(1)} ${sizes[i]}`
}
export function getFileExtIcon(_fileExt?: string) {
  let iconExt = ''
  switch (_fileExt) {
    case 'pdf':
      iconExt = 'fas fa-file-pdf'
      break
    case 'xlsx':
    case 'xls':
      iconExt = 'fas fa-file-excel'
      break
    case 'doc':
    case 'docx':
      iconExt = 'fas fa-file-word'
      break
    case 'ppt':
    case 'pptx':
      iconExt = 'fas fa-file-powerpoint'
      break
    case 'txt':
      iconExt = 'fas fa-file-alt'
      break
    case 'zip':
      iconExt = 'fas fa-clone'
      break
    default:
      iconExt = 'fas fa-file-alt'
      break
  }
  return iconExt
}
export function getAccept(_fileExt: string) {
  let accept = 'application'
  if (_fileExt.indexOf('xls') >= 0) accept += '/vnd.ms-excel'
  else if (_fileExt.indexOf('doc') >= 0) accept += '/msword'
  else if (_fileExt.indexOf('ppt') >= 0) accept += '/vnd.ms-powerpoint'
  else if (_fileExt.indexOf('pdf') >= 0) accept += '/pdf'
  else accept += '/octet-stream'

  return accept
}

/** language */
const langJsonApi = '/json/lang/'
export function getLang() {
  return Cookies.get('language') || 'kr'
}
export function getLanguageJsonApi() {
  return `${langJsonApi}${getLang()}_language.json`
}
export function getLanguage(languageKey: string, format?: string): string {
  /** lang tran 호출 */
  const langTran = useLangTranStore()
  const { langs } = storeToRefs(langTran)

  if (!langs.value || langs.value.length === 0) return languageKey
  const labelList = langTran.langs
  const data = _.find(labelList, { languageKey: languageKey })
  let text = data ? data.conversionLanguage : ''
  if (text && format) {
    text = $format(text, format)
  }
  return text ? text : languageKey
}
