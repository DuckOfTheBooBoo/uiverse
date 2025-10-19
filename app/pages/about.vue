<template>
  <section class="about-section">
    <div class="about-container">
      <div class="about-content">

        <h2 class="section-title">About Us</h2>
        <div class="about-text">
          <p>
            UIverse Magazine Project is a digital media project in the form of a web-based magazine. It was created and launched on January 2, 2025, by Diva Aldilla Putri Damaswara, a student of the Russian Studies at Universitas Indonesia, class of 2023. The project’s goal is to share many kinds of stories, achievements, creations, innovations, and inspiring journeys of Universitas Indonesia students. The name “UIverse” comes from “UI” (Universitas Indonesia) and “Universe,” which shows the academic, social, and creative life of UI students. As an independent project, UIverse is not part of any organization and is made for the whole UI community. It shares different sides of student life, such as personal branding stories, academic and non-academic achievements, and topics about learning and self-growth. With a creative concept, this project also becomes a place for students to express ideas, share knowledge, and innovate, as well as a space for networking by inviting speakers and mentors from inside and outside UI, and opening opportunities for future collaborations.
          </p>
        </div>
      </div>

      <div class="about-image">
        <div class="decorative-blob">
          <img src="/team.webp" alt="Team photo" />
        </div>
      </div>
    </div>
  </section>

  <VisionMission />

  <TeamSection />
</template>

<script setup lang="ts">
import VisionMission from '~/components/VisionMission.vue';

</script>

<style scoped>
.about-section {
  background-color: #FFF7EA;
  padding: 4rem 2rem;
  position: relative;
  overflow: hidden;
}

.about-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.about-content {
  position: relative;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #AB007B;
  margin: 0 0 1.5rem 0;
  font-family: 'Candal';
}

.about-text {
  text-align: justify;
  line-height: 1.6;
}

.about-text p {
  color: #000;
  font-size: 0.95rem;
  margin: 0;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 1rem;
  color: #721949;
}

.about-image {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.decorative-blob {
  position: relative;
  z-index: 2;
}

.decorative-blob img {
  width: 100%;
  height: auto;
  display: block;
}

.decorative-star {
  position: absolute;
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #e91e8c, #6366f1);
  clip-path: polygon(
    50% 0%,
    61% 35%,
    98% 35%,
    68% 57%,
    79% 91%,
    50% 70%,
    21% 91%,
    32% 57%,
    2% 35%,
    39% 35%
  );
}

.decorative-star.top-left {
  top: 0;
  left: 0;
  transform: rotate(15deg);
}

.decorative-star.top-right {
  top: 20px;
  right: 20px;
  transform: rotate(-20deg);
  width: 30px;
  height: 30px;
}

.decorative-star.bottom-right {
  bottom: 40px;
  right: 40px;
  transform: rotate(30deg);
  width: 35px;
  height: 35px;
}

@media (max-width: 968px) {
  .about-container {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .section-title {
    font-size: 2rem;
  }

  .about-text p {
    font-size: 0.9rem;
  }
}
</style>
