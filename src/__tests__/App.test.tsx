import React, { ReactElement } from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import renderer from 'react-test-renderer'
import { useSelector, useDispatch, Provider } from 'react-redux'; 
import store from '../redux/store';


describe('Product Component Test', () => {
    beforeAll(() => {
        window.matchMedia = (query) => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })
      });

    // const mockDispatch = jest.fn();
    //     jest.mock('react-redux', () => ({
    //     useSelector: jest.fn(),
    //     useDispatch: () => mockDispatch
    //     }));

    const renderWithRedux = (component: ReactElement) => {
        return (
            <Provider store={store}>
                {component}
            </Provider>
        )
    }

    it('Testing App', () => {
        
        // const tree = renderer.create(<Provider store={store}><App /></Provider>)
        const tree = renderer.create(renderWithRedux(<App />)).toJSON();
        expect(tree).toMatchSnapshot();
    })
    
});
