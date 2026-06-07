<script setup>
// 技能数据配置 - 根据夏帮路的实际技能
const skillGroups = [
  {
    icon: '🌐',
    name: '前端基础',
    skills: [
      { name: 'HTML5', level: 90 },
      { name: 'CSS3', level: 85 },
      { name: 'JavaScript', level: 80 }
    ]
  },
  {
    icon: '⚡',
    name: '前端框架',
    skills: [
      { name: 'Vue.js', level: 85 },
      { name: 'Vite', level: 80 },
      { name: 'Webpack', level: 75 }
    ]
  },
  {
    icon: '⚙️',
    name: '后端与工具',
    skills: [
      { name: 'Node.js', level: 70 },
      { name: 'Git', level: 85 },
      { name: 'MySQL', level: 75 }
    ]
  },
  {
    icon: '💻',
    name: '编程语言',
    skills: [
      { name: 'Java', level: 75 },
      { name: 'C++', level: 70 },
      { name: 'JavaScript', level: 80 }
    ]
  }
]
</script>

<template>
  <section id="skills" class="reveal">
    <span class="section-label">Skills</span>
    <h2 class="section-title">技能专长</h2>
    <p class="section-sub">我的技术栈与能力</p>

    <div class="skills-grid">
      <div v-for="group in skillGroups" :key="group.name" class="skill-group">
        <div class="skill-group-icon">{{ group.icon }}</div>
        <h3 class="skill-group-name">{{ group.name }}</h3>
        
        <div class="skill-bar-list">
          <div v-for="skill in group.skills" :key="skill.name" class="skill-item-row">
            <div class="skill-item-label">
              <span>{{ skill.name }}</span>
              <span>{{ skill.level }}%</span>
            </div>
            <div class="skill-bar-bg">
              <div 
                class="skill-bar-fill" 
                :style="{ width: skill.level + '%' }"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
