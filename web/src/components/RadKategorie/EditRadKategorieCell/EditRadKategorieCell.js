import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RadKategorieForm from 'src/components/RadKategorie/RadKategorieForm'

export const QUERY = gql`
  query EditRadKategorieById($id: Int!) {
    radKategorie: radKategorie(id: $id) {
      id
      kategoriename
      sichtbar
    }
  }
`
const UPDATE_RAD_KATEGORIE_MUTATION = gql`
  mutation UpdateRadKategorieMutation(
    $id: Int!
    $input: UpdateRadKategorieInput!
  ) {
    updateRadKategorie(id: $id, input: $input) {
      id
      kategoriename
      sichtbar
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ radKategorie }) => {
  const [updateRadKategorie, { loading, error }] = useMutation(
    UPDATE_RAD_KATEGORIE_MUTATION,
    {
      onCompleted: () => {
        toast.success('RadKategorie updated')
        navigate(routes.radKategories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateRadKategorie({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit RadKategorie {radKategorie?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <RadKategorieForm
          radKategorie={radKategorie}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
