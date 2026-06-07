<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const glow = ref(null)

// 检测是否为触摸设备
const isTouchDevice = () => {
  return window.matchMedia('(pointer: coarse)').matches
}

const handleMouseMove = (e) => {
  if (glow.value) {
    glow.value.style.left = e.clientX + 'px'
    glow.value.style.top = e.clientY + 'px'
  }
}

onMounted(() => {
  // 仅在非触摸设备上启用
  if (!isTouchDevice()) {
    document.addEventListener('mousemove', handleMouseMove)
  }
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
})
</script>

<template>
  <!-- 光标光晕效果（仅桌面设备显示） -->
  <div ref="glow" class="cursor-glow" v-if="!isTouchDevice()"></div>
</template>
