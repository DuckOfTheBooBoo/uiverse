<template>
  <section class="team-section">
    <div class="team-header">
      <div class="team-header-text">
        <h2 class="section-title">MEET OUR</h2>
        <h3 class="section-subtitle">FOUNDER & CO-FOUNDER</h3>
      </div>
    </div>

    <div class="w-full overflow-hidden">
      <div class="whitespace-nowrap animate-marquee">
        <img
          src="/long.png"
          alt=""
          class="inline-block w-auto max-w-none h-48 sm:h-32 md:h-60 lg:h-72 object-contain"
        />
        <img
          src="/long.png"
          alt=""
          class="inline-block w-auto max-w-none h-48 sm:h-32 md:h-60 lg:h-72 object-contain"
        />
      </div>
    </div>

    <div class="profiles-container">
      <div class="profile-card">
        <div class="profile-image-wrapper">
          <img
            src="/FOTO-FREE.png"
            alt="Free"
            class="profile-image"
          />
        </div>
        <div class="profile-content">
          <h3 class="profile-name">Meet Free</h3>
          <p class="profile-description">"Soto Mie Bakso Kuah Satu"</p>
        </div>
      </div>
      <div class="profile-card">
        <div class="profile-image-wrapper">
          <img src="/FOTO-NEY.png" alt="Meet Ney" class="profile-image" />
        </div>
        <div class="profile-content">
          <h3 class="profile-name">Meet Ney</h3>
          <p class="profile-description">Cool Pose</p>
        </div>
      </div>
    </div>

    <div class="decorative-flowers">
      <div class="flower left"></div>
      <div class="flower right"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface TeamMember {
  id: number;
  name: string;
  image: string;
}

interface Profile {
  id: number;
  name: string;
  image: string;
  description: string;
  blobClass: string;
}

const profiles: Profile[] = [
  {
    id: 1,
    name: "Meet Free",
    image: "/image 45.png",
    description: "",
    blobClass: "blob-left",
  },
  {
    id: 2,
    name: "Meet Ney",
    image: "/image 49.png",
    description: "",
    blobClass: "blob-right",
  },
];
</script>

<style scoped>
.team-section {
  background-color: #fff7ea;
  padding: 4rem 0rem;
  position: relative;
  overflow: hidden;
}

.team-header {
  text-align: center;
  margin-bottom: 3rem;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
}

.team-header-text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 900;
  color: #ab007b;
  margin: 0;
  letter-spacing: 0.05em;
  font-family: "Candal";
}

.section-subtitle {
  font-size: 2rem;
  font-weight: 900;
  color: #e91e8c;
  margin: 0;
  letter-spacing: 0.05em;
  font-family: "Candal";
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto 4rem;
}

.team-card {
  border-radius: 15px;
  overflow: hidden;
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-5px);
}

.team-image img {
  width: 100%;
  height: auto;
  display: block;
}

.profiles-container {
  max-width: 1200px;
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
}

.profile-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.profile-image-wrapper {
  position: relative;
  width: 300px;
  height: 400px;
  margin-bottom: 2rem;
}

.profile-image {
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
  z-index: 2;
}

.profile-content {
  max-width: 400px;
}

.profile-name {
  font-size: 1.8rem;
  font-weight: 900;
  color: #ab007b;
  margin: 0 0 1rem 0;
  font-family: "Candal";
}

.profile-description {
  color: #721949;
  line-height: 1.6;
  font-size: 0.95rem;
  margin: 0;
  word-break: break-word;
  font-family: "Montserrat";
}

@media (max-width: 1024px) {
  .team-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .profiles-container {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }

  .section-subtitle {
    font-size: 1.5rem;
  }

  .team-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .profile-image-wrapper {
    width: 250px;
    height: 350px;
  }

  .decorative-star {
    width: 35px;
    height: 35px;
  }
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 10s linear infinite;
}
</style>
