<template>
    <div class="cell">
        <div v-if="(line > 0)"> 
            <div class="square" :class="getCellValue() === 1 ? 'black' : 'white'"></div>            
        </div>
        <div v-else class="square" :class="cellsArray[0][column] === 1 ? 'black' : 'white'"></div>
    </div>
</template>
  
  <script>
    import tools from '../tools/tools.js';
    import { mapState, mapActions } from 'vuex';
    export default {
      name: 'OneCell',
      props: {
        line: {
            type: Number
        },
        column: {
            type: Number
        }
      },
      computed: {
        ...mapState(['cellsArray', 'lines', 'columns', 'rule']),
      },
      methods: {
        ...mapActions(['editCell']),
        getCellValue(){
            let trio = [0, 0 ,0];
            trio[1] = this.cellsArray[this.line - 1][this.column];
            if((this.column === 0) && (this.column === this.columns - 1)){
                trio[0] = this.cellsArray[0][0];
                trio[2] = this.cellsArray[0][0];
            }else if(this.column === 0){
                trio[0] = this.cellsArray[0][0];
                trio[2] = this.cellsArray[this.line - 1][this.column + 1];
            }else if(this.column === (this.columns - 1)){
                trio[2] = this.cellsArray[0][0];
                trio[0] = this.cellsArray[this.line - 1][this.column - 1]
            }
            else{
                trio[0] = this.cellsArray[this.line - 1][this.column - 1];
                trio[2] = this.cellsArray[this.line - 1][this.column + 1];
            } 
            return this.getCellConfiguration(trio, trio.length);      
        },
        getCellConfiguration(trio, n){
            let array = [];
            for(let index = 0; index < (Math.pow(2, n)) ; index++){
                array = tools.getBinary(index, n);
                if(this.arrayEquals(trio, array)){
                    return tools.getBinary(this.rule, Math.pow(2, n))[(Math.pow(2, n) - 1) - index];
                }
            }      
        },
        arrayEquals(A, B){
            return B.every((element, index) => { return A[index] === element});
        }
      },
      watch: {
        rule(){
            this.editCell({
                line: this.line,
                column: this.column,
                cellValue: (this.line === 0) ? this.cellsArray[this.line][this.column] : this.getCellValue()
            })
        }
      },
      created(){
        this.editCell({
            line: this.line,
            column: this.column,
            cellValue: (this.line === 0) ? this.cellsArray[this.line][this.column] : this.getCellValue()
        })
      },
      updated(){
        this.editCell({
            line: this.line,
            column: this.column,
            cellValue: (this.line === 0) ? this.cellsArray[this.line][this.column] : this.getCellValue()
        })
      }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
      @import '../../sass/mixin.scss';
    .cell{
        position: relative;
        @include setDimensions(50px, null, 50px);
        border: 2px black solid;
        .square{
            @include setPositionAbsolute(0, 0, 0, 0);
            @include setDimensions(50%, auto, 50%); 
        }
        .black{
            background-color: black;
        }
        .white{
            background-color: white;
        }
    }
  </style>
  