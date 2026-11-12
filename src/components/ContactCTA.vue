<script setup>
import { ref, onUnmounted } from 'vue'
import { personalInfo } from '../data/portfolioData'
import { Mail, MapPin, Copy, Check, Github, Linkedin, Instagram, AtSign } from 'lucide-vue-next'
import { useI18n } from '../useI18n'

const { t } = useI18n()

const copied = ref(false)
let copyTimer

onUnmounted(() => {
  clearTimeout(copyTimer)
})

const socials = [
  { name: 'GitHub', href: personalInfo.contacts.github, icon: Github },
  { name: 'LinkedIn', href: personalInfo.contacts.linkedin, icon: Linkedin },
  { name: 'Instagram', href: personalInfo.contacts.instagram, icon: Instagram },
  { name: 'Email', href: `mailto:${personalInfo.contacts.email}`, icon: AtSign }
]

const copyEmail = async () => {
  try {
    await navigator.clipboard.writeText(personalInfo.contacts.email)
  } catch {
    const textarea = document.createElement('textarea')
    textarea.value = personalInfo.contacts.email
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
  }

  copied.value = true
  clearTimeout(copyTimer)
  copyTimer = setTimeout(() => {
    copied.value = false
  }, 2000)
}
</script>

<template>
  <section id="contact" class="relative overflow-hidden bg-dark-950 pt-36 pb-16 md:pt-40 md:pb-20">

    <div class="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
      <div class="flex flex-col items-center text-center">
        <!-- Availability Badge -->
        <div class="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-[#0b1220]/70 px-4 py-2 text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-300">
          <span class="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
          <span>{{ t('contact.available') }}</span>
        </div>

        <!-- Headline -->
        <h2 class="mt-8 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-100 leading-[1.1]">
          {{ t('contact.headline1') }}<br />
          <span class="bg-gradient-to-r from-[#b9cdea] to-[#86abe4] bg-clip-text text-transparent">{{ t('contact.headline2') }}</span>
        </h2>

        <!-- Description -->
        <p class="mt-7 max-w-3xl text-base sm:text-[17px] text-slate-300/90 leading-relaxed">
          {{ t('contact.descLine1') }}<br class="hidden sm:block" />
          {{ t('contact.descLine2') }}<br class="hidden sm:block" />
          {{ t('contact.descLine3') }}
        </p>

        <!-- Inbox Note -->
        <p class="mt-8 inline-flex max-w-full justify-center text-center rounded-full border border-white/5 bg-[#0d1626]/80 px-5 py-2.5 text-[11px] sm:text-xs text-slate-300">
          {{ t('contact.inbox') }}
        </p>

        <!-- Contact Info -->
        <div class="mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3">
          <div class="inline-flex max-w-full flex-wrap items-center justify-center gap-3 rounded-full border border-slate-700/60 bg-[#0b1220]/70 px-5 py-3 text-sm text-slate-200">
            <Mail class="w-4 h-4 text-slate-300 shrink-0" />
            <a :href="`mailto:${personalInfo.contacts.email}`" class="break-all hover:text-white transition-colors">
              {{ personalInfo.contacts.email }}
            </a>
            <button
              type="button"
              @click="copyEmail"
              class="inline-flex items-center gap-1 border-l border-slate-700/70 pl-3 text-[11px] font-medium text-slate-400 hover:text-white transition-colors focus:outline-none"
            >
              <component :is="copied ? Check : Copy" class="w-3.5 h-3.5" />
              <span>{{ copied ? t('contact.copied') : t('contact.copy') }}</span>
            </button>
          </div>

          <div class="inline-flex max-w-full flex-wrap items-center justify-center gap-2.5 rounded-full border border-slate-700/60 bg-[#0b1220]/70 px-5 py-3 text-sm text-slate-200">
            <MapPin class="w-4 h-4 text-slate-300 shrink-0" />
            <span>{{ personalInfo.location }}</span>
            <span class="w-1 h-1 rounded-full bg-sky-400"></span>
            <span class="text-[11px] text-slate-400">{{ personalInfo.timezone }}</span>
          </div>
        </div>

        <!-- Social Channels -->
        <div class="mt-24 md:mt-28">
          <p class="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            {{ t('contact.connect') }}
          </p>
          <div class="mt-6 flex items-center justify-center gap-5">
            <a
              v-for="social in socials"
              :key="social.name"
              :href="social.href"
              :aria-label="social.name"
              :target="social.name === 'Email' ? undefined : '_blank'"
              :rel="social.name === 'Email' ? undefined : 'noopener noreferrer'"
              class="flex h-11 w-11 items-center justify-center rounded-full border border-slate-700/60 bg-[#0b1220]/60 text-slate-200 hover:border-slate-500 hover:bg-slate-800/80 hover:text-white transition-all duration-200"
            >
              <component :is="social.icon" class="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
