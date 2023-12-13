<template>
  <transition name="fade">
    <div v-if="!isScrolling" class="controls">
      <button @click="emitShowInfo">
        {{ showingInfo ? 'Hide' : 'Show' }} Info
      </button>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Controls',
  props: {
    showingInfo: Boolean,
  },
  data() {
    return {
      isScrolling: false,
    }
  },
  methods: {
    emitShowInfo() {
      this.$emit('showInfoClick')
    },
    handleScroll() {
      this.isScrolling = true
      clearTimeout(this.scrollTimer)
      this.scrollTimer = setTimeout(() => {
        this.isScrolling = false
      }, 500)
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<style scoped>
.controls {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 99;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
