<template>
  <div class="dashboard">
    <h3 class="dashboard__header">Round: {{ round }}</h3>
    <button
      class="dashboard__start"
      @click="startGame"
      :disabled="gameIsStarted"
    >
      Start
    </button>
    <ul class="dashboard__list">
      Game complexity:
      <li class="dashboard__list-item" @click="changes">
        <input
          type="radio"
          name="complexity"
          v-model="selected"
          value="easy"
          checked
          :disabled="gameIsStarted"
        />
        <label for="normal">Easy</label>
      </li>
      <li class="dashboard__list-item" @click="changes">
        <input
          type="radio"
          name="complexity"
          v-model="selected"
          value="normal"
          :disabled="gameIsStarted"
        />
        <label for="sound">Normal</label>
      </li>
      <li class="dashboard__list-item" @click="changes">
        <input
          type="radio"
          name="complexity"
          v-model="selected"
          value="hard"
          :disabled="gameIsStarted"
        />
        <label for="light">Hard</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  props: ['gameIsStarted', 'startGame', 'round', 'timePaused', 'onTimeChange'],
  data() {
    return {
      timePausedMutated: this.timePaused,
      selected: 'easy',
    };
  },
  methods: {
    changes() {
      if (this.selected === 'easy') {
        this.timePausedMutated = 1500;
      } else if (this.selected === 'normal') {
        this.timePausedMutated = 1000;
      } else {
        this.timePausedMutated = 400;
      }
      this.onTimeChange(this.timePausedMutated);
    },
  },
  computed: {
    chooseDifficulty() {
      this.changes();
      return this.timePausedMutated;
    },
  },
};
</script>

<style scoped>
.dashboard {
  margin-left: 350px;
}

.dashboard__start {
  width: 5rem;
  font-size: 1.4rem;
  background-color: #6dabe8;
  box-sizing: border-box;
  border-radius: 10px;
  border: none;
  padding: 0.3rem, 0.6rem;
  cursor: pointer;
}

.dashboard__start:hover {
  opacity: 0.7;
}
.dashboard__list {
  list-style-type: none;
}
</style>
