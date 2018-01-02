import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
    let app = shallow(<App/>);

    it('renders properly', () => {
        expect(app).toMatchSnapshot();
    });

    describe('when initializing the `state`', () => {
        it('checks showCloseUp is false', () => {
            expect(app.state().showCloseUp).toEqual(false);
        });

        it('checks closeUpImage', () => {
            expect(app.state().closeUpImage).toEqual({});
        });
    });

    it('hides the ImageCloseUp component', () => {
        expect(app.find('ImageCloseUp').exists()).toBe(false);
    });

    describe('when user clicks on image', () => {
        const image = {
            id: 1,
            url: 'location'
        }

        beforeEach(() => {
            app.instance().onClickImage(image);
        });

        it('updates the `state` of showCloseUp to true', () => {
            expect(app.state().showCloseUp).toEqual(true);
        });

        xit('updates the `state` of closeUpImage',() => {
            expect(app.state().closeUpImage).toEqual(image);
        });

        it('create a ImageCloseUp component', () => {
            app.setState({ closeUpImage: image, showCloseUp: true });
            expect(app.find('Connect(ImageCloseUp)').exists()).toBe(true);
        });
    });

});