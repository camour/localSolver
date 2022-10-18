<template>
    <div class="display-rule">
        <span class="dot" @click="showInfos = !showInfos">i</span>
        <h3>binary rule</h3>
        <p>{{ displayRule }}</p>
        <div class="infos" :class="showInfos ? 'show' : ''">
            <div class="configuration" v-for="(configuration, configurationIndex) in configurations" :key="configurationIndex">
                <div class="square" :class="cellValue === 1 ? 'black' : 'white'" v-for="(cellValue, cellIndex) in configuration" :key="cellIndex">
                </div>
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
            displayRule(){
                let result = '';
                tools.getBinary(this.rule, 8).map(String).forEach(element => result+=(element + ' '));
                return result;
            },
        },
        created(){
            this.configurations = new Array(Math.pow(2, this.exponent));
            for(let index = 0; index < this.configurations.length; index++){
                this.configurations[Math.pow(2, this.exponent) - index] = tools.getBinary(index, this.exponent);
            }
        }
    }
</script>

<style lang="scss" scoped>
    .display-rule{
        position: absolute;
        right: 150px;
        width: 180px;
        padding: 20px;
        border-radius: 0.25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-image: linear-gradient(180deg,#242220 10%, #33302c 80%);          
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        color: white;
        transition: all 0.3s;
    }
    .dot {
        position: absolute;
        top: 10px;
        right: 10px;
        height: 25px;
        line-height: 25px;
        width: 25px;
        background-color: rgb(255, 255, 255);
        border-radius: 50%;
        display: block;
        color: black;
        font-weight: bold;
        cursor: pointer;
    }
    .infos{
        position: absolute;
        bottom: -20px;   
        width: 450px;
        height: 50px;
        margin: 0;
        border-radius: 0.25rem;
        display: flex;
        justify-content: space-between;
        opacity: 0;
        background-image: linear-gradient(180deg,#f8f4ef 10%, #f7f4f0 80%);          
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        transition: all 0.3s;
        &.show{
            transform: translateY(100%);
            opacity: 1;
        }
        .configuration{
            display: flex;
            justify-content: space-between;
        }
        .square{
            width: 10px;
            height: 10px;
            border: 2px black solid;
            margin-right: 1px;
            &.black{
                background-color: black;
            }
            &.white{
                background-color: white;
            }
        }
    }
</style>