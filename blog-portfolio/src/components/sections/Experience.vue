<script setup>
// 经历数据配置（供你后续填充）
const experiences = [
  {
    date: '2023 - 至今',
    title: '职位名称',
    company: '公司名称',
    desc: '工作内容描述...'
  },
  {
    date: '2021 - 2023',
    title: '职位名称',
    company: '公司名称',
    desc: '工作内容描述...'
  },
  {
    date: '2020 - 2021',
    title: '职位名称',
    company: '公司名称',
    desc: '工作内容描述...'
  }
]
</script>

<template>
  <section id="experience" class="reveal">
    <span class="section-label">Experience</span>
    <h2 class="section-title">工作经历</h2>
    <p class="section-sub">我的职业发展历程...</p>

    <div class="timeline">
      <div v-for="exp in experiences" :key="exp.title" class="timeline-item">
        <div class="tl-date">{{ exp.date }}</div>
        <h3 class="tl-title">{{ exp.title }}</h3>
        <div class="tl-company">{{ exp.company }}</div>
        <p class="tl-desc">{{ exp.desc }}</p>
      </div>
    </div>
  </section>
</template>
