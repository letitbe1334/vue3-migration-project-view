import swal from 'sweetalert2'
import toastr from 'toastr'
import 'sweetalert2/src/sweetalert2.scss'

import {
  AlertFunction,
  ConfirmFunction,
  RequestSuccessFunction,
  RequestErrorFunction,
  ExceptionNotifyFunction,
  ValidErrorFunction,
  alertOptionData,
  toastrOptionData
} from '@/composable/message/type'

/**
 * 공통 메세지 알림창 제공 Composable 함수.
 * @param
 * @returns alert, confirm, requestSuccess, requestError, exceptionNotify, validError 함수
 */
export function useMessage() {  
  const Toast = swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', swal.stopTimer)
      toast.addEventListener('mouseleave', swal.resumeTimer)
    }
  })
  const Alert = swal.mixin({
    confirmButtonColor: '#03A9F4',
    customClass: {
      cancelButton: 'swal-custom-cancel-btn'
    }
  })

  const commMessage = {
    /**
     * @function name : notify
     * @desc : 오른쪽 상단에 표시되는 알림이며 일정시간이 지날시 사라짐
     * @parameters
     *  _option :
     *    - title : 상단 표시 라벨
     *    - message : 본문 내용
     *    - type : success/warning/info/error
     *    - duration : 표시되는 시간 (단위 ms)
     */
    notify: function (_option: toastrOptionData): void {
      if (!_option) {
        _option = {
          title: '안내',
          message: getLanguage('관리자에게 문의바랍니다.'),
          type: 'error'
        }
      }
      if (import.meta.env.MODE === 'production') {
        // 운영 서버인 경우에는
        // [''] ** 현재는 notify를 exception발생하였을 경우에만 사용함으로 이후에 notify를 추가로 사용하는 경우 default문구 생성
        // 라는 문구의 메시지가 뜨도록 설정
        _option.message = getLanguage('관리자에게 문의바랍니다.')
      }
      toastr.options.closeButton = true
      toastr.options.progressBar = true
      toastr.options.positionClass = 'toast-top-right'
      toastr.options.timeOut = 10000
      toastr.error(_option.message)
    },
    /**
     * @function name : exceptionNotify
     * @desc : 오른쪽 상단에 표시되는 알림이며 예외상항에 대해 표시한다.
     *         일정시간이 지날시 사라짐
     *         ##개발모드인 경우에만 사용##
     * @parameters
     *  _option :
     *    - title : 상단 표시 라벨
     *    - message : 본문 내용
     *    - type : success/warning/info/error
     *    - duration : 표시되는 시간 (단위 ms)
     */
    exceptionNotify: function (_option: toastrOptionData): void {
      let _errMsg: string = ''

      if (_option.message === 'Network Error') {
        this.alert({
          title: getLanguage('네트워크 접속오류'),
          message: getLanguage(
            '네트워크 접속문제로 요청된 정보를 찾을 수 없습니다.\n관리자에게 문의해 주시기 바랍니다.'
          ),
          type: 'error'
        })
        return
      }
      if (_option && _option.message) {
        _errMsg = '<table class="table table-bordered"><tbody>'
        _errMsg +=
          '<tr><th scope="row" class="q-pa-sm">httpStatus</th><td colspan="3">' +
          _option.errorDetail?.httpStatus +
          '</td>'
        _errMsg +=
          '<tr><th scope="row" class="q-pa-sm">timestamp</th><td colspan="3">' +
          _option.errorDetail?.timestamp +
          '</td></tr>'
        _errMsg +=
          '<tr><th scope="row" class="q-pa-sm">Message</th><td colspan="3">' +
          _option.message +
          '</td></tr>'
        _errMsg +=
          '<tr><th scope="row" class="q-pa-sm">path</th><td colspan="3">' +
          _option.errorDetail?.path +
          '</td></tr>'
        _errMsg += '</tbody></table>'
      } else {
        _errMsg = '관리자에게 문의해 주시기 바랍니다.'
      }

      this.notify({
        title: getLanguage(_option.title),
        message: _errMsg,
        type: _option.type,
        duration: _option.duration ? _option.duration : 3000
      })
    },
    /**
     * @function name : alert
     * @desc : 중앙에 표시되는 알림이며 confirm button 클릭 시 사라짐
     * @parameters
     *  _option :
     *    - title : 상단 표시 라벨
     *    - message : 본문 내용
     *    - type : success/warning/info/error
     */
    alert: function (_option: toastrOptionData): void {
      if (_option.type === 'success') {
        Toast.fire({
          title: getLanguage('안내'), // Alert의 경우 '안내' title을 사용
          html: convertEnter(getLanguage(_option.message)),
          icon: _option.type,
          confirmButtonText: _option.buttonLabel ? _option.buttonLabel : getLanguage('확인') // 확인
        })
      } else {
        Alert.fire({
          title: getLanguage(_option.title),
          html: convertEnter(getLanguage(_option.message)),
          icon: _option.type,
          confirmButtonText: _option.buttonLabel ? _option.buttonLabel : getLanguage('확인') // 확인
        })
      }
    },
    /**
     * @function name : confirm
     * @desc : 중앙에 표시되는 확인창
     * @parameters
     *  _option :
     *    - title : 상단 표시 라벨
     *    - message : 본문 내용
     *    - type : success/warning/info/error
     *    - confirmCallback : 확인 시 진행할 function
     *    - cancelCallback : 취소 시 진행할 function
     */
    confirm: function (_option: toastrOptionData): void {
      Alert.fire({
        title: getLanguage(_option.title),
        html: convertEnter(getLanguage(_option.message)),
        icon: 'question',
        confirmButtonText: getLanguage('적용'), // 적용
        showCancelButton: true,
        cancelButtonText: getLanguage('취소'), // 취소
        cancelButtonColor: '#EEEEEE'
      }).then((_result) => {
        if (_result.isConfirmed) {
          typeof _option.confirmCallback === 'function' ? _option.confirmCallback() : null
        } else {
          typeof _option.cancelCallback === 'function' ? _option.cancelCallback() : null
        }
      })
    },
    /**
     * @function name : toast
     * @desc : 간단한 내용을 올리는 알림창
     * @parameters
     *  _option :
     *    - title : 상단 표시 라벨
     *    - icon : success / info / warning / error / question
     */
    toast: (_option: toastrOptionData): void => {
      Toast.fire({
        title: _option.title,
        icon: _option.type
      })
    }
  }

  const alert: AlertFunction = (option: alertOptionData) => {
    commMessage.alert({
      title: option.title || getLanguage('안내'),
      message: option.message,
      type: option.type || 'info',
      buttonLabel: option.buttonLabel
    })
  }
  const confirm: ConfirmFunction = (option: toastrOptionData) => {
    commMessage.confirm(option)
  }
  const requestSuccess: RequestSuccessFunction = (_message?: string) => {
    alert({
      message: _message ? getLanguage(_message) : getLanguage('정상적으로 처리되었습니다.'), // '정상적으로 처리되었습니다.'
      type: 'success'
    })
  }
  const requestError: RequestErrorFunction = (message: string, returnCode: string) => {
    if (!message) return
    const _bol = returnCode
      ? returnCode != 'INIT_PASSWORD' && returnCode != 'UNDER_CONSTRUCTION'
      : true
    if (_bol) {
      alert({
        title: getLanguage('에러'),
        message: message,
        type: 'error',
        buttonLabel: 'OK'
      })
    }
  }
  const exceptionNotify: ExceptionNotifyFunction = (option: toastrOptionData) => {
    commMessage.exceptionNotify(option)
  }
  const validError: ValidErrorFunction = () => {
    alert({
      title: getLanguage('필수항목 미입력'),
      message: '', // _message ? _message : '유효성 검사 중 오류가 발생했습니다. \n재시도 후 지속적인 문제 발생 시 관리자에게 문의하세요.',
      type: 'error',
      buttonLabel: 'OK'
    })
  }

  return {
    alert,
    confirm,
    requestSuccess,
    requestError,
    exceptionNotify,
    validError
  }
}
