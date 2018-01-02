import React from 'react';
import { shallow, mount } from 'enzyme';
import { ImageCloseUp } from './ImageCloseUp';

describe('ImageCloseUp', () => {
    const mockAddcomment = jest.fn();
    let props = { image: { url: 'location', id: "1"}, addComment: mockAddcomment };
    let imagecloseup = shallow(<ImageCloseUp {...props}/>);

    it('renders properly', () => {
        expect(imagecloseup).toMatchSnapshot();
    });

    it('creates input for comment input', () => {
        expect(imagecloseup.find('.comment-input').exists()).toBe(true);
    });

    it('initializes the `state` for comment', () => {
        expect(imagecloseup.state().comment).toEqual('');
    });

    describe('after receiving comments from redux', () => {
        const comments = {
            "1": [
                {
                    "id": "1",
                    "text": "1 comment A"
                },
                {
                    "id": "2",
                    "text": "1 comment B"
                },
                {
                    "id": "3",
                    "text": "1 comment C"
                }
            ]
        };

        beforeEach(() => {
            props = { image: { url: 'location', id: "1"}, comments };
            imagecloseup = shallow(<ImageCloseUp {...props}/>);
        });

        xit('creates comment element', () => {
            expect(imagecloseup.find('.comments').children().length).toEqual(comments[props.image.id].length);
        });
    });

    describe('when typing in comment input', () => {
        const comment = "first comment";

        beforeEach(() => {
            imagecloseup.find('.comment-input').simulate('change', { target: { value: comment}})
        });

        it('sets the `state` of comment to input value', () => {
            expect(imagecloseup.state().comment).toEqual(comment);
        });

        describe('when adding new comment', () => {
            beforeEach(( ) => {
                imagecloseup.find('.comment-input').simulate('keypress', { key: 'Enter'} );
            });
    
            it('dispatches addComment() from props', () => {
                expect(mockAddcomment).toHaveBeenCalled();
            });

            it('adds a new comment to comments list', () => {
                expect(imagecloseup.find('.comments').children.length).toEqual(1);
            });

            it('empties the input comment after pressing enter', () => {
                expect(imagecloseup.find('.comment-input').text()).toEqual('');
            })
        });
    });
});