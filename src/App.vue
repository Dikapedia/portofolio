<script setup>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import ProjectsTimeline from './components/ProjectsTimeline.vue'
import ContactCTA from './components/ContactCTA.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-dark-950 text-slate-100 flex flex-col font-sans selection:bg-brand-cyan/25 selection:text-brand-cyan">
    <!-- Navbar Header -->
    <Navbar />

    <!-- Main Content Sections -->
    <main class="flex-1">
      <Hero />
      <About />
      <ProjectsTimeline />
      <ContactCTA />
    </main>

    <!-- Footer -->
    <Footer />
  </div>
</template>
