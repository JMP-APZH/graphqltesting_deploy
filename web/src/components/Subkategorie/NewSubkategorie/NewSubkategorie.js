import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import SubkategorieForm from 'src/components/Subkategorie/SubkategorieForm'

const CREATE_SUBKATEGORIE_MUTATION = gql`
  mutation CreateSubkategorieMutation($input: CreateSubkategorieInput!) {
    createSubkategorie(input: $input) {
      id
    }
  }
`

const NewSubkategorie = () => {
  const [createSubkategorie, { loading, error }] = useMutation(
    CREATE_SUBKATEGORIE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Subkategorie created')
        navigate(routes.subkategories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createSubkategorie({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Subkategorie</h2>
      </header>
      <div className="rw-segment-main">
        <SubkategorieForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSubkategorie
