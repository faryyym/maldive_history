<template>
  <transition name="fade">
    <div v-if="!isScrolling && eventsLoaded" class="controls">
      <button @click="emitShowInfo">
        {{ showingInfo ? 'Hide' : 'Show' }} Info
      </button>
      <div class="links">
        <select @change="handleChange">
          <option value="" selected disabled>Century</option>
          <option value="#c. 150">2nd Century</option>
          <option value="#200">3rd Century</option>
          <option value="#300">4th Century</option>
          <option value="#400">5th Century</option>
          <option value="#500">6th Century</option>
          <option value="#600">7th Century</option>
          <option value="#700">8th Century</option>
          <option value="#800">9th Century</option>
          <option value="#900">10th Century</option>
          <option value="#1000">11th Century</option>
          <option value="#1100">12th Century</option>
          <option value="#1200">13th Century</option>
          <option value="#1300">14th Century</option>
          <option value="#1400">15th Century</option>
          <option value="#1500">16th Century</option>
          <option value="#1600">17th Century</option>
          <option value="#1700">18th Century</option>
          <option value="#1800">19th Century</option>
          <option value="#1900">20th Century</option>
          <option value="#2000">21st Century</option>
        </select>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Controls',
  props: {
    showingInfo: Boolean,
    eventsLoaded: {
      type: Boolean,
      required: true,
    },
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

    handleChange(event) {
      const select = event.target
      const selectedOption = select.options[select.selectedIndex]
      if (selectedOption.value !== '') {
        selectedOption.text = selectedOption.textContent
        location = selectedOption.value
      }
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

<style scoped lang="scss">
button {
  border-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}

select {
  border-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  outline: none;
  text-align: center;
}
.links {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.controls {
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 99;
  display: flex;
  flex-direction: column;
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
