import { render } from '@redwoodjs/testing/web'

import KategorieselectPage from './KategorieselectPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('KategorieselectPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<KategorieselectPage />)
    }).not.toThrow()
  })
})
