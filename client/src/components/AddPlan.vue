<template>
  <form @submit="handleSubmit" class="add-plan-form">
    <div class="form-group">
      <label for="title">Title</label>
      <input
      @change="handleChange"
      :style="{ borderColor: this.errors.title ? 'red' : '' }"
      type="text"
      v-model="title"
      name="title"
      id="title"
      required
      />
    </div>

    <div class="form-group">
      <label for="Description">Description</label>
      <input
      @change="handleChange"
      :style="{ borderColor: this.errors.description ? 'red' : '' }"
      type="text"
      v-model="description"
      name="description"
      id="description"
      required
      />
    </div>

    <div class="form-group">
      <label for="createdBy">Created By</label>
      <input
      @change="handleChange"
      :style="{ borderColor: this.errors.createdBy ? 'red' : '' }"
      type="text"
      v-model="createdBy"
      name="createdBy"
      id="createdBy"
      required
      />
    </div>

    <input type="submit" value="Add Plan" />
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface NewPlan {
  title: string;
  description: string;
  createdBy: string;
}

interface Errors {
  title: boolean;
  description: boolean;
  createdBy: boolean;
}

interface Data {
  title: string;
  description: string;
  createdBy: string;
  errors: Errors;
}

class Plan {
  title: string;

  description: string;

  createdBy: string;

  constructor(title: string, description: string, createdBy: string) {
    this.title = title;
    this.description = description;
    this.createdBy = createdBy;
  }
}

export default defineComponent({
  name: 'AddPlan',
  data(): Data {
    return {
      title: '',
      description: '',
      createdBy: '',
      errors: {
        title: false,
        description: false,
        createdBy: false,
      },
    };
  },
  methods: {
    handleChange(e: Event) {
      const target = e.target as HTMLInputElement;
      const { name } = target;
      switch (name) {
        case 'title':
          this.errors.title = false;
          break;

        case 'description':
          this.errors.description = false;
          break;

        case 'createdBy':
          this.errors.createdBy = false;
          break;

        default:
          break;
      }
    },

    handleSubmit(e: Event) {
      e.preventDefault();
      if (!this.title.trim()) {
        this.errors.title = true;
      }

      if (!this.description.trim()) {
        this.errors.description = true;
      }

      if (!this.createdBy.trim()) {
        this.errors.createdBy = true;
      }

      if (
        !this.createdBy.trim()
      || !this.description.trim()
      || !this.title.trim()
      ) {
        return;
      }

      const newPlan: NewPlan = new Plan(this.title, this.description, this.createdBy);

      this.$emit('add-plan', newPlan);

      this.title = '';
      this.description = '';
      this.createdBy = '';
    },
  },
});
</script>

<style scoped>
.add-plan-form {
  width: 100%;
  margin-top: 20px;
}

@media screen
and (min-width: 768px) {
  .add-plan-form {
    width: 50%;
  }
}

@media screen
and (min-width: 1024px) {
  .add-plan-form {
    width: 33%;
  }
}

@media screen
and (min-width: 1280px) {
  .add-plan-form {
    width: 25%;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  margin-bottom: 0.5rem;
}

.form-group input {
  margin-bottom: 1rem;
  padding: .5rem 1rem;
  border: 1px solid hsl(160, 51%, 49%);
  border-radius: 4px;
}

input[type=submit] {
  width: 100%;
  padding: .5rem;
  font-size: 1rem;
  font-weight: 700;
  background: hsl(160, 51%, 49%);
  border: none;
  border-radius: 4px;
  color: #fff;
}
</style>
