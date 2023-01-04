import Subkategorie from 'src/components/Subkategorie/Subkategorie'

export const QUERY = gql`
  query FindSubkategorieById($id: Int!) {
    subkategorie: subkategorie(id: $id) {
      id
      subkatbname
      sichtbar
      radKategorieId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Subkategorie not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ subkategorie }) => {
  return <Subkategorie subkategorie={subkategorie} />
}
