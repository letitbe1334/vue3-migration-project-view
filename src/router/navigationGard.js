import router from '@/router'

import { useAuthStore } from '@/stores/auth'
import { useAppStore } from '@stores/app'
import { usePermissionStore } from '@stores/permission'

/** 인증처리가 되지 않더라도 보낼 수 있는 uri */
const whiteList = ['/404']

router.beforeEach(async (to, from, next) => {
  /** app 호출 */
  const app = useAppStore()
  
  const auth = useAuthStore()

  /** permission 호출 */
  const permission = usePermissionStore()
  const { addRouters } = storeToRefs(permission)

  /** 메뉴 이동시 전체화면 로딩 처리 */
  app.setLoading()

  if (to.path === '/404') {
    next()
  } else {
    /** access router에 저장 되지 않은 메뉴 정보일 경우 404 페이지로 redirect */
    if (addRouters.value && addRouters.value.length > 0) {
      if (!auth.haveRoute(addRouters.value, to.path)) {
        return next({
          path: '/404'
        })
      }
    }
    next()
  }
})

router.afterEach((to) => {
  /** 로딩 제거 */
  const app = useAppStore()
  app.setLoading(false)
})

