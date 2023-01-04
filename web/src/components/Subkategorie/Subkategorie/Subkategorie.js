import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { checkboxInputTag } from 'src/lib/formatters'

const DELETE_SUBKATEGORIE_MUTATION = gql`
  mutation DeleteSubkategorieMutation($id: Int!) {
    deleteSubkategorie(id: $id) {
      id
    }
  }
`

const Subkategorie = ({ subkategorie }) => {
  const [deleteSubkategorie] = useMutation(DELETE_SUBKATEGORIE_MUTATION, {
    onCompleted: () => {
      toast.success('Subkategorie deleted')
      navigate(routes.subkategories())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete subkategorie ' + id + '?')) {
      deleteSubkategorie({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            Subkategorie {subkategorie.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{subkategorie.id}</td>
            </tr>
            <tr>
              <th>Subkatbname</th>
              <td>{subkategorie.subkatbname}</td>
            </tr>
            <tr>
              <th>Sichtbar</th>
              <td>{checkboxInputTag(subkategorie.sichtbar)}</td>
            </tr>
            <tr>
              <th>Rad kategorie id</th>
              <td>{subkategorie.radKategorieId}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editSubkategorie({ id: subkategorie.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(subkategorie.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default Subkategorie
