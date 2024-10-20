<script>
export default {
  mounted() {
    const cursor = document.querySelector('.cursor')
    const a = document.querySelectorAll('a')
    document.addEventListener('mousemove', function(e) {
      const x = e.clientX
      const y = e.clientY
      cursor.style.left = x + 'px'
      cursor.style.top = y + 'px'
    })
    a.forEach(item => {
      item.addEventListener('mouseover', () => {
        cursor.classList.add('cursor-hover')
      })
      item.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-hover')
      })
    })
  },
}
</script>

<template>
  <div class="cursor"></div>
</template>