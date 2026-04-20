<script setup lang="ts">
defineProps<{
  role: string
  company: string
  period: string
  description: string
}>()
</script>

<template>
  <div class="minimal-experience">
    <div class="exp-header">
      <div class="exp-title-group">
        <h3 class="role">{{ role }}</h3>
        <span class="company">{{ company }}</span>
      </div>
      <div class="period">{{ period }}</div>
    </div>
    <div class="description" v-html="description" v-if="description"></div>
  </div>
</template>

<style scoped>
.minimal-experience {
  border: 1px solid var(--minimal-border);
  background: transparent;
  border-radius: 8px;
  padding: 1.5rem 2rem;
  margin-bottom: 1.5rem;
  transition: border-color 0.2s;
}
.minimal-experience:hover {
  border-color: var(--vp-c-brand-1);
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 1rem;
}

.exp-title-group {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
}

.role {
  margin: 0 !important;
  font-size: 1.25rem !important;
  font-weight: 600 !important;
  color: var(--vp-c-text-1) !important;
}

.company {
  font-size: 1rem;
  font-weight: 500;
  color: var(--vp-c-text-2);
}

.period {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 0.85rem;
  color: var(--vp-c-text-3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.description {
  color: var(--vp-c-text-1);
  line-height: 1.8;
  font-size: 1rem;
}

.description :deep(ul) {
  margin: 0;
  padding-left: 1.2rem;
}
.description :deep(li) {
  margin-bottom: 0.4rem;
}
</style>
