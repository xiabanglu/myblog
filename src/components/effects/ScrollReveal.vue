<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // 滚动渐显动画
  const reveals = document.querySelectorAll('.reveal')
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  }, { threshold: 0.12 })
  
  reveals.forEach(el => observer.observe(el))
})
</script>

<template>
  <!-- 滚动渐显 - 无视觉元素，仅初始化逻辑 -->
</template>
