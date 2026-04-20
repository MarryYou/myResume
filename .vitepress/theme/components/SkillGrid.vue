<script setup lang="ts">
defineProps<{
  categories: Array<{
    name: string
    skills: string[]
  }>
}>()
</script>

<template>
  <div class="skill-layout">
    <div v-for="category in categories" :key="category.name" class="skill-row">
      <div class="skill-label">{{ category.name }}</div>
      <div class="skill-list">
        <span v-for="skill in category.skills" :key="skill" class="skill-item">
          {{ skill }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.skill-layout {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.skill-row {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2rem;
  align-items: start;
  padding-bottom: 1.5rem;
  border-bottom: 1px dashed var(--minimal-border);
}

.skill-row:last-child {
  border-bottom: none;
  padding-bottom: 0;
}

@media (max-width: 768px) {
  .skill-row {
    grid-template-columns: 1fr;
    gap: 0.8rem;
  }
}

.skill-label {
  font-weight: 600;
  color: var(--vp-c-text-1);
  font-size: 1.05rem;
}

.skill-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.skill-item {
  color: var(--vp-c-text-2);
  background: var(--minimal-bg);
  border: 1px solid var(--minimal-border);
  padding: 0.3rem 0.8rem;
  border-radius: 4px;
  font-size: 0.9rem;
}
</style>
