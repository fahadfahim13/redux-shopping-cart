
import { fireEvent, render, screen } from '@testing-library/react';
import { Button, Select } from 'antd';
import Product from './components/View/Products'

describe('Product Component Test', () => {

    it('Testing Product List', () => {
        render(<Product />)
        fireEvent.click(screen.getByRole(Button))
        expect(screen.getByRole(Select)).toHaveDisplayValue("")
    })
});
