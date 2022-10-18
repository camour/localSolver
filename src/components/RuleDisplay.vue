<template>
    <div class="display-rule">
        <h3>binary rule</h3>
        {{ displayRule }}
    </div>
</template>

<script>
    import tools from '../tools/tools.js';
    import { mapState } from 'vuex';
    export default{
        name: 'RuleDisplay',
        computed: {
            ...mapState(['rule']),
            displayRule(){
                let result = '';
                tools.getBinary(this.rule, 8).map(String).forEach(element => result+=(element + ' '));
                return result;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .display-rule{
        position: absolute;
        right: 50px;
        width: 200px;
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
</style>