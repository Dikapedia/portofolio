<script setup>
import { ref } from 'vue'
import { personalInfo } from '../data/portfolioData'
import profileImg from '../assets/profile.webp'
import { useI18n } from '../useI18n'

const { t } = useI18n()

const photoColored = ref(false)

const techBadges = ['React', 'Next.js', 'Tailwind CSS', 'TypeScript', 'Vue']
</script>

<template>
  <section
    id="home"
    class="relative min-h-screen pt-24 pb-14 md:pt-28 md:pb-16 flex items-center overflow-hidden"
  >
    <!-- Ambient Background Glow -->
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(37,99,235,0.14),_transparent_60%)] pointer-events-none"></div>

    <div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10 w-full">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-6 text-center lg:text-left">
          <p class="text-xs sm:text-sm font-medium tracking-[0.25em] uppercase text-slate-400">
            {{ t('hero.hello') }}
          </p>

          <h1 class="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
            <span class="text-white">HARDIKA</span><br />
            <span class="bg-gradient-to-r from-[#cfdcf2] via-[#a9c3ea] to-[#7fa6e2] bg-clip-text text-transparent">
              PANGESTU
            </span>
          </h1>

          <p class="text-base sm:text-[17px] text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            {{ t('hero.bio') }}
          </p>

          <div class="inline-flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
            <a
              href="#projects"
              class="inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-slate-900 bg-[#a9c4f5] border border-slate-700 press-glow"
            >
              <span class="relative z-10">{{ t('hero.explore') }}</span>
            </a>
            <a
              href="#contact"
              class="fill-btn fill-up inline-flex items-center justify-center px-6 py-3 rounded-lg text-sm font-semibold text-slate-100 bg-[#0b1120]/70 border border-slate-700 transition-colors duration-300 [@media(hover:hover)]:hover:text-slate-900 [@media(hover:hover)]:hover:border-[#a9c4f5] press-glow"
            >
              <span class="relative z-10">{{ t('hero.contactMe') }}</span>
            </a>
          </div>

          <div class="pt-6 border-t border-slate-800/80">
            <p class="text-[11px] font-medium tracking-[0.2em] uppercase text-slate-500 mb-3">
              {{ t('hero.coreTech') }}
            </p>
            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span
                v-for="badge in techBadges"
                :key="badge"
                class="px-3 py-1.5 rounded-md text-xs font-medium text-slate-300 bg-[#0a1220] border border-slate-800"
              >
                {{ badge }}
              </span>
            </div>
          </div>
        </div>

        <!-- Right Photo -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative w-full max-w-[340px] lg:-translate-y-8">
            <div class="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent pointer-events-none z-10"></div>
            <img
              :src="profileImg"
              :alt="personalInfo.name"
              @click="photoColored = !photoColored"
              :class="photoColored ? 'grayscale-0' : 'grayscale'"
              class="w-full aspect-[5/6] object-cover object-center cursor-pointer transition-[filter] duration-500 ease-out [@media(hover:hover)]:hover:grayscale-0"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
