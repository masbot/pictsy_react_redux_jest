import * as constants from '../actions/constants';
import commentReducer from './comments';

describe('commentReducer', () => {

    const initialState = {
        "1": [
            {
                "id": 1,
                "text": "1 comment A"
            },
            {
                "id": 2,
                "text": "1 comment B"
            },
            {
                "id": 3,
                "text": "1 comment C"
            }
        ],
        "2": [
            {
                "id": 1,
                "text": "2 comment A"
            },
            {
                "id": 2,
                "text": "2 comment B"
            },
            {
                "id": 3,
                "text": "2 comment C"
            }
        ]
    };

    it('initialize state', () => {
        expect(commentReducer(undefined, {})).toEqual({});
    })

    it('add comment to state', () => {
        const newComment = { id: "2", text: "2 comment D" };
        const comments = Object.assign({}, initialState);
        comments[newComment.id].push({ "id": 4, "text": newComment.text });
        expect(commentReducer(initialState, { type: constants.ADD_COMMENT, newComment })).toEqual(comments);
    });
})