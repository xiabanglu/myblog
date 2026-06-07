<script setup>
// 联系文案
const contactText = [
  '如果你对我的项目感兴趣，或者想要交流技术问题...',
  '欢迎通过以下方式与我联系，我会尽快回复。'
]

// 社交链接
const socialLinks = [
  { icon: '💬', name: '微信: x3579512486033416' },
  { icon: '📱', name: '电话: 15358757659' }
]

// 联系方式详情
const contactDetails = {
  email: '1795454076@qq.com',
  github: 'https://github.com/xiabanglu',
  wechat: 'x3579512486033416',
  phone: '15358757659'
}
</script>

<template>
  <section id="contact" class="reveal">
    <span class="section-label">Contact</span>
    <h2 class="section-title">联系我</h2>
    <p class="section-sub">期待与你的交流...</p>

    <div class="contact-grid">
      <div class="contact-text">
        <p v-for="(text, index) in contactText" :key="index">
          {{ text }}
        </p>

        <div class="contact-info">
          <div class="info-item">
            <span class="info-label">邮箱</span>
            <a :href="`mailto:${contactDetails.email}`" class="info-value">{{ contactDetails.email }}</a>
          </div>
          <div class="info-item">
            <span class="info-label">GitHub</span>
            <a :href="contactDetails.github" target="_blank" class="info-value">{{ contactDetails.github }}</a>
          </div>
          <div class="info-item">
            <span class="info-label">微信</span>
            <span class="info-value">{{ contactDetails.wechat }}</span>
          </div>
          <div class="info-item">
            <span class="info-label">电话</span>
            <a :href="`tel:${contactDetails.phone}`" class="info-value">{{ contactDetails.phone }}</a>
          </div>
        </div>

        <div class="social-links">
          <a 
            v-for="link in socialLinks" 
            :key="link.name" 
            href="#" 
            class="social-link"
            @click.prevent
          >
            <span class="social-icon">{{ link.icon }}</span>
            <span>{{ link.name }}</span>
          </a>
        </div>
      </div>

      <form class="contact-form" @submit.prevent>
        <div class="form-group">
          <label class="form-label">姓名</label>
          <input type="text" class="form-input" placeholder="你的名字">
        </div>
        <div class="form-group">
          <label class="form-label">邮箱</label>
          <input type="email" class="form-input" placeholder="your@email.com">
        </div>
        <div class="form-group">
          <label class="form-label">消息</label>
          <textarea class="form-textarea" placeholder="想对我说什么..."></textarea>
        </div>
        <button type="submit" class="btn btn-primary">
          发送消息 →
        </button>
      </form>
    </div>
  </section>
</template>

<style scoped>
.contact-info {
  margin: 32px 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.info-item {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info-label {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  color: var(--muted);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.info-value {
  font-size: 1rem;
  color: var(--text);
  text-decoration: none;
  transition: color 0.2s;
  word-break: break-all;
}

.info-value:hover {
  color: var(--accent);
}
</style>
