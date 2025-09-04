import { type ConfigEnv, type UserConfigExport, loadEnv } from 'vite'
import path from 'path'
import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import svgLoader from 'vite-svg-loader'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import AutoImport from 'unplugin-auto-import/vite'


/** https://cn.vitejs.dev/config */
export default ({ mode }: ConfigEnv): UserConfigExport => {
  const viteEnv = loadEnv(mode, process.cwd()) as ImportMetaEnv
  const { VITE_PUBLIC_PATH, VITE_API_URL } = viteEnv
  return {
    base: VITE_PUBLIC_PATH,
    resolve: {
      alias: [
        { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
        { find: '@views', replacement: fileURLToPath(new URL('./src/views', import.meta.url)) },
        { find: '@layouts', replacement: fileURLToPath(new URL('./src/layouts', import.meta.url)) },
        {
          find: '@utils',
          replacement: fileURLToPath(new URL('./src/config/utils', import.meta.url))
        },
        {
          find: '@images',
          replacement: fileURLToPath(new URL('./src/assets/images', import.meta.url))
        },
        { find: '@stores', replacement: fileURLToPath(new URL('./src/stores', import.meta.url)) },
        { find: '@assets', replacement: fileURLToPath(new URL('./src/assets', import.meta.url)) },
        {
          find: '@components',
          replacement: fileURLToPath(new URL('./src/components', import.meta.url))
        }
      ]
    },
    server: {
      /** IP로 프로젝트에 액세스하기 위해 네트워크 형식을 사용. */
      host: true, // host: "0.0.0.0"
      /** 포트 */
      port: 50000,
      /** 브라우저를 자동으로 열지 여부 */
      open: true,
      /** 도메인 간 설정이 허용 */
      cors: true,
      /** 포트가 점유된 상태에서 바로 나갈지 여부 */
      strictPort: false,
      /** 일반적으로 사용되는 파일을 예열(warmup)하여 초기 페이지 로딩 속도 향상 */
      warmup: {
        clientFiles: ['./src/layouts/**/*.vue']
      }
    },
    // publicDir: path.resolve(__dirname, 'src/assets'),
    build: {
      /** 단일 청크 파일의 크기가 2048KB를 초과하면 경고 */
      chunkSizeWarningLimit: 2048,
      /** gzip 압축 크기 보고 비활성화 */
      reportCompressedSize: false,
      /** 패키징 후 정적 리소스 디렉터리 */
      assetsDir: 'dist',
      rollupOptions: {
        output: {
          /***
           * 청킹 전략
           * 1. 패키지 이름이 없으면 패키징 중에 오류가 보고됨.
           * 2. 청크 분할 전략을 사용자 정의하고 싶지 않은 경우 이 구성을 직접 제거.
           * * 청크파일이 도움이 되지만, 너무 많을 시에는 로딩속도 문제가 발생함에 따라 자주 사용하는 패키지를 찢어서 관리
           */
          manualChunks: {
            vue: ['vue', 'vue-router', 'pinia']
          }
        }
      }
    },
    /** Vite esbuild시 처리 작업 */
    esbuild:
      mode === 'production' // 운영환경인 경우만 작업
        ? {
            /** 패키징 시 console.log 제거 */
            pure: ['console.log'],
            /** 패키징 시 디버거 제거 */
            drop: ['debugger'],
            /** 패키징 시 모든 주석 제거 */
            legalComments: 'none'
          }
        : undefined,
    /** Vite 플러그인 */
    plugins: [
      vue({
        template: { transformAssetUrls }
      }),
      /** SVG 정적 이미지를 Vue 구성 요소로 변환 */
      svgLoader({ defaultImport: 'url' }),
      /** SVG */
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), 'src/assets/images/icon')],
        symbolId: 'icon-[dir]-[name]'
      }),
      quasar({ }),
      /**
       * # build
       *  - rollup을 통해 사용하지 않는 모듈 제거(tree shaking)
       * # dev
       *  - esbuild를 통해 ESM기반으로 필요한 모듈만 on-demand로 브라우저에 전달
       *
       * 프로젝트가 클 시에 import 가능한 부분을 파일 시스템에서 스캔해야함으로 부하가 생길 수는 있지만
       * 그렇게 큰 부하가 아닌 무시할 수 있을만큼 작음
       * 또한 이는 auto-import의 문제라기보다는 플러그인이 처리해야 하는 스코프가 너무 커서 발생하는것임
       */
      AutoImport({
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
      })
    ],
    css: {
      preprocessorOptions: {
        sass: {
          api: 'modern',
          silenceDeprecations: ['legacy-js-api'],
          quietDeps: true
        }
      }
    }
  }
}
