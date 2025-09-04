export const useAppStore = defineStore('app', () => {
  const loading = ref(false)

  function setLoading(_loading: boolean) {
    loading.value = _loading
  }

  return {
    /** state */
    loading,
    /** action */
    setLoading
  }
})
