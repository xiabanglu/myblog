<script setup>
// 关于我文本内容
const aboutText = [
  '你好！我是夏帮路，来自南京信息工程大学计算机科学与技术专业，目前大二在读。',
  '我专注于前端开发领域，熟练掌握 Vue.js、Vite 等现代前端技术栈。在学习过程中，我独立完成了 5 余个实践项目，不断磨练自己的编程能力和项目思维。',
  '我热爱技术与创作，喜欢在项目中尝试新技术，记录学习心得，持续打磨代码质量与产品思维。'
]

// 技能标签
const techChips = [
  'HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'Vite',
  'Webpack', 'Node.js', 'Git', 'MySQL', 'C++', 'Java'
]
</script>

<template>
  <section id="about" class="reveal">
    <span class="section-label">About Me</span>
    <h2 class="section-title">关于我</h2>
    <p class="section-sub">热爱前端开发的计算机专业学生</p>

    <div class="about-grid">
      <div class="about-visual">
        <div class="avatar-frame">
          <div class="avatar-placeholder">
            <span class="avatar-icon">👨‍💻</span>
            <span class="avatar-caption">夏帮路</span>
          </div>
        </div>
        <div class="frame-decoration"></div>
      </div>

      <div class="about-content">
        <p v-for="(text, index) in aboutText" :key="index" class="about-text">
          {{ text }}
        </p>

        <div class="tech-chips">
          <span v-for="chip in techChips" :key="chip" class="chip">
            {{ chip }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
