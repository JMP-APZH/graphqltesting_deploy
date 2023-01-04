import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SubkategorieForm from 'src/components/Subkategorie/SubkategorieForm'

export const QUERY = gql`
  query EditSubkategorieById($id: Int!) {
    subkategorie: subkategorie(id: $id) {
      id
      subkatbname
      sichtbar
      radKategorieId
    }
  }
`
const UPDATE_SUBKATEGORIE_MUTATION = gql`
  mutation UpdateSubkategorieMutation(
    $id: Int!
    $input: UpdateSubkategorieInput!
  ) {
    updateSubkategorie(id: $id, input: $input) {
      id
      subkatbname
      sichtbar
      radKategorieId
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ subkategorie }) => {
  const [updateSubkategorie, { loading, error }] = useMutation(
    UPDATE_SUBKATEGORIE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Subkategorie updated')
        navigate(routes.subkategories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateSubkategorie({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Subkategorie {subkategorie?.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <SubkategorieForm
          subkategorie={subkategorie}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
