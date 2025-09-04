import { type App } from 'vue'
import { loadQuasar } from './quasar'

export function loadPlugins(app: App) {
  loadQuasar(app)
}
