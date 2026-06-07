<script setup>
import { useTypewriter } from '../../composables/useTypewriter.js'

// Hero 统计数据
const stats = [
  { num: '5+', label: '独立项目' },
  { num: '10+', label: '技术栈' },
  { num: '2', label: '年学习' }
]

// 打字机效果文字
const typewriterTexts = [
  'Frontend Developer',
  'Vue.js 开发者',
  '热爱技术创作',
  '记录学习成长'
]

const { displayText, isTyping } = useTypewriter(typewriterTexts, {
  typingSpeed: 120,
  deletingSpeed: 60,
  pauseDuration: 2500
})
</script>

<template>
  <section id="hero" class="hero">
    <!-- 装饰光晕 -->
    <div class="orb orb-1"></div>
    <div class="orb orb-2"></div>

    <div class="hero-inner">
      <p class="hero-eyebrow">Computer Science @ NUIST</p>

      <h1 class="hero-title">
        <span class="cn">夏帮路</span>
        <span class="en typewriter">
          {{ displayText }}<span class="cursor" :class="{ 'blinking': !isTyping }">|</span>
        </span>
      </h1>

      <p class="hero-desc">
        南京信息工程大学计算机科学与技术专业大二在读学生，专注于前端开发，热爱技术与创作，拥有5余个独立完成的项目经验。
      </p>

      <div class="hero-actions">
        <a href="#projects" class="btn btn-primary">
          查看项目 →
        </a>
        <a href="#posts" class="btn btn-ghost">
          浏览文章
        </a>
        <a href="https://github.com/xiabanglu" target="_blank" class="btn btn-ghost">
          GitHub ↗
        </a>
      </div>

      <div class="hero-stats">
        <div v-for="stat in stats" :key="stat.label" class="stat-item">
          <div class="stat-num">{{ stat.num }}</div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <div class="scroll-hint">
      <span class="scroll-line"></span>
      <span>向下滚动</span>
    </div>
  </section>
</template>

<style scoped>
.typewriter {
  display: inline-flex;
  align-items: center;
}

.cursor {
  color: var(--accent);
  margin-left: 2px;
  font-weight: 300;
}

.cursor.blinking {
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}
</style>
