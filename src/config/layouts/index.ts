import { type App } from 'vue'

import Full from '@/layouts/fullLayout.vue'

export function loadLayouts(app: App) {
  /** contents만 있는 layout */
  app.component('full', Full)
}
