<template>
  <h1>App</h1>
  <div class="container">
    <div
      v-for="yearData in yearEvents"
      :key="yearData.year"
      :id="yearData.year"
      :class="{ year: true, 'highlighted-year': yearData.title !== '' }"
    >
      <h3>{{ yearData.year }}</h3>
      <div class="event">
        <h2>{{ yearData.title }}</h2>
        <p>{{ yearData.description }}</p>
      </div>
      <!-- Add other content here -->
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
      eventsData: [
        {
          year: 'c. 150',
          title: 'Brief mention of the Maldives by Ptolemy',
          description:
            "Claudius Ptolemy, a Greco-Roman historian and astronomer refers to Maldives in his book 'Geography of Claudius Ptolemy' which was originally titled 'Geographia' written in second century.",
          start_year: '150',
          end_year: '',
          reference: ['1'],
          imageUrl: '',
        },
        {
          year: '249',
          title: 'Earliest recorded occupation in the Maldives',
          description:
            'Radiocarbon dates from Nilandhoo Foamathi, Faafu Atoll represent the earliest recorded occupation in the Maldives.',
          start_year: '249',
          end_year: '393',
          reference: ['2'],
          imageUrl: '',
        },
        {
          year: '345',
          title:
            'Probable initial construction of the Buddhist monastery at Kuruhinna Tharaagadu',
          description:
            'The Buddhist monastery at Kuruhinna Tharaagadu on Kaashidhoo Island, Kaafu Atoll was probably initially constructed during this period.',
          start_year: '345',
          end_year: '604',
          reference: ['3'],
          imageUrl: '',
        },
      ],
    }
  },
  computed: {
    yearEvents() {
      const yearEvents = []
      for (let i = this.startYear; i <= this.maxYears; i++) {
        const eventData = this.eventsData.find(
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
  mounted() {},
}
</script>

<style scoped>
.year {
  /* Your styles for year blocks */
}

.event {
  position: absolute;
  left: 75px;
  transform: translateY(-30px);
  color: black;
  outline: 1px solid coral;

  /* top: 0; */
}

.highlighted-year {
  color: coral;
}
</style>
