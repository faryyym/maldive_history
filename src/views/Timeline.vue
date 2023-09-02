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

  methods: {
    horizontalScroll(event) {
      if (event.deltaY !== 0) {
        event.preventDefault()
      }

      event.currentTarget.scrollLeft +=
        event.deltaY

      // Prevent the default scroll behavior
    },
  },
}
</script>

<!-- VIEW -->
<template>
  <div
    class="timeline-card-container"
    @wheel="horizontalScroll($event)"
  >
    <div
      class="timeline-card"
      v-for="events in historyData"
      :key="events.title"
    >
      <img :src="events?.imageUrl" />
      <div class="card-head">
        <h3>{{ events.title }}</h3>
        <p>{{ events.description }}</p>
      </div>
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
@import '../assets/variables.scss';
.timeline-card-container {
  display: flex;
  align-items: baseline;
  gap: 1rem;
  background: url(https://t3.ftcdn.net/jpg/01/75/08/78/360_F_175087816_OKomPkKcnagkeFPFo4ru4yHIAZxnojh2.jpg);
  overflow: hidden;

  .timeline-card {
    background-color: $background;
    padding: 1rem;
    min-width: 350px;
    border-radius: $border-radius;
    @include glass();

    .period {
      margin: 0 auto;
      text-align: center;
      background-color: $text;
      color: $background;

      .years {
        background-color: $background;
      }
    }

    img {
      width: 200px;
      height: 200px;
      object-fit: cover;
      object-position: center;
      mix-blend-mode: multiply;

      &[src=''] {
        display: none;
      }
    }
  }
}
</style>
