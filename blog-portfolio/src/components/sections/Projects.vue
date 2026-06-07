<script setup>
// 项目数据
const projects = [
  {
    id: 1,
    name: '个人博客系统',
    description: '基于 Vue.js + Vite 构建的现代化个人博客，支持主题切换、粒子背景、打字机动画等特效。',
    tech: ['Vue.js', 'Vite', 'CSS3'],
    image: '/project-placeholder-1.svg',
    link: 'https://github.com/xiabanglu'
  },
  {
    id: 2,
    name: '待办事项管理应用',
    description: '功能完善的 Todo List 应用，支持任务增删改查、分类筛选、数据持久化。',
    tech: ['Vue.js', 'LocalStorage', 'CSS'],
    image: '/project-placeholder-2.svg',
    link: 'https://github.com/xiabanglu'
  },
  {
    id: 3,
    name: '天气预报查询工具',
    description: '调用第三方 API 实现的天气查询应用，支持城市搜索、未来七天预报展示。',
    tech: ['JavaScript', 'API', 'HTML5'],
    image: '/project-placeholder-3.svg',
    link: 'https://github.com/xiabanglu'
  },
  {
    id: 4,
    name: '在线简历生成器',
    description: '可视化简历编辑器，支持多种模板选择、实时预览、PDF 导出功能。',
    tech: ['Vue.js', 'JavaScript', 'CSS3'],
    image: '/project-placeholder-4.svg',
    link: 'https://github.com/xiabanglu'
  },
  {
    id: 5,
    name: '学生成绩管理系统',
    description: '基于 Java + MySQL 的学生成绩管理系统，包含学生信息管理、成绩录入与查询等功能。',
    tech: ['Java', 'MySQL', 'Swing'],
    image: '/project-placeholder-5.svg',
    link: 'https://github.com/xiabanglu'
  }
]
</script>

<template>
  <section id="projects" class="reveal">
    <span class="section-label">Projects</span>
    <h2 class="section-title">项目展示</h2>
    <p class="section-sub">我独立完成的一些项目作品</p>

    <div class="projects-grid">
      <a 
        v-for="project in projects" 
        :key="project.id" 
        :href="project.link"
        target="_blank"
        class="project-card"
      >
        <div class="project-image">
          <div class="project-placeholder">
            <span class="project-icon">🚀</span>
            <span class="project-name-short">{{ project.name.charAt(0) }}</span>
          </div>
        </div>
        <div class="project-content">
          <h3 class="project-title">{{ project.name }}</h3>
          <p class="project-desc">{{ project.description }}</p>
          <div class="project-tech">
            <span v-for="tech in project.tech" :key="tech" class="tech-tag">
              {{ tech }}
            </span>
          </div>
        </div>
        <div class="project-arrow">→</div>
      </a>
    </div>
  </section>
</template>

<style scoped>
#projects {
  background: var(--surface);
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 24px;
}

.project-card {
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  transition: all 0.3s;
  position: relative;
}

.project-card:hover {
  border-color: rgba(79, 255, 203, 0.25);
  transform: translateY(-4px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
}

.project-image {
  width: 100%;
  height: 180px;
  background: linear-gradient(135deg, var(--surface) 0%, var(--surface2) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--border);
}

.project-placeholder {
  width: 80px;
  height: 80px;
  border-radius: 16px;
  background: linear-gradient(135deg, rgba(79, 255, 203, 0.1) 0%, rgba(74, 179, 255, 0.1) 100%);
  border: 1px solid rgba(79, 255, 203, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.project-icon {
  font-size: 2rem;
  position: absolute;
  opacity: 0.3;
}

.project-name-short {
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 800;
  color: var(--accent);
  z-index: 1;
}

.project-content {
  padding: 24px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-title {
  font-family: var(--font-display);
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: -0.01em;
  color: var(--text);
  transition: color 0.2s;
}

.project-card:hover .project-title {
  color: var(--accent);
}

.project-desc {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.7;
  flex: 1;
  margin-bottom: 16px;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-tag {
  padding: 4px 10px;
  background: var(--tag-bg);
  border: 1px solid rgba(79, 255, 203, 0.15);
  border-radius: 3px;
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--accent);
  letter-spacing: 0.05em;
}

.project-arrow {
  position: absolute;
  bottom: 24px;
  right: 24px;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--surface);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  color: var(--muted);
  transition: all 0.25s;
}

.project-card:hover .project-arrow {
  background: var(--accent);
  border-color: var(--accent);
  color: var(--bg);
  transform: translateX(4px);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
