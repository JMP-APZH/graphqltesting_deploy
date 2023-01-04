import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag } from 'src/lib/formatters'

const DELETE_RAD_KATEGORIE_MUTATION = gql`
  mutation DeleteRadKategorieMutation($id: Int!) {
    deleteRadKategorie(id: $id) {
      id
    }
  }
`

const RadKategorie = ({ radKategorie }) => {
  const [deleteRadKategorie] = useMutation(DELETE_RAD_KATEGORIE_MUTATION, {
    onCompleted: () => {
      toast.success('RadKategorie deleted')
      navigate(routes.radKategories())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete radKategorie ' + id + '?')) {
      deleteRadKategorie({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            RadKategorie {radKategorie.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{radKategorie.id}</td>
            </tr>
            <tr>
              <th>Kategoriename</th>
              <td>{radKategorie.kategoriename}</td>
            </tr>
            <tr>
              <th>Sichtbar</th>
              <td>{checkboxInputTag(radKategorie.sichtbar)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editRadKategorie({ id: radKategorie.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(radKategorie.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default RadKategorie
