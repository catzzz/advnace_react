import React, { Component } from "react";
import {connect } from 'react-redux'
import * as actions from 'actions'


class CommentBox extends Component{
  state = { comment: '' };

  handleChange = event => {
    console.log(event.target.value);
    this.setState({comment: event.target.value})
  }
  handleSubmit = event =>{
    event.preventDefault();
    //  call an action creator
    this.props.saveComment(this.state.comment);
    // and save the comment
    this.setState({comment: ''});
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4> Add a Comment</h4>
        <textarea value = {this.state.comment} onChange={this.handleChange}/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}
export default connect(null, actions)(CommentBox);