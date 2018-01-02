import React from 'react';
import { shallow } from 'enzyme';
import ImageItem from './ImageItem';

describe('ImageItem', () => {
    const mockOnClickImage = jest.fn();
    const props = { onClickImage: mockOnClickImage };
    const imageitem = shallow(<ImageItem {...props}/>);

    it('renders properly', () => {
        expect(imageitem).toMatchSnapshot();
    });

    describe('when user clicks on image', () => {
        beforeEach(() => {
            imageitem.find('img').simulate('click');
        });

        it('calls the onClickImage callback', () => {
            expect(mockOnClickImage).toHaveBeenCalled();
        });
    })
});
