import React, { ReactElement } from 'react';
import { fireEvent, getAllByRole, getAllByText, getByLabelText, getByText, render, screen } from '@testing-library/react';
import { Button, Select } from 'antd';
import Product from '../components/View/Products';
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux';
import store from '../redux/store';

jest.mock('antd', () => {
    const actual = jest.requireActual('antd');
    return {
      ...actual,
      Button: 'Fahim',
    
    };
  });


describe('Product Component Test', () => {

    const renderWithRedux = (component: ReactElement) => {
        // console.log(store.getState())
        return (
            <Provider store={store}>
                {component}
            </Provider>
        )
    }

    it('Testing Product List', () => {
        const tree = renderer.create(renderWithRedux(<Product />)).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('Testing Product Add Button', () => {
        const handleClick = jest.fn()
        const tree = render(renderWithRedux(<Product />));
        
        fireEvent.click(tree.getByText('Add'))
        // expect(handleClick).toHaveBeenCalledTimes(1);


    })
    
});
