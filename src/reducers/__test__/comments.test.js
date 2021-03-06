import commentsReducer from 'reducers/comments'

import { SAVE_COMMNET } from 'actions/types'

it('handle actions of type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMNET,
        payload: 'New Comment'
    };
    
    const newState = commentsReducer([], action);

    expect(newState).toEqual(['New Comment'])
})

it('handle actions with unknow type', () =>{
    const newState = commentsReducer([],{type: 'lksdasdsad'})

    expect(newState).toEqual([])

})