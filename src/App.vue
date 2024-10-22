<!-- eslint-disable vue/require-v-for-key -->
<script>
import emailjs from 'emailjs-com'
import { register } from 'swiper/element/bundle'
register()
import Cursor from './components/AppCursor.vue'
import Loader from './components/AppLoading.vue'
import ScrollToTop from './components/ScrollToTop.vue'
import SwitchTheme from './components/SwitchTheme.vue'
import FacebookIcon from './components/icons/FacebookIcon.vue'
import LinkedinIcon from './components/icons/LinkedincIcon.vue'
import GithubIcon from './components/icons/GithubIcon.vue'
import EmailIcon from './components/icons/EmailIcon.vue'
import ArrowRightIcon from './components/icons/ArrowRightIcon.vue'
import BootstrapIcon from './components/icons/skills/BootstrapIcon.vue'
import CssIcon from './components/icons/skills/CssIcon.vue'
import HtmlIcon from './components/icons/skills/HtmlIcon.vue'
import JiraIcon from './components/icons/skills/JiraIcon.vue'
import JsIcon from './components/icons/skills/JsIcon.vue'
import TailwindcssIcon from './components/icons/skills/TailwindcssIcon.vue'
import UxIcon from './components/icons/skills/UxIcon.vue'
import VueIcon from './components/icons/skills/VueIcon.vue'
import StarIcon from './components/icons/StarIcon.vue'
// import CopyrightIcon from './components/icons/CopyrightIcon.vue'
import MenuIcon from './components/icons/MenuIcon.vue'
import LogoIcon from './components/icons/LogoIcon.vue'
  export default {
  name: 'App',
  components: {
    Cursor,
    Loader,
    ScrollToTop,
    SwitchTheme,
    FacebookIcon,
    LinkedinIcon,
    GithubIcon,
    EmailIcon,
    ArrowRightIcon,
    BootstrapIcon,
    CssIcon,
    HtmlIcon,
    JiraIcon,
    JsIcon,
    TailwindcssIcon,
    UxIcon,
    VueIcon,
    StarIcon,
    MenuIcon,
    LogoIcon
  },
  data() {
  return {
      experiences: [
        {
          period: '04/21 - Present',
          company: 'Protect',
          role: 'Front-End Engineer',
          link: 'https://protect.inc'
        },
        {
          period: '04/21 - Present',
          company: 'Le ventures',
          role: 'Front-End Engineer',
          link: 'https://leventures.com'
        },
        {
          period: '08/18 - 04/21',
          company: '[ NEXTMEDIA, YOUCAN, COD NETWEORK ]',
          role: 'Front-End Engineer',
          link: 'https://youcan.shop/en'
        },
        {
          period: '03/17 - 08/18',
          company: 'Webdevia',
          role: 'Front-End Developer',
          link: 'https://themeforest.net/user/mymoun/portfolio'
        }
      ],
      skills: [
          {
            title: 'VueJs',
            icon: 'VueIcon',
            progress: 95
          },
          {
            title: 'Ux Design',
            icon: 'UxIcon',
            progress: 95
          },
          {
            title: 'Javascript',
            icon: 'JsIcon',
            progress: 95
          },
          {
            title: 'TailwindCss',
            icon: 'TailwindcssIcon',
            progress: 90
          },
          {
            title: 'HTML5',
            icon: 'HtmlIcon',
            progress: 100
          },
          {
            title: 'CSS3',
            icon: 'CssIcon',
            progress: 100
          },
          {
            title: 'Bootstrap',
            icon: 'BootstrapIcon',
            progress: 95
          },
          {
            title: 'Jira',
            icon: 'JiraIcon',
            progress: 90
          }
        ],
      services: [
        {
          letter: 'W',
          title: 'Web Development',
          description: 'Visual elements and interactive features of your website. Translate design mockups and wireframes into actual code using HTML, CSS, and JavaScript.'
        },
        {
          letter: 'R',
          title: 'Responsive Design',
          description: 'Ensuring that your website look and function well on different devices and screen sizes. Use techniques like media queries and flexible layouts to achieve responsive design.'
        },
        {
          letter: 'U',
          title: 'User Experience',
          description: 'Collaborate with UX designers to create a seamless and intuitive user experience. Implement interactive elements, animations, and transitions to enhance the user journey.'
        },
        {
          letter: 'C',
          title: 'Cross-Browser Compatibility',
          description: 'Ensure that your websites work consistently across different web browsers, addressing any compatibility issues that may arise.'
        },
        {
          letter: 'P',
          title: 'Performance Optimization',
          description: 'Optimizing the performance of your website to deliver a fast and smooth user experience. Optimize code, images, and assets to improve loading times and overall performance.'
        },
        {
          letter: 'F',
          title: 'Front-End Frameworks',
          description: 'Work with frameworks like React, and Vue.js to streamline development, manage state, and build interactive user interfaces.'
        },
        {
          letter: 'I',
          title: 'Integration With Back End',
          description: 'Work closely with back-end developers to integrate front-end code with back-end systems, APIs, and databases.'
        },
        {
          letter: 'T',
          title: 'Testing And Debugging',
          description: 'Use browser developer tools and testing frameworks to identify and resolve issues.'
        }
      ],
      projects: [
        {
          image: 'protect.webp',
          skills: ['VueJs', 'TailwindCss'],
          name: 'Protect',
          link: 'https://protect.inc'
        },
        {
          image: 'lapermanence.webp',
          skills:['Bootstrap 4', 'HTML5-CSS3-Javascript'],
          name:'La permanence',
          link: 'https://la-permanence.com'
        },
        {
          image: 'codnetwork.webp',
          skills:['Bootstrap 4', 'HTML5-CSS3-Javascript'],
          name:'COD Network',
          link: 'https://cod.network/'
        },
        {
          image: 'apocalypsecoffee.webp',
          skills:['Shopify'],
          name:'Apocalypse Coffee',
          link: 'https://apocalypsecoffee.com/'
        },
        {
          image: 'goodshirts.webp',
          skills:['Shopify'],
          name:'GoodShirts',
          link: 'https://thegoodshirts.com/'
        },
        {
          image: 'inkedshop.webp',
          skills:['shopify'],
          name:'InkedShop',
          link: 'https://inkedshop.com/'
        }
      ],
      testimonials: [
        {
          author: {
            name: 'Mohamed El Ghaissani',
            title: 'CEO & Founder, YouCan Inc.',
            image: 'elghissani-mohamed.webp'
          },
          quote: "I had the pleasure of working with Tarik as a Front-End Developer, and I can confidently say he is an exceptional asset to any development team. Throughout his time with us, Tarik consistently demonstrated a deep understanding of modern web technologies, particularly Vue.js, Tailwind CSS, and responsive design principles.What sets Tarik apart is not only his technical skills but also his dedication to delivering high-quality work on time. He approaches each project with creativity, problem-solving ability, and attention to detail, ensuring that the final product is polished and user-friendly. His collaborative nature made him a great team player, always open to feedback and eager to contribute new ideas.Tarik's passion for learning and staying updated with the latest trends in front-end development makes him stand out as a developer. I highly recommend him for any role that requires a skilled, motivated, and innovative Front-End Developer.",
          reviews: 5
        },
        {
          author: {
            name: 'Zouhir Bahij',
            title: 'CEO & Founder, YouCan Inc.',
            image: 'zouhir-bahij.webp'
          },
          quote: "Crafting captivating user experiences through code is not just a job for Tarik, it's a passion. With an expert command over front-end technologies, Tarik brings life to designs and transforms ideas into interactive digital realities. Creating seamless journeys for users. As a Front-End Engineer, Tarik illuminates the path where creativity and technology converge.",
          reviews: 5
        },
        {
          author: {
            name: 'Khoi Le',
            title: 'CEO & Founder, Protect Inc.',
            image: 'khoi-le.webp'
          },
          quote: "We've had the pleasure of working with Tarik, and he's truly transformed our digital presence. his coding skills bring our designs to life, resulting in beautiful and user-friendly websites. Tarik is reliable, efficient, and pays attention to detail, ensuring our projects are completed to perfection. his creative problem-solving abilities have been invaluable to our team.",
          reviews: 5
        },
        {
          author: {
            name: 'Anass Ezzouine',
            title: 'CEO & Founder, Tekency.',
            image: 'anas-ezzouine.webp'
          },
          quote: "Tarik is a person who possesses all the skills needed to manage a team and be productive during intense crunch periods. Furthermore, he has a unique ability to keep the team organized and on schedule. Besides, Tarik also supported and helped us to reach our full potential, and he never hesitated to lend a helping hand.",
          reviews: 5
        },
        {
          author: {
            name: 'Mohamed El-Ghorfi',
            title: 'CEO & Founder, Tekency.',
            image: 'mohamed-el-ghourfi.webp'
          },
          quote: "Tarik is an essential asset to any development team. During my collaboration with him, I consistently marveled at his strong work ethic and unwavering determination to complete any assigned task. Whether it was debugging functions in templates, constructing intricate sales systems for rapidly expanding clients, or providing comprehensive guidance to newer team members finding their way in the industry. Tarik has repeatedly demonstrated his readiness to take on challenges. I am genuinely honored to have had the opportunity to work alongside Tarik, and without reservation, I affirm that he deserves every chance to progress and thrive in the field.",
          reviews: 5
        }
      ],
      form: {
        to_name: 'Tarik Bouich',
        name: '',
        from_name: '',
        subject: '',
        message: ''
      },   
      sended: false,
      sending: false,
      emailResponse: {
        status: false,
        message: '',
        type: 'success'
      },
      isMenuCollapsed: false
    }
    
  },
  mounted() {
    this.checkIfUserClickBKey()
    document.querySelector('body').style.overflow = 'hidden'
    if (document.readyState === 'complete') {
      setTimeout(() => {
        this.loading = false
        document.querySelector('body').style.overflow = 'auto'
      }, 500)
    } else {
      window.addEventListener('load', () => {
        setTimeout(() => {
          this.loading = false
          document.querySelector('body').style.overflow = 'auto'
        }, 500)
      })
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.querySelector('html').classList.add('dark')
    } else {
      document.querySelector('html').classList.remove('dark')
    }
  },
  methods: {
    async sendMessage() {
      this.sending = true
      try {
        this.form.message =
          this.form.name +
          ' Sent you a message: ' +
          this.form.message +
          ' SUBJECT: ' +
          this.form.subject
        await emailjs.send('service_3oky19f', 'template_7rbi9c2', this.form, 'eiHe9w7qd8lmbk6eQ')
        this.sended = true
        this.emailResponse = {
          status: true,
          message: "Thank you for reaching out! I'll be in touch with you shortly.",
          type: 'success'
        }
        this.form = {
          to_name: 'Tarik Bouich',
          name: '',
          email: '',
          subject: '',
          message: ''
        }
        this.sending = false
        setTimeout(() => {
          this.emailResponse.status = false
        }, 5000)
      } catch (error) {
        this.emailResponse = {
          status: true,
          message:
            'Unfortunately, there was an issue while attempting to send your message. Please try again. If the problem persists, feel free to contact me through tarik.front@gmail.com.',
          type: 'error'
        }
        this.sending = false
        setTimeout(() => {
          this.emailResponse.status = false
        }, 5000)
      }
    },
    scrollToSection(sectionId) {
      const targetSection = document.querySelector(sectionId)
      window.scrollTo({
        top: sectionId !== '#home' ? targetSection.offsetTop - 20 : targetSection.offsetTop,
        behavior: 'smooth'
      })
      this.isMenuCollapsed = false
    },
    checkIfUserClickBKey() {
      document.addEventListener('keypress', (e) => {
        if (e.key === 'b' || e.key === 'B') {
          document.getElementById('book-a-call').click()
        }
      })
    }
  }
};
</script>

