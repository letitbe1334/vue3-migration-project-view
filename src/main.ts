import { createApp } from 'vue'

import App from '@/App.vue'

/** vue router */
import router from '@/router'
import '@/router/navigationGard'

/** 상태 관리 */
import { createPinia } from 'pinia'
import { VueQueryPlugin } from '@tanstack/vue-query'

/** common component load */
import { loadCommonComponents } from '@/components'

/** plugin load */
import { loadPlugins } from '@/config/plugins'

/** Layout */
import { loadLayouts } from '@/config/layouts'

/** CSS */
import '@assets/style/main.scss'

/** Vue3 App create */
const app = createApp(App)

/** pinia use */
app.use(createPinia())

/** vue-query use */
app.use(VueQueryPlugin)

/** vue-router use */
app.use(router)

/** common components */
loadCommonComponents(app)

/** plugins */
loadPlugins(app)

/** layouts */
loadLayouts(app)

app.mount('#app')
