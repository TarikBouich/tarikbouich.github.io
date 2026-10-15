import './assets/css/app.css'

import { createApp } from 'vue'
import App from './App.vue'

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
)

const reveal = {
  mounted(el, binding) {
    const modifiers = binding.modifiers || {}
    let delay = binding.value || 0
    if (modifiers.stagger && !delay) delay = 0
    el.classList.add('reveal')
    if (modifiers.up) el.classList.add('reveal-up')
    if (modifiers.left) el.classList.add('reveal-left')
    if (modifiers.right) el.classList.add('reveal-right')
    if (modifiers.scale) el.classList.add('reveal-scale')
    if (modifiers.fade) el.classList.add('reveal-fade')
    if (delay) el.style.transitionDelay = `${delay}ms`
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setTimeout(() => el.classList.add('reveal-visible'), 50)
    } else {
      revealObserver.observe(el)
    }
  },
  unmounted(el) {
    revealObserver.unobserve(el)
  }
}

const app = createApp(App)
app.directive('reveal', reveal)
app.mount('#app')
