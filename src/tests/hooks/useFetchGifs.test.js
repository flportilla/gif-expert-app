import { renderHook, waitFor } from '@testing-library/react'
import { useFetchGifs } from '../../hooks/useFetchGifs'

describe('Tests on the useFetchGifs hook', () => {

    test('should return the initial state', () => {

        const { result } = renderHook(() => useFetchGifs('Castlevania'));
        const { images, isLoading } = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy();

    })

    test('should return an array of images and isLoading should be false', async () => {

        const { result } = renderHook(() => useFetchGifs('Castlevania'));

        await waitFor(() => {
            expect(result.current.images.length).toBeGreaterThan(0)
                , { timeout: 5000 }
        })

        const { images, isLoading } = result.current

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy();

    })

})
