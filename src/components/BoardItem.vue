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
  props: [
    'gameIsStarted',
    'item',
    'changeItemState',
    'userSequence',
    'checkSequence',
  ],
  data() {
    return {
      changeCurrentState: this.changeItemState,
      mutatedSequence: this.userSequence,
    };
  },
  methods: {
    click() {
      if (this.gameIsStarted) {
        this.item.sound.play();
        this.changeCurrentState(this.item);
        this.mutatedSequence.push(this.item);
        this.checkSequence();
      }
    },
  },
};
</script>
