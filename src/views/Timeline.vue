<!-- LOGIC -->
<script>
import historyData from '../../db.json'
export default {
  name: 'Timeline',
  data() {
    return {
      historyData,
    }
  },
}
</script>

<!-- VIEW -->
<template>
  <div
    v-for="events in historyData"
    class="timeline-card-container"
  >
    <div class="timeline-card">
      <img :src="events?.imageUrl" alt="" />
      <h3>{{ events.title }}</h3>
      <p>{{ events.description }}</p>
      <div class="period">
        Period
        <div class="years">
          <p>
            {{ events.start_year }}
            <span v-if="events.end_year">-</span>
            {{ events?.end_year }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- STYLES -->
<style scoped lang="scss">
.timeline-card-container {
  .timeline-card {
    img {
      width: 250px;
      height: 250px;
      object-fit: cover;
      object-position: center;

      &[src=''] {
        display: none;
      }
    }
  }
}
</style>
