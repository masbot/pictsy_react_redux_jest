import React from 'react';
import { shallow } from 'enzyme';
import ImageList from './ImageList';
import data from './data.json';

describe('ImageList', () => {

    const imagelist = shallow(<ImageList/>);

    it('renders properly', () => {
        expect(imagelist).toMatchSnapshot();
    });

    describe('when images data is loaded', () => {
        
        it('renders the right number of images', () => {
            expect(imagelist.find('ImageItem').length).toEqual(data.images.length);
        });

        it('creates an ImageItem component', () => {
            expect(imagelist.find('ImageItem').exists()).toBe(true);
        });
    });
});