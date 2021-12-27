<template>
  <div class="dashboard">
    <h3 class="dashboard__header">Round: {{ round }}</h3>
    <button class="dashboard__start" @click="startGame">Start</button>
    <ul class="dashboard__list">
      Game options:
      <li class="dashboard__list-item">
        <input type="radio" name="" id="normal" />
        <label for="normal">Normal</label>
      </li>
      <li class="dashboard__list-item">
        <input type="radio" name="" id="sound" />
        <label for="sound">Sounds Only</label>
      </li>
      <li class="dashboard__list-item">
        <input type="radio" name="" id="light" />
        <label for="light">Light Only</label>
      </li>
      <li class="dashboard__list-item">
        <input type="radio" name="" id="free" />
        <label for="free">Free Board</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DashBoard',
  props: ['gameIsStarted', 'startGame', 'round'],
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
</style>
