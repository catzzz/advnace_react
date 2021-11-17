import CommentBox from "components/CommnetBox";
import { mount } from "enzyme/build";
import React from 'react'



let wrapped; 

beforeEach(() => {
    wrapped = mount(<CommentBox />);
})

afterEach(()=> {
    wrapped.unmount();
})


it('has a text area and a button' ,() => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
})


describe('the textarea', () =>{

    beforeEach(() =>{
        wrapped.find('textarea').simulate('change', {
            target:{value:'new comment'}
        })
        wrapped.update();
    })

    it('has a text area htat users can type in ', () => {

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
    })
    
    it('whne form is subbmitted, text area gets emptied',() =>{

        expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
        wrapped.find('form').simulate('submit')
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('')
    })
})

