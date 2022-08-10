import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../components/AddCategory'


describe('Tests on <AddCategory /> component', () => {

    test('should change the value of the textbox', () => {

        render(<AddCategory onNewvalue={() => { }} />)

        const input = screen.getByRole('textbox')
        fireEvent.input(input, { target: { value: 'Alucard' } });

        expect(input.value).toBe('Alucard')

    })

    test('should call onNewValue if the input has a value', () => {

        const inputValue = 'Alucard';
        const onNewvalue = jest.fn();

        render(<AddCategory onNewvalue={onNewvalue} />)

        const input = screen.getByRole('textbox')
        const form = screen.getAllByRole('form')

        fireEvent.input(input, { target: { value: inputValue } });
        fireEvent.submit(form[0]);

        expect(input.value).toBe('');

        expect(onNewvalue).toHaveBeenCalled();
        expect(onNewvalue).toBeCalledTimes(1);
        expect(onNewvalue).toHaveBeenCalledWith(inputValue);

    })

    test('should not call onNewvalue if the input is empty', () => {


        const onNewvalue = jest.fn();
        render(<AddCategory onNewvalue={onNewvalue} />)

        const form = screen.getAllByRole('form')

        fireEvent.submit(form[0]);

        expect(onNewvalue).not.toHaveBeenCalled();
    })


})