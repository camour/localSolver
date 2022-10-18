<template>
    <div class="cell">
        <div v-if="(line > 0)" class="square" :class="getCellValue() === 1 ? 'black' : 'white'"></div>
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
        ...mapState(['cellsArray', 'lines', 'columns', 'mode', 'rule']),
      },
      methods: {
        ...mapActions(['addCell']),
        getCellValue(){
            let trio = [0, 0 ,0];
            trio[1] = this.cellsArray[this.line - 1][this.column];
            if(this.column === 0){
                trio[0] = this.mode === 'miror' ? this.cellsArray[0][0] : this.cellsArray[this.line - 1][this.columns -1];
                trio[2] = this.cellsArray[this.line - 1][this.column + 1];
            }else if(this.column === (this.columns - 1)){
                trio[2] = this.mode === 'miror' ? this.cellsArray[0][0] : this.cellsArray[this.line - 1][0];
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
                    console.log('trio : ' + trio + ' and array ' + array + ' are equals');
                    return tools.getBinary(this.rule, Math.pow(2, n))[(Math.pow(2, n) - 1) - index];
                }
            }      
        },
        arrayEquals(A, B){
            return B.every((element, index) => { return A[index] === element});
        }
      },
      created(){
        this.addCell({
            line: this.line,
            column: this.column,
            cellValue: (this.line === 0) ? this.cellsArray[this.line][this.column] : this.getCellValue()
        })
      }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
    .cell{
        position: relative;
        width: 50px;
        height: 50px;
        border: 2px black solid;
        .square{
            position: absolute;
            width: 50%;
            height: 50%;
            top: 0;
            left: 0; 
            right: 0;
            bottom: 0;     
            margin: auto;   
        }
        .black{
            background-color: black;
        }
        .white{
            background-color: white;
        }
    }
  </style>
  