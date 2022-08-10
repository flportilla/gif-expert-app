import { fireEvent, render, screen } from '@testing-library/react'
import { GifGrid } from '../../components/GifGrid'
import { useFetchGifs } from '../../hooks/useFetchGifs'


jest.mock('../../hooks/useFetchGifs');


describe('Tests on <GifGrid />', () => {


    const category = 'Castlevania'

    test('should show loading initially', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render(<GifGrid category={category} />);

        expect(screen.getAllByText('Loading...'));
        expect(screen.findAllByText(category));

    })

    test('should show items when the images are fetched', () => {

        const gifs = [
            {
                id: 'abc',
                title: 'Alucard.jpg',
                url: 'http://www.google.com/alucard.jpeg'
            },
            {
                id: '123',
                title: 'Alucardo.jpg',
                url: 'http://www.google.com/alucardo.jpeg'
            }
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category} />);

        expect(screen.getAllByRole('img').length).toBe(2)

    })



})