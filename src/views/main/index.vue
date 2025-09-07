<template>
  <div class="main-container">
    <!-- 제목 -->
    <h2>🚀 Vue3 마이그레이션</h2>
    <div class="main-description">
      Vue2 ➡️ Vue3로 마이그레이션 하면서 어떤 부분을 고민하고 어떻게 진행했는지에 대한 내용입니다.
    </div>
    <!-- 동기 -->
    <OrderContainer :title="motive.title" :items="motive.items" />
    <!-- 사용기술 -->
    <div>
      <img src="https://img.shields.io/badge/Vue-3.5.18-%234FC08D?logo=vuedotjs" alt="vue" />
      <img src="https://img.shields.io/badge/yarn-berry-%232C8EBB?logo=yarn" alt="yarn" />
      <img src="https://img.shields.io/badge/Vite-5.4.9-%23646CFF?logo=vite" alt="Vite" />
      <img src="https://img.shields.io/badge/TypeScript-5.8.3-%233178C6?logo=typescript" alt="TypeScript" />
      <img src="https://img.shields.io/badge/Quasar-2.17.0-blue?logo=quasar" alt="quasar" />
    </div>
    <!-- 기술선정 -->
    <CardContainer 
      :title="techstack.title"
      :items="techstack.items"
    />
    <!-- 마이그레이션 -->
    <CardContainer 
      :title="migration.title"
      :items="migration.items"
    />
    <!-- 온보딩 -->
    <OrderContainer :title="onboarding.title" :items="onboarding.items" />
    <!-- 결과 비교 -->
    <CardContainer 
      :title="resultCompare.title"
      :items="resultCompare.items"
    />
    <!-- 총평 -->
    <CardContainer 
      :title="conclusion.title"
      :items="conclusion.items"
    />
  </div>
</template>
<script setup lang="ts">

/******************************
 * #Important 사용하지 않는 로직, 변수 등 선언 X
 *******************************/

/******************************
 * @import_선언
 * TODO 아래 순서에 맞추어 import (각 순서 마다 띄우기)
 *  * 1. Dependency
 *  * 2. Utils
 *  * 3. Types
 *  * 4. Stores
 *  * 5. Vue
 *  * 6. Etc (생길 시 얘기.)
 *******************************/

/******************************
 * @컴포넌트_옵션_선언
 * TODO 이름 정의 (파일 이름 그대로 지정)
 *******************************/
defineOptions({
  name: 'mainIndex'
})

/******************************
 * @Pinia_store_선언
 * TODO 반응형 유지를 위해 storeToRefs 사용 (function은 사용 X)
 *******************************/
/******************************
 * @Emit_선언
 *******************************/

/******************************
 * @Vue_관련_선언 (ex. vue-router)
 *******************************/

/******************************
 * @Interface_선언
 *******************************/

/******************************
 * @inject_선언
 *******************************/

/******************************
 * @Props_선언
 * TODO type & default 작성
 *******************************/

/******************************
 * @VModel_선언
 *******************************/

/******************************
 * @Data_선언
 * TODO ref, reactive 사용, 불명확한 단어 사용 X (ex. data, date)
 *******************************/
