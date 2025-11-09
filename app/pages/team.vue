<template>
  <div class="team-page mt-10 sm:mt-0">
    <main class="team-main">
      <h1 class="page-title">Our Team</h1>

      <!-- Leadership Section -->
      <section class="leadership-section">
        <div class="leadership-grid">
          <div class="leader-card">
            <ImageFrame title="Founder & Director" subtitle="Free FIB'23" image-url="/free.webp" />
          </div>
          <div class="leader-card">
            <ImageFrame title="Co-Founder & Manager" subtitle="Ney FT'23" image-url="/Rectangle-85.jpg" />
          </div>
        </div>

        <div class="team-members-grid">
          <div class="member-card">
            <ImageFrame title="Web Developer" subtitle="Altaf FT'23" image-url="/Arajdian-Altaf-Web-Developer.webp" />
          </div>
          <div class="member-card">
            <ImageFrame title="UI/UX" subtitle="Asya FIB'23" image-url="/asya_2.jpeg" />
          </div>
        </div>
      </section>

      <!-- Editorial Team -->
      <section class="team-section">
        <h2 class="category-title">Editorial Team</h2>
        <div class="editorial-grid">
          <div class="row-wrapper row-1">
            <ImageFrame v-for="editorial in editorialGroups[1]" :key="editorial.nameAndMajor"
              :title="editorial.position" :subtitle="editorial.nameAndMajor" :image-url="editorial.imageUrl" />
          </div>
          <div class="row-wrapper row-2">
            <ImageFrame v-for="editorial in editorialGroups[2]" :key="editorial.nameAndMajor"
              :title="editorial.position" :subtitle="editorial.nameAndMajor" :image-url="editorial.imageUrl" />
          </div>
          <div class="row-wrapper row-3">
            <ImageFrame v-for="editorial in editorialGroups[3]" :key="editorial.nameAndMajor"
              :title="editorial.position" :subtitle="editorial.nameAndMajor" :image-url="editorial.imageUrl" />
          </div>
        </div>
      </section>

      <!-- Creative Media Team -->
      <section class="team-section">
        <h2 class="category-title">Creative Media Team</h2>
        <div class="creative-grid">
          <div v-for="(row, rowIdx) in creativeRows" :key="rowIdx" class="row-wrapper">
            <ImageFrame v-for="creative in row" :key="creative.nameAndMajor" :title="creative.position"
              :subtitle="creative.nameAndMajor" :image-url="creative.imageUrl" />
          </div>
        </div>
      </section>

      <!-- Marketing & Public Relation Team -->
      <section class="team-section">
        <h2 class="category-title">Marketing & Public Relation Team</h2>
        <div class="marketandpr-grid">
          <div class="row-wrapper row-1">
            <ImageFrame v-for="marketPR in marketPRGroups[1]" :key="marketPR.nameAndMajor" :title="marketPR.position"
              :subtitle="marketPR.nameAndMajor" :image-url="marketPR.imageUrl" />
          </div>
          <div class="row-wrapper row-2">
            <ImageFrame v-for="marketPR in marketPRGroups[2]" :key="marketPR.nameAndMajor" :title="marketPR.position"
              :subtitle="marketPR.nameAndMajor" :image-url="marketPR.imageUrl" />
          </div>
          <div class="row-wrapper row-3">
            <ImageFrame v-for="marketPR in marketPRGroups[3]" :key="marketPR.nameAndMajor" :title="marketPR.position"
              :subtitle="marketPR.nameAndMajor" :image-url="marketPR.imageUrl" />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { creativeTeamList, marketAndPRTeamList, editorialTeamList, type Team } from "~/static/data";

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
const marketPRGroups = computed(() => groupByRow(marketAndPRTeamList));
</script>

<style scoped>
.team-page {
  min-height: 100vh;
  background-color: #fdf8f0;
  padding: 1.5rem;
  box-sizing: border-box;
}

.team-main {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 0 6rem;
  width: 100%;
  box-sizing: border-box;
}

.page-title {
  font-size: 3rem;
  font-weight: 900;
  color: #e91e8c;
  text-align: center;
  margin: 0 0 4rem 0;
  letter-spacing: 0.05em;
  font-family: "Candal", sans-serif;
}

/* Leadership Section */
.leadership-section {
  margin-bottom: 5rem;
}

.leadership-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto 4rem;
}

.leader-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0; /* Prevent grid blowout */
}

.team-members-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
}

.member-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0; /* Prevent grid blowout */
}

/* Team Sections */
.team-section {
  margin-bottom: 5rem;
}

.category-title {
  font-size: 2rem;
  font-weight: 900;
  color: #e91e8c;
  margin: 0 0 3rem 0;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  text-align: center;
  font-family: "Candal", sans-serif;
}

/* Row Wrapper - Contains the images in each row */
.row-wrapper {
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;
  width: 100%;
}

.row-wrapper > * {
  flex: 0 1 280px;
  min-width: 0;
}

/* Editorial Team Grid - Desktop */
.editorial-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Creative Team Grid - Desktop */
.creative-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Marketing & PR Grid - Desktop */
.marketandpr-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Tablet Breakpoint - Stack some rows */
@media (max-width: 1024px) {
  .team-main {
    max-width: 900px;
  }

  .page-title {
    font-size: 2.5rem;
  }

  .category-title {
    font-size: 1.75rem;
  }

  .leadership-grid,
  .team-members-grid {
    max-width: 700px;
  }

  .row-wrapper {
    flex-wrap: wrap;
  }

  .row-wrapper > * {
    flex: 0 1 240px;
  }
}

/* Mobile Breakpoint - Full Stack */
@media (max-width: 768px) {
  .team-page {
    padding: 1rem;
  }

  .team-main {
    padding: 2rem 0 4rem;
  }

  .page-title {
    font-size: 2rem;
    margin-bottom: 3rem;
  }

  .category-title {
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  /* Stack leadership and members vertically */
  .leadership-grid,
  .team-members-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  /* Stack all team rows vertically */
  .row-wrapper {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  .row-wrapper > * {
    flex: 0 0 auto;
    width: 100%;
    max-width: 320px;
  }
}

/* Small Mobile */
@media (max-width: 480px) {
  .page-title {
    font-size: 1.75rem;
  }

  .category-title {
    font-size: 1.25rem;
  }

  .team-section {
    margin-bottom: 3rem;
  }

  .row-wrapper > * {
    max-width: 100%;
  }
}
</style>