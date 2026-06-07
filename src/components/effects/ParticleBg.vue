<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
const particles = ref([])
let animationId = null

// 检测是否为触摸设备
const isTouchDevice = () => {
  return window.matchMedia('(pointer: coarse)').matches
}

class Particle {
  constructor(x, y, canvasWidth, canvasHeight) {
    this.x = x || Math.random() * canvasWidth
    this.y = y || Math.random() * canvasHeight
    this.vx = (Math.random() - 0.5) * 0.5
    this.vy = (Math.random() - 0.5) * 0.5
    this.radius = Math.random() * 2 + 1
    this.canvasWidth = canvasWidth
    this.canvasHeight = canvasHeight
  }

  update() {
    this.x += this.vx
    this.y += this.vy

    // 边界反弹
    if (this.x < 0 || this.x > this.canvasWidth) this.vx *= -1
    if (this.y < 0 || this.y > this.canvasHeight) this.vy *= -1
  }

  draw(ctx, accentColor) {
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = accentColor
    ctx.fill()
  }
}

const initParticles = (width, height) => {
  const particleCount = isTouchDevice() ? 15 : 25
  particles.value = []
  for (let i = 0; i < particleCount; i++) {
    particles.value.push(new Particle(null, null, width, height))
  }
}

const connectParticles = (ctx, accentColor) => {
  const maxDistance = 100
  const maxConnections = 3

  for (let i = 0; i < particles.value.length; i++) {
    let connections = 0
    for (let j = i + 1; j < particles.value.length; j++) {
      if (connections >= maxConnections) break

      const dx = particles.value[i].x - particles.value[j].x
      const dy = particles.value[i].y - particles.value[j].y
      const distance = Math.sqrt(dx * dx + dy * dy)

      if (distance < maxDistance) {
        const opacity = (1 - distance / maxDistance) * 0.3
        ctx.beginPath()
        ctx.strokeStyle = accentColor.replace(')', `, ${opacity})`).replace('rgb', 'rgba')
        ctx.lineWidth = 0.5
        ctx.moveTo(particles.value[i].x, particles.value[i].y)
        ctx.lineTo(particles.value[j].x, particles.value[j].y)
        ctx.stroke()
        connections++
      }
    }
  }
}

const animate = () => {
  if (!canvas.value) return

  const ctx = canvas.value.getContext('2d')
  const { width, height } = canvas.value

  // 获取当前主题色
  const computedStyle = getComputedStyle(document.documentElement)
  const accentColor = computedStyle.getPropertyValue('--accent').trim() || '#4fffcb'
  // 将十六进制转换为 rgb
  const hex = accentColor.replace('#', '')
  const r = parseInt(hex.substr(0, 2), 16)
  const g = parseInt(hex.substr(2, 2), 16)
  const b = parseInt(hex.substr(4, 2), 16)
  const rgbColor = `rgb(${r}, ${g}, ${b})`

  // 清空画布
  ctx.clearRect(0, 0, width, height)

  // 更新和绘制粒子
  particles.value.forEach(particle => {
    particle.update()
    particle.draw(ctx, rgbColor)
  })

  // 连接粒子
  connectParticles(ctx, rgbColor)

  animationId = requestAnimationFrame(animate)
}

const handleResize = () => {
  if (!canvas.value) return
  canvas.value.width = window.innerWidth
  canvas.value.height = window.innerHeight
  initParticles(canvas.value.width, canvas.value.height)
}

onMounted(() => {
  if (!canvas.value) return

  handleResize()
  window.addEventListener('resize', handleResize)
  animate()
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  if (animationId) cancelAnimationFrame(animationId)
})
</script>

<template>
  <canvas 
    ref="canvas" 
    class="particle-bg"
    aria-hidden="true"
  ></canvas>
</template>

<style scoped>
.particle-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
  opacity: 0.6;
}
</style>
