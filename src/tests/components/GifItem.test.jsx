import { render, screen } from '@testing-library/react'
import { GifItem } from '../../components/GifItem'

describe('Tests on <GiftItem />', () => {

    const title = 'Alucard'
    const url = 'https://castlevania.com/random.jpg'

    test('Must match the snapshot', () => {

        const { container } = render(<GifItem title={title} url={url} />);
        expect(container).toMatchSnapshot();

    })

    test('should show the img with the URL and ALT indicated', () => {

        render(<GifItem title={title} url={url} />);

        const { src, alt } = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);

    })

    test('should show the title on the component', () => {

        render(<GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy();

    })
})