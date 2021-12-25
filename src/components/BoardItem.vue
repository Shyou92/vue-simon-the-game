<template>
  <li :class="{ active: isActive }" @click="click" :sound="sound"></li>
</template>

<script>
export default {
  name: 'BoardItem',
  props: ['sound', 'gameIsStarted'],
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    changeState() {
      this.isActive = !this.isActive;
      setTimeout(() => (this.isActive = !this.isActive), 200);
    },
    click() {
      if (this.gameIsStarted === true) {
        this.sound.play();
        this.changeState();
      }
    },
  },
};
</script>
