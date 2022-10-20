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
    @import '../../sass/mixin.scss';

    .panel-control{
        @include setPositionAbsolute(null, null, null, 20px);
        @include setDimensions(250px);
        @include flexBox(column, space-around, center);
        padding: 20px;
        border-radius: 0.25rem;
        background-image: linear-gradient(180deg,#f8ecdc 10%, #f8ecdc 80%);          
        box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
        transition: all 0.3s;
        &.hide{
            transform: translateX(-110%);
            button{
                transform: scale(1.3);
            }
        }
        h2{
            position: relative;
            top: -20px;            
        }
        div{
            @include setDimensions(200px, null null 20px null);
            @include flexBox(row, space-between);
        }
        select, input[type="number"]{
            @include setDimensions(50px);
            padding: 12px 20px;
            border-style: solid;
        }
        label{
            @include setDimensions(50px);
            text-align: center;
            padding: 10px;
            font-weight: bold;
        }
        button{
            @include setPositionAbsolute(null, -60px);
            @include setDimensions(70px, null, 120px);
            position: absolute;
            outline: none;
            border: 0;
            border-radius: 0.25rem;
            background-image: linear-gradient(180deg,#f8ecdc 10%, #f8ecdc 80%);          
            box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
            cursor: pointer;
            transition: all 0.3s;
            transform: scale(0.6);
            z-index: -1;
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