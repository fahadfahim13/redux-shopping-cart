import React, { ReactElement } from 'react';
import * as reactRedux from 'react-redux'
import renderer from 'react-test-renderer'
import { useSelector, useDispatch, Provider } from 'react-redux'; 
import store from '../redux/store';
import Cart from '../components/View/Cart';

describe('test suite', () => {
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const useDispatchMock = jest.spyOn(reactRedux, 'useDispatch')
    beforeEach(() => {
        useSelectorMock.mockClear()
        useDispatchMock.mockClear()
      })

    const renderWithRedux = (component: ReactElement) => {
        // console.log(store.getState())
        return (
            <Provider store={store}>
                {component}
            </Provider>
        )
    }


    it('Cart Component', () => {
        
        const tree = renderer.create(renderWithRedux(<Cart />)).toJSON();
        expect(tree).toMatchSnapshot();
    })
  })