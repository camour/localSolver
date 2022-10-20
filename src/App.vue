<template>
  <div id="app">
    <h1>My Cellular Automate</h1>
    <CellsPanel/>
  </div>
</template>

<script>
import CellsPanel from './components/CellsPanel.vue'

export default {
  name: 'App',
  components: {
    CellsPanel
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  h1{
    margin: 0;
    margin-bottom: 20px
  }
}
</style>
