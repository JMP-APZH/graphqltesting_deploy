import RadKategorie from 'src/components/RadKategorie/RadKategorie'

export const QUERY = gql`
  query FindRadKategorieById($id: Int!) {
    radKategorie: radKategorie(id: $id) {
      id
      kategoriename
      sichtbar
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>RadKategorie not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ radKategorie }) => {
  return <RadKategorie radKategorie={radKategorie} />
}
