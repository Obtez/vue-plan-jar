<template>
  <li class="plan">
    <div>
      <h3>{{ plan.title }}</h3>
      <p> {{ plan.description }} </p>
      <small> {{plan.createdBy}} </small>
    </div>
      <i class="fas fa-times" @click="$emit('delete-plan', plan.id)"></i>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Plan',
  props: {
    plan: Object,
  },
});
</script>

<style scoped>
.plan {
  width: 100%;
  border: 1px solid hsl(160, 51%, 49%);
  padding: 1rem 1.5rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

@media screen and (min-width: 768px) {
  .plan {
    width: 50%;
    margin: auto;
  }
}

@media screen
and (min-width: 1280px) {
  .plan {
    width: 25%;
  }
}

.plan i {
  align-self: center;
  color: hsl(360, 83%, 62%);
  cursor: pointer;
}

.plan h3 {
  margin-bottom: .5rem;
}

.plan p {
  font-style: italic;
}

.plan small {
  color: #666;
}
</style>