const motive = ref({
  title: '🔥 이와 같은 작업을 하게된 동기!!',
  items: [
    '1. 주요 라이브러리들이 Vue3 + TypeScript 기반으로만 지원되면서, Vue2에서는 최신 기능을 활용하기 어려움.<br/>2. Vue 3로의 전환은 Typescript를 공식적으로 지원하여 코드의 안정성과 유지보수성을 높일 수 있음.<br/>3. Vue2의 공식 지원이 2023.12.31 부로 종료됨.',
    '모든 팀원들이 필요성을 느낌에 따라 회의를 통해 마이그레이션 진행 결정!!',
    '단순 마이그레이션이 아닌 기존에 가지고 있는 문제점 해결 및 속도 향상, 효율적인 솔루션 관리/개발에도 초점을 두면서 진행',
    '생긴 이점<br/>1. Vite와 Yarn Berry : 개발 환경의 속도와 효율을 극대화<br/>2. TypeScript와 Pinia : 유지보수성과 확장성 향상<br/>3. Composition API와 Vue Query : 코드 재사용성과 데이터 관리를 체계화<br/>4. 개발 생산성과 애플리케이션 성능을 동시에 향상',
  ]
})
const techstack = ref({
  title: '💻 적용하고자 하는 기술 및 라이브러리 정리',
  items: [
    { 
      headerContents: '기술스택 선정', 
      haveContents: true,
      isAggregated: true,
      aggregateContents: [
        { 
          laguageType: 'components',
          description: '우선적으로 기술스택 선정부터 진행했어요.<br/>Framework부터 상태관리, Node.js 버전, 런타임 환경 패키지 매니저 등 큰 범위의 기술 스택을 비교 분석해 선정했어요.',
          contents: shallowRef(defineAsyncComponent(() => import(`@/components/TechStackContainer.vue`))),
          items: [
            {
              title: 'Framework',
              techs: [
                { name: 'Vue3', pick: true, description: '더 빠르고, 작고, 유지보수하기 쉬운 애플리케이션을 위해 Composition API를 도입하고 TypeScript 지원을 강화한 최신 버전의 프로그레시브 자바스크립트 프레임워크입니다.' },
                { name: 'Vue2', pick: false, description: '배우기 쉬운 직관적인 Options API를 기반으로 한 프로그레시브 자바스크립트 프레임워크입니다.' }
              ],
              pickReason: 'Vue2는 2023.12.31부로 지원종료가 되었기도 하며 Vue 3는 프록시 기반의 향상된 반응형 시스템과 타입스크립트 지원으로 성능과 유지보수성을 높였으며, Composition API를 통해 대규모 프로젝트를 효율적으로 관리할 수 있어 선택하게 되었습니다.'
            },
            {
              title: '런타임/빌드 도구',
              techs: [
                { name: 'Vite', pick: true, description: `네이티브 ES 모듈(ESM)을 활용하여 매우 빠른 개발 서버 구동 속도와 즉각적인 갱신을 제공하는 최신 프론트엔드 빌드 도구입니다. 기존 번들러의 느린 개발 경험을 개선하여 개발 생산성을 크게 향상시킵니다.` },
                { name: 'Nuxt.js', pick: false, description: '개발을 더 빠르고 효율적으로 할 수 있도록 돕습니다. 서버 사이드 렌더링(SSR), 정적 사이트 생성(SSG), 라우팅 같은 복잡한 설정을 기본적으로 제공하여 개발자가 애플리케이션의 핵심 로직에 집중할 수 있게 해줍니다.' }
              ],
              pickReason: `Nuxt.js는 SSR(서버 사이드 렌더링)을 기본 지원하지만, 이 기능이 불필요하여 개발자 경험(DX) 향상에 집중했습니다. 따라서 네이티브 ESM을 통해 빠른 개발 서버 구동과 즉각적인 갱신을 제공하는 Vite를 선택하여, 개발 생산성을 극대화했습니다.`
            },
            {
              title: '패키지 매니저',
              techs: [
                { name: 'yarn berry', pick: true, description: `프로젝트 내에 의존성 패키지를 직접 저장하는 PnP(Plug'n'Play) 방식을 도입하여 node_modules 없이도 패키지를 관리합니다. 이를 통해 설치 시간을 획기적으로 단축하고, 프로젝트 간의 독립성을 높여줍니다.` },
                { name: 'npm', pick: false, description: '하드 링크와 심볼릭 링크를 사용하여 패키지를 한 번만 설치하고 여러 프로젝트에서 공유하는 패키지 매니저입니다. 이를 통해 디스크 공간을 효율적으로 절약하고, 설치 속도를 크게 향상시켜줍니다.' }
              ],
              pickReason: `Pnpm은 디스크 공간을 효율적으로 사용하지만, Yarn Berry는 PnP(Plug'n'Play) 방식을 통해 node_modules 없이 의존성을 관리하여 설치 시간을 획기적으로 줄여줍니다. 또한, Yarn Berry의 안정적인 생태계와 개발자 경험(DX)을 선호했기 때문에 선택했습니다.`
            },
            {
              title: 'Node.js',
              techs: [
                { name: 'Node.js 20', pick: true, description: `fetch API와 같은 최신 웹 표준을 기본으로 지원하며, V8 엔진 업데이트를 통해 성능을 극대화하여 개발 생산성과 애플리케이션의 실행 속도를 높여줍니다.` },
                { name: 'Node.js 14', pick: false, description: '안정성과 레거시 호환성이 장점입니다. 마지막 장기 지원(LTS) 버전으로, 오랫동안 검증된 안정성을 바탕으로 기존 시스템과의 충돌 없이 사용하기 좋습니다.' }
              ],
              pickReason: `최신 성능과 기능을 활용하여 애플리케이션의 효율성과 개발 생산성을 극대화하기 위함이며 일부 오래된 패키지는 버전 업 또는 변경을 할 것이기에 호환성 문제 또한 없다고 판단해 선택했습니다.`
            },
            {
              title: '상태관리',
              techs: [
                { name: 'Pinia', pick: true, description: `새로운 공식 상태 관리 라이브러리로, Vuex와 유사하지만 더 가볍고 단순하며 타입스크립트 지원이 뛰어납니다. 컴포넌트 간 상태 공유를 간편하게 만들어 개발자 경험(DX)을 크게 향상시켜줍니다.` },
                { name: 'vuex', pick: false, description: '예측 가능한 방식으로 상태를 관리하기 위한 Vue.js의 중앙 집중식 상태 관리 라이브러리입니다. 모든 컴포넌트가 애플리케이션의 상태에 접근하고 변경할 수 있는 단일 저장소를 제공하여, 복잡한 데이터 흐름을 효율적으로 관리할 수 있게 해줍니다.' }
              ],
              pickReason: `더 간결하고 직관적인 API로 개발자 경험(DX)을 향상시키기 위함입니다. Pinia는 타입스크립트 지원이 뛰어나 상태 관리의 안정성을 높여주고, 모듈 방식의 설계로 코드 스플리팅에 유리하며 유지보수가 용이합니다. 또한, Vuex의 mutations와 actions 구분을 없애 코드를 훨씬 단순화 할 수 있습니다.`
            },
            {
              title: '컴포넌트 작성 방식',
              techs: [
                { name: 'Composition API', pick: true, description: `Vue.js 컴포넌트의 로직을 관련 기능별로 묶어 관리하는 새로운 방식입니다. 특히 <script setup> 문법과 함께 사용하면 코드를 간결하게 작성할 수 있으며, 타입스크립트와 완벽하게 통합되어 코드의 안정성을 크게 높여줍니다.` },
                { name: 'Options API', pick: false, description: '컴포넌트의 로직을 data, methods, computed 등과 같은 미리 정의된 옵션들에 나누어 작성합니다. 이 구조는 초보자가 배우기 쉽고 직관적이지만, 대규모 컴포넌트에서는 관련 로직들이 분산되어 가독성이 떨어질 수 있습니다.' }
              ],
              pickReason: `Options API는 관련 로직들이 분산되어 대규모 컴포넌트의 가독성이 떨어졌습니다. 반면 Composition API는 관련 로직을 한데 모아 코드의 재사용성과 가독성을 크게 높였고, 타입스크립트와 함께 사용하면 코드의 안정성까지 보장하기 때문에 선택했습니다.`
            },
          ]
        },
      ],
    },
    { 
      headerContents: '의존성 관리 및 라이브러리 정리', 
      haveContents: true,
      isAggregated: true,
      aggregateContents: [
        { 
          laguageType: 'javascript',
          // description: 'Vue3 전환, 버전 업그레이드로 인한 기존 라이브러리들의 버전을 올리거나 호환되지 않는 라이브러리를 교체 또는 추가해 정상적으로 작동되도록 하며, 추가적으로 개선할 필요성이 있는 경우도 고려하였습니다.',
          description: '두 번째로 라이브러리를 정리했어요.<br/>대체되거나 이제는 불필요함에 따라 삭제하고자 하는 라이브러리들을 뽑아 제거했습니다.<br/>그에 따라 번들 크기가 줄어들어 로딩 속도가 빨라지고, 의존성 충돌과 잠재적 보안 취약점을 줄여 유지보수를 용이하게 했습니다.',
          contents: `
  "@ckeditor/ckeditor5-build-classic": "^24.0.0", // Quasar editor로 대체함에 따라 삭제합니다.
  "@ckeditor/ckeditor5-vue": "^2.0.1", // Quasar editor로 대체함에 따라 삭제합니다.
  "@ckeditor/ckeditor5-vue2": "^1.0.5", // Quasar editor로 대체함에 따라 삭제합니다.
  "@fullcalendar/core": "^5.5.1", // FullCalendar 라이브러리를 더 이상 사용하지 않아 삭제합니다.
  "@fullcalendar/daygrid": "^5.5.0", // FullCalendar 라이브러리 종속성이 더 이상 필요 없습니다.
  "@fullcalendar/interaction": "^5.5.0", // FullCalendar 라이브러리 종속성이 더 이상 필요 없습니다.
  "@fullcalendar/timegrid": "^5.5.1", // FullCalendar 라이브러리 종속성이 더 이상 필요 없습니다.
  "@fullcalendar/vue": "^5.5.0", // Vue 2용 FullCalendar 라이브러리로, Vue 3 환경에서 필요 없습니다.
  "@types/leaflet": "^1.5.21", // Leaflet 타입 정의로, Leaflet 라이브러리 사용 중단으로 인해 불필요합니다.
  "acorn": "^8.0.4", // JavaScript 파서 라이브러리로, 현재 프로젝트에서 직접 사용하지 않아 불필요합니다.
  "animate-sass": "^0.8.2", // Sass 애니메이션 라이브러리로, 현재 프로젝트에서 사용하지 않아 삭제합니다.
  "bootstrap": "^4.6.0", // Bootstrap은 전체적인 디자인 틀을 단순화하고 Quasar를 이미 사용하고 있어 불필요하다고 판단해 삭제했습니다.
  "bootstrap-vue": "^2.22.0", // Bootstrap은 전체적인 디자인 틀을 단순화하고 Quasar를 이미 사용하고 있어 불필요하다고 판단해 삭제했습니다.
  "chart.js": "^2.9.4", // Apexchart로 대체함에 따라 삭제합니다.
  "element-ui": "^2.15.6", // 사용하고 있던 컴포넌트를 Quasar 또는 자체 제작하여 사용함에 따라 불필요하다 판단하에 삭제합니다.
  "increase-memory-limit": "^1.0.7", // 메모리 제한 증가 유틸리티로, 프로젝트 규모에 맞지 않아 삭제합니다.
  "leaflet": "^1.7.1", // Leaflet 지도 라이브러리 사용을 중단하여 불필요합니다.
  "linearicons": "^1.0.2", // 아이콘 폰트로, 프로젝트 UI/UX 변경에 따라 사용하지 않습니다.
  "mockjs": "^1.1.0", // 목(Mock) 데이터 생성 라이브러리로, 실제 API 연동으로 전환하여 불필요합니다.
  "pe7-icon": "^1.0.4", // 아이콘 폰트로, 프로젝트 UI/UX 변경에 따라 사용하지 않습니다.
  "perfect-scrollbar": "^1.5.0", // 커스텀 스크롤바 라이브러리로, 사용하지 않아 삭제합니다.
  "popper.js": "^1.15.0", // Quasar dialog로 대체함에 따라 삭제합니다.
  "quill": "^1.3.7", // Quasar editor로 대체함에 따라 삭제합니다.
  "request": "^2.88.2", // HTTP 요청 라이브러리로, 현재 axios 라이브러리 사용으로 대체되었습니다.
  "uuid": "^8.3.2", // Quasar uid 사용함에 따라 삭제합니다.
  "v-mask": "^2.2.4", // 정규표현식으로 대체함에 따라 삭제합니다.
  "vee-validate": "^3.4.5", // 유효성 검사 툴을 자체 제작함에 따라 삭제합니다.
  "vue-chartjs": "^3.5.1", // Chart.js를 위한 Vue 2 컴포넌트로, Chart.js 라이브러리 사용 중단으로 불필요합니다.
  "vue-clipboards": "^1.3.0", // 클립보드 복사 라이브러리로, 사용하지 않아 삭제합니다.
  "vue-color": "^2.8.1", // 컬러 피커 라이브러리로, 사용하지 않아 삭제합니다.
  "vue-cropperjs": "^4.2.0", // 이미지 자르기 라이브러리로, 사용하지 않아 삭제합니다.
  "vue-currency-input": "^1.22.3", // 정규표현식으로 대체함에 따라 삭제합니다.
  "vue-element-loading": "^2.0.2", // Quasar loading 사용함에 따라 삭제합니다.
  "vue-form-wizard": "^0.8.4", // Quasar form 사용함에 따라 삭제합니다.
  "vue-js-toggle-button": "^1.3.3", // Quasar toggle 사용함에 따라 삭제합니다.
  "vue-ladda": "0.0.15", // Quasar button 사용함에 따라 삭제합니다.
  "vue-multiselect": "^2.1.6", // Quasar multiselect 사용함에 따라 삭제합니다.
  "vue-notifications": "^1.0.2", // sweetalert2 toast 사용함에 따라 삭제합니다.
  "vue-perfect-scrollbar": "^0.2.1", // Vue 2용 스크롤바 컴포넌트로, 불필요합니다.
  "vue-quill-editor": "^3.0.6", // Quill 에디터를 위한 Vue 2 컴포넌트로, Quill 라이브러리 사용 중단으로 불필요합니다.
  "vue-rate": "^2.4.0", // Quasar Rating 사용함에 따라 삭제합니다
  "vue-select": "^3.11.2", // Quasar select 사용함에 따라 삭제합니다
  "vue-slick": "^1.1.15", // 캐러셀 컴포넌트로, 사용하지 않아 삭제합니다.
  "vue-sparklines": "^0.2.1", // Apexchart로 대체함에 따라 삭제합니다.
  "vue-spinner": "^1.0.4", // Quasar loading 사용함에 따라 삭제합니다
  "vue-sticky-directive": "0.0.10", // 스티키(Sticky) 디렉티브로, 사용하지 않아 삭제합니다.
  "vue-tables-2": "^2.1.73", // Quasar table 사용함에 따라 삭제합니다
  "vue-tabs-with-active-line": "^1.2.6", // Quasar tab 사용함에 따라 삭제합니다
  "vue-textarea-autosize": "^1.1.1", // 자동 크기 조절 텍스트 영역 컴포넌트로, 사용하지 않아 삭제합니다.
  "vue-toastr": "^2.1.2", // sweetalert2 toast 사용함에 따라 삭제합니다.
  "vue-videojs7": "^1.0.2", // 비디오 플레이어 컴포넌트로, 사용하지 않아 삭제합니다.
  "vue2-animate": "^2.1.4", // 불필요함에 따라 삭제합니다.
  "vue2-leaflet": "^2.6.0", // Vue 2용 Leaflet 컴포넌트로, Leaflet 라이브러리 사용 중단으로 불필요합니다.
  "vuelidate": "^0.7.6", // 유효성 검사 툴을 자체 제작함에 따라 삭제합니다.
  "vuetrend": "^0.3.4" // Apexchart로 대체함에 따라 삭제합니다.`
        },
        { 
          laguageType: 'javascript',
          description: 'vue3로 올라감에 따라 버전 업그레이드가 필요한 라이브러리들을 뽑아 버전을 체크했습니다.',
          contents: `
    "@fortawesome/fontawesome-svg-core": "^1.2.34", ➡️ "@fortawesome/fontawesome-svg-core": "^6.6.0
    "@fortawesome/free-solid-svg-icons": "^5.15.2", ➡️ "@fortawesome/free-solid-svg-icons": "^6.6.0
    "@fortawesome/vue-fontawesome": "^2.0.2", ➡️ "@fortawesome/vue-fontawesome": "^3.0.8"
    "@vue/cli": "^4.5.13", ➡️ "vite": "5.4.9", "vite-express": "^0.19.0", "vite-plugin-svg-icons": "^2.0.1", "vite-plugin-vue-devtools": "^7.3.1", "vite-svg-loader": "^5.1.0",
    "@vue/cli-plugin-babel": "^3.11.0", ➡️ "vite": "5.4.9", "vite-express": "^0.19.0", "vite-plugin-svg-icons": "^2.0.1", "vite-plugin-vue-devtools": "^7.3.1", "vite-svg-loader": "^5.1.0",
    "@vue/cli-plugin-eslint": "^4.1.1", ➡️ "vite": "5.4.9", "vite-express": "^0.19.0", "vite-plugin-svg-icons": "^2.0.1", "vite-plugin-vue-devtools": "^7.3.1", "vite-svg-loader": "^5.1.0",
    "@vue/cli-service": "^4.1.1", ➡️ "vite": "5.4.9", "vite-express": "^0.19.0", "vite-plugin-svg-icons": "^2.0.1", "vite-plugin-vue-devtools": "^7.3.1", "vite-svg-loader": "^5.1.0",
    "@vue/cli-service-global": "^4.5.11", ➡️ "vite": "5.4.9", "vite-express": "^0.19.0", "vite-plugin-svg-icons": "^2.0.1", "vite-plugin-vue-devtools": "^7.3.1", "vite-svg-loader": "^5.1.0",
    "apexcharts": "^3.23.1", ➡️ "apexcharts": "^3.54.0", "vue3-apexcharts": "^1.7.0",
    "array-to-tree": "^3.3.2", ➡️ "array-to-tree": "^3.3.2",
    "axios": "^0.21.1", ➡️ "axios": "^1.7.7",
    "compressorjs": "1.1.1", ➡️ "compressorjs": "^1.2.1",
    "crypto-js": "^4.1.1", ➡️ "crypto-js": "^4.2.0",
    "eslint": "^5.16.0", ➡️ "eslint": "^8.57.0",
    "eslint-plugin-vue": "^5.2.3", ➡️ "eslint-plugin-vue": "^9.23.0",
    "js-cookie": "^2.2.1", ➡️ "js-cookie": "^3.0.5",
    "lodash": "^4.17.21", ➡️ "lodash-es": "^4.17.21",
    "material-design-icons-iconfont": "^6.1.0", ➡️ "material-design-icons-iconfont": "^6.7.0",
    "material-icons": "^0.7.7", ➡️ "material-icons": "^1.13.12",
    "moment": "^2.18.1", ➡️ "moment": "^2.30.1",
    "quasar": "^1.22.1", ➡️ "quasar": "^2.17.0", "@quasar/app-vite": "^1.10.0", "@quasar/vite-plugin": "^1.7.0",
    "signature_pad": "^3.0.0-beta.4", ➡️ 
    "string-format": "^2.0.0", ➡️ "string-format": "^2.0.0",
    "sweetalert2": "^11.4.20", ➡️ "sweetalert2": "^11.14.5",
    "vue-apexcharts": "^1.6.0", ➡️ "vue3-apexcharts": "^1.7.0",
    "vue-country-flag": "^2.3.2", ➡️ "vue-country-flag-next": "^2.3.2",
    "vue-countup-v2": "^4.0.0", ➡️ "vue-countup-v3": "^1.4.2",
    "vue-draggable-resizable": "^2.3.0", ➡️ "vue-draggable-next": "^2.2.1", "vue-draggable-resizable": "^3.0.0",
    "vue-panzoom": "^1.1.3", ➡️ "vue-panzoom": "^1.1.6",
    "vue-router": "^3.4.9", ➡️ "vue-router": "^4.3.3",
    "vue-signature-pad": "^2.0.5", ➡️ "vue-signature-pad": "^3.0.2",
    "vue2-datepicker": "^3.8.2", ➡️ "vue-datepicker-next": "^1.0.3",
    "vuex": "^3.6.0", ➡️ "pinia": "^2.1.7",
    "xlsx": "^0.17.0" ➡️ "xlsx": "^0.18.5"`,
        },
      ],
    },
    // { 
    //   headerContents: '마이그레이션 정리', 
    //   haveContents: true,
    //   isAggregated: true,
    //   aggregateContents: [
    //     { 
    //       laguageType: 'javascript',
    //       description: 'Composition API, Typescript, Pinia, 공통 컴포넌트 등 기존 사용하던 작업에서 변경되는 부분들을 찾아 어떻게 바꾸어 나갈지 정리했어요.',
    //       contents: ``
    //     },
    //   ],
    // },
  ]
})