<template>
<div>
  <Cursor />
    <Loader :class="{ 'slide-out': !loading }" />
    <ScrollToTop />
    <!-- <SwitchTheme /> -->
    <header
        class="py-2.5 md:border-b md:border-dark-75 dark:md:border-dark-75 md:border-opacity-50 dark:md:border-opacity-10"
      >
      <div class="container">
        <div class="flex items-center justify-between relative">
          <div class="flex items-center justify-between md:w-full">
            <a
              href="/"
              class="flex items-center w-40 -ml-2 outline-none md:w-[6rem] text-black dark:text-white"
            >
              <LogoIcon class="w-full h-full" />
            </a>
            <div
              @click="isMenuCollapsed = !isMenuCollapsed"
              class="dark:text-white text-black hidden md:block header__body-burger"
              :class="{'header__body-burger--active': isMenuCollapsed}"
            >
              <MenuIcon :class="{'header__body-burger-icon': isMenuCollapsed, 'w-10 h-10': true}" />
            </div>
          </div>
          <ul class="flex items-center justify-center gap-10 flex-1 md:hidden lgx:gap-5">
            <li>
              <a href="/" class="text-sm uppercase tracking-widest lgx:text-xs">
                <span class="rolling-text">
                  <div>
                    <span class="letter">H</span>
                    <span class="letter">O</span>
                    <span class="letter">M</span>
                    <span class="letter">E</span>
                  </div>
                  <div class="text-primary dark:hover:brightness-105">
                    <span class="letter">H</span>
                    <span class="letter">O</span>
                    <span class="letter">M</span>
                    <span class="letter">E</span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a
                @click.prevent="scrollToSection('#about')"
                href="#about"
                class="text-sm uppercase tracking-widest lgx:text-xs"
              >
                <span class="rolling-text">
                  <div>
                    <span class="letter">A</span>
                    <span class="letter">B</span>
                    <span class="letter">O</span>
                    <span class="letter">U</span>
                    <span class="letter">T</span>
                  </div>
                  <div class="text-primary dark:hover:brightness-105">
                    <span class="letter">A</span>
                    <span class="letter">B</span>
                    <span class="letter">O</span>
                    <span class="letter">U</span>
                    <span class="letter">T</span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a
                @click.prevent="scrollToSection('#services')"
                href="#services"
                class="text-sm uppercase tracking-widest lgx:text-xs"
              >
                <span class="rolling-text">
                  <div>
                    <span class="letter">S</span>
                    <span class="letter">E</span>
                    <span class="letter">R</span>
                    <span class="letter">V</span>
                    <span class="letter">I</span>
                    <span class="letter">C</span>
                    <span class="letter">E</span>
                    <span class="letter">S</span>
                  </div>
                  <div class="text-primary dark:hover:brightness-105">
                    <span class="letter">S</span>
                    <span class="letter">E</span>
                    <span class="letter">R</span>
                    <span class="letter">V</span>
                    <span class="letter">I</span>
                    <span class="letter">C</span>
                    <span class="letter">E</span>
                    <span class="letter">S</span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a
                @click.prevent="scrollToSection('#portfolio')"
                href="#portfolio"
                class="text-sm uppercase tracking-widest lgx:text-xs"
              >
                <span class="rolling-text">
                  <div>
                    <span class="letter">P</span>
                    <span class="letter">O</span>
                    <span class="letter">R</span>
                    <span class="letter">T</span>
                    <span class="letter">F</span>
                    <span class="letter">O</span>
                    <span class="letter">L</span>
                    <span class="letter">I</span>
                    <span class="letter">O</span>
                  </div>
                  <div class="text-primary dark:hover:brightness-105">
                    <span class="letter">P</span>
                    <span class="letter">O</span>
                    <span class="letter">R</span>
                    <span class="letter">T</span>
                    <span class="letter">F</span>
                    <span class="letter">O</span>
                    <span class="letter">L</span>
                    <span class="letter">I</span>
                    <span class="letter">O</span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a
                @click.prevent="scrollToSection('#testimonials')"
                href="#testimonials"
                class="text-sm uppercase tracking-widest lgx:text-xs"
              >
                <span class="rolling-text">
                  <div>
                    <span class="letter">T</span>
                    <span class="letter">E</span>
                    <span class="letter">S</span>
                    <span class="letter">T</span>
                    <span class="letter">I</span>
                    <span class="letter">M</span>
                    <span class="letter">O</span>
                    <span class="letter">N</span>
                    <span class="letter">I</span>
                    <span class="letter">A</span>
                    <span class="letter">L</span>
                    <span class="letter">S</span>
                  </div>
                  <div class="text-primary dark:hover:brightness-105">
                    <span class="letter">T</span>
                    <span class="letter">E</span>
                    <span class="letter">S</span>
                    <span class="letter">T</span>
                    <span class="letter">I</span>
                    <span class="letter">M</span>
                    <span class="letter">O</span>
                    <span class="letter">N</span>
                    <span class="letter">I</span>
                    <span class="letter">A</span>
                    <span class="letter">L</span>
                    <span class="letter">S</span>
                  </div>
                </span>
              </a>
            </li>
            <li>
              <a
                @click.prevent="scrollToSection('#contact')"
                href="#contact"
                class="text-sm uppercase tracking-widest lgx:text-xs"
              >
                <span class="rolling-text">
                  <div>
                    <span class="letter">C</span>
                    <span class="letter">O</span>
                    <span class="letter">N</span>
                    <span class="letter">T</span>
                    <span class="letter">A</span>
                    <span class="letter">C</span>
                    <span class="letter">T</span>
                  </div>
                  <div class="text-primary dark:hover:brightness-105">
                    <span class="letter">C</span>
                    <span class="letter">O</span>
                    <span class="letter">N</span>
                    <span class="letter">T</span>
                    <span class="letter">A</span>
                    <span class="letter">C</span>
                    <span class="letter">T</span>
                  </div>
                </span>
              </a>
            </li>
          </ul>
          <ul
            v-if="isMenuCollapsed"
              class="hidden md:absolute md:top-full md:grid md:justify-normal md:z-10 md:mt-3 bg-dark-100 dark:md:bg-dark-header md:gap-0 md:-mx-4 md:w-header"
            >
            <li>
              <a href="/" class="text-sm uppercase tracking-widest md:block md:w-full md:p-4">
                Home
              </a>
            </li>
            <li>
              <a
                @click.prevent="scrollToSection('#about')"
                href="#about"
                class="text-sm uppercase tracking-widest md:block md:w-full md:p-4"
              >
                About
              </a>
            </li>
            <li>
              <a
                @click.prevent="scrollToSection('#services')"
                href="#services"
                class="text-sm uppercase tracking-widest md:block md:w-full md:p-4"
              >
                Services
              </a>
            </li>
            <li>
              <a
                @click.prevent="scrollToSection('#portfolio')"
                href="#portfolio"
                class="text-sm uppercase tracking-widest md:block md:w-full md:p-4"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                @click.prevent="scrollToSection('#testimonials')"
                href="#testimonials"
                class="text-sm uppercase tracking-widest md:block md:w-full md:p-4"
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                @click.prevent="scrollToSection('#contact')"
                href="#contact"
                class="text-sm uppercase tracking-widest md:block md:w-full md:p-4"
              >
                Contact
              </a>
            </li>
          </ul>
          <a
            id="book-a-call"
            href="https://koalendar.com/e/meet-with-tarik-bouich"
            target="_blank"
            class="text-sm text-white bg-primary px-6 py-3 lgx:px-4 leading-none flex items-center rounded-lg tracking-wide hover:brightness-105 md:hidden"
            >Press
            <b class="mx-2 py-1 px-2 bg-white/50 rounded-md text-center font-extrabold">B</b> to
            book a call</a
          >
        </div>
      </div>
    </header>
  <main>
  <section class="pb-16 lg:pb-8 md:pt-0 sm:pt-0 bg-black"> 
    <div class="p-0">
      <div class="flex items-start justify-between gap-24 bg-banner md:flex-col lgx:gap-10">
        <div class="w-author top-10 h-[100vh] p-4 sticky md:top-0 md:relative md:w-full md:h-[auto] md-w-full sm-w-full">
          <!-- <div class="bg-primary absolute w-full top-0 -left-[30%] bottom-0 clip-area"></div>  -->
          <div class="grid gap-6 md:gap-[5rem]">
            <div class="bg-black rounded-xl overflow-hidden relative blur-image mt-10">
              <img src="./assets/profile.jpeg" loading="lazy" alt="Tarik Bouich" class="w-full h-auto" width="400" height="410">
            </div>
            <div class="grid gap-5">
              <div class="text-center grid gap-2">
                <h5 class="text-2xl">Tarik Bouich</h5>
                <p>
                  <a targt="_blank" href="https://www.upwork.com/freelancers/~01db87c4ac538cb814" target="_blank" class="text-base font-extralight text-dark-75 underline">@Tarik Bouich</a>
                </p>
                <ul class="flex items-center justify-center gap-4">
                  <li>
                    <a href="https://facebook.com/tarik.bouich.3" target="_blank" aria-label="Tarik Bouich Facebook" class="w-10 h-10 rounded-full border border-paragraph border-opacity-20 dark:border-white flex items-center justify-center text-black dark:text-white dark:border-opacity-10 transition-all duration-500 hover:bg-dark-100 bg-opacity-90 dark:bg-opacity-100 hover:text-white dark:hover:bg-white dark:hover:text-black">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" fill="currentColor" class="w-3.5 h-3.5">
                        <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/tarik-bouich-8bba87136/" aria-label="Tarik Bouich Linkedin" target="_blank" class="w-10 h-10 rounded-full border border-paragraph border-opacity-20 dark:border-white flex items-center justify-center text-black dark:text-white dark:border-opacity-10 transition-all duration-500 hover:bg-dark-100 bg-opacity-90 dark:bg-opacity-100 hover:text-white dark:hover:bg-white dark:hover:text-black">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" class="w-3.5 h-3.5">
                        <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/TarikBouich" target="_blank" aria-label="Tarik Bouich Github" class="w-10 h-10 rounded-full border border-paragraph border-opacity-20 dark:border-white flex items-center justify-center text-black dark:text-white dark:border-opacity-10 transition-all duration-500 hover:bg-dark-100 bg-opacity-90 dark:bg-opacity-100 hover:text-white dark:hover:bg-white dark:hover:text-black">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" class="w-3.5 h-3.5">
                        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a href="mailto:tarik.front@gmail.com" target="_blank" aria-label="Tarik Bouich Email" class="w-10 h-10 rounded-full border border-paragraph border-opacity-20 dark:border-white flex items-center justify-center text-black dark:text-white dark:border-opacity-10 transition-all duration-500 hover:bg-dark-100 bg-opacity-90 dark:bg-opacity-100 hover:text-white dark:hover:bg-white dark:hover:text-black">
                      <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill="currentColor" class="w-3.5 h-3.5">
                        <path d="M256 64C150 64 64 150 64 256s86 192 192 192c17.7 0 32 14.3 32 32s-14.3 32-32 32C114.6 512 0 397.4 0 256S114.6 0 256 0S512 114.6 512 256v32c0 53-43 96-96 96c-29.3 0-55.6-13.2-73.2-33.9C320 371.1 289.5 384 256 384c-70.7 0-128-57.3-128-128s57.3-128 128-128c27.9 0 53.7 8.9 74.7 24.1c5.7-5 13.1-8.1 21.3-8.1c17.7 0 32 14.3 32 32v80 32c0 17.7 14.3 32 32 32s32-14.3 32-32V256c0-106-86-192-192-192zm64 192a64 64 0 1 0 -128 0 64 64 0 1 0 128 0z"></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="flex-1 md">
          <div class="grid gap-16 md:gap-8 mb-10 md:px-6">
            <h1 class="text-6xl leading-normal md:text-3xl md:leading-normal md:text-center sm:text-2xl">
              Hello, I’m 
              <span class="text-primary">Tarik Bouich</span>.<br class="sm:hidden">
              Senior <span class="bord">Front-End Developer<i></i></span><br class="sm:hidden"> Based in Morocco.
            </h1>
            <div class="flex items-center gap-20 md:grid md:grid-cols-2 md:gap-6">
              <div class="flex items-center gap-5 md:gap-3 sm:flex-col">
                <h2 class="text-7xl md:text-5xl">7</h2>
                <p class="text-base font-extralight text-paragraph sm:text-center">Years <br> of Experance
                </p>
              </div>
              <div class="flex items-center gap-5 md:gap-3 sm:flex-col">
                <h2 class="text-7xl md:text-5xl">+40</h2>
                <p class="text-base font-extralight text-paragraph sm:text-center">
                  Projects Completed
                </p>
              </div>
              <div class="md:col-span-2">
                <a
                  href="tarik.bouich.pdf"
                  download="tarik.bouich.pdf"
                  class="text-sm text-white bg-primary px-6 py-4 leading-none flex items-center justify-center rounded-lg tracking-wide hover:brightness-105"
                  >Dwonload C.V</a
                >
              </div>
            </div>
            <div id="about" class="grid gap-5 md:gap-4">
              <div class="border-b border-paragraph  border-opacity-10 pb-5">
                <h3 class="text-2xl uppercase tracking-widest font-light md:text-xl">About</h3>
              </div>
                <p class="text-lg font-extralight leading-paragraph text-paragraph">
                  ✨ Prime Quality work and Effective communication throughout the complete development process are
                    my core values.<br>

                    Are you looking for a Vue js developer, a Shopify developer, or a Senior Front-end developer? Then you're at your required destination.<br>

                    🖐 I'm a Senior Front-end developer (Vue js development) with 7 years of experience in developing pixel-perfect responsive web applications<br>

                    🖐 I'm a Senior Front-end developer (Shopify development) with 3+ years of experience in developing pixel-perfect responsive themes
               </p>
            </div>
          </div>
          <!-- Start Experiences -->
          <div class="grid gap-8 md:gap-6 py-20 md:px-6">
            <div class="border-b border-paragraph dark:border-white dark:border-opacity-20 border-opacity-20 pb-5 mb-5">
              <h3 class="text-2xl uppercase tracking-widest font-light md:text-xl">Experience Porfessional</h3>
            </div>
            <div class="grid gap-5">

              <div v-for="(experience, index) in experiences" :key="index" class="flex flex-col relative justify-between gap-2 md:gap-2 md:pb-5 border-l border-paragraph border-opacity-10 p-6">
                <span class="absolute top-6 -left-1 w-2 h-2 bg-paragraph rounded-full"></span>
                <div class="py-2 text-left text-xs text-white w-date">
                  {{  experience.period }}
                </div>
                <div class="flex-1 sm:text-center">
                  <h3 class="text-xl md:text-lg text-left">
                    <a :href="experience.link" target="_blank" class="text-primary text-md uppercase tracking-widest hover:brightness-105">{{  experience.company }}</a> 
                    - {{  experience.role }}
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <!-- End Experiences -->
          <!-- Start Skills -->
          <div class="grid gap-8 md:gap-6 py-20 pr-10 md:px-6">
            <div class="border-b border-paragraph dark:border-white dark:border-opacity-20 border-opacity-20 pb-5">
              <h3 class="text-2xl uppercase tracking-widest font-light md:text-xl">Skills</h3>
            </div>
            <div class="grid grid-cols-4 gap-7 md:grid-cols-2 md:gap-5 sm-grid-cols-1">
                <div v-for="(skill, index) in skills" :key="index" class="relative border border-paragraph dark:border-white dark:border-opacity-20 border-opacity-20 rounded-xl px-7 pt-7 md:px-5 md:pt-5">
                  <div class="flex items-center gap-5 mb-7 md:mb-5">
                      <div class="w-10 h-10">
                        <component :is="skill.icon" class="w-full h-full"/>
                      </div>
                      <h4 class="text-lg capitalize">{{  skill.title }}</h4>
                  </div>
                  <div class="h-progress relative bg-dark-100 dark:bg-white bg-opacity-10">
                      <div class="bg-dark-100 dark:bg-white h-full absolute transition-all duration-500" :data-progress="skill.progress" style="width: {{ skill.progress }}%;"></div>
                  </div>
                  <span class="absolute top-2.5 right-2.5 text-badge text-white dark:text-black bg-dark-100 dark:bg-white px-2.5 py-1 rounded-full bg-opacity-90">{{ skill.progress }}%</span>
                </div>
            </div>
          </div>
          <!-- Ens Skills -->
        </div>
      </div>
      <!--  -->

      <div id="services" class="p-10 bg-black container">
        <div class="px-2">
          <div class="border-b border-paragraph dark:border-white dark:border-opacity-20 border-opacity-20 pb-5 mb-5">
            <h3 class="text-2xl uppercase tracking-widest font-light md:text-xl">Services</h3>
          </div>
          <div class="grid gap-8 md:gap-6">
            <div class="grid grid-cols-4 gap-7 md:grid-cols-2 md:gap-5 sm-grid-cols-1">
              <div v-for="(service, index) in services" :key="index" class="relative border border-paragraph dark:border-white dark:border-opacity-30 border-opacity-30 rounded-xl p-7 md:p-5 transition-all duration-300 hover:bg-dark-100 hover:text-white dark:hover:bg-white dark:hover:text-black hover:border-opacity-100 group scale-100 ease-in-out">
                <div class="flex flex-col gap-3 mb-2">
                  <h3 class="text-6xl md:text-5xl">{{ service.letter }}</h3>
                  <h4 class="text-lg capitalize">{{ service.title }}</h4>
                </div>
                <p class="text-base font-extralight text-paragraph group-hover:text-white dark:text-dark-75 dark:group-hover:text-black">
                  {{ service.description }}
                </p>
              </div>
            </div>
          </div> 
        </div>
      </div>
        <div id="portfolio" class="p-10 bg-black container">
          <div class="px-2">
            <div class="mb-8 md:mb-6">
              <div class="border-b border-paragraph dark:border-white dark:border-opacity-20 border-opacity-20 pb-5">
                <h3 class="text-2xl uppercase tracking-widest md:text-xl">Portfolio</h3>
              </div>
            </div>
            <div class="grid overflow-hidden grid-cols-2 gap-x-7 gap-y-10 sm-grid-cols-1 md:grid-cols-2 md:gap-y-8 md:gap-x-6">
              <div v-for="(project, key) in projects" :key="key" class="relative group">
                <div class="h-project overflow-hidden rounded-xl bg-dark-100 border border-paragraph border-opacity-0 bg-opacity-10 dark:border-none dark:bg-white relative md:h-80">
                  <img :src="`/projects/${project.image}`" loading="lazy" :alt="project.name" class="w-full h-full object-cover rounded-xl object-top">
                </div>
                <div class="mt-7 px-2">
                  <ul class="flex items-center flex-wrap gap-x-2 gap-y-2.5 mb-4">
                    <li v-for="(skill, index) in project.skills" class="dark:text-black dark:bg-white text-white bg-dark-100 bg-opacity-90 dark:bg-opacity-100 py-1 px-3 rounded-lg text-xs tracking-wide" :key="index">{{ skill }}</li>
                  </ul>
                  <div class="flex items-center justify-between">
                    <h4 class="leading-none text-lg text-black dark:text-white font-medium tracking-wider transition-colors group-hover:text-primary">{{ project.name }} </h4>
                  </div>
                </div>
                <a :href="project.link" target="_blank" :aria-label="project.name" class="absolute inset-0 z-10"></a>
              </div>
            </div>
          </div>
        </div>
      <div id="testimonials" class="p-10 bg-black container">
        <div class="px-2">
          <div class="mb-8 md:mb-6">
            <div class="border-b border-paragraph dark:border-white dark:border-opacity-20 border-opacity-20 pb-5">
              <h3 class="text-2xl uppercase tracking-widest font-light md:text-xl">Testimonials</h3>
            </div>
          </div>
            <div>
              <swiper-container
                  :slides-per-view="3"
                  :space-between="24"
                  :loop="true"
                  :lazy="true"
                  :autoplay="{
                    delay: 6000,
                    disableOnInteraction: false
                  }"
                  :breakpoints= "{
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 28,
                    },
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 28,
                    }
                  }"
                >
                <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
                  <div class="relative border border-paragraph dark:border-white dark:border-opacity-20 border-opacity-20 rounded-xl p-7 estimonials-shadow overflow-hidden md:p-5 h-[495px] overflow-y-scroll">
                    <div class="flex items-center gap-7 md:gap-5">
                      <div class="w-24 h-24 bg-primary rounded-lg overflow-hidden relative">
                        <img :src="`/testimonials/${testimonial.author.image}`" loading="lazy" :alt="testimonial.author.name" class="w-full h-full object-cover object-center absolute">
                      </div>
                      <div class="flex-1">
                        <h4 class="text-primary text-2xl md:text-xl mb-2.5 leading-none">{{ testimonial.author.name }}</h4>
                        <span class="text-base text-paragraph dark:text-dark-75">{{ testimonial.author.title }}</span>
                      </div>
                    </div>
                    <div class="mt-7 mb-4 md:mt-5 md:mb-3">
                      <p class="text-lg text-paragraph dark:text-dark-75 font-extralight md:text-base">{{ testimonial.quote }}</p>
                    </div>
                    <div class="flex items-center justify-between">
                      <div class="flex items-center gap-2.5">
                        <div class="flex items-center gap-0.5">
                          <span class="text-primary w-4 h-4" v-for="(star, index) in testimonial.reviews" :key="index">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="w-full h-full">
                              <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                            </svg>
                          </span>
                        </div>
                        <span class="text-xs text-paragraph dark:text-dark-75 leading-none pt-1">5 reviews</span>
                      </div>
                    </div>
                  </div>
                </swiper-slide>
              </swiper-container>
          </div> 
        </div>
      </div>
      
      <div id="contact" class="p-10 bg-black relative container">
        <div class="px-2">
          <div class="mb-8 md:mb-6">
            <div class="border-b border-paragraph dark:border-white dark:border-opacity-20 border-opacity-20 pb-5">
              <h3 class="text-2xl uppercase tracking-widest font-light md:text-xl">Get In Touch</h3>
            </div>
          </div>
          <div class="flex items-start justify-between gap-10 md:flex-col md:gap-8">
            <div class="w-full">
              <h2 class="text-5xl mt-4 mb-4 leading-tight md:text-4xl md:leading-tight">Let's collaborate to create outstanding web experiences.</h2>
              <p class="text-paragraph dark:text-dark-75 font-extralight text-base leading-normal mb-10 md:mb-6">If you would like to work with us or just want to get in touch, we'd love <br> to hear from you! </p>
              <a href="//api.whatsapp.com/send?phone=212608630996" target="_blank" class="text-primary text-3xl font-medium underline md:text-2xl">+212 608630996</a>
            </div>
            <div class="w-full">
              <form @submit.prevent="sendMessage" class="grid gap-7 md:gap-5">
                <div class="flex items-center gap-7 md:flex-col md:gap-5">
                  <div class="flex-1 md:w-full">
                    <input
                      v-model="form.name"
                      type="text"
                      class="border border-paragraph dark:border-white dark:border-opacity-20 border-opacity-10 rounded-lg outline-none bg-transparent p-4 w-full placeholder:text-black dark:placeholder:text-white placeholder:text-opacity-30 placeholder:font-light duration-500 transition-all focus:border-opacity-100"
                      placeholder="Name"
                      required
                    />
                  </div>
                  <div class="flex-1 md:w-full">
                    <input
                      v-model="form.from_name"
                      type="email"
                      class="border border-paragraph dark:border-white dark:border-opacity-20 border-opacity-10 rounded-lg outline-none bg-transparent p-4 w-full placeholder:text-black dark:placeholder:text-white placeholder:text-opacity-30 placeholder:font-light duration-500 transition-all focus:border-opacity-100"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
                <div class="flex-1">
                  <input
                    v-model="form.subject"
                    type="text"
                    class="border border-paragraph dark:border-white dark:border-opacity-20 border-opacity-10 rounded-lg outline-none bg-transparent p-4 w-full placeholder:text-black dark:placeholder:text-white placeholder:text-opacity-30 placeholder:font-light duration-500 transition-all focus:border-opacity-100"
                    placeholder="Subject"
                  />
                </div>
                <div class="flex-1">
                  <textarea
                    v-model="form.message"
                    class="border border-paragraph dark:border-white dark:border-opacity-20 border-opacity-10 rounded-lg outline-none bg-transparent p-4 w-full placeholder:text-black dark:placeholder:text-white placeholder:text-opacity-30 placeholder:font-light duration-500 transition-all focus:border-opacity-100"
                    rows="8"
                    placeholder="Message"
                    required
                  />
                </div>
                <div class="flex-1">
                  <button
                    type="submit"
                    class="relative overflow-hidden border border-paragraph dark:border-white dark:border-opacity-20 border-opacity-10 uppercase text-black dark:text-white tracking-widest bg-transparent px-4 py-5 leading-none flex items-center justify-center rounded-lg w-full group transition-colors duration-500 dark:hover:text-black hover:text-black h-14 outline-none"
                    :class="{ 'sending cursor-not-allowed': sending }"
                  >
                    Send a message
                    <span
                      v-if="!sending"
                      class="absolute inset-0 w-1.5 bg-primary transition-all duration-500 group-hover:w-full -z-5"
                    ></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 -z-10 pointer-events-none bg-center bg-no-repeat"></div>
      </div>
      <!--  -->
    </div>
  </section>
</main>
  <footer class="border-t border-paragraph dark:border-white dark:border-opacity-10 border-opacity-10 py-7 md:py-5">
    <div class="container">
      <span class="leading-none flex items-center justify-center text-center gap-1 text-paragraph dark:text-dark-75">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="w-3.5 h-3.5 md:w-3 md:h-3">
          <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"></path>
        </svg>
        <span class="font-extralight text-sm md:text-xs md:text-center">2024 Tarik Bouich
        </span>
      </span>
    </div>
  </footer>
</div>
</template>