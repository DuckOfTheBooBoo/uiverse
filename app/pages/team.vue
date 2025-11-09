<template>
  <div class="team-page">
    <main class="team-main">
      <h1 class="page-title">Our Team</h1>

      <section class="leadership-section">
        <div class="leadership-grid">
          <div class="leader-card">
            <ImageFrame title="Founder & Director" subtitle="Free FIB'23" image-url="/free.webp" />
          </div>

          <div class="leader-card">
            <ImageFrame title="Co-Founder & Manager" subtitle="Ney FT'23" image-url="/Rectangle 85.jpg" />
          </div>
        </div>

        <div class="team-members-grid">
          <div class="member-card">
            <ImageFrame title="Web Developer" subtitle="Altaf FT'23" image-url="/Arajdian Altaf - Web Developer.webp" />
          </div>

          <div class="member-card">
            <ImageFrame title="UI/UX" subtitle="Asya FIB'23" image-url="/asya_2.jpeg" />
          </div>
        </div>
      </section>

      <section class="team-categories">
        <h2 class="category-title">Editorial Team</h2>
        <section class="editorial-grid">
          <div class="first flex flex-row">
            <ImageFrame v-for="editorial in editorialGroups[1]" :key="editorial.nameAndMajor"
              :title="editorial.position" :subtitle="editorial.nameAndMajor" :image-url="editorial.imageUrl" />
          </div>
          <div class="second flex flex-row">
            <ImageFrame v-for="editorial in editorialGroups[2]" :key="editorial.nameAndMajor"
              :title="editorial.position" :subtitle="editorial.nameAndMajor" :image-url="editorial.imageUrl" />
          </div>
          <div class="third flex flex-row">
            <ImageFrame v-for="editorial in editorialGroups[3]" :key="editorial.nameAndMajor"
              :title="editorial.position" :subtitle="editorial.nameAndMajor" :image-url="editorial.imageUrl" />
          </div>
        </section>
        <h2 class="category-title">Creative Media Team</h2>
        <section class="creative-team-flex">
          <div v-for="(row, rowIdx) in creativeRows" :key="rowIdx"
            :class="['creative-flex-row', rowIdx === creativeRows.length - 1 ? 'last-row' : '']">
            <ImageFrame v-for="creative in row" :key="creative.nameAndMajor" :title="creative.position"
              :subtitle="creative.nameAndMajor" :image-url="creative.imageUrl" />
          </div>
        </section>
        <h2 class="category-title">Marketing & Public Relation Team</h2>
        <section class="marketandpr-grid">
          <div class="first flex flex-row">
            <ImageFrame v-for="marketPR in marketPRGroups[1]" :key="marketPR.nameAndMajor" :title="marketPR.position"
              :subtitle="marketPR.nameAndMajor" :image-url="marketPR.imageUrl" />
          </div>
          <div class="second flex flex-row">
            <ImageFrame v-for="marketPR in marketPRGroups[2]" :key="marketPR.nameAndMajor" :title="marketPR.position"
              :subtitle="marketPR.nameAndMajor" :image-url="marketPR.imageUrl" />
          </div>
          <div class="third flex flex-row">
            <ImageFrame v-for="marketPR in marketPRGroups[3]" :key="marketPR.nameAndMajor" :title="marketPR.position"
              :subtitle="marketPR.nameAndMajor" :image-url="marketPR.imageUrl" />
          </div>
        </section>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">

import { computed } from "vue";
import { creativeTeamList, marketAndPRTeamList, editorialTeamList, type Team } from "~/static/data";

const gridColumns = 3;
const chunkArray = (arr: Team[], chunkSize: number) => {
  const result = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    result.push(arr.slice(i, i + chunkSize));
  }
  return result;
};
const creativeRows = computed(() => chunkArray(creativeTeamList, 3));

const groupByRow = (list: Team[]) => {
  return list.reduce((acc, item) => {
    const row = item.row;
    if (!acc[row]) {
      acc[row] = [];
    }
    acc[row].push(item);
    return acc;
  }, {} as Record<number, Team[]>);
};

const editorialGroups = computed(() => groupByRow(editorialTeamList));
const creativeGroups = computed(() => groupByRow(creativeTeamList));
const marketPRGroups = computed(() => groupByRow(marketAndPRTeamList));
</script>

<style scoped>
.editorial-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
}

.editorial-grid>.first {
  grid-column: span 6 / span 6;
}

.editorial-grid>.second {
  grid-column: span 4 / span 4;
  grid-column-start: 2;
  grid-row-start: 2;
}

.editorial-grid>.third {
  grid-column: span 4 / span 4;
  grid-column-start: 2;
  grid-row-start: 3;
}

.marketandpr-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
}

.marketandpr-grid>.first {
  grid-column: span 6 / span 6;
}

.marketandpr-grid>.second {
  grid-column: span 4 / span 4;
  grid-column-start: 2;
  grid-row-start: 2;
}

.marketandpr-grid>.third {
  grid-column: span 4 / span 4;
  grid-column-start: 2;
  grid-row-start: 3;
}

.creative-team-flex {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: stretch;
}

