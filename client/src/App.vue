<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <main>
    <AddPlan @add-plan="addPlan" />
    <Plans @delete-plan="deletePlan" v-show="!loading" :plans="plans" />
  </main>
  <!-- <router-view /> -->
</template>

<script lang="ts">
import { ObjectId } from 'mongoose';
import { defineComponent } from 'vue';
import Plans from '@/components/Plans.vue';
import AddPlan from '@/components/AddPlan.vue';

interface Plan {
  _id: ObjectId;
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
      const res = await fetch('http://localhost:5020/api/plans');
      const data = await res.json();

      return data;
    },

    async addPlan(plan: Plan) : Promise<void> {
      const res = await fetch('http://localhost:5020/api/plans', {
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

    async deletePlan(id: ObjectId): Promise<void> {
      console.log(id);
      const res = await fetch(`http://localhost:5020/api/plans/${id}`, {
        method: 'DELETE',
      });

      if (res.status === 200) {
        const updPlans = this.plans.filter((plan: Plan) => {
          const { _id } = plan;
          return _id !== id;
        });
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
