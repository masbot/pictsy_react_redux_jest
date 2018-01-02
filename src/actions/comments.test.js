
import * as constants from './constants';
import * as actions from './comments';

describe('comment actions', () => {
    it('creates an action to add comment', () => {
        const newComment = { id: 2, text: "2 comment D" };
        const expectedAction = { type: constants.ADD_COMMENT, newComment }
        expect(actions.addComment(newComment)).toEqual(expectedAction);
    });
});