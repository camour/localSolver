<template>
  <div class="cells-panel">
    <PanelControl />
    <div v-if="startingLine.length > 0">
      <div class="line" v-for="(line, lineIndex) in cellsArray" :key="lineIndex">
        <div class="column" v-for="(column, columnIndex) in line" :key="columnIndex">
          <OneCell  :line="lineIndex" :column="columnIndex" />
        </div>
      </div>
    </div>
    <RuleDisplay />
  </div>
</template>

<script>
  import PanelControl from './PanelControl.vue';
  import OneCell from './OneCell.vue';
  import RuleDisplay from './RuleDisplay.vue';
  import { mapState } from 'vuex';
  export default {
    name: 'CellsPanel',
    components: {
      PanelControl,
      OneCell,
      RuleDisplay
    },
    computed: {
      ...mapState(['cellsArray', 'lines', 'columns', 'startingLine'])
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  @import '../../sass/mixin.scss';

  .cells-panel{
    position: relative;
    @include flexBox(row, center);
  }
  .line{
    @include flexBox();
  }
</style>