const migration = ref({
  title: '⭐ 마이그레이션',
  items: [
    { 
      headerContents: 'vuex > Pinia 마이그레이션', 
      haveContents: true,
      asisContents: [
        { 
          laguageType: 'javascript',
          description: 'vuex로 구성된 tagsView에는 state, mutations, actions 이 정의된 것을 볼 수 있어요.',
          contents: `const tagsView = {
  state: {
    visitedViews: [],
    cachedViews: []
  },
  mutations: {
    ADD_VISITED_VIEW: (state, view) => {
      if (state.visitedViews.some(v => v.path === view.path)) return
      if (view.meta.title) {
        state.visitedViews.unshift(
          Object.assign({}, view, {
            title: view.meta.title, // || 'no-name'
          })
        )
      }
    },
    ADD_CACHED_VIEW: (state, view) => {
      if (state.cachedViews.includes(view.name)) return
      if (!view.meta.noCache) {
        state.cachedViews.unshift(view.name)
      }
    },
    DEL_VISITED_VIEW: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews.splice(i, 1)
          break
        }
      }
    },
    DEL_CACHED_VIEW: (state, view) => {
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews.splice(index, 1)
          break
        }
      }
    },
    DEL_OTHERS_VISITED_VIEWS: (state, view) => {
      for (const [i, v] of state.visitedViews.entries()) {
        if (v.path === view.path) {
          state.visitedViews = state.visitedViews.slice(i, i + 1)
          break
        }
      }
    },
    DEL_OTHERS_CACHED_VIEWS: (state, view) => {
      for (const i of state.cachedViews) {
        if (i === view.name) {
          const index = state.cachedViews.indexOf(i)
          state.cachedViews = state.cachedViews.slice(index, index + 1)
          break
        }
      }
    },
    DEL_ALL_VISITED_VIEWS: state => {
      state.visitedViews = []
    },
    DEL_ALL_CACHED_VIEWS: state => {
      state.cachedViews = []
    },
    UPDATE_VISITED_VIEW: (state, view) => {
      for (let v of state.visitedViews) {
        if (v.path === view.path) {
          v = Object.assign(v, view)
          break
        }
      }
    }
  },
  actions: {
    addView({
      dispatch
    }, view) {
      dispatch('addVisitedView', view)
      dispatch('addCachedView', view)
    },
    addVisitedView({
      commit
    }, view) {
      commit('ADD_VISITED_VIEW', view)
    },
    addCachedView({
      commit
    }, view) {
      commit('ADD_CACHED_VIEW', view)
    },

    delView({
      dispatch,
      state
    }, view) {
      return new Promise(resolve => {
        dispatch('delVisitedView', view)
        dispatch('delCachedView', view)
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    },
    delVisitedView({
      commit,
      state
    }, view) {
      return new Promise(resolve => {
        commit('DEL_VISITED_VIEW', view)
        resolve([...state.visitedViews])
      })
    },
    delCachedView({
      commit,
      state
    }, view) {
      return new Promise(resolve => {
        commit('DEL_CACHED_VIEW', view)
        resolve([...state.cachedViews])
      })
    },

    delOthersViews({
      dispatch,
      state
    }, view) {
      return new Promise(resolve => {
        dispatch('delOthersVisitedViews', view)
        dispatch('delOthersCachedViews', view)
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    },
    delOthersVisitedViews({
      commit,
      state
    }, view) {
      return new Promise(resolve => {
        commit('DEL_OTHERS_VISITED_VIEWS', view)
        resolve([...state.visitedViews])
      })
    },
    delOthersCachedViews({
      commit,
      state
    }, view) {
      return new Promise(resolve => {
        commit('DEL_OTHERS_CACHED_VIEWS', view)
        resolve([...state.cachedViews])
      })
    },

    delAllViews({
      dispatch,
      state
    }, view) {
      return new Promise(resolve => {
        dispatch('delAllVisitedViews', view)
        dispatch('delAllCachedViews', view)
        resolve({
          visitedViews: [...state.visitedViews],
          cachedViews: [...state.cachedViews]
        })
      })
    },
    delAllVisitedViews({
      commit,
      state
    }) {
      return new Promise(resolve => {
        commit('DEL_ALL_VISITED_VIEWS')
        resolve([...state.visitedViews])
      })
    },
    delAllCachedViews({
      commit,
      state
    }) {
      return new Promise(resolve => {
        commit('DEL_ALL_CACHED_VIEWS')
        resolve([...state.cachedViews])
      })
    },

    updateVisitedView({
      commit
    }, view) {
      commit('UPDATE_VISITED_VIEW', view)
    }
  }
}

export default tagsView
`
        }
      ],
      tobeContents: [
        { 
          laguageType: 'javascript',
          description: 'pinia에서는 mutation이 없어지고 state, actions라는 구분이 명확하게 표시되지는 않지만 좀 더 간결하고 자유롭게 작성 가능하게 변경되었어요.',
          contents: `import { ref } from 'vue'
import { defineStore } from 'pinia'
import { RouteLocationNormalizedLoadedGeneric } from 'vue-router'

import { routeView } from '@/types/routerView'

export const useTagViewsStore = defineStore('tagViews', () => {
  const visitedViews = ref<Array<routeView>>([])
  const cachedViews = ref<Array<string>>([])

  function addView(view: RouteLocationNormalizedLoadedGeneric) {
    /** ADD_VISITED_VIEW */
    if (visitedViews.value.some((v) => v.path === view.path)) return
    if (view.meta.title) {
      visitedViews.value.unshift(
        Object.assign({}, view, {
          title: view.meta.title
        })
      )
    }
    /** ADD_CACHED_VIEW */
    if (cachedViews.value.includes(String(view.name))) return
    if (!view.meta.noCache) {
      cachedViews.value.unshift(String(view.name))
    }
  }

  function delView(view: RouteLocationNormalizedLoadedGeneric) {
    return new Promise((resolve) => {
      delVisitedView(view)
      delCachedView(view)
      resolve([...visitedViews.value])
    })
  }

  function delVisitedView(view: RouteLocationNormalizedLoadedGeneric) {
    return new Promise((resolve) => {
      for (const [i, v] of visitedViews.value.entries()) {
        if (v.path === view.path) {
          visitedViews.value.splice(i, 1)
          break
        }
      }
      resolve([...visitedViews.value])
    })
  }

  function delCachedView(view: RouteLocationNormalizedLoadedGeneric) {
    return new Promise((resolve) => {
      for (const i of cachedViews.value) {
        if (i === view.name) {
          const index = cachedViews.value.indexOf(i)
          cachedViews.value.splice(index, 1)
          break
        }
      }
      resolve([...cachedViews.value])
    })
  }

  function delOthersViews(view: RouteLocationNormalizedLoadedGeneric) {
    return new Promise((resolve) => {
      delOthersVisitedViews(view)
      delOthersCachedViews(view)
      resolve({
        visitedViews: [...visitedViews.value],
        cachedViews: [...cachedViews.value]
      })
    })
  }

  function delOthersVisitedViews(view: RouteLocationNormalizedLoadedGeneric) {
    return new Promise((resolve) => {
      for (const [i, v] of visitedViews.value.entries()) {
        if (v.path === view.path) {
          visitedViews.value = visitedViews.value.slice(i, i + 1)
          break
        }
      }
      resolve([...visitedViews.value])
    })
  }

  function delOthersCachedViews(view: RouteLocationNormalizedLoadedGeneric) {
    return new Promise((resolve) => {
      for (const i of cachedViews.value) {
        if (i === view.name) {
          const index = cachedViews.value.indexOf(i)
          cachedViews.value = cachedViews.value.slice(index, index + 1)
          break
        }
      }
      resolve([...cachedViews.value])
    })
  }

  function delAllViews() {
    return new Promise((resolve) => {
      delAllVisitedViews()
      delAllCachedViews()
      resolve({
        visitedViews: [...visitedViews.value],
        cachedViews: [...cachedViews.value]
      })
    })
  }

  function delAllVisitedViews() {
    return new Promise((resolve) => {
      visitedViews.value = []
      resolve([...visitedViews.value])
    })
  }

  function delAllCachedViews() {
    return new Promise((resolve) => {
      cachedViews.value = []
      resolve([...cachedViews.value])
    })
  }

  function updateVisitedView(view: RouteLocationNormalizedLoadedGeneric) {
    for (let v of visitedViews.value) {
      if (v.path === view.path) {
        v = Object.assign(v, view)
        break
      }
    }
  }

  return {
    /** state */
    visitedViews,
    cachedViews,
    /** actions */
    addView,
    delView,
    delOthersViews,
    delAllViews,
    updateVisitedView
  }
})
`
        }
      ],
    },
    { 
      headerContents: 'Options API > Composition API 마이그레이션', 
      haveContents: true,
      asisContents: [
        { 
          laguageType: 'javascript',
          description: 'props, data, methods 등의 옵션이 분리되어 있는것을 확인할 수 있어요.',
          contents: `import mixinCommon from './js/mixin-common'
export default {
  /* attributes: name, components, props, data */
  name: 'c-btn',
  mixins: [mixinCommon],
  props: {
    btnclass: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
    mappingType: {
      type: String,
      default: '',
    },
    param: {
      type: [Object, Array],
      default: null,
    },
    isSubmit: {
      // 버튼 클릭 후 처리를 계속 진행할지 여부
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'md',
    },
    color: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    iconRight: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showLoading: {
      type: Boolean,
      default: true,
    },
    isFileRequestPost: {
      type: Boolean,
      default: false,
    },
    outline: {
      type: Boolean,
      default: false,
    },
    textColor: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  computed: {
    isIcon() {
      return this.label === '' && this.icon !== '';
    },
  },
  watch: {
    isSubmit() {
      this.callButtonAction();
    },
  },
  /* Vue lifecycle: created, mounted, destroyed, etc */
  mounted() {
  },
  /* methods */
  methods: {
    getColors() {
      var returnColor = '';
      if (this.color !== '') {
        returnColor = this.color;
      } else {
        switch(this.icon) {
          case 'add': // 추가/신규
          case 'add_circle': // 추가/신규 amber-7
            returnColor = 'yellow-custom';
            break;
          case 'search': // 검색 // 에스엘용 수정 indigo / 원본 teal-5 indigo
            returnColor = 'blue-custom';
            break;
          case 'delete_forever': // 삭제
          case 'remove': // 삭제 red
          case 'delete': // 삭제 red
            returnColor = 'red-custom';
            break;
          case 'save': // 저장 blue-7
            returnColor = 'purple-custom1';
            break;
          case 'check': // 선택
            returnColor = 'purple-custom1';
            break;
          case 'autorenew': // 초기화 purple
            returnColor = 'purple-custom';
            break;
          case 'restart_alt': // 개정 amber-7
            returnColor = 'yellow-custom';
            break;
          case 'help': // help deep-purple-6
            returnColor = 'deep-purple-6';
            break;
          case 'save_alt': // 복사 green-7
            returnColor = 'teal-custom';
            break;
          default:
            returnColor = 'blue-grey-4';
            break;
        }
      }

      return returnColor;
    },
    getTextColors() {
      var returnColor = '';
      if (this.textColor !== '') {
        returnColor = this.textColor;
      } else {
        returnColor = this.getColors() === 'white' ? 'black' : 'white'
      }

      return returnColor;
    },
    /**
     * 버튼 클릭 처리
     *  - 저장 버튼 클릭시 저장전 유효성 검사
     */
    btnClicked() {
      let self = this;
      if (this.showLoading) {
        this.loading = !this.loading;
      } else {
        this.loading = false;
      }
      // 저장일 경우 유효성 검사
      if (this.url) {
        self.closeLoading();
        this.$emit('beforeAction');
      } else {
        self.closeLoading();
        this.callButtonAction();
      }
    },
    /**
     * 버튼 행위 정의
     */
    callButtonAction() {
      let self = this;
      // ajax action
      if (this.url) {
        this.$http.url = this.url;
        this.$http.param = this.param;
        this.$http.type = this.mappingType;
        this.$http.isLoading = true;
        this.$http.isFileRequestPost = this.isFileRequestPost;

        this.$http.request(
          _result => {
            self.$emit('btnCallback', _result);
          }
        );
      } else {
        this.$emit('btnClicked');
      }
    },
    /**
     * 버튼 로딩바 0.5초 후 제거
     */
    closeLoading() {
      setTimeout(() => (this.loading = false), 300);
    },
  },
};`
        }
      ],
      tobeContents: [
        { 
          laguageType: 'javascript',
          description: '기능별로 로직을 묶음으로 인해 data, props 등이 분리되어 있지 않아요.<br/>또한 TypeScript의 타입 추론을 잘 지원하여 코드를 작성할때 자동 완성이나 오류 검사를 더 정확하게 할 수 있어요.<br/>대신에 이전에 안하던 import하는 부분이 증가되며, 반응형 시스템을 더 유연하고 효율적으로 구성하기 위해 ref, reactive가 도입된걸 볼 수 있어요.',
          contents: `// watch, computed 등 Options API에서 하지 않던 import를 진행해야해요.
// 하지만 auto-import를 통해 이러한 부분들을 줄였어요.
import { objectStringNumber, arrayObject } from '@/types/variable'

defineOptions({
  name: 'CBtn'
})

// 컴포넌트에서 emit할 것들을 이와 같이 정의해놔야함.
const emits = defineEmits(['beforeAction', 'btnCallback', 'btnClicked'])

interface propType {
  label?: string
  btnclass?: string
  url?: string
  mappingType?: string
  param?: objectStringNumber | arrayObject | undefined | null
  isSubmit?: boolean
  size?: string
  color?: string
  icon?: string
  iconRight?: string
  disabled?: boolean
  showLoading?: boolean
  outline?: boolean
  dense?: boolean
  textColor?: string
}
const props = withDefaults(defineProps<propType>(), {
  label: '',
  btnclass: '',
  url: '',
  mappingType: '',
  param: null,
  isSubmit: false,
  size: 'md',
  color: '',
  icon: '',
  iconRight: '',
  disabled: false,
  showLoading: true,
  outline: false,
  dense: true,
  textColor: ''
})
const isIcon = computed(() => props.label === '' && props.icon !== '')
watch(
  () => props.isSubmit,
  () => {
    callButtonAction()
  }
)

function getColors() {
  let returnColor = ''
  if (props.color !== '') {
    returnColor = props.color
  } else {
    switch (props.icon) {
      case 'add': // 추가/신규
      case 'add_circle': // 추가/신규 amber-7
        returnColor = 'yellow-custom'
        break
      case 'search': // 검색
        returnColor = 'blue-custom'
        break
      case 'delete_forever': // 삭제
      case 'remove': // 삭제 red
      case 'delete': // 삭제 red
        returnColor = 'red-custom'
        break
      case 'save': // 저장 blue-7
        returnColor = 'purple-custom1'
        break
      case 'check': // 선택
      case 'keyboard_arrow_up':
      case 'keyboard_arrow_down':
        returnColor = 'purple-custom1'
        break
      case 'autorenew': // 초기화 purple
      case 'history':
        returnColor = 'purple-custom'
        break
      case 'restart_alt': // 개정 amber-7
        returnColor = 'yellow-custom'
        break
      case 'help': // help deep-purple-6
        returnColor = 'deep-purple-6'
        break
      case 'save_alt': // 복사 green-7
        returnColor = 'teal-custom'
        break
      default:
        returnColor = 'blue-grey-8'
        break
    }
  }
  return returnColor
}
function getTextColors() {
  let returnColor = ''
  if (props.textColor !== '') {
    returnColor = props.textColor
  } else {
    returnColor = getColors() === 'white' ? 'black' : 'white'
  }
  return returnColor
}
const loading = ref(false)
function closeLoading() {
  setTimeout(() => (loading.value = false), 100)
}
function btnClicked() {
  if (props.showLoading) {
    loading.value = !loading.value
  } else {
    loading.value = false
  }
  // 저장일 경우 유효성 검사
  if (props.url) {
    closeLoading()
    emits('beforeAction')
  } else {
    closeLoading()
    callButtonAction()
  }
}
function callButtonAction() {
  // ajax action
  if (props.url) {
    if (props.mappingType === 'GET') {
      $http({
        url: props.url,
        method: props.mappingType,
        params: props.param
      }).then((_result: any) => {
        emits('btnCallback', _result)
      })
    } else {
      const data = props.param
      $http({
        url: props.url,
        method: props.mappingType,
        data
      }).then((_result: any) => {
        emits('btnCallback', _result)
      })
    }
  } else {
    emits('btnClicked')
  }
}
`
        }
      ],
    },
    { 
      headerContents: '공통 컴포넌트 마이그레이션', 
      haveContents: true,
      asisContents: [
        { 
          laguageType: 'html',
          description: 'mixin으로 컴포넌트에서 공통으로 사용하는 부분을 정의해 사용하고 있어요.(convertLabel)',
          contents: `<template>
  <div class="fix-height">
    <q-file 
      ref="custom-pick-file"
      class="customFilePick"
      :class="[beforeText ? 'before-field' : '']"
      stack-label
      filled
      color="orange-custom"
      :label="convertLabel"
      :disable="disabled||!editable"
      :dense="dense"
      :loading="loading"
      :clearable="!disabled&&editable"
      v-model="vValue"
      @input="input"
      @clear="clear">
      <template v-slot:prepend>
        <q-icon name="attach_file"></q-icon>
      </template>
      <template v-slot:label v-if="label">
        <div class="row items-center all-pointer-events">
          <b>
            <i class="pe-7s-note labelfrontIcon"></i>
            <font class="formLabelTitle">{{convertLabel}}</font>
          </b>
        </div>
      </template>

      <template v-slot:before>
        <template v-if="beforeText">
          <div class="custom-text-before q-pl-xs q-pr-xs bg-blue-7 text-white">
            {{beforeText}}
          </div>
        </template>
      </template>
    </q-file>
  </div>
</template>`
        },
        { 
          laguageType: 'javascript',
          description: '',
          contents: `import mixinCommon from './js/mixin-common'
export default {
  /* attributes: name, components, props, data */
  name: 'c-pick-file',
  mixins: [mixinCommon],
  props: {
    name: {
      type: String,
      default: 'pick-file',
    },
    // TODO : 부모의 v-model의 값을 받아오는 속성
    value: {
      type: File,
    },
    label: {
      type: String,
      default: '',
    },
    // 쓰기 권한 여부
    editable: {
      type: Boolean,
      default: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    dense: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    beforeText: {
      type: String,
      default: '',
    },
    accept: {
      type: String,
      default: 'image/*',
    },
  },
  data() {
    return {
      vValue: null,
      imageData: null,
    };
  },
  watch: {
    // todo : 부모의 v-model 변경을 감시
    value: {
      handler: function () {
      },
      deep: true,
    },
  },
  /* methods */
  methods: {
    input(item) {
      if (item) {
        let thisVue = this;
        const reader = new FileReader();
        reader.onload = e => {
          thisVue.imageData = e.target.result;
          thisVue.$emit('getImageData', thisVue.imageData);
        };
        reader.readAsDataURL(item);
      }

      this.$emit('input', item);
    },
    clear() {
      // 실제 파일 삭제처리
      // confirm창을 통해 삭제 처리하면 취소 했을 경우 value값을 통해 기존 값 유지
      this.vValue = null;
      this.$emit('input', null);
      this.$emit('getImageData', null);
    },
  },
};`
        }
      ],
      tobeContents: [
        { 
          laguageType: 'html',
          description: `mixin이 없어지고 composable로 대신할 수 있지만 app.config.globalProperties에 function을 넣어놔 template 영역에서 쉽게 다가갈 수 있게 처리했어요. ($language)<br/>템플릿 참조 ref에 맞게 속성을 추가하면 자동으로 들어가져요.<br/>v-model로 들어온 값은 props.value로 사용할 수 있지만 defineModel을 사용해서 props는 수정할 수 없는 규칙에서 벗어나 컴포넌트 내부에서도 수정이 가능해요. 그래서 emits('input', value)을 할 필요가 없어요`,
          contents: `<template>
  <div class="fix-height">
    <q-file
      stack-label
      ref="custom-pick-file"
      color="orange-custom"
      class="customFilePick"
      :class="[beforeText ? 'before-field' : '']"
      :label="$language(label)"
      :disable="props.disabled || !props.editable"
      :dense="props.dense"
      :loading="props.loading"
      :clearable="!props.disabled && props.editable"
      v-model="value"
      @update:model-value="input"
      @clear="clear"
    >
      <template v-slot:prepend>
        <q-icon name="attach_file" />
      </template>
      <template v-slot:label v-if="label">
        <div class="row items-center all-pointer-events">
          <b>
            <i class="pe-7s-note labelfrontIcon" />
            <span class="formLabelTitle">{{ $language(label) }}</span>
          </b>
        </div>
      </template>

      <template v-slot:before>
        <template v-if="beforeText">
          <div class="custom-text-before q-pl-xs q-pr-xs bg-blue-7 text-white">
            {{ beforeText }}
          </div>
        </template>
      </template>
    </q-file>
  </div>
</template>`
        },
        { 
          laguageType: 'javascript',
          description: '',
          contents: `/******************************
 * #Important 사용하지 않는 로직, 변수 등 선언 X
 *******************************/

/******************************
 * @import_선언
 * TODO 아래 순서에 맞추어 import (각 순서 마다 띄우기)
 *  * 1. Dependency
 *  * 2. Utils
 *  * 3. Types
 *  * 4. Stores
 *  * 5. Vue
 *  * 6. Etc (생길 시 얘기.)
 *******************************/
import { ref, PropType } from 'vue'

/******************************
 * @컴포넌트_옵션_선언
 * TODO 이름 정의 (파일 이름 그대로 지정)
 *******************************/
defineOptions({
  name: 'CPickFile'
})

/******************************
 * @Pinia_store_선언
 * TODO 반응형 유지를 위해 storeToRefs 사용 (function은 사용 X)
 *******************************/

/******************************
 * @Emit_선언
 *******************************/
const emits = defineEmits(['getImageData'])

/******************************
 * @Vue_관련_선언 (ex. vue-router)
 *******************************/

/******************************
 * @Interface_선언
 *******************************/
interface propType {
  name?: string
  label?: string
  editable?: boolean
  disabled?: boolean
  dense?: boolean
  loading?: boolean
  beforeText?: string
  accept?: string
}

/******************************
 * @inject_선언
 *******************************/

/******************************
 * @Props_선언
 * TODO type & default 작성
 *******************************/
const props = withDefaults(defineProps<propType>(), {
  name: '',
  label: '',
  editable: true,
  disabled: false,
  dense: true,
  loading: false,
  beforeText: '',
  accept: 'image/*'
})

/******************************
 * @VModel_선언
 *******************************/
const value = defineModel('value', {
  default: null,
  type: File as PropType<File | null | undefined>
})

/******************************
 * @Data_선언
 * TODO ref, reactive 사용, 불명확한 단어 사용 X (ex. data, date)
 *******************************/
const imageData = ref<string | ArrayBuffer | null>(null)

/******************************
 * @Computed_선언
 *******************************/

/******************************
 * @Watch_선언
 *******************************/

/******************************
 * @Life_cycle_선언
 *******************************/

/******************************
 * @Function_선언
 * TODO function 주석 작성 (asdffunctionannotation 사용)
 *  * arrow function 사용해도 무관
 *******************************/
/******************************
 * TODO (목적): 파일 입력된 경우 해당 파일 정보 read
 * @param (1): 파일 정보
 *******************************/
function input(item: any) {
  if (item) {
    const reader = new FileReader()
    reader.onload = (e: ProgressEvent<FileReader>) => {
      imageData.value = e.target!.result
      emits('getImageData', imageData.value)
    }
    reader.readAsDataURL(item)
  }
  // value.value = item
}
/******************************
 * TODO (목적): 파일 삭제 및 부모에게 image 지워졌음을 emit
 *******************************/
function clear() {
  // 실제 파일 삭제처리
  // confirm창을 통해 삭제 처리하면 취소 했을 경우 value값을 통해 기존 값 유지
  value.value = null
  emits('getImageData', null)
}

/******************************
 * @Provide_선언
 *  ! types 폴더에 type 명시
 *******************************/`
        }
      ],
    },
    { 
      headerContents: 'TypeScript 적용', 
      haveContents: true,
      isAggregated: true,
      aggregateContents: [
        { 
          laguageType: 'javascript',
          description: `defineProps를 통해 TypeScript의 interface나 type을 활용해 Props의 타입을 명확하게 정의할 수 있습니다.
특히, withDefaults를 사용해 선택적(optional) prop의 기본값을 설정하는 부분은 코드를 더 안전하고 가독성 높게 만듭니다.`,
          contents: `interface ButtonProps {
  label: string;
  isSubmit?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
const props = withDefaults(defineProps<ButtonProps>(), {
  label: '',
  isSubmit: false,
  size: 'md',
});`
        },
        { 
          laguageType: 'javascript',
          description: `Vue 3의 반응형 시스템은 ref와 reactive를 사용하는데 TypeScript는 이 두 함수와 함께 사용될 때 강력한 타입 추론 기능을 제공해요.
특히 ref는 제네릭(ref<number>)을 사용해 명시적으로 타입을 지정할 수 있어, 데이터의 타입 불일치로 인한 오류를 개발할때 방지할 수 있어 예상치 못한 버그들이 줄어들었어요.`,
          contents: `// reactive를 사용한 객체 타입 정의
interface User {
  id: number;
  name: string;
  email: string;
}

const user = reactive<User>({
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
});

// computed 속성의 타입 추론
const isAdult = computed(() => user.age >= 20); // user 객체에 age 속성이 없으면 바로 오류가 발생`
        },
        { 
          laguageType: 'javascript',
          description: `컴포저블 함수의 인자나 반환 값에 타입을 정의하면, 로직의 재사용성을 높이면서도 타입 안전성을 동시에 확보할 수 있어요.`,
          contents: `import { ref, watchEffect } from 'vue';
import type { Ref } from 'vue';

export function useFetch<T>(url: Ref<string>) {
  const data = ref<T | null>(null);
  const error = ref<any>(null);

  watchEffect(async () => {
    try {
      const response = await fetch(url.value);
      data.value = (await response.json()) as T;
    } catch (e: any) {
      error.value = e;
    }
  });

  return { data, error };
}`
        },
      ],
    },
    { 
      headerContents: '전역변수 설정', 
      haveContents: true,
      isAggregated: true,
      aggregateContents: [
        { 
          laguageType: 'javascript',
          description: 'vue2와 달리 vue3에서는 두 가지 방법을 제공하지만 이전처럼 효용성이 좋지 않음. 전역적으로 사용하는 부분에 대해서는 globalProperties 이용하며, 특정 컴포넌트에서 사용하는 경우에는 provider/inject를 사용했습니다.',
          contents: `// Vue2 template, script 모두에서 접근 가능
Vue.prototype.$moment = moment;

// Vue3 
// template에서 접근가능하며 <script setup>에서는 getCurrentInstance()를 통해 접근가능
app.config.globalProperties.$language = getTranLanguage
const instance = getCurrentInstance(); 
const $language = instance.appContext.config.globalProperties.$language;
// template에서 사용할 수 없으며 <script> 블록 내에서만 사용가능
app.provide('$language', getTranLanguage)
const $language = inject('$language') as GetTranLanguageFunction
`
        }
      ],
    },
  ]
})

