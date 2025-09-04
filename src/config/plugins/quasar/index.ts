import { type App } from 'vue'
import { Quasar, AppFullscreen, Loading, Notify } from 'quasar'

export function loadQuasar(app: App) {
  /** quasar */
  app.use(Quasar, {
    config: {
      ripple: true
      // loading: true
    },
    plugins: {
      AppFullscreen,
      Loading,
      Notify
    }
  })
}