.creative-flex-row {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.creative-grid>* {
  width: 100%;
  min-width: 0;
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
}

.dummy-cell {
  visibility: hidden;
}

.creative-grid>.first {
  grid-column: 1 / -1;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
}

.creative-grid>.second {
  grid-column: 1 / -1;
  grid-row-start: 2;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
}

.creative-grid>.third {
  grid-column: 1 / -1;
  grid-row-start: 3;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
}

.creative-grid>.fourth {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 4;
  display: flex;
  flex-direction: row;
  gap: 2rem;
  justify-content: center;
}

.team-page {
  min-height: 100vh;
  background-color: #fdf8f0;
}

.navigation {
  background-color: #fdf8f0;
  padding: 1.5rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 3rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  color: #6366f1;
  text-decoration: none;
  font-size: 1.1rem;
  font-weight: 600;
  transition: color 0.3s ease;
}

.nav-links a:hover {
  color: #e91e8c;
}

.logo {
  text-align: center;
}

.logo h1 {
  font-size: 1.5rem;
  font-weight: 900;
  line-height: 1.2;
  margin: 0;
  color: #000;
  letter-spacing: 0.05em;
}

.team-main {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem 6rem;
  position: relative;
}

.page-title {
  font-size: 3rem;
  font-weight: 900;
  color: #e91e8c;
  text-align: center;
  margin: 0 0 4rem 0;
  letter-spacing: 0.05em;
  font-family: "Candal";
}

.leadership-section {
  margin-bottom: 5rem;
}

.leadership-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 800px;
  margin: 0 auto 4rem;
}

.leader-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.leader-image-wrapper {
  width: 280px;
  height: 350px;
  margin-bottom: 1.5rem;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.leader-image-wrapper.plain {
  border: none;
}

.leader-image-wrapper.highlight {
  background: linear-gradient(135deg, #6366f1 0%, #e91e8c 100%);
  padding: 3px;
}

.leader-image-wrapper.highlight img {
  border-radius: 13px;
}

.leader-image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.leader-info {
  text-align: center;
}

.leader-title {
  font-size: 1.3rem;
  font-weight: 700;
  font-style: italic;
  color: #000;
  margin: 0 0 0.5rem 0;
}

.leader-name {
  font-size: 1.1rem;
  color: #000;
  margin: 0;
}

.team-members-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 800px;
  margin: 0 auto;
}

.member-card {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.member-image-wrapper {
  width: 280px;
  height: 320px;
  margin-bottom: 1.5rem;
  position: relative;
}

.member-image-wrapper.bordered {
  border: 6px solid #a78bfa;
  border-radius: 60% 40% 70% 30% / 60% 30% 70% 40%;
  overflow: hidden;
  background: #fff;
}

.member-image-wrapper.bordered img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.member-image-wrapper.highlight-rounded {
  background: linear-gradient(180deg, #87ceeb 0%, #b8e0f6 100%);
  border-radius: 40% 40% 20% 20% / 50% 50% 20% 20%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.placeholder-avatar {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
}

.avatar-face {
  width: 120px;
  height: 120px;
  background: #fff;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.eyes {
  display: flex;
  gap: 1.5rem;
}

.eye {
  width: 12px;
  height: 12px;
  background: #8b5a3c;
  border-radius: 50%;
}

.smile {
  width: 30px;
  height: 15px;
  border: 3px solid #ff9966;
  border-top: none;
  border-radius: 0 0 50% 50%;
}

.flowers-decoration {
  display: flex;
  gap: 1rem;
}

.flowers-decoration .flower {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, #e91e8c, #6366f1);
  clip-path: polygon(50% 0%,
      65% 35%,
      100% 50%,
      65% 65%,
      50% 100%,
      35% 65%,
      0% 50%,
      35% 35%);
}

.member-info {
  text-align: center;
}

.member-role {
  font-size: 1.2rem;
  font-weight: 700;
  font-style: italic;
  color: #000;
  margin: 0 0 0.5rem 0;
}

.member-name {
  font-size: 1rem;
  color: #000;
  margin: 0;
}

.team-categories {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
}

.category-title {
  font-size: 2rem;
  font-weight: 900;
  color: #e91e8c;
  margin: 0;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  font-family: "Candal";
}

.decorative-flowers-bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 150px;
  pointer-events: none;
  overflow: hidden;
}

.flower-left,
.flower-right {
  position: absolute;
  bottom: 0;
  width: 180px;
  height: 140px;
}

.flower-left {
  left: 20px;
  background: linear-gradient(135deg, #e91e8c33, #6366f133);
  clip-path: polygon(20% 100%,
      30% 60%,
      15% 50%,
      30% 40%,
      25% 20%,
      40% 35%,
      50% 15%,
      60% 35%,
      70% 25%,
      65% 45%,
      80% 55%,
      65% 65%,
      75% 85%,
      60% 70%,
      50% 90%,
      40% 70%);
}

.flower-right {
  right: 20px;
  background: linear-gradient(135deg, #6366f133, #e91e8c33);
  clip-path: polygon(20% 100%,
      30% 60%,
      15% 50%,
      30% 40%,
      25% 20%,
      40% 35%,
      50% 15%,
      60% 35%,
      70% 25%,
      65% 45%,
      80% 55%,
      65% 65%,
      75% 85%,
      60% 70%,
      50% 90%,
      40% 70%);
}

.last-row {
  transform: scale(0.88);
  transition: transform 0.2s;
}

.last-row>* {
  /* keep items themselves full parent width */
  max-width: 100%;
}

@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    gap: 1.5rem;
    font-size: 0.9rem;
  }

  .logo h1 {
    font-size: 1.2rem;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .leadership-grid,
  .team-members-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .leader-image-wrapper,
  .member-image-wrapper {
    width: 240px;
  }

  .category-title {
    font-size: 1.5rem;
  }
}
</style>
