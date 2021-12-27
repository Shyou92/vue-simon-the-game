<template>
  <h3>Game is over!</h3>
  <p>You have completed {{ round }} {{ amountOfRoundsMessage }}</p>
  <button class="restart" @click="restart">Try again</button>
</template>

<script>
export default {
  name: 'gameIsOver',
  props: ['round', 'restart'],
  computed: {
    amountOfRoundsMessage() {
      return this.round > 1 ? 'rounds' : 'round';
    },
  },
};
</script>

<style scoped>
.restart {
  width: 175px;
  height: 75px;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: antiquewhite;
  border-radius: 15px;
  font-size: 24px;
  color: rgb(146, 129, 129);
}
</style>
