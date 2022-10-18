import Vue from 'vue';
import Vuex from 'vuex';
import tools from '../tools/tools';

const checkObjectProperties = (object, propertiesToCheck) => {
  const keys = Object.keys(object);
  return propertiesToCheck.every(property => keys.includes(property));
}

Vue.use(Vuex)

/* eslint-disable no-new */
const store = new Vuex.Store({
  state: {
    cellsArray: [],
    lines: 0,
    columns: 0,
    startingLine: [],
    mode: 'taurid', 
    rule: 0
  },
  mutations: {
    INIT_CELLS_ARRAY(state){
      state.cellsArray.length = 0;
      state.cellsArray = new Array(state.lines);
      for(let line = 0 ; line < state.lines; line++){
        state.cellsArray[line] = new Array(state.columns);
        if((line === 0) && (state.columns > 0)){
          state.cellsArray[0] = [...state.startingLine];
        }
      }
    },
    ADD_CELL(state, payload){
      state.cellsArray[payload.line][payload.column] = payload.cellValue;
    },
    EDIT_LINES(state, payload){
      state.lines = payload.lines;
    },
    EDIT_COLUMNS(state, payload){
      state.columns = payload.columns;  
    },
    EDIT_RULE(state, payload){
      state.rule = payload.rule;  
    },    
    CREATE_STARTING_LINE(state){
      state.startingLine = new Array(state.columns);
      for(let column = 0; column < state.columns; column++){
        state.startingLine[column] = tools.getRandomInt(0, 1);
      }
    }
  },
  actions: {
    addCell({commit}, payload){
      let requiredKeys = ['line', 'column', 'cellValue']; 
      if(checkObjectProperties(payload, requiredKeys)){
        return commit('ADD_CELL', payload);
      }
    },
    editLines({commit}, payload){
      let requiredKeys = ['lines']; 
      if(checkObjectProperties(payload, requiredKeys)){
        commit('EDIT_LINES', payload);
        commit('CREATE_STARTING_LINE');
        commit('INIT_CELLS_ARRAY');        
      }
    },
    editColumns({commit}, payload){
      let requiredKeys = ['columns']; 
      if(checkObjectProperties(payload, requiredKeys)){
        commit('EDIT_COLUMNS', payload);
        commit('CREATE_STARTING_LINE');
        commit('INIT_CELLS_ARRAY');  
      }
    },
    editRule({commit}, payload){
      let requiredKeys = ['rule']; 
      if(checkObjectProperties(payload, requiredKeys)){
        commit('EDIT_RULE', payload);
        commit('CREATE_STARTING_LINE');
        commit('INIT_CELLS_ARRAY');  
      }
    }
  }
})

export default store
