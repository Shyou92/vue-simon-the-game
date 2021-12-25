<template>
  <div class="playfield">
    <h2 class="playfield__header">Simon Says</h2>
    <div class="container">
      <Board :soundsArray="soundsArray" :gameIsStarted="gameIsStarted" />
      <DashBoard :gameIsStarted="gameIsStarted" :startGame="startGame" />
    </div>
  </div>
</template>

<script>
import Board from './Board.vue';
import DashBoard from './DashBoard.vue';

const sound1 = new Audio(require('../assets/sounds/1.mp3'));
const sound2 = new Audio(require('../assets/sounds/2.mp3'));
const sound3 = new Audio(require('../assets/sounds/3.mp3'));
const sound4 = new Audio(require('../assets/sounds/4.mp3'));

export default {
  name: 'Playfield',
  components: {
    Board,
    DashBoard,
  },
  data() {
    return {
      soundsArray: [
        { color: 'red', sound: sound1, index: 1 },
        { color: 'blue', sound: sound2, index: 2 },
        { color: 'yellow', sound: sound3, index: 3 },
        { color: 'green', sound: sound4, index: 4 },
      ],
      gameIsStarted: false,
    };
  },
  methods: {
    startGame() {
      this.gameIsStarted = true;
    },
  },
};
</script>

<style scoped>
.playfield {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container {
  display: flex;
}
</style>
