import { ref, watch, onMounted } from 'vue'

// 主题状态
const isDark = ref(true)

export function useTheme() {
  // 初始化主题
  const initTheme = () => {
    const saved = localStorage.getItem('theme')
    if (saved) {
      isDark.value = saved === 'dark'
    } else {
      // 检测系统偏好
      isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
    }
    applyTheme()
  }

  // 应用主题到 DOM
  const applyTheme = () => {
    document.documentElement.classList.toggle('light', !isDark.value)
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  }

  // 切换主题
  const toggleTheme = () => {
    isDark.value = !isDark.value
    applyTheme()
  }

  // 设置指定主题
  const setTheme = (dark) => {
    isDark.value = dark
    applyTheme()
  }

  onMounted(initTheme)

  return {
    isDark,
    toggleTheme,
    setTheme
  }
}
