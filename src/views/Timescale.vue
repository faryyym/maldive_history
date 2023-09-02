<!-- LOGIC -->
<script>
export default {
  name: 'Timescale',
  data() {
    return {
      decades: Array.from(
        { length: 194 },
        (_, i) => 100 + i * 10
      ),
    }
  },
}
</script>

<!-- VIEW -->
<template>
  <h2>Timescale works!</h2>
  <div class="line"></div>
  <div class="decades-container">
    <div class="decades">
      <div
        v-for="decade in decades"
        class="decade"
      >
        <span class="up-arrow"></span>
        {{ decade }}
      </div>
    </div>
  </div>
</template>

<!-- STYLES -->
<style scoped>
.line {
  width: 100%;
  height: 1px;
  background-color: red;
  position: absolute;
}
.decades-container {
  padding: 0 5rem;
  overflow-x: scroll;
  position: relative;

  .decades {
    display: flex;
    gap: 10rem;

    .decade {
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      margin: 0;
      .up-arrow {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 10px solid red; /* Change 'blue' to your desired color */
        display: inline-block;
      }
    }
  }
}
</style>
