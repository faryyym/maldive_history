<!-- LOGIC -->
<script>
import historyData from '../../db.json'

export default {
  name: 'Timescale',
  data() {
    return {
      decades: Array.from(
        { length: 194 },
        (_, i) => 100 + i * 10
      ),

      historyData,
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
        <div class="years">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>10</div>
        </div>
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
    /* gap: 10rem; */

    .decade {
      display: flex;
      flex-direction: column;
      /* align-items: center; */
      padding: 0;
      margin: 0;
      .up-arrow {
        width: 0;
        height: 0;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
        border-top: 10px solid red; /* Change 'blue' to your desired color */
        /* display: inline-block; */
      }

      .years {
        display: flex;
        align-items: flex-end;
      }
    }
  }
}
</style>
