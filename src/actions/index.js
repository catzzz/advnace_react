import axios from "axios";

import { FETCH_COMMENTS, SAVE_COMMNET } from "actions/types";

export function saveComment(comment) {
    return {
        type:SAVE_COMMNET,
        payload: comment
    }
}

export function fetchComments(){
    const response = axios.get('http://jsonplaceholder.typicode.com/comments');

    return {
        type:FETCH_COMMENTS,
        payload: response
    }
}