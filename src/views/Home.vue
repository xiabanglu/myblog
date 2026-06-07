<script setup>
import Nav from '../components/layout/Nav.vue'
import Hero from '../components/sections/Hero.vue'
import About from '../components/sections/About.vue'
import Projects from '../components/sections/Projects.vue'
import Posts from '../components/sections/Posts.vue'
import Skills from '../components/sections/Skills.vue'
import Contact from '../components/sections/Contact.vue'
import Footer from '../components/layout/Footer.vue'
import CursorGlow from '../components/effects/CursorGlow.vue'
import ScrollReveal from '../components/effects/ScrollReveal.vue'
import ScrollTop from '../components/effects/ScrollTop.vue'
import ParticleBg from '../components/effects/ParticleBg.vue'
</script>

<template>
  <div class="home">
    <!-- 背景效果 -->
    <ParticleBg />
    
    <!-- 视觉效果组件 -->
    <CursorGlow />
    <ScrollReveal />
    <ScrollTop />

    <!-- 导航 -->
    <Nav />

    <!-- 页面区块 -->
    <main>
      <Hero />
      <About />
      <Projects />
      <Posts />
      <Skills />
      <Contact />
    </main>

    <!-- 页脚 -->
    <Footer />
  </div>
</template>
