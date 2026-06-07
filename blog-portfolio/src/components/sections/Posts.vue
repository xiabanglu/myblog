<script setup>
import { RouterLink } from 'vue-router'
import { featuredPosts, posts } from '../../data/posts.js'
</script>

<template>
  <section id="posts" class="reveal">
    <div class="posts-header">
      <div>
        <span class="section-label">Blog Posts</span>
        <h2 class="section-title">最新文章</h2>
      </div>
      <RouterLink to="/archive" class="view-all">查看全部 →</RouterLink>
    </div>

    <!-- 精选文章 -->
    <div class="posts-featured">
      <RouterLink 
        v-for="post in featuredPosts" 
        :key="post.id" 
        :to="`/post/${post.id}`" 
        class="post-card featured"
      >
        <div class="post-meta">
          <span :class="['post-tag', post.tagClass]">{{ post.tag }}</span>
          <span class="post-date">{{ post.date }}</span>
        </div>
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-excerpt">{{ post.excerpt }}</p>
        <div class="post-footer">
          <span class="read-time">{{ post.readTime }}</span>
          <span class="post-arrow">→</span>
        </div>
      </RouterLink>
    </div>

    <!-- 文章网格 -->
    <div class="posts-grid">
      <RouterLink 
        v-for="post in posts" 
        :key="post.id" 
        :to="`/post/${post.id}`" 
        class="post-card"
      >
        <div class="post-meta">
          <span :class="['post-tag', post.tagClass]">{{ post.tag }}</span>
          <span class="post-date">{{ post.date }}</span>
        </div>
        <h3 class="post-title">{{ post.title }}</h3>
        <p class="post-excerpt">{{ post.excerpt }}</p>
        <div class="post-footer">
          <span class="read-time">{{ post.readTime }}</span>
          <span class="post-arrow">→</span>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
