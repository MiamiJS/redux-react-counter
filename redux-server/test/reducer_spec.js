import {expect} from 'chai'
import {Map, fromJS} from 'immutable';
import reducer from '../src/reducer'

describe('Reducer', () => {


  let state
  beforeEach(() => {

    state = Map({value:0})

  })


  it('Handles SET_STATE', ()=>{
    const action = {type: 'SET_STATE', value:32}
    const nextState = reducer(state, action);
    expect(nextState).to.equal(fromJS({value:32}))
  })

  it('Handles INCREMENT', ()=>{
    const action = {type: 'INCREMENT'}
    const nextState = reducer(state, action);
    expect(nextState).to.equal(fromJS({value:1}))
  })

  it('Handles DECREMENT', ()=>{
    const action = {type: 'DECREMENT'}
    const nextState = reducer(state, action);
    expect(nextState).to.equal(fromJS({value:-1}))
  })

  it('go forward and backward', ()=>{
    const actions = [
      {type: 'SET_STATE', value:5},
      {type: 'INCREMENT'},
      {type: 'INCREMENT'},
      {type: 'DECREMENT'},
    ]
    const finalState = actions.reduce(reducer, Map({}))
    expect(finalState).to.equal(fromJS({value:6}))
  })

})