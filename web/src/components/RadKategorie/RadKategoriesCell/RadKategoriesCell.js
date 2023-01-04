import { Link, routes } from '@redwoodjs/router'

import RadKategories from 'src/components/RadKategorie/RadKategories'

export const QUERY = gql`
  query FindRadKategories {
    radKategories {
      id
      kategoriename
      sichtbar
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No radKategories yet. '}
      <Link to={routes.newRadKategorie()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ radKategories }) => {
  return <RadKategories radKategories={radKategories} />
}
