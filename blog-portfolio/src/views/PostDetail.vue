<script setup>
import { useRoute, RouterLink } from 'vue-router'
import { computed } from 'vue'
import { getPostById, getAllPosts } from '../data/posts.js'

const route = useRoute()
const postId = computed(() => Number(route.params.id))
const post = computed(() => getPostById(postId.value))

// 获取上一篇和下一篇
const allPosts = getAllPosts()
const currentIndex = computed(() => allPosts.findIndex(p => p.id === postId.value))
const prevPost = computed(() => currentIndex.value > 0 ? allPosts[currentIndex.value - 1] : null)
const nextPost = computed(() => currentIndex.value < allPosts.length - 1 ? allPosts[currentIndex.value + 1] : null)
</script>

<template>
  <div class="post-detail" v-if="post">
    <div class="container">
      <!-- 返回按钮 -->
      <RouterLink to="/" class="back-link">← 返回首页</RouterLink>
      
      <!-- 文章头部 -->
      <header class="post-header">
        <span :class="['post-tag', post.tagClass]">{{ post.tag }}</span>
        <h1 class="post-title">{{ post.title }}</h1>
        <div class="post-meta">
          <span class="post-date">{{ post.date }}</span>
          <span class="read-time">{{ post.readTime }}</span>
        </div>
      </header>
      
      <!-- 文章内容 -->
      <article class="post-content">
        <p>{{ post.excerpt }}</p>
        <p>这里是文章的完整内容...</p>
      </article>
      
      <!-- 文章底部 -->
      <footer class="post-footer">
        <div class="post-tags">
          <span class="tag">{{ post.tag }}</span>
        </div>
        
        <!-- 上一篇/下一篇导航 -->
        <nav class="post-nav">
          <RouterLink v-if="prevPost" :to="`/post/${prevPost.id}`" class="prev">
            ← {{ prevPost.title }}
          </RouterLink>
          <span v-else></span>
          
          <RouterLink v-if="nextPost" :to="`/post/${nextPost.id}`" class="next">
            {{ nextPost.title }} →
          </RouterLink>
          <span v-else></span>
        </nav>
      </footer>
    </div>
  </div>
  
  <!-- 文章未找到 -->
  <div class="post-detail not-found" v-else>
    <div class="container">
      <h1>文章未找到</h1>
      <RouterLink to="/" class="back-link">← 返回首页</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.post-detail {
  min-height: 100vh;
  padding: 120px 60px 60px;
  background: var(--bg);
}

.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

.back-link {
  display: inline-block;
  margin-bottom: 40px;
  color: var(--muted);
  text-decoration: none;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  transition: color 0.2s;
}

.back-link:hover {
  color: var(--accent);
}

.post-header {
  margin-bottom: 48px;
}

.post-tag {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  padding: 4px 12px;
  background: var(--tag-bg);
  border: 1px solid rgba(79, 255, 203, 0.15);
  border-radius: 3px;
  color: var(--accent);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.post-tag.alt {
  color: var(--accent2);
  background: rgba(74, 179, 255, 0.08);
  border-color: rgba(74, 179, 255, 0.15);
}

.post-tag.hot {
  color: var(--accent3);
  background: rgba(255, 107, 107, 0.08);
  border-color: rgba(255, 107, 107, 0.15);
}

.post-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 800;
  line-height: 1.2;
  margin: 20px 0 16px;
  letter-spacing: -0.02em;
  color: var(--text);
}

.post-meta {
  display: flex;
  gap: 20px;
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--muted);
}

.post-content {
  font-size: 1.1rem;
  line-height: 1.9;
  color: var(--text);
}

.post-content p {
  margin-bottom: 1.5em;
}

.post-footer {
  margin-top: 60px;
  padding-top: 40px;
  border-top: 1px solid var(--border);
}

.post-tags {
  display: flex;
  gap: 10px;
  margin-bottom: 40px;
}

.tag {
  padding: 6px 14px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  font-family: var(--font-mono);
  font-size: 0.7rem;
  color: var(--muted);
}

.post-nav {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.post-nav a {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
  max-width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.post-nav a:hover {
  color: var(--accent);
}

@media (max-width: 768px) {
  .post-detail {
    padding: 100px 24px 40px;
  }
  
  .post-nav a {
    max-width: 120px;
  }
}
</style>
