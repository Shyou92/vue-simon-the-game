<template>
  <div class="playfield">
    <h2 class="playfield__header">Simon Says</h2>
    <GameIsOver :round="round" :restart="restart" v-if="isGameOver" />
    <div v-else class="container">
      <Board
        :soundsArray="soundsArray"
        :changeItemState="changeItemState"
        :gameIsStarted="gameIsStarted"
        :userSequence="userSequence"
        :checkSequence="checkSequence"
      />
      <DashBoard
        :gameIsStarted="gameIsStarted"
        :startGame="startGame"
        :round="round"
        :timePaused="timePaused"
        :onTimeChange="onTimeChange"
      />
    </div>
  </div>
</template>

<script>
import Board from './Board.vue';
import DashBoard from './DashBoard.vue';
import GameIsOver from './GameIsOver.vue';

const sound1 = new Audio(require('../assets/sounds/1.mp3'));
const sound2 = new Audio(require('../assets/sounds/2.mp3'));
const sound3 = new Audio(require('../assets/sounds/3.mp3'));
const sound4 = new Audio(require('../assets/sounds/4.mp3'));

export default {
  name: 'Playfield',
  components: {
    Board,
    DashBoard,
    GameIsOver,
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
      isItemSame: null,
      isGameOver: false,
      timePaused: 1500,
    };
  },
  methods: {
    onTimeChange(data) {
      this.timePaused = data;
    },
    startGame() {
      this.levelUp();
      this.gameIsStarted = true;
    },
    randomNumber(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    changeItemState(item) {
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
          item.sound.play(), this.changeItemState(item);
        }, this.timePaused * index);
      });
    },
    levelUp() {
      this.round++;
      this.sequence.push(this.soundsArray[this.randomNumber(0, 3)]);
      this.play();
      this.userSequence.length = 0;
    },
    checkSequence() {
      this.isItemSame = this.userSequence.every((el, index) => {
        return el === this.sequence[index];
      });

      if (this.isItemSame === false) {
        this.isGameOver = true;
      }
      this.newRound();
      return this.isItemSame;
    },
    newRound() {
      if (
        this.userSequence.length === this.sequence.length &&
        this.isItemSame
      ) {
        return setTimeout(() => this.levelUp(), this.timePaused);
      }
    },
    restart() {
      this.round = 0;
      this.gameIsStarted = false;
      this.sequence = [];
      this.userSequence = [];
      this.isItemSame = null;
      this.isGameOver = false;
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
