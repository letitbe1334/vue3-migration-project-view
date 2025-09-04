<template>
  <component :is="LayoutTarget">
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <keep-alive :exclude="['main', 'main-router']" :max="100">
          <component :is="Component" :key="`parent_component_${route.fullPath}`" />
        </keep-alive>
      </transition>
    </router-view>
  </component>
</template>

<script setup lang="ts">
import { asyncRouterMap } from '@/router'

defineOptions({
  name: 'App'
})

const route = useRoute()

const modeEnv = ref('')
switch (import.meta.env.MODE) {
  case 'production':
    modeEnv.value = ''
    break
  case 'development':
    modeEnv.value = 'AWS 개발'
    break
  default:
    modeEnv.value = 'Local'
}
const fullLayoutDetaultCheck = computed(() => {
  const fullLayout = _.map(
    _.filter(asyncRouterMap, (item) => {
      return (item.meta?.layout || 'full') === 'full'
    }),
    'name'
  )
  const currentRouteName = route.name
  return _.indexOf(fullLayout, String(currentRouteName) + 'P') > -1
})
const LayoutTarget = computed(() => {
  return (
    route.meta?.layout || (fullLayoutDetaultCheck.value ? 'full' : route.name ? 'default' : 'none')
  )
})
</script>
