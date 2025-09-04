import { accessRouterData } from '@/stores/permission'

export const useAuthStore = defineStore('auth', () => {
  function haveRoute(routers: Array<accessRouterData>, path: string) {
    let returnVal = false
    if (routers && routers.length > 0) {
      for (let i = 0; i < routers.length; i++) {
        if (routers[i].path === path) {
          return true
        } else {
          returnVal = false
        }
      }
    }
    return returnVal
  }

  return {
    /** state */
    /** action */
    haveRoute
  }
})
