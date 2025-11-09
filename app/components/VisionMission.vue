<template>
  <section class="vision-mission-section">
    <div class="vm-container">
      <div class="vm-card vision-card">
        <h2 class="vm-title">Vision</h2>
        <p class="vm-text">
          To be an innovative and inspiring media space for Universitas
          Indonesia students to explore, discover, and grow their potential.
          UIverse Magazine is here as a constellation of stories, ideas, and
          opportunities that are connected to help readers shine in their
          academic, professional, and social lives.
        </p>
      </div>

      <div class="vm-card mission-card">
        <h2 class="vm-title">Mission</h2>
        <p class="vm-text">
          The mission of UIverse Magazine Project is to share interviews,
          success stories, and practical tips to build strong personal branding,
          connect students with supportive communities through discussion
          forums, webinars, and online workshops, and highlight the stories,
          challenges, and achievements of UI students that are rarely exposed,
          to inspire and motivate readers.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped>

.vision-mission-section {
  background-color: #FFF7EA;
  /* padding: 4rem 2rem; */
}

.vm-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
}

.vm-card {
  /* padding: 2.5rem; */
  border-radius: 20px;
  position: relative;
  overflow: visible;
}

.vm-title {
  font-size: 2rem;
  font-weight: 900;
  color: #AB007B;
  margin: 0 0 1.5rem 0;
  font-family: 'Candal';
}

.vm-text {
  color: #000;
  line-height: 1.6;
  font-size: 0.95rem;
  text-align: justify;
  margin: 0;
  font-family: "Montserrat";
  font-weight: 600;
  color: #721949
}

@media (max-width: 968px) {
  .vm-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .vm-card {
    padding: 2rem;
  }

  .vm-title {
    font-size: 1.8rem;
  }

  .vm-text {
    font-size: 0.9rem;
  }
}
</style>
