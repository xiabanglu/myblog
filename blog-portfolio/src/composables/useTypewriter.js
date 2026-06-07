import { ref, onMounted, onUnmounted } from 'vue'

export function useTypewriter(texts, options = {}) {
  const {
    typingSpeed = 100,
    deletingSpeed = 50,
    pauseDuration = 2000
  } = options

  const displayText = ref('')
  const currentIndex = ref(0)
  const isTyping = ref(true)
  const isDeleting = ref(false)

  let timeoutId = null
  let currentTextIndex = 0
  let currentCharIndex = 0

  const type = () => {
    const currentText = texts[currentTextIndex]

    if (isDeleting.value) {
      // 删除模式
      displayText.value = currentText.substring(0, currentCharIndex - 1)
      currentCharIndex--

      if (currentCharIndex === 0) {
        isDeleting.value = false
        currentTextIndex = (currentTextIndex + 1) % texts.length
        timeoutId = setTimeout(type, typingSpeed)
      } else {
        timeoutId = setTimeout(type, deletingSpeed)
      }
    } else {
      // 输入模式
      displayText.value = currentText.substring(0, currentCharIndex + 1)
      currentCharIndex++

      if (currentCharIndex === currentText.length) {
        // 完成输入，暂停后删除
        isDeleting.value = true
        timeoutId = setTimeout(type, pauseDuration)
      } else {
        timeoutId = setTimeout(type, typingSpeed)
      }
    }

    currentIndex.value = currentTextIndex
    isTyping.value = !isDeleting.value
  }

  const start = () => {
    if (timeoutId) clearTimeout(timeoutId)
    type()
  }

  const stop = () => {
    if (timeoutId) {
      clearTimeout(timeoutId)
      timeoutId = null
    }
  }

  const reset = () => {
    stop()
    displayText.value = ''
    currentCharIndex = 0
    currentTextIndex = 0
    isDeleting.value = false
  }

  onMounted(() => {
    if (texts.length > 0) {
      start()
    }
  })

  onUnmounted(() => {
    stop()
  })

  return {
    displayText,
    currentIndex,
    isTyping,
    isDeleting,
    start,
    stop,
    reset
  }
}
