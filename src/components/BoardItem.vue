<template>
  <li
    :class="{ active: item.isActive }"
    @click="click"
    :sound="item.sound"
  ></li>
</template>

<script>
export default {
  name: 'BoardItem',
  props: ['gameIsStarted', 'item', 'changeState'],
  data() {
    return {
      currentState: this.changeState,
    };
  },
  methods: {
    click() {
      if (this.gameIsStarted) {
        this.item.sound.play();
        this.currentState(this.item);
      }
    },
  },
};
</script>
