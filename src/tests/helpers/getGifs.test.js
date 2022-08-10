import { getGifs } from "../../helpers/getGifs"

describe('Tests on GetGifs helper', () => {

    test('Must return an array of gifs', async () => {


        const gifs = await getGifs('Alucard')

        expect(gifs.length).toBeGreaterThan(0)

        expect(gifs[0]).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        })
    })
})