<template>
  <div class="timeline">
    <div class="line"></div>
    <div class="content">
      <div class="markers">
        <div v-for="year in timelineYears" :key="year" class="marker">
          {{ year }}
        </div>
      </div>
      <div class="events">
        <div v-for="data in historyData" :key="data.year" class="event">
          <div class="event-year">{{ data.year }}</div>
          <div class="event-title">{{ data.title }}</div>
          <!-- Include other event details here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      historyData: [
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
      maxYear: 2000,
    }
  },
  computed: {
    timelineYears() {
      const interval = 100 // Mark every 100 years
      const years = []
      for (let i = 0; i <= this.maxYear; i += interval) {
        years.push(i)
      }
      return years
    },
  },
}
</script>

<style>
.timeline {
  display: flex;
  align-items: flex-start;
  height: 100%; /* Adjust the height according to your layout */
  margin-top: 1rem;
}

.line {
  width: 5px;
  margin-left: 1rem;
  height: 100%;
  background-color: #6c6c6c;
  z-index: 99;
}

.content {
  display: flex;
  margin-left: 2rem; /* Adjust spacing */
}

.markers {
  margin-right: 1rem; /* Adjust spacing */
  width: 50px;
}

.marker {
  width: 30px;
  text-align: center;
  font-size: 12px;
  color: #555;
  margin-bottom: 10rem; /* Adjust the distance between years */
}

.events {
  /* Style your events container as needed */
}

.event {
  /* Style your individual events as needed */
}
</style>
