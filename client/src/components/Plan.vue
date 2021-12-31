<template>
  <li class="plan">
    <div>
      <h3>{{ plan.title }}</h3>
      <p> {{ plan.description }} </p>
      <small> {{plan.createdBy}} </small>
    </div>
      <i class="fas fa-times" @click="deletePlan"></i>
  </li>
</template>

<script lang="ts">
import { ObjectId } from 'mongoose';
import { defineComponent } from 'vue';

interface Plan {
  _id: ObjectId;
  title: string;
  description: string;
  createdBy: string;
}

export default defineComponent({
  name: 'Plan',
  props: {
    plan: Object,
  },
  methods: {
    deletePlan(plan: Plan) {
      const planData = this.plan;
      if (planData) {
        const { _id } = planData;
        this.$emit('delete-plan', _id);
      } else {
        console.log('No plan data');
      }
    },
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
