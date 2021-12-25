<template>
  <div class="border">
    <ul class="board__list">
      <BoardItem
        v-for="item in soundsArray"
        :key="item.id"
        :class="['board__list-item', 'board__list-item_' + item.color]"
        :sound="item.sound"
        :gameIsStarted="gameIsStarted"
      />
    </ul>
  </div>
</template>

<script>
import BoardItem from './BoardItem.vue';

export default {
  name: 'Board',
  props: ['soundsArray', 'gameIsStarted'],
  components: {
    BoardItem,
  },
};
</script>

<style scoped>
.border {
  position: relative;
}
.board__list {
  list-style-type: none;
  cursor: pointer;
}

.board__list-item {
  margin: 0;
  padding: 0;
  opacity: 0.6;
  width: 296px;
  height: 290px;
  border-radius: 150px;
  position: absolute;
}

.board__list-item_red {
  background-color: red;
  clip: rect(0, 300px, 150px, 150px);
}

.board__list-item_blue {
  background: dodgerblue;
  clip: rect(0px, 150px, 150px, 0px);
}

.board__list-item_yellow {
  background: #feef33;
  clip: rect(150px, 150px, 300px, 0px);
}

.board__list-item_green {
  background: #bede15;
  clip: rect(150px, 300px, 300px, 150px);
}

.board__list-item_red:hover,
.board__list-item_blue:hover,
.board__list-item_yellow:hover,
.board__list-item_green:hover {
  border: 2px solid black;
}

.active {
  opacity: 1;
}
</style>
