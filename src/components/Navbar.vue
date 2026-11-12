<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Menu, X } from 'lucide-vue-next'
import { useI18n } from '../useI18n'

const { lang, t, setLang } = useI18n()

const navLinks = computed(() => [
  { name: t('nav.home'), href: '#home' },
  { name: t('nav.about'), href: '#about' },
  { name: t('nav.projects'), href: '#projects' },
  { name: t('nav.contact'), href: '#contact' },
])

const toggleLang = () => setLang(lang.value === 'en' ? 'id' : 'en')

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const activeSection = ref('home')

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20

  const sections = ['home', 'about', 'projects', 'contact']
  for (const section of sections) {
    const el = document.getElementById(section)
    if (el) {
      const rect = el.getBoundingClientRect()
      if (rect.top <= 160 && rect.bottom >= 160) {
        activeSection.value = section
        break
      }
    }
  }
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-[#060b14]/85 backdrop-blur-md py-3' : 'bg-transparent py-5'
    ]"
  >
    <div class="max-w-6xl mx-auto px-6 lg:px-8">
      <div class="flex items-center justify-between">
        <!-- Brand -->
        <a href="#home" class="flex items-center text-slate-100 group">
          <span class="font-bold text-base tracking-[0.15em]">DIKA</span>
        </a>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-9">
          <a
            v-for="link in navLinks"
            :key="link.name"
            :href="link.href"
            :class="[
              'relative py-1 text-sm transition-colors duration-200',
              activeSection === link.href.replace('#', '')
                ? 'text-white font-medium'
                : 'text-slate-400 hover:text-slate-200'
            ]"
          >
            {{ link.name }}
            <span
              v-if="activeSection === link.href.replace('#', '')"
              class="absolute left-0 right-0 -bottom-1.5 h-px bg-slate-200"
            ></span>
          </a>
        </nav>

        <!-- Language Toggle + Download CV -->
        <div class="hidden md:flex items-center gap-2">
          <button
            type="button"
            @click="toggleLang"
            :aria-label="lang === 'en' ? 'Switch to Indonesian' : 'Switch to English'"
            class="w-9 h-9 rounded-md text-xs font-semibold tracking-wide text-slate-300 bg-[#0c1424]/70 border border-slate-700/80 hover:border-slate-500 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-1 focus:ring-slate-500"
          >
            {{ lang === 'en' ? 'ID' : 'EN' }}
          </button>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-slate-100 bg-[#0c1424]/70 border border-slate-700/80 hover:border-slate-500 hover:bg-slate-800/70 transition-colors duration-200"
          >
            {{ t('nav.viewCV') }}
          </a>
        </div>

        <!-- Mobile Toggle -->
        <button
          type="button"
          @click="toggleMobileMenu"
          :aria-expanded="isMobileMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle Menu"
          class="md:hidden p-2 rounded-xl bg-[#0c1424]/80 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 transition-colors focus:outline-none"
        >
          <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
          <X v-else class="w-6 h-6" />
        </button>
      </div>
    </div>

    <!-- Mobile Drawer -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-4"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-4"
    >
      <div
        v-if="isMobileMenuOpen"
        id="mobile-menu"
        class="md:hidden bg-[#060b14]/95 backdrop-blur-xl border-b border-slate-800 px-6 pt-4 pb-6 space-y-2 mt-3 shadow-2xl"
      >
        <a
          v-for="link in navLinks"
          :key="link.name"
          :href="link.href"
          @click="closeMobileMenu"
          :class="[
            'block px-4 py-2.5 rounded-xl text-base font-medium transition-colors',
            activeSection === link.href.replace('#', '')
              ? 'text-white bg-slate-800/60'
              : 'text-slate-300 hover:text-white hover:bg-slate-900'
          ]"
        >
          {{ link.name }}
        </a>
        <div class="pt-3 flex items-center gap-2">
          <button
            type="button"
            @click="toggleLang(); closeMobileMenu()"
            :aria-label="lang === 'en' ? 'Switch to Indonesian' : 'Switch to English'"
            class="w-12 h-12 shrink-0 rounded-md text-sm font-semibold text-slate-300 border border-slate-700/80 bg-[#0c1424]/70 hover:text-white transition-colors"
          >
            {{ lang === 'en' ? 'ID' : 'EN' }}
          </button>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeMobileMenu"
            class="flex-1 flex items-center justify-center py-3 rounded-full font-medium text-slate-100 border border-slate-700/80 bg-[#0c1424]/70 hover:bg-slate-800/70 transition-colors"
          >
            {{ t('nav.viewCV') }}
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>
