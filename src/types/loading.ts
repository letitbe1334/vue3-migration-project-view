export type LoadingShowFunction = () => void
export type LoadingHideFunction = () => void
export type LoadingAllHideFunction = () => void

export interface loading {
  loadingShow: LoadingShowFunction
  loadingHide: LoadingHideFunction
  loadingAllHide: LoadingAllHideFunction
}
