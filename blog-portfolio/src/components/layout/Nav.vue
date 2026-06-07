<script setup>
import { useTheme } from '../../composables/useTheme.js'

const { isDark, toggleTheme } = useTheme()

// 导航链接配置
const navLinks = [
  { name: '首页', href: '#hero' },
  { name: '关于', href: '#about' },
  { name: '项目', href: '#projects' },
  { name: '文章', href: '#posts' },
  { name: '技能', href: '#skills' },
  { name: '联系', href: '#contact' }
]
</script>

<template>
  <nav>
    <a href="#" class="nav-logo">
      <span>.</span>Blog
    </a>
    <ul class="nav-links">
      <li v-for="link in navLinks" :key="link.href">
        <a :href="link.href">{{ link.name }}</a>
      </li>
      <li>
        <button class="theme-toggle" @click="toggleTheme" :title="isDark ? '切换到亮色模式' : '切换到暗黑模式'">
          <span v-if="isDark" class="theme-icon">☀️</span>
          <span v-else class="theme-icon">🌙</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.theme-toggle {
  background: transparent;
  border: 1px solid var(--border);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.25s;
  padding: 0;
}

.theme-toggle:hover {
  border-color: var(--accent);
  transform: scale(1.1);
}

.theme-icon {
  font-size: 1rem;
}

@media (max-width: 600px) {
  .theme-toggle {
    width: 32px;
    height: 32px;
  }
  
  .theme-icon {
    font-size: 0.9rem;
  }
}
</style>
