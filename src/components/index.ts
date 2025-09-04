import { type App } from 'vue'
import * as CommonConponents from './exportComponent'

export function loadCommonComponents(app: App) {
  /** ASDF Components load */
  for (const [key, component] of Object.entries(CommonConponents)) {
    app.component(key, component)
  }
}
