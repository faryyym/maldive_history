<template>
  <h1 class="heading">Timeline of the Maldives</h1>

  <div class="container">
    <div class="line"></div>
    <div
      v-for="yearData in yearEvents"
      :key="yearData.year"
      :id="yearData.year"
      :class="{ year: true, 'highlighted-year': yearData.title !== '' }"
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
          :class="{ 'show-info': activeInfo === yearData.year }"
        >
          <p>{{ yearData.description }}</p>
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

  <footer>
    <a href="https://github.com/faryyym" target="_blank">faryyym</a>
  </footer>
</template>
<script>
import historicalData from './assets/historicalData.json'

export default {
  name: 'App',
  data() {
    return {
      maxYears: 2023,
      startYear: 150,
      historicalData: historicalData,
      activeInfo: null,
    }
  },

  computed: {
    yearEvents() {
      const eventsByYear = {}

      // Group events by year
      this.historicalData.forEach((event) => {
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
  },
  mounted() {},
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  height: 100%; /* Make the container full height */
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
    background-image: url('./assets/stone_texture.jpg');
    background-size: 50%;
    opacity: 30%;
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
  margin: 1rem 0;
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

h2,
.heading {
  font-family: 'Taviraj', serif;
}

.heading {
  margin: 3rem 0;
  padding-bottom: 3rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  border-bottom: 1px solid $text;
}

footer {
  margin-top: 3rem;
  text-align: end;
  font-size: 0.75rem;
}
</style>
