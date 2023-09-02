<!-- LOGIC -->
<script>
export default {
  name: 'Time',
  props: {
    events: Array, // Receive events data as a prop
  },
  computed: {
    years() {
      if (this.events) {
        // Extract years from events and create a unique set
        const yearSet = new Set()

        this.events.forEach((event) => {
          yearSet.add(event.start_year)
          if (event.end_year) {
            yearSet.add(event.end_year)
          }
        })
        // Convert the set to an array and sort it
        return [...yearSet].sort((a, b) => a - b)
      }
    },
  },
}
</script>

<!-- VIEW -->
<template>
  <div class="timeline-scale">
    <div
      v-for="year in years"
      :key="year"
      class="scale-year"
    >
      {{ year }}
    </div>
  </div>
</template>

<!-- STYLES -->
<style scoped>
.timeline-scale {
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  background-color: #f0f0f0;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  font-size: 14px;
  font-weight: bold;
}

.scale-year {
  flex-grow: 1;
  text-align: center;
  padding: 5px;
  border-right: 1px solid #ccc;
}

.scale-year:last-child {
  border-right: none;
}
</style>
