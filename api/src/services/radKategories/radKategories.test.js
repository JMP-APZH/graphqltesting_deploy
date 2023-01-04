import {
  radKategories,
  radKategorie,
  createRadKategorie,
  updateRadKategorie,
  deleteRadKategorie,
} from './radKategories'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('radKategories', () => {
  scenario('returns all radKategories', async (scenario) => {
    const result = await radKategories()

    expect(result.length).toEqual(Object.keys(scenario.radKategorie).length)
  })

  scenario('returns a single radKategorie', async (scenario) => {
    const result = await radKategorie({ id: scenario.radKategorie.one.id })

    expect(result).toEqual(scenario.radKategorie.one)
  })

  scenario('creates a radKategorie', async () => {
    const result = await createRadKategorie({
      input: { kategoriename: 'String' },
    })

    expect(result.kategoriename).toEqual('String')
  })

  scenario('updates a radKategorie', async (scenario) => {
    const original = await radKategorie({
      id: scenario.radKategorie.one.id,
    })
    const result = await updateRadKategorie({
      id: original.id,
      input: { kategoriename: 'String2' },
    })

    expect(result.kategoriename).toEqual('String2')
  })

  scenario('deletes a radKategorie', async (scenario) => {
    const original = await deleteRadKategorie({
      id: scenario.radKategorie.one.id,
    })
    const result = await radKategorie({ id: original.id })

    expect(result).toEqual(null)
  })
})
