<script setup>
import { X, ExternalLink, Github, CheckCircle2, Calendar } from 'lucide-vue-next'
import { ref, watch, onUnmounted, computed, nextTick } from 'vue'
import { useI18n } from '../useI18n'

const { t, tp } = useI18n()

const props = defineProps({
  project: {
    type: Object,
    default: null
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const content = computed(() => tp(props.project) || {})

const dialogEl = ref(null)

const getProjectImage = (imgName) => {
  if (!imgName) return ''
  const path = imgName.includes('.') ? imgName : `${imgName}.svg`
  return new URL(`../assets/projects/${path}`, import.meta.url).href
}

const handleKeydown = (event) => {
  if (!props.isOpen) return

  if (event.key === 'Escape') {
    emit('close')
    return
  }

  if (event.key !== 'Tab' || !dialogEl.value) return

  const items = [...dialogEl.value.querySelectorAll('a[href], button:not([disabled])')]
  if (!items.length) return

  const first = items[0]
  const last = items[items.length - 1]

  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first.focus()
  }
}

let previousOverflow = ''
let lastFocused = null

watch(
  () => props.isOpen,
  (open) => {
    if (open) {
      lastFocused = document.activeElement
      previousOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', handleKeydown)
      nextTick(() => {
        dialogEl.value?.querySelector('button')?.focus()
      })
    } else {
      document.removeEventListener('keydown', handleKeydown)
      document.body.style.overflow = previousOverflow
      const target = lastFocused
      lastFocused = null
      nextTick(() => {
        if (target && document.contains(target)) target.focus()
      })
    }
  }
)

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = previousOverflow
})
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen && project"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-dark-950/80 backdrop-blur-md"
        @click.self="emit('close')"
      >
        <div
          ref="dialogEl"
          class="relative w-full max-w-3xl rounded-3xl bg-dark-950 border border-slate-700/80 shadow-2xl overflow-hidden my-8"
          role="dialog"
          aria-modal="true"
          :aria-label="content.title"
        >
          <!-- Close Button -->
          <button
            type="button"
            @click="emit('close')"
            class="absolute top-4 right-4 z-20 p-2 rounded-full bg-dark-950/80 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-dark-900 transition-all focus:outline-none"
            :aria-label="t('modal.closeModal')"
          >
            <X class="w-5 h-5" />
          </button>

          <!-- Modal Header Image -->
          <div v-if="project.image" class="relative aspect-video w-full bg-slate-950 overflow-hidden border-b border-slate-800">
            <img
              :src="getProjectImage(project.image)"
              :alt="content.title"
              class="w-full h-full object-cover object-center"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>

            <!-- Category & Year Overlay -->
            <div class="absolute bottom-4 left-6 flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-300 border border-slate-700 backdrop-blur-md flex items-center gap-1">
                <Calendar class="w-3.5 h-3.5" />
                {{ project.year }}
              </span>
            </div>
          </div>

          <!-- Modal Body Content -->
          <div class="p-6 sm:p-8 space-y-6">
            <div class="pr-14">
              <h3 class="text-2xl sm:text-3xl font-extrabold text-white">
                {{ content.title }}
              </h3>
              <p class="text-brand-cyan text-sm sm:text-base font-medium mt-1">
                {{ content.subtitle }}
              </p>
            </div>

            <!-- Full Description -->
            <p class="text-slate-300 text-sm sm:text-base leading-relaxed">
              {{ content.fullDescription }}
            </p>

            <!-- Key Features -->
            <div class="space-y-3">
              <h4 class="text-sm font-bold uppercase tracking-wider text-slate-400">
                {{ t('modal.mainFeatures') }}
              </h4>
              <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <li
                  v-for="(feature, idx) in content.features"
                  :key="idx"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800"
                >
                  <CheckCircle2 class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Tech Tags -->
            <div class="space-y-2">
              <h4 class="text-sm font-bold uppercase tracking-wider text-slate-400">
                {{ t('modal.technologies') }}:
              </h4>
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in content.tags"
                  :key="tag"
                  class="px-3 py-1 rounded-lg text-xs font-medium bg-slate-800/80 text-slate-200 border border-slate-700"
                >
                  {{ tag }}
                </span>
              </div>
            </div>

            <!-- Action Buttons -->
            <div class="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
              <div class="flex items-center gap-3">
                <a
                  v-if="project.githubUrl"
                  :href="project.githubUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-xs sm:text-sm bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white border border-slate-700 transition-colors"
                >
                  <Github class="w-4 h-4" />
                  <span>{{ t('modal.sourceCode') }}</span>
                </a>
                <a
                  v-if="project.liveUrl"
                  :href="project.liveUrl"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-brand-blue to-brand-cyan hover:from-blue-600 hover:to-sky-400 text-white shadow-glow-cyan transition-all"
                >
                  <span>{{ t('modal.livePreview') }}</span>
                  <ExternalLink class="w-4 h-4" />
                </a>
              </div>

              <button
                type="button"
                @click="emit('close')"
                class="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium text-slate-400 hover:text-white transition-colors"
              >
                {{ t('modal.close') }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
