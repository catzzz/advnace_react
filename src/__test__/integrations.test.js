
import React from 'react'
import {mount} from 'enzyme'
import Root from 'Root'
import App from 'components/App'
import moxios from 'moxios'

beforeEach(() =>{
    // intercept axios and use moxios instead
    moxios.install()
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status: 200,
        response: [{name:'Fetch #1'},{name: 'Fetch #2'}]
    })
})

afterEach(()=>{
    moxios.uninstall();
})
it('can fetch a list of comments and display them', (done) =>{
    // Attempt to render the entire app
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    )
    // find the 'fetchComments' button and click it 
    wrapped.find('.fetch-comments').simulate('click');
    
    
    // introduce a tiny little pause

    moxios.wait(()=>{
        // update ui
        wrapped.update();
         // Expect to find a list fo comments
        expect(wrapped.find('li').length).toEqual(2);

        // signal done to finish test;
        done();
        wrapped.unmount();
    })

   

    

 })