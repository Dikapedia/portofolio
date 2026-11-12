<script setup>
import { Github, Eye, ArrowUpRight } from 'lucide-vue-next'

defineProps({
  project: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['open-modal'])

const getProjectImage = (imgName) => {
  if (!imgName) return ''
  const path = imgName.includes('.') ? imgName : `${imgName}.svg`
  return new URL(`../assets/projects/${path}`, import.meta.url).href
}
</script>

<template>
  <div
    class="group relative rounded-3xl overflow-hidden bg-dark-900/90 border border-slate-800/80 hover:border-brand-cyan/40 transition-all duration-300 hover:shadow-card-glow backdrop-blur-md flex flex-col h-full"
  >
    <!-- Card Preview Image -->
      <div class="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-slate-800/80" v-if="project.image">
      <img
        :src="getProjectImage(project.image)"
        :alt="project.title"
        class="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
        loading="lazy"
      />
      <!-- Vignette overlay -->
      <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-50"></div>



      <!-- Quick View Button on Image Hover -->
      <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 bg-dark-950/40 backdrop-blur-[2px]">
        <button
          type="button"
          @click="emit('open-modal', project)"
          class="inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-xs text-white bg-slate-900/90 border border-brand-cyan/50 hover:bg-brand-cyan hover:text-dark-950 transition-all shadow-lg shadow-black/50"
        >
          <Eye class="w-3.5 h-3.5" />
          <span>Lihat Detail</span>
        </button>
      </div>
    </div>

    <!-- Card Content Body -->
    <div class="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
      <div class="space-y-2">
        <h3 class="text-lg sm:text-xl font-bold text-white group-hover:text-brand-cyan transition-colors line-clamp-1">
          {{ project.title }}
        </h3>
        <p class="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
          {{ project.description }}
        </p>
      </div>

      <!-- Tech Stack Tags -->
      <div class="flex flex-wrap gap-1.5 pt-1">
        <span
          v-for="tag in project.tags.slice(0, 4)"
          :key="tag"
          class="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-800/80 text-slate-300 border border-slate-700/60"
        >
          {{ tag }}
        </span>
        <span
          v-if="project.tags.length > 4"
          class="px-2 py-0.5 rounded-md text-[11px] font-medium text-slate-500"
        >
          +{{ project.tags.length - 4 }}
        </span>
      </div>

      <!-- Card Action Buttons -->
      <div class="pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2">
        <div class="flex items-center gap-2">
          <a
            v-if="project.githubUrl"
            :href="project.githubUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-colors"
            title="Lihat Source Code"
          >
            <Github class="w-4 h-4" />
          </a>
          <a
            v-if="project.liveUrl"
            :href="project.liveUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-brand-cyan/15 hover:bg-brand-cyan/25 text-brand-cyan border border-brand-cyan/30 transition-colors"
            title="Lihat Live Demo"
          >
            <span>Live Demo</span>
            <ArrowUpRight class="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          type="button"
          @click="emit('open-modal', project)"
          class="text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          Detail &rarr;
        </button>
      </div>
    </div>
  </div>
</template>
