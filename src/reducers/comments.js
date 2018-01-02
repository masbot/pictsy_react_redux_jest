import * as constants from '../actions/constants';

const comments = (state = {}, action) => {
    switch(action.type) {
        case constants.ADD_COMMENT:
            const comments = state[action.newComment.id] || [];
            const ids = comments.map( comment => comment.id );
            const max_ids = ids.length > 0 ? Math.max(...ids) : 0;
            const newComment = { id: max_ids+1, text: action.newComment.text };
            return Object.assign({}, state, { [action.newComment.id]: [ ...comments, newComment ]});
        default:
            return state;
    }
}

export default comments;