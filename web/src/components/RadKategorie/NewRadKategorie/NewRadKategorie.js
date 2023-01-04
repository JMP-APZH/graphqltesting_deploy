import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import RadKategorieForm from 'src/components/RadKategorie/RadKategorieForm'

const CREATE_RAD_KATEGORIE_MUTATION = gql`
  mutation CreateRadKategorieMutation($input: CreateRadKategorieInput!) {
    createRadKategorie(input: $input) {
      id
    }
  }
`

const NewRadKategorie = () => {
  const [createRadKategorie, { loading, error }] = useMutation(
    CREATE_RAD_KATEGORIE_MUTATION,
    {
      onCompleted: () => {
        toast.success('RadKategorie created')
        navigate(routes.radKategories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createRadKategorie({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New RadKategorie</h2>
      </header>
      <div className="rw-segment-main">
        <RadKategorieForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewRadKategorie
