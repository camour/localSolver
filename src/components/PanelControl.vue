<template>
    <div class="panel-control" :class="hidePanel ? 'hide' : ''">
        <h2>panel control</h2>
        <div>
            <input type="number" name="lines-input" id="lines-input" @change="editLines({lines: parseInt($event.target.value)})" min="0"/>
            <label for="lines-input">lines</label>
        </div>
        <div>
            <input type="number" name="columns-input" id="columns-input" @change="editColumns({columns: parseInt($event.target.value)})" min="0" />
            <label for="columns-input">columns</label>
        </div>
        <div>
            <input type="number" name="rule-input" id="rule-input" @change="editRule({rule: parseInt($event.target.value)})" min="0" />
            <label for="rule-input">rule</label>
        </div>
        <button @click="hidePanel = !hidePanel">
            <span class="arrow right"></span>
        </button>
    </div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default{
        name: 'PanelControl',
        data(){
            return{
                hidePanel: true
            }
        },
        methods: {
            ...mapActions(['editLines', 'editColumns', 'editRule'])
        }
    }
</script>

<style lang="scss" scoped>
    .panel-control{
        position: absolute;
        left: 20px;
        width: 250px;
        padding: 20px;
        border-radius: 0.25rem;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        background-image: linear-gradient(180deg,#f8ecdc 10%, #f8ecdc 80%);          
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        transition: all 0.3s;
        &.hide{
            transform: translateX(-110%);
        }
        h2{
            position: relative;
            top: -20px;
        }
        div{
            width: 200px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
        }
        input[type="number"]{
            width: 50px;
            padding: 12px 20px;
            border-style: solid;
        }
        label{
            text-align: center;
            padding: 10px;
            width: 50px;
            font-weight: bold;
        }
        button{
            position: absolute;
            right: -30px;
            width: 40px;
            height: 100px;
            outline: none;
            border: 0;
            border-radius: 0.25rem;
            background-image: linear-gradient(180deg,#f8ecdc 10%, #f8ecdc 80%);          
            box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
            cursor: pointer;
            transition: all 0.3s;
            .arrow {
                border: solid black;
                border-width: 0 3px 3px 0;
                display: inline-block;
                padding: 3px;
            }
            .right{
                transform: rotate(-45deg);
                -webkit-transform: rotate(-45deg);
            }
            &:hover{
                transform: scale(1.1);
            }
        }        
    }
</style>