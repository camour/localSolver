<template>
    <div class="display-rule">
        <span class="dot" @click="showInfos = !showInfos">i</span>
        <h3>binary rule</h3>
        <p>{{ displayRule }}</p>
        <div class="infos" :class="showInfos ? 'show' : ''">
            <div v-for="(configuration, configurationIndex) in configurations" :key="configurationIndex">
                <div class="configuration">
                    <div class="square" :class="cellValue === 1 ? 'black' : 'white'" v-for="(cellValue, cellIndex) in configuration" :key="cellIndex">
                    </div>
                </div>
                <div class="square" :class="binaryRule[configurationIndex] === 1 ? 'black' : 'white'"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import tools from '../tools/tools.js';
    import { mapState } from 'vuex';
    export default{
        name: 'RuleDisplay',
        data(){
            return{
                showInfos: false,
                exponent: 3,
                configurations: null
            }
        },
        computed: {
            ...mapState(['rule']),
            binaryRule(){
                return tools.getBinary(this.rule, 8);
            },
            displayRule(){
                let result = '';
                this.binaryRule.map(String).forEach(element => result+=(element + ' '));
                return result;
            },
        },
        created(){
            this.configurations = new Array(Math.pow(2, this.exponent));
            for(let index = 0; index < this.configurations.length; index++){
                this.configurations[Math.pow(2, this.exponent) - index - 1] = tools.getBinary(index, this.exponent);
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../sass/mixin.scss';

    .display-rule{
        @include setDimensions(180px);
        @include setPositionAbsolute(null, 150px);
        @include flexBox(column, space-around, center);
        padding: 20px;
        border-radius: 0.25rem;
        background-image: linear-gradient(180deg,#242220 10%, #33302c 80%);          
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        color: white;
        transition: all 0.3s;
    }
    .dot {
        @include setPositionAbsolute(10px, 10px);
        @include setDimensions(25px, null, 25px);
        line-height: 25px;
        background-color: rgb(255, 255, 255);
        border-radius: 50%;
        display: block;
        color: black;
        font-weight: bold;
        cursor: pointer;
    }
    .infos{
        @include setPositionAbsolute(null, null, -20px);
        @include setDimensions(450px, 0, 50px);
        @include flexBox(row, space-between);
        border-radius: 0.25rem;
        opacity: 0;
        background-image: linear-gradient(180deg,#f8f4ef 10%, #f7f4f0 80%);          
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        transition: all 0.3s;
        color: black;
        &.show{
            transform: translateY(100%);
            opacity: 1;
        }
        .configuration{
            position: relative;
            @include flexBox(row, space-between);
            & + .square{
                transform: translateX(100%);
            }
        }
        .square{
            @include setDimensions(10px, 2px null null null, 10px);
            border: 2px rgb(43, 39, 39) solid;
            &.black{
                background-color: black;
            }
            &.white{
                background-color: white;
            }
        }
    }
</style>