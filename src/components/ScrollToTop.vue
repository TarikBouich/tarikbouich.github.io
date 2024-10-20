<script>
  import UpIcon from './icons/UpIcon.vue'
  export default {
    components: {
      UpIcon
    },
    data() {
      return {
        isActive: false
      }
    },
    methods: {
      scrollToTop () {
        window.scroll({
          top: 0,
          behavior: 'smooth'
        })
      },
      handleScroll () {
        this.isActive = window.scrollY > 600
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll)
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<template>
  <div @click="scrollToTop" :class="[ isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8' ]" class="fixed bottom-8 right-8 z-50 cursor-pointer w-11 h-11 rounded-full transition-all text-white bg-dark-100 bg-opacity-90 dark:bg-opacity-100 dark:text-black dark:bg-dark-75 flex items-center justify-center transform hover:bg-primary duration-500">
    <UpIcon class="w-4 h-4" />
  </div>
</template>