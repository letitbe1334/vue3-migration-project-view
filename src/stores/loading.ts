import { QSpinnerHourglass } from 'quasar'

import { LoadingShowFunction, LoadingHideFunction, LoadingAllHideFunction } from '@/types/loading'

export const useLoadingStore = defineStore('loading', () => {
  const loadingQueues = ref<Array<string>>([])
  const isLoadingShow = ref<boolean>(false)
  const $q = useQuasar()

  const loadingQueueCheck = computed(() => loadingQueues.value.length === 0)

  const loadingShow: LoadingShowFunction = () => {
    loadingQueues.value.push('queue')
    if (loadingQueueCheck.value || !isLoadingShow.value) {
      $q.loading.show({
        spinner: QSpinnerHourglass,
        spinnerColor: 'white',
        spinnerSize: 130,
        backgroundColor: 'blue',
        message: '잠시만 기다려주세요.',
        messageColor: 'white'
      })
      isLoadingShow.value = true
    }
  }
  const loadingHide: LoadingHideFunction = async () => {
    await nextTick()
    loadingQueues.value.pop()
    if (loadingQueueCheck.value && isLoadingShow.value) {
      isLoadingShow.value = false
      hideDebounce()
    }
  }

  const hideDebounce = _.debounce(() => {
    $q.loading.hide()
  }, 500)

  const loadingAllHide: LoadingAllHideFunction = async () => {
    await nextTick()
    loadingQueues.value = []
    $q.loading.hide()
    isLoadingShow.value = false
  }

  return {
    /** state */
    loadingQueues,
    /** action */
    loadingShow,
    loadingHide,
    loadingAllHide
  }
})
