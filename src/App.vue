<template>
  <div id="app-container">
    <div class="timeline-container">
      <Timeline :events="events" />
    </div>
    <footer class="footer">
      <a href="https://github.com/faryyym" target="_blank">faryyym</a>
    </footer>
  </div>
</template>

<script>
import Timeline from './views/Timeline.vue'
import { db, ref, onValue } from './firebase.js'
export default {
  name: 'App',
  components: {
    Timeline,
  },
  data() {
    return {
      events: [],
    }
  },
  async mounted() {
    await this.fetchEvents()
  },
  methods: {
    async fetchEvents() {
      const eventRef = ref(db, '/events')

      try {
        onValue(eventRef, (snapshot) => {
          const data = snapshot.val()
          if (data) {
            data.forEach((event) => {
              this.events.push(event)
            })
          }
        })
      } catch (error) {
        console.error(`(Error fetching events)`, error.message)
      }
    },
  },
}
</script>

<style lang="scss">
#app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.timeline-container {
  margin-bottom: 3rem;
}

footer {
  margin-top: auto;
  margin-bottom: 1rem;
  text-align: end;
  font-size: 0.75rem;
}
</style>
