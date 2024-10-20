<template>
  <div class="fixed top-40 z-50 w-11 h-11 bg-white dark:bg-dark-100 rounded-tr-lg rounded-br-lg border border-dark-75 border-l-0 border-opacity-70 dark:border-white dark:border-opacity-10">
    <span @click="switchTheme(isDark)" class="w-full h-full cursor-pointer flex items-center justify-center text-black dark:text-white transition-colors duration-200 hover:text-primary dark:hover:text-primary">
      <LightIcon v-if="!isDark" class="w-5 h-5 spinner" />
      <DarkIcon v-else class="w-5 h-5 spinner" />
    </span>
  </div>
</template>

<script>
  import LightIcon from '../components/icons/LightIcon.vue'
  import DarkIcon from '../components/icons/DarkIcon.vue'
  export default {
    components: {
      LightIcon,
      DarkIcon
    },
    data() {
      return {
        isDark: false
      }
    },
    mounted() {
      if ((window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        this.isDark = false
      } else {
        this.isDark = true
      }
    },
    methods: {
      switchTheme(isDark) {
        if (isDark) {
          document.querySelector('html').classList.add('dark')
          this.isDark = false
        } else {
          document.querySelector('html').classList.remove('dark')
          this.isDark = true
        }
      }
    }
  }
</script>