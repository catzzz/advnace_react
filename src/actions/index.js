

import { SAVE_COMMNET } from "actions/types";

export function saveComment(comment) {
    return {
        type:SAVE_COMMNET,
        payload: comment
    }
}