import {
  subkategories,
  subkategorie,
  createSubkategorie,
  updateSubkategorie,
  deleteSubkategorie,
} from './subkategories'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('subkategories', () => {
  scenario('returns all subkategories', async (scenario) => {
    const result = await subkategories()

    expect(result.length).toEqual(Object.keys(scenario.subkategorie).length)
  })

  scenario('returns a single subkategorie', async (scenario) => {
    const result = await subkategorie({ id: scenario.subkategorie.one.id })

    expect(result).toEqual(scenario.subkategorie.one)
  })

  scenario('creates a subkategorie', async () => {
    const result = await createSubkategorie({
      input: { subkatbname: 'String' },
    })

    expect(result.subkatbname).toEqual('String')
  })

  scenario('updates a subkategorie', async (scenario) => {
    const original = await subkategorie({
      id: scenario.subkategorie.one.id,
    })
    const result = await updateSubkategorie({
      id: original.id,
      input: { subkatbname: 'String2' },
    })

    expect(result.subkatbname).toEqual('String2')
  })

  scenario('deletes a subkategorie', async (scenario) => {
    const original = await deleteSubkategorie({
      id: scenario.subkategorie.one.id,
    })
    const result = await subkategorie({ id: original.id })

    expect(result).toEqual(null)
  })
})
