<template>
  <div class="playfield">
    <h2 class="playfield__header">Simon Says</h2>
    <div class="container">
      <Board
        :soundsArray="soundsArray"
        :changeState="changeState"
        :gameIsStarted="gameIsStarted"
      />
      <DashBoard
        :gameIsStarted="gameIsStarted"
        :startGame="startGame"
        :round="round"
      />
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
      round: 0,
      roundStarted: false,
      roundFinished: true,
      soundsArray: [
        { color: 'red', sound: sound1, index: 1, isActive: false },
        { color: 'blue', sound: sound2, index: 2, isActive: false },
        { color: 'yellow', sound: sound3, index: 3, isActive: false },
        { color: 'green', sound: sound4, index: 4, isActive: false },
      ],
      sequence: [],
      userSequence: [],
      gameIsStarted: false,
    };
  },
  methods: {
    startGame() {
      this.gameIsStarted = true;
      this.levelUp();
    },
    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    changeState(item) {
      item.isActive = !item.isActive;
      setTimeout(() => (item.isActive = !item.isActive), 200);
    },
    toggleRoundState() {
      this.roundStarted = !this.roundStarted;
      this.roundFinished = !this.roundFinished;
    },
    play() {
      this.sequence.forEach((item, index) => {
        setTimeout(() => {
          item.sound.play(), this.changeState(item);
        }, 1500 * index);
      });
    },
    levelUp() {
      this.toggleRoundState();
      this.round++;
      this.sequence.push(this.soundsArray[this.randomNumber(0, 3)]);
      this.play();
      this.toggleRoundState();
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
