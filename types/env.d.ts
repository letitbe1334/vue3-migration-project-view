/** vite 환경 변수의 유형을 선언합니다(선언하지 않은 경우 기본값은 any임). */
interface ImportMetaEnv {
  readonly VITE_PUBLIC_PATH: string
  readonly VITE_UPLOAD_TYPE: string
  readonly VITE_API_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
