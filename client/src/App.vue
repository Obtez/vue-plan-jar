<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <AddPlan @add-plan="addPlan" />
  <Plans @delete-plan="deletePlan" v-show="!loading" :plans="plans" />
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Plans from '@/components/Plans.vue';
import AddPlan from '@/components/AddPlan.vue';

interface Plan {
  id: number;
  title: string;
  description: string;
  createdBy: string;
}

interface Data {
  loading: boolean;
  plans: Plan[];
}

export default defineComponent({
  name: 'App',
  components: {
    Plans,
    AddPlan,
  },
  data(): Data {
    return {
      loading: true,
      plans: [],
    };
  },
  methods: {
    async fetchPlans(): Promise<Plan[]> {
      const res = await fetch('/api/plans');
      const data = await res.json();

      return data;
    },

    async addPlan(plan: Plan) : Promise<void> {
      const res = await fetch('/api/plans', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(plan),
      });

      if (res.status === 201) {
        const data = await res.json();
        console.log(data);

        this.plans = [...this.plans, data];
      }
    },

    async deletePlan(id: number): Promise<void> {
      const res = await fetch(`/api/plans/${id}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        const updPlans = this.plans.filter((plan: Plan) => plan.id !== id);
        this.plans = [...updPlans];
      }
    },
  },

  async created(): Promise<void> {
    this.plans = await this.fetchPlans();
    this.loading = false;
  },
});
</script>

<style>
#app {
  padding: 0 1rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
</style>
