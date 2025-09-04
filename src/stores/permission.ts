/* @vite-ignore */
import { asyncRouterMap, addAuthRouter } from '@/router'

interface metaData {
  title: string | undefined
  editable: boolean
  params?: Record<string, string>
  layout?: stringNull
  githubOwner?: string
  githubRepo?: string
  githubBranch?: string
}

export interface accessRouterData {
  path: string
  name: string
  meta?: metaData
  component?: Component
  children?: accessRouterData[]
}

export const usePermissionStore = defineStore('permission', () => {
  const addRouters = ref<Array<accessRouterData>>([])

  const accessedRouters = getAccessRouters()
  addRouters.value = accessedRouters

  addAuthRouter(addRouters.value)

  function getAccessRouters() {
    const accessRouters: accessRouterData[] = []

    _.forEach(asyncRouterMap, (router) => {
      accessRouters.push({
        path: router.path,
        name: router.name,
        meta: {
          title: '',
          // layout: router.meta?.layout,
          // 권한 처리 되고 난 후에 해당 로직 처리
          editable: Boolean(router.meta.editable), // menu.writeYn === 'Y' ? true : false,
          params: {},
          layout: router?.meta?.layout || 'default'
        },
        component: router.component
      })
    })

    return accessRouters
  }

  return {
    /** state */
    addRouters
    /** action */
  }
})
