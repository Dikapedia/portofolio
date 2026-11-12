<script setup>
import { ref } from 'vue'
import { projects } from '../data/portfolioData'
import ProjectCard from './ProjectCard.vue'
import ProjectModal from './ProjectModal.vue'
import { FolderGit2 } from 'lucide-vue-next'
import { useI18n } from '../useI18n'

const { t, tp } = useI18n()

const selectedProject = ref(null)
const isModalOpen = ref(false)

const openModal = (project) => {
  selectedProject.value = project
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  selectedProject.value = null
}
</script>

<template>
  <section id="projects" class="py-24 relative overflow-hidden bg-dark-950">
    <!-- Ambient Blur -->
    <div class="absolute top-1/3 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-10 left-10 w-80 h-80 bg-brand-blue/10 rounded-full blur-3xl pointer-events-none"></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Title Header -->
      <div class="text-center max-w-3xl mx-auto mb-14 space-y-3">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-cyan/10 border border-brand-cyan/20 text-xs font-semibold text-brand-cyan tracking-wider uppercase">
          <FolderGit2 class="w-3.5 h-3.5" />
          <span>{{ t('timeline.showcase') }}</span>
        </div>
        <h2 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          PROJE<span class="text-brand-cyan">CTS</span>
        </h2>
        <p class="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
          {{ t('timeline.intro') }}
        </p>

      </div>

        <!-- Alternating Vertical Timeline Container -->
        <div class="relative mt-10">
        <!-- Center Vertical Glowing Timeline Line (Desktop) -->
        <div class="hidden lg:block absolute left-1/2 top-4 bottom-12 -translate-x-1/2 w-0.5 bg-gradient-to-b from-brand-cyan via-brand-blue/50 to-slate-800 pointer-events-none"></div>

        <!-- Left Vertical Timeline Line (Mobile/Tablet) -->
        <div class="lg:hidden absolute left-4 sm:left-6 top-4 bottom-12 w-0.5 bg-gradient-to-b from-brand-cyan via-brand-blue/50 to-slate-800 pointer-events-none"></div>

        <!-- Timeline Items List -->
        <div class="space-y-16 lg:space-y-24">
          <div
            v-for="(project, index) in projects"
            :key="project.id"
            class="relative"
          >
            <!-- ================= DESKTOP ALTERNATING LAYOUT (lg:grid) ================= -->
            <div class="hidden lg:grid lg:grid-cols-12 gap-8 items-center relative">
              <!-- Center Timeline Milestone Node Circle -->
              <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                <div class="w-6 h-6 rounded-full bg-dark-950 border-2 border-brand-cyan flex items-center justify-center shadow-glow-cyan">
                  <div class="w-2 h-2 rounded-full bg-brand-cyan animate-pulse"></div>
                </div>
              </div>

              <!-- Pattern A: Even Index (0, 2) -> Left: Title/Indicator, Right: Card -->
              <template v-if="index % 2 === 0">
                <!-- Left Side: Indicator / Milestone Text -->
                <div class="lg:col-span-5 text-right pr-6 space-y-2">

                  <h3 class="text-2xl font-bold text-white tracking-tight">
                    {{ tp(project).title }}
                  </h3>
                  <p class="text-sm text-slate-400">
                    {{ tp(project).subtitle }}
                  </p>
                  <p class="text-xs text-slate-500 font-mono">
                    {{ t('timeline.year') }}: {{ project.year }}
                  </p>
                </div>

                <!-- Spacer for center dot -->
                <div class="lg:col-span-2"></div>

                <!-- Right Side: Project Card -->
                <div class="lg:col-span-5 pl-6">
                  <ProjectCard :project="project" @open-modal="openModal" />
                </div>
              </template>

              <!-- Pattern B: Odd Index (1) -> Left: Card, Right: Title/Indicator -->
              <template v-else>
                <!-- Left Side: Project Card -->
                <div class="lg:col-span-5 pr-6">
                  <ProjectCard :project="project" @open-modal="openModal" />
                </div>

                <!-- Spacer for center dot -->
                <div class="lg:col-span-2"></div>

                <!-- Right Side: Indicator / Milestone Text -->
                <div class="lg:col-span-5 pl-6 text-left space-y-2">

                  <h3 class="text-2xl font-bold text-white tracking-tight">
                    {{ tp(project).title }}
                  </h3>
                  <p class="text-sm text-slate-400">
                    {{ tp(project).subtitle }}
                  </p>
                  <p class="text-xs text-slate-500 font-mono">
                    {{ t('timeline.year') }}: {{ project.year }}
                  </p>
                </div>
              </template>
            </div>

            <!-- ================= MOBILE / TABLET LINEAR LAYOUT (< lg) ================= -->
            <div class="lg:hidden pl-10 sm:pl-14 relative">
              <!-- Milestone dot on left vertical line -->
              <div class="absolute left-4 sm:left-6 top-8 -translate-x-1/2 z-20 flex items-center justify-center">
                <div class="w-5 h-5 rounded-full bg-dark-950 border-2 border-brand-cyan flex items-center justify-center shadow-glow-cyan">
                  <div class="w-1.5 h-1.5 rounded-full bg-brand-cyan"></div>
                </div>
              </div>

              <!-- Indicator Header Mobile -->
              <div class="mb-3 space-y-1">
                <p class="text-xs text-slate-400">
                  {{ tp(project).subtitle }}
                </p>
              </div>

              <!-- Project Card Mobile -->
              <ProjectCard :project="project" @open-modal="openModal" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Interactive Project Detail Modal -->
    <ProjectModal
      :project="selectedProject"
      :is-open="isModalOpen"
      @close="closeModal"
    />
  </section>
</template>
