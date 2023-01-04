import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Subkategorie/SubkategoriesCell'
import { checkboxInputTag, truncate } from 'src/lib/formatters'

const DELETE_SUBKATEGORIE_MUTATION = gql`
  mutation DeleteSubkategorieMutation($id: Int!) {
    deleteSubkategorie(id: $id) {
      id
    }
  }
`

const SubkategoriesList = ({ subkategories }) => {
  const [deleteSubkategorie] = useMutation(DELETE_SUBKATEGORIE_MUTATION, {
    onCompleted: () => {
      toast.success('Subkategorie deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete subkategorie ' + id + '?')) {
      deleteSubkategorie({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Subkatbname</th>
            <th>Sichtbar</th>
            <th>Rad kategorie id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {subkategories.map((subkategorie) => (
            <tr key={subkategorie.id}>
              <td>{truncate(subkategorie.id)}</td>
              <td>{truncate(subkategorie.subkatbname)}</td>
              <td>{checkboxInputTag(subkategorie.sichtbar)}</td>
              <td>{truncate(subkategorie.radKategorieId)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.subkategorie({ id: subkategorie.id })}
                    title={'Show subkategorie ' + subkategorie.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSubkategorie({ id: subkategorie.id })}
                    title={'Edit subkategorie ' + subkategorie.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete subkategorie ' + subkategorie.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(subkategorie.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default SubkategoriesList
