// 文章数据管理

export const featuredPosts = [
  {
    id: 1,
    tag: '精选',
    tagClass: 'hot',
    date: '2024.12.15',
    title: '从零搭建 Vue3 + Vite 个人博客全记录',
    excerpt: '详细记录如何使用 Vue 3、Vite 和现代 CSS 构建一个功能完善的个人博客，包括主题切换、粒子背景、打字机效果等特效实现...',
    readTime: '15 分钟'
  },
  {
    id: 2,
    tag: 'Vue.js',
    tagClass: 'alt',
    date: '2024.11.28',
    title: 'Vue 3 Composition API 实战技巧',
    excerpt: '深入探讨 Vue 3 组合式 API 的使用技巧，包括 composable 的封装、状态管理、以及如何在实际项目中提高代码复用性...',
    readTime: '10 分钟'
  }
]

export const posts = [
  {
    id: 3,
    tag: '前端',
    tagClass: '',
    date: '2024.10.20',
    title: 'Webpack vs Vite：构建工具选型指南',
    excerpt: '对比分析 Webpack 和 Vite 的差异，帮助你在不同场景下选择合适的构建工具，提升开发效率...',
    readTime: '8 分钟'
  },
  {
    id: 4,
    tag: 'JavaScript',
    tagClass: 'alt',
    date: '2024.09.15',
    title: 'JavaScript 异步编程完全指南',
    excerpt: '从回调函数到 Promise，再到 async/await，全面掌握 JavaScript 异步编程的演进与实践...',
    readTime: '12 分钟'
  },
  {
    id: 5,
    tag: 'CSS',
    tagClass: '',
    date: '2024.08.10',
    title: '现代 CSS 布局技巧：Grid 与 Flexbox',
    excerpt: '掌握 CSS Grid 和 Flexbox 的核心概念，学会如何选择合适的布局方案，实现响应式页面设计...',
    readTime: '10 分钟'
  },
  {
    id: 6,
    tag: '后端',
    tagClass: 'alt',
    date: '2024.07.05',
    title: 'Node.js + MySQL 入门实践',
    excerpt: '记录学习 Node.js 连接 MySQL 数据库的过程，包括环境配置、基本 CRUD 操作和常见问题解决...',
    readTime: '15 分钟'
  }
]

// 获取文章详情的辅助函数
export function getPostById(id) {
  const allPosts = [...featuredPosts, ...posts]
  return allPosts.find(post => post.id === Number(id))
}

// 获取所有文章
export function getAllPosts() {
  return [...featuredPosts, ...posts]
}

// 按标签筛选文章
export function getPostsByTag(tag) {
  return getAllPosts().filter(post => post.tag === tag)
}
