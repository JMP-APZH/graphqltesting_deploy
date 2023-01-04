import { Link, routes } from '@redwoodjs/router'

import Subkategories from 'src/components/Subkategorie/Subkategories'

export const QUERY = gql`
  query FindSubkategories {
    subkategories {
      id
      subkatbname
      sichtbar
      radKategorieId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No subkategories yet. '}
      <Link to={routes.newSubkategorie()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ subkategories }) => {
  return <Subkategories subkategories={subkategories} />
}
