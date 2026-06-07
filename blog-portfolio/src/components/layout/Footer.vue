<script setup>
// 页脚链接
const footerLinks = [
  { name: '首页', href: '#hero' },
  { name: '关于', href: '#about' },
  { name: '项目', href: '#projects' },
  { name: '联系', href: '#contact' }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer>
    <div class="footer-copy">
      © {{ currentYear }} 
      <a href="https://github.com/xiabanglu" target="_blank">夏帮路</a>. 
      All rights reserved.
    </div>
    <ul class="footer-links">
      <li v-for="link in footerLinks" :key="link.name">
        <a :href="link.href">{{ link.name }}</a>
      </li>
      <li><a href="https://github.com/xiabanglu" target="_blank">GitHub</a></li>
    </ul>
  </footer>
</template>
