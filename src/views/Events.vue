<!-- LOGIC -->
<script>
import Time from './Time.vue'
import historyData from '../../db.json'
export default {
  name: 'Events',
  components: {
    Time,
  },
  data() {
    return {
      historyData,
    }
  },
}
</script>

<!-- VIEW -->
<template>
  <div class="timeline">
    <Time :events="historyData"></Time>
    <div
      v-for="(event, index) in historyData"
      :key="index"
      class="timeline-event"
    >
      <div class="year">{{ event.year }}</div>
      <div class="event-details">
        <h3>{{ event.title }}</h3>
        <p>{{ event.description }}</p>
      </div>
    </div>
  </div>
</template>

<!-- STYLES -->
<style scoped>
.timeline-event {
  display: flex;
  margin: 20px;
  border-left: 2px solid #007bff; /* Adjust the color as needed */
  padding-left: 20px;
}

.year {
  width: 60px;
  font-weight: bold;
}

.event-details {
  flex-grow: 1;
  padding-left: 20px;
}

h3 {
  font-size: 18px;
  margin: 0;
}

p {
  font-size: 14px;
  margin: 0;
}
</style>
