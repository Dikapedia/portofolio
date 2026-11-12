<script setup>
import { personalInfo } from '../data/portfolioData'
</script>

<template>
  <footer class="bg-dark-950 pb-10 pt-2">
    <div class="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-center gap-2 text-[11px] sm:text-xs text-slate-400">
      <span class="w-1 h-1 rounded-full bg-slate-400"></span>
      <span class="font-semibold text-slate-200">{{ personalInfo.name }}</span>
      <span class="text-slate-600">•</span>
      <span>Rekayasa Antarmuka Pengguna &amp; AI</span>
    </div>
  </footer>
</template>
