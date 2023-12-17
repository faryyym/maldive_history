<template>
  <div v-for="event in events" :key="event.year">
    <p>{{ event.year }} - {{ event.title }}</p>
  </div>
</template>

<script>
import { db, ref, onValue } from '../firebase'

export default {}
</script>