const onboarding = ref({
  title: '📖 개발자 온보딩 과정',
  items: [
    '시스템 전반적인 기술 셋팅 완료 (pinia, vue-router, common js, common typescript 등)',
    '샘플 컴포넌트, 샘플 페이지 구성',
    '샘플을 바탕으로 공통 컴포넌트, 일부 페이지 각 개발자들에게 분담하여 개발 진행',
    '주마다 궁금한 사항 및 추가/변경 사항 공유',
    '전체 페이지 마이그레이션 진행',
  ]
})

const resultCompare = ref({
  title: '🛠️ 마이그레이션 세부 이슈 및 해결',
  items: [
    { 
      headerContents: '동적 Import', 
      haveContents: true,
      isAggregated: true,
      aggregateContents: [
        { 
          laguageType: 'javascript',
          description: '이전에는 단순히 import만 하던것을 Vue3에서는 성능 향상을 위해 고급 유틸리티 함수를 제공해 주고 있어요. 상황에 맞게 사용하면 비동기적으로 import하는 화면에 대해 성능 최적화 및 메모리 관리에 좋습니다.',
          contents: `// 컴포넌트를 필요할 때만 비동기적으로 불러오게 함.
component: defineAsyncComponent(() => import('@views/sai/patrol/patrolInfo.vue'))

// 동적으로 불러온 컴포넌트 인스턴스를 한 번 할당되면 그 내부의 상태가 변하는 일이 드물고, 오히려 Vue의 반응성 시스템이 불필요하게 추적하는 것을 막아 성능을 높이는 경우 사용
shallowRef(
  defineAsyncComponent(() => import('./safeWorkPermitDetail.vue'))
)

// 반응형 객체(ref, reactive) 내부에 컴포넌트를 할당해야 하는 경우 사용. 반응성을 부여하는 과정을 완전히 건너뛰고 싶은 경우 
markRaw(defineAsyncComponent(() => import('@views/sop/pwc/preWorkCheckTargetResult.vue')))
`
        }
      ],
    },
    { 
      headerContents: 'Dynamic menu 설정', 
      haveContents: true,
      isAggregated: true,
      aggregateContents: [
        { 
          laguageType: 'javascript',
          description: `동적 import 경로의 제약으로 인해 단순하게 import에 변수값을 넣으면 코드 스플리팅에 도움이 되지 않아 번들러는 에러를 발생시켜요.
<br/>이 때문에 명시적으로 경로를 조각내어("/"를 split해서) 제공하여 번들러가 경로를 예측할 수 있게 해야해요.`,
          contents: `const directoryPaths = split(frontEndUrl, '/')
/** 제일 처음 빈 공간 제거 */
directoryPaths.shift()
let componentData = undefined
if (directoryPaths && directoryPaths.length > 0) {
  switch (directoryPaths.length) {
    case 1:
      componentData = shallowRef(() => import(\`../views/\${directoryPaths[0]}.vue\`))
      break
    case 2:
      componentData = shallowRef(
        () => import(\`../views/\${directoryPaths[0]}/\${directoryPaths[1]}.vue\`)
      )
      break
    case 3:
      componentData = shallowRef(
        () =>
          import(
            \`../views/\${directoryPaths[0]}/\${directoryPaths[1]}/\${directoryPaths[2]}.vue\`
          )
      )
      break
    case 4:
      componentData = shallowRef(
        () =>
          import(
            \`../views/\${directoryPaths[0]}/\${directoryPaths[1]}/\${directoryPaths[2]}/\${directoryPaths[3]}.vue\`
          )
      )
      break
    case 5:
      componentData = shallowRef(
        defineAsyncComponent(
          () =>
            import(
              \`../views/\${directoryPaths[0]}/\${directoryPaths[1]}/\${directoryPaths[2]}/\${directoryPaths[3]}/\${directoryPaths[4]}.vue\`
            )
        )
      )
      break
    default:
      break
  }
}`
        }
      ],
    },
    { 
      headerContents: 'Boilerplate code 간소화', 
      haveContents: true,
      isAggregated: true,
      aggregateContents: [
        { 
          laguageType: 'javascript',
          description: `auto-import를 통해 vue, vue-router 외에도 quasar, loadsh, common type등을 넣어 반복적으로 해야하는 import를 줄였습니다.
<br/>vue2에서는 틀이 마련되어 있어 초보자가 따라가기 쉬운 장점을 가지고 있는데 vue2에 익숙한 개발자들이 vue3로 넘어와 마이그레이션 뿐만 아니라 개발함에 있어 초반에 지장이 있을것으로 판단했습니다.
<br/>따라서 주석으로 그 틀을 세워 개발을 하게 했으나 이는 composition api에서의 장점 중 하나인 로직의 응집성을 해치는 작업으로 보일 수도 있다 생각했습니다.
<br/>하지만 어느 개발자가 개발을 해도 정해진 위치에 약속된 변수명, 함수명을 사용하며 개발한다면 유지보수를 향상을 기대할 수 있다고 판단하여 이와 같이 작업을 진행했습니다.
<br/>하지만 로직의 응집성을 가져가기 위해 컴포넌트 기반 아키텍처를 도입해 기능 단위로 컴포넌트를 구성하여 해당 vue파일이 가지는 로직의 응집성을 높이게 작업을 진행했습니다.`,
          contents: `AutoImport({
  include: [/\.[tj]sx?$/, /\.vue\??/],
  imports: [
    // presets
    'vue',
    'vue-router',
    'pinia',
    {
      vue: ['createVNode', 'render'],
      'vue-router': ['useRouter', 'useRoute'],
      quasar: ['uid', 'useQuasar'],
      'lodash-es': [
        // default imports
        ['*', '_'] // import { * as _ } from 'lodash-es',
      ],
      'string-format': [['default', '$format']]
    },
    // type import
    {
      from: 'vue',
      imports: [
        'App',
        'VNode',
        'ComponentPublicInstance',
        'ComponentPublicInstanceCostom',
        'ComponentInternalInstance'
      ],
      type: true
    },
    {
      from: 'vue-router',
      imports: [
        'RouteRecordRaw',
        'RouteLocationRaw',
        'LocationQuery',
        'RouteParams',
        'RouteLocationNormalizedLoaded',
        'RouteRecordName',
        'NavigationGuard'
      ],
      type: true
    },
    {
      from: 'src/types',
      imports: [
        'attachSettingType',
        'objectStringNumber',
        'objectString',
        'arrayObject',
        'arrayString',
        'arrayNumber',
        'objectLodash',
        'stringNull',
        'numberNull'
      ],
      type: true
    }
  ],
  dirs: ['./src/stores/**', './src/types/**', './src/config/utils/**'],
  dts: './types/auto-imports.d.ts',
  vueTemplate: false,
  viteOptimizeDeps: true,
  injectAtEnd: true,
  eslintrc: {
    enabled: true
  }
})`
        },
        { 
          laguageType: 'JSON',
          description: '반복적으로 script에 들어가는 코드를 vscode의 snippets로 등록해 개발 경험(DX)를 향상시켰습니다.',
          contents: `{
	"template": {
		"prefix": "deoh-template",
		"body": [
			"/******************************",
			" * #Important 사용하지 않는 로직, 변수 등 선언 X",
			" *******************************/",
			"",
			"/******************************",
			" * @import_선언",
			" * TODO 아래 순서에 맞추어 import (각 순서 마다 띄우기)",
			" *  * 1. Dependency",
			" *  * 2. Utils",
			" *  * 3. Types",
			" *  * 4. Stores",
			" *  * 5. Vue",
			" *  * 6. Etc (생길 시 얘기.)",
			" *******************************/",
			"",
			"/******************************",
			" * @컴포넌트_옵션_선언",
			" * TODO 이름 정의 (파일 이름 그대로 지정)",
			" *******************************/",
			"defineOptions({",
			"  name: ''",
			"})",
			"",
			"/******************************",
			" * @Pinia_store_선언",
			" * TODO 반응형 유지를 위해 storeToRefs 사용 (function은 사용 X)",
			" *******************************/",
			"",
			"/******************************",
			" * @Emit_선언",
			" *******************************/",
			"",
			"/******************************",
			" * @Vue_관련_선언 (ex. vue-router)",
			" *******************************/",
			"const route = useRoute()",
			"",
			"/******************************",
			" * @Interface_선언",
			" *******************************/",
			"",
			"/******************************",
			" * @inject_선언",
			" *******************************/",
			"",
			"/******************************",
			" * @Props_선언",
			" * TODO type & default 작성",
			" *******************************/",
			"",
			"/******************************",
			" * @VModel_선언",
			" *******************************/",
			"",
			"/******************************",
			" * @Data_선언",
			" * TODO ref, reactive 사용, 불명확한 단어 사용 X (ex. data, date)",
			" *******************************/",
			"const editable = ref(true)",
			"const listUrl = ref('')",
			"",
			"/******************************",
			" * @Computed_선언",
			" *******************************/",
			"",
			"/******************************",
			" * @Watch_선언",
			" *******************************/",
			"",
			"/******************************",
			" * @Life_cycle_선언",
			" *******************************/",
			"onMounted(() => {",
			"  init()",
			"})",
			"",
			"/******************************",
			" * @Function_선언",
			" * TODO function 주석 작성",
			" *******************************/",
			"/******************************",
			" * TODO (목적): 초기셋팅",
			" *******************************/",
			"function init() {",
			"  // role setting",
			"  editable.value = Boolean(route.meta.editable)",
			"  // url setting",
			"  // code setting",
			"  // list setting",
			"}",
			"",
			"/******************************",
			" * @Provide_선언",
			" *  ! types 폴더에 type 명시",
			" *******************************/"
		],
		"description": "템플릿 구성"
	},
	"function": {
		"prefix": "deoh-function",
		"body": [
			"/******************************",
			" * TODO (목적): ",
			" * @param (1): ",
			" * @return (반환): ",
			" *******************************/"
		],
		"description": "함수 주석"
	}
}`
        }
      ],
    },
    { 
      headerContents: 'ref 명칭 하나로 여러 개 주입받는 방법', 
      haveContents: true,
      isAggregated: true,
      aggregateContents: [
        { 
          laguageType: 'javascript',
          description: `Vue3에서는 템플릿 참조 ref에 선언한 값을 동일한 명칭의 속성으로 잡아두면 Element 값을 읽을 수가 있어요.
<br/>다만 Vue2에서와 달리 템플릿 참조ref가 여러 개로 할당되어졌을때 배열로 속성을 받을 수가 없어요.
이를 해결하기 위해 직접 값을 할당해주면 내가 원하는 순서에 값을 넣을 수 있어요.`,
          contents: `:ref="
  (el: any) => {
    excelUploadTable[Number(tab.name)] = el
  }
"`
        }
      ],
    },
    { 
      headerContents: 'fresh하게 관리하기 위해 서버 상태관리 도입', 
      haveContents: true,
      isAggregated: true,
      aggregateContents: [
        { 
          laguageType: 'javascript',
          description: `로그인 후에 로그인자의 정보나 다국어 정보와 같이 서버에서 내려주는 정보를 가지고 있어야 하는 케이스가 있습니다.
<br/>그런 데이터들을 vue-query를 통해 들고와 특정 케이스일때 알아서 들고 오며 fresh한 상태를 유지하고 캐싱 되게 하여 번거롭게 서버 데이터를 관리하지 않아도 되게 해줍니다.
<br/>이렇게 가지고 온 데이터는 케이스에 맞게 pinia에 저장해 사용하게끔 처리했어요.`,
          contents: `interface langData {
  lang: string | undefined
}

interface langJson {
  conversionLanguage: string
  languageKey: string
}

const fetchLangs = async (): Promise<langJson[]> => {
  const response = await axios.get<langJson[]>(getLanguageJsonApi(), {
    headers: {
      'Cache-Control': 'no-cache',
      'X-Authorization': getAccessToken()
    },
    baseURL: import.meta.env.VITE_API_URL
  })
  return response.data
}

export const useLangTranStore = defineStore('langTran', () => {
  const langs = ref<langJson[]>([])

  /** vue-query 정보 */
  const langVueQuery = ref({
    isStale: true,
    isFetching: true
  })
  const langQuery = useQuery({
    queryKey: ['langs'],
    queryFn: fetchLangs,
    staleTime: 3 * 60 * 60 * 1000, // 3시간 동안 fresh 상태 유지
    refetchOnWindowFocus: true, // 사용자가 다시 창을 보면 자동 새로고침
    refetchOnReconnect: true, // 인터넷 연결이 다시 되면 자동 새로고침
    enabled: !!getAccessToken()
  })

  watchEffect(() => {
    if (langQuery.isSuccess.value) {
      langVueQuery.value.isStale = false // fresh한 상태로 변경

      const lang = Cookies.get('language') ? Cookies.get('language') : 'kr'
      let _langs: any = []
      switch (lang) {
        case 'kr':
          _langs = krLanguageMap
          break
        case 'en':
          _langs = enLanguageMap
          break
        case 'ja':
          _langs = jaLanguageMap
          break
        case 'zh_cn':
          _langs = zhcnLanguageMap
          break
        case 'zh_tw':
          _langs = zhtwLanguageMap
          break
        default:
          _langs = krLanguageMap
      }
      if (langQuery.data.value && langQuery.data.value.length > 0) {
        _langs = concat(_langs, langQuery.data.value)
      }
      langs.value = _langs
    }
  })
  watchEffect(() => {
    if (!langQuery.isFetching.value) {
      langVueQuery.value.isFetching = false
    }
  })

  langVueQuery.value.isFetching = langQuery.isFetching.value
  langVueQuery.value.isStale = langQuery.isStale.value
  const refetchLang = () => langQuery.refetch()

  function GetNonAuthLangInfo(data: langData) {
    return new Promise((resolve, reject) => {
      const lang = data.lang ? data.lang : 'kr'
      let langs: any = []
      switch (lang) {
        case 'kr':
          langs = krLanguageMap
          break
        case 'en':
          langs = enLanguageMap
          break
        case 'ja':
          langs = jaLanguageMap
          break
        case 'zh_cn':
          langs = zhcnLanguageMap
          break
        case 'zh_tw':
          langs = zhtwLanguageMap
          break
        default:
          langs = krLanguageMap
      }

      langs.value = langs

      if (langs) {
        resolve(true)
      } else {
        reject()
      }
    })
  }

  return {
    langs,
    GetNonAuthLangInfo,
    refetchLang
  }
})`
        }
      ],
    },
    { 
      headerContents: 'v-memo를 통해 불필요하게 랜더링 되는 현상 제거', 
      haveContents: true,
      isAggregated: true,
      aggregateContents: [
        { 
          laguageType: 'html',
          description: `vue2에서는 Object.defineProperty 기반으로 반응형 시스템이 구축되어졌습니다. 그로인해 배열 자체에 대한 변경만 추적하다 보니 인덱스에 있는 객체 속성이 바뀌어도 변경으로 인식하지 않았습니다.
<br/>vue3에서는 Proxy 기반으로 반응형 시스템이 설계 되었는데 Proxy는 객체 내부의 변화까지 깊이 추적을 했어요.<br/>그러다 보니 v-for에서 렌더링 된 배열 내부의 특정 객체 속성이 바뀌면 이를 감지하고 리렌더링이 이루어집니다.
<br/>이때 v-for에 연결된 배열이 반응형이며 부모 컴포넌트에서 내려준 props로 의존하고 있었다면 부모의 상태가 변경될 때마다 전체가 리렌더링 되는 상황이 발생할 수 있습니다.
<br/>이를 해결하기 위해 v-memo를 사용해 v-memo에 지정된 배열이 변경되지 않는 한 리렌더링 되지 않게 했습니다.`,
          contents: `<template v-memo="(col, colIndex) in bodyProps.cols">
  <q-td
    v-if="isCreate(bodyProps.row, colIndex, bodyProps.rowIndex)"
    :ref="'custom-td-' + bodyProps.rowIndex + '-' + colIndex"
    :auto-width="false"
    :key="col.name"
    :props="bodyProps"
    :class="[
      col.ellipsis == true ? 'tableinnerBtn-ellipsis' : ''
    ]"
    :style="tdStyle(col)"
    :rowspan="getRowspan(colIndex, bodyProps.rowIndex)"
  />
</template>`
            
        }
      ],
    },
  ]
})

