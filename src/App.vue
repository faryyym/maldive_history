<template>
  <h1>Timeline of the Maldives</h1>
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
</template>
<script>
import historicalData from './assets/historicalData.json'

export default {
  name: 'App',
  data() {
    return {
      maxYears: 2000,
      startYear: 150,
      // eventsData: [
      //   {
      //     year: 'c. 150',
      //     title: 'Brief mention of the Maldives by Ptolemy',
      //     description:
      //       "Claudius Ptolemy, a Greco-Roman historian and astronomer refers to Maldives in his book 'Geography of Claudius Ptolemy' which was originally titled 'Geographia' written in second century.",
      //     start_year: '150',
      //     end_year: '',
      //     reference: ['1'],
      //     imageUrl: '',
      //   },
      //   {
      //     year: '249',
      //     title: 'Earliest recorded occupation in the Maldives',
      //     description:
      //       'Radiocarbon dates from Nilandhoo Foamathi, Faafu Atoll represent the earliest recorded occupation in the Maldives.',
      //     start_year: '249',
      //     end_year: '393',
      //     reference: ['2'],
      //     imageUrl: '',
      //   },
      //   {
      //     year: '345',
      //     title:
      //       'Probable initial construction of the Buddhist monastery at Kuruhinna Tharaagadu',
      //     description:
      //       'The Buddhist monastery at Kuruhinna Tharaagadu on Kaashidhoo Island, Kaafu Atoll was probably initially constructed during this period.',
      //     start_year: '345',
      //     end_year: '604',
      //     reference: ['3'],
      //     imageUrl: '',
      //   },
      // ],
      historicalData: historicalData,
      activeInfo: null,
    }
  },

  computed: {
    yearEvents() {
      const yearEvents = []
      for (let i = this.startYear; i <= this.maxYears; i++) {
        const eventData = this.historicalData.find(
          (event) => event.start_year === i.toString()
        )
        if (eventData) {
          yearEvents.push(eventData)
        } else {
          yearEvents.push({ year: i.toString(), title: '', description: '' }) // Or any default placeholder
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
  width: 10px;
  height: 100%; /* Set the line height to 100% of the parent's height */
  background-color: $primary;
}
.year {
  /* Your styles for year blocks */
  color: #6b6b6b;
  display: flex;
  // flex-direction: column;
  margin-left: 2rem;
  font-size: 0.75rem;
  cursor: pointer;

  &:hover > .year_h3 {
    font-size: 1rem;
  }

  .year_h3 {
    @include fontSizeTransition;
  }
}

.event {
  // position: relative;
  // left: 1rem;
  // transform: translateY(10px);
  color: black;
  padding: 1rem;
  border-radius: 0 1rem 1rem 0;

  border: 1px solid $primary;
  border-left: 5px solid $primary;

  max-width: 700px;
  margin: 0.35rem 1rem;

  @include mobile {
    font-size: 1rem;
  }
}

.highlighted-year {
  color: $primary;
  margin-bottom: 1rem;
  margin: 0.5rem 0.5rem 1rem 0.5;

  &:hover {
    .event {
      border: 1px solid $secondary;
      border-left: 5px solid $secondary;
    }

    .year_h3 {
      color: $secondary;
    }
  }
}

// .additional-info {
//   height: 0;
//   overflow: hidden;
//   transition: height 0.5s ease;
// }

// .year:hover .additional-info {
//   height: 100px; /* Set a height that accommodates your content */
// }

.additional-info {
  transition: max-height 0.5s ease;
  max-height: 0;
  overflow: hidden;

  /* other styles... */
}

.show-info {
  height: 100%;
  max-height: 1000px; /* Set a value larger than your expected content height */

  /* other styles... */
}
.period {
  margin-top: 1rem;
}

.title-container {
  display: flex;
}

.image {
  // border-radius: 100%;
  max-width: 200px;
  // height: auto;
}
</style>
