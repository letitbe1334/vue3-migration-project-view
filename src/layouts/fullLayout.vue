<template>
  <div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" :key="route.name" />
      </keep-alive>
    </router-view>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'fullLayout'
})

const route = useRoute()
</script>
