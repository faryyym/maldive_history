<template>
  <Controls
    @showInfoClick="showInfo"
    :showingInfo="showingInfo"
    :eventsLoaded="eventsLoaded"
  />

  <div class="container" v-if="events && events.length > 0">
    <div class="line"></div>
    <div
      v-for="(yearData, index) in yearEvents"
      :key="index"
      :id="yearData.year"
      :class="{ year: true, 'highlighted-year': yearData.title !== '' }"
      v-in-viewport
      class="viewport-anim"
    >
      <h3 class="year_h3">{{ yearData.year }}</h3>

      <div
        class="event"
        v-if="yearData.title"
        @click="toggleInfo(yearData.year)"
        :style="
          yearData.imageUrl ? { padding: '1rem' } : { padding: '0.5rem 1rem' }
        "
      >
        <div class="title-container">
          <img
            class="image"
            :src="yearData.imageUrl"
            :alt="yearData.description"
            v-if="yearData.imageUrl"
            @error="handleImageError"
          />
          <h2>{{ yearData.title }}</h2>
        </div>
        <div
          class="additional-info"
          ref="additionalInfoRef"
          :class="{
            'show-info': activeInfo === yearData.year,
          }"
        >
          <p v-if="yearData.description">{{ yearData.description }}</p>
          <div class="period">
            <h3>Period</h3>
            <p>
              {{ yearData.start_year }}
              <span v-if="yearData.end_year">- {{ yearData.end_year }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else class="loading"></div>
</template>
<script>
import Controls from '../components/Controls.vue'
import { inViewport } from '../directives/intersection'

export default {
  name: 'Timeline',
  components: { Controls },
  data() {
    return {
      maxYears: 2023,
      startYear: 150,
      activeInfo: null,
      showingInfo: false,
      eventsLoaded: false,
    }
  },
  props: {
    events: Array,
  },
  directives: {
    inViewport,
  },

  computed: {
    yearEvents() {
      const eventsByYear = {}

      // Group events by year
      this.events.forEach((event) => {
        const year = event.start_year
        if (!eventsByYear[year]) {
          eventsByYear[year] = []
        }
        eventsByYear[year].push(event)
      })

      // Create an array of years with their events
      const yearEvents = []
      for (let i = this.startYear; i <= this.maxYears; i++) {
        const year = i.toString()
        const events = eventsByYear[year] || []

        if (events.length > 0) {
          yearEvents.push(...events)
        } else if (i % 10 === 0) {
          // Add a placeholder for each 10-year interval without an event
          yearEvents.push({ year, title: '', description: '' })
        }
      }
      if (yearEvents.length > 0) {
        this.eventsLoaded = true
      }
      return yearEvents
    },
  },

  methods: {
    toggleInfo(yearId) {
      if (this.activeInfo === yearId) {
        this.activeInfo = null // Close if already open
      } else {
        this.activeInfo = yearId // Open clicked item
      }
    },

    handleImageError(event) {
      event.target.style.display = 'none' // Hide the image if it fails to load
    },

    showInfo() {
      const additionalInfoElement = this.$refs.additionalInfoRef // Access the element using the reference
      if (additionalInfoElement) {
        additionalInfoElement.forEach((element) => {
          element.classList.toggle('show-info') // Toggle the 'show-info' class
        })
      }
      this.showingInfo = !this.showingInfo
    },
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  height: 100%;
  overflow-x: hidden;
}
.line {
  position: absolute;
  height: 100%;
  width: 5px;

  background-color: $primary;

  @include mobile {
    width: 3px;
  }
}

.year {
  color: $grey;

  display: flex;
  margin-left: 2rem;
  cursor: pointer;

  &:hover > .year_h3 {
    font-size: 1.25rem;
    color: $secondary;
  }

  .year_h3 {
    @include fontSizeTransition;
  }

  @include mobile {
    margin-left: 1rem;
  }
}

.event {
  position: relative;
  color: $text;
  padding: 1rem;
  border-radius: 0 1rem 1rem 0;

  border: 1px solid $primary;
  border-left: 3px solid $primary;
  width: 100%;
  margin: 0.35rem 1rem;
  font-size: 1rem;
  transition: border 0.3s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-image: url('../assets/stone_texture.jpg');
    background-size: 50%;
    opacity: 20%;
    border-radius: 0 1rem 1rem 0;
  }
}

.highlighted-year {
  color: $primary;
  margin-bottom: 1rem;
  margin: 0.5rem 0.5rem 1rem 0.5;

  &:hover {
    .event {
      border: 1px solid $secondary;
      border-left: 7px solid $secondary;
    }

    .year_h3 {
      color: $secondary;
    }
  }
}

.additional-info {
  transition: max-height 0.5s ease, margin 0.75s ease;
  max-height: 0;
  overflow: hidden;
}

.show-info {
  height: 100%;
  max-height: 1000px;
  margin-top: 0.75rem;
}

.period {
  margin-top: 1rem;
}

.title-container {
  display: flex;
  @include mobile {
    flex-direction: column-reverse;
  }
}

.image {
  border-radius: 1rem;
  border: 1px solid $grey;
  max-width: 100px;
  margin-right: 1rem;

  @include mobile {
    max-width: 100%;
    margin-top: 1rem;
  }
}

h2 {
  font-family: 'Taviraj', serif;
}
</style>
