import 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    /**
     * 사이드바 및 탐색경로에 표시되는 경로 이름을 설정.
     */
    title?: string
    /**
     * 경로 아이콘을 설정하고 svg @/icons/svg를 적용.
     */
    svgIcon?: string
    /**
     * 기본값은 false. true로 설정하면 경로가 사이드바에 표시되지 않음.
     */
    hidden?: boolean
    /**
     * 경로에 들어갈 수 있는 역할을 설정하고 여러 역할의 중첩을 지원.
     */
    roles?: string[]
    /**
     * 기본값은 true. false로 설정하면 탐색경로에 표시되지 않음.
     */
    breadcrumb?: boolean
    /**
     * 기본값은 false, true로 설정하면 태그 보기에서 수정.
     */
    affix?: boolean
    /**
     * 하나의 경로 아래에 자식이 선언한 경로가 1개 이상 있을 경우 자동으로 중첩 모드가 됨.
     * 하나만 있는 경우 해당 하위 경로가 루트 경로로 사이드바에 표시.
     * 해당 루트에 선언된 자녀 수와 상관없이 루트를 표시하고 싶은 경우,
     * AlwaysShow: true를 설정하면 이전에 정의된 규칙이 무시되고 루트 경로가 항상 표시.
     */
    alwaysShow?: boolean
    /**
     * 예: activeMenu: "/xxx/xxx"，
     * 이 속성을 설정하여 라우팅에 진입하면 activeMenu 속성에 해당하는 사이드바가 강조 표시.
     * 이 속성은 Hidden: true 속성이 있는 경로에 사용하기에 적합.
     */
    activeMenu?: string
    /**
     * 라우팅 페이지 캐시 여부
     * 기본값은 false. true인 경우 이때 경로와 페이지 모두 일관된 이름을 설정해야 함.
     */
    keepAlive?: boolean
  }
}
