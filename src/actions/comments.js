import * as constants from './constants';

export const addComment = newComment => {
    return {
        type: constants.ADD_COMMENT,
        newComment
    }
}