<template>
  <ul class="plan-list">
    <div :key="plan.id" v-for="plan in plans">
      <Plan @delete-plan="$emit('delete-plan', plan.id)" :plan="plan" />
    </div>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Plan from './Plan.vue';

export default defineComponent({
  name: 'Plans',
  components: {
    Plan,
  },
  props: {
    plans: Array,
  },
  emits: ['delete-plan'],
});
</script>

<style scoped>
.plan-list {
  width: 100%;
  padding: 2rem 0;
  list-style-type: none;
}
</style>
