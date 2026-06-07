<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const showButton = ref(false)

const handleScroll = () => {
  showButton.value = window.scrollY > 300
}

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <!-- 返回顶部按钮 -->
  <button
    v-show="showButton"
    class="scroll-top-btn"
    @click="scrollToTop"
    aria-label="返回顶部"
  >
    ↑
  </button>
</template>

<style scoped>
.scroll-top-btn {
  position: fixed;
  bottom: 30px;
  right: 30px;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--surface);
  border: 1px solid var(--border);
  color: var(--accent);
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scroll-top-btn:hover {
  border-color: var(--accent);
  transform: translateY(-3px);
  box-shadow: 0 8px 20px rgba(79, 255, 203, 0.2);
}
</style>