const conclusion = ref({
  title: '🏁 이전 차이 비교 (비교 가능한 부문만)',
  items: [
    { 
      headerContents: 'BUILD 시간 비교', 
      haveContents: true,
      asisContents: [
        { 
          laguageType: 'image',
          description: '4분 정도 걸린걸 확인할 수 있습니다.',
          contents: new URL('@/assets/images/compare/BUILDTIME_CLI.png', import.meta.url).href
        }
      ],
      tobeContents: [
        { 
          laguageType: 'image',
          description: '1분 28초로 이전보다 2.7배 정도 빨라진걸 알 수 있습니다.',
          contents: new URL('@/assets/images/compare/BUILDTIME_VITE.png', import.meta.url).href
        }
      ],
    },
    { 
      headerContents: '런타임 시간 비교', 
      haveContents: true,
      asisContents: [
        { 
          laguageType: 'image',
          description: '3분 16초 정도 걸린걸 확인할 수 있습니다.',
          contents: new URL('@/assets/images/compare/RUNTIME_CLI.png', import.meta.url).href
        }
      ],
      tobeContents: [
        { 
          laguageType: 'image',
          description: '22초로 이전보다 8.9배 정도 빨라진걸 확인할 수 있습니다.',
          contents: new URL('@/assets/images/compare/RUNTIME_VITE.png', import.meta.url).href
        }
      ],
    },
    { 
      headerContents: '런타임 시간 비교', 
      haveContents: true,
      asisContents: [
        { 
          laguageType: 'image',
          description: '용량 1.06GB에 파일 폴더 개수가 93,207, 7,606개 인걸 확인 할 수 있습니다.',
          contents: new URL('@/assets/images/compare/CAPACITY_NPM.png', import.meta.url).href
        }
      ],
      tobeContents: [
        { 
          laguageType: 'image',
          description: '용량은 1.46배 정도 낮아졌으며 파일 개수는 21.49배, 폴더 개수는 17.86배 낮아졌습니다.',
          contents: new URL('@/assets/images/compare/CAPACITY_YARN.png', import.meta.url).href
        }
      ],
    },
  ]
})


/******************************
 * @Computed_선언
 *******************************/

/******************************
 * @Watch_선언
 *******************************/

/******************************
 * @Life_cycle_선언
 *******************************/

/******************************
 * @Function_선언
 * TODO function 주석 작성 (asdffunctionannotation 사용)
 *  * arrow function 사용해도 무관
 *******************************/

/******************************
 * @Provide_선언
 *  ! types 폴더에 type 명시
 *******************************/
</script>