import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/RadKategorie/RadKategoriesCell'
import { checkboxInputTag, truncate } from 'src/lib/formatters'

const DELETE_RAD_KATEGORIE_MUTATION = gql`
  mutation DeleteRadKategorieMutation($id: Int!) {
    deleteRadKategorie(id: $id) {
      id
    }
  }
`

const RadKategoriesList = ({ radKategories }) => {
  const [deleteRadKategorie] = useMutation(DELETE_RAD_KATEGORIE_MUTATION, {
    onCompleted: () => {
      toast.success('RadKategorie deleted')
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
    if (confirm('Are you sure you want to delete radKategorie ' + id + '?')) {
      deleteRadKategorie({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Kategoriename</th>
            <th>Sichtbar</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {radKategories.map((radKategorie) => (
            <tr key={radKategorie.id}>
              <td>{truncate(radKategorie.id)}</td>
              <td>{truncate(radKategorie.kategoriename)}</td>
              <td>{checkboxInputTag(radKategorie.sichtbar)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.radKategorie({ id: radKategorie.id })}
                    title={'Show radKategorie ' + radKategorie.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editRadKategorie({ id: radKategorie.id })}
                    title={'Edit radKategorie ' + radKategorie.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete radKategorie ' + radKategorie.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(radKategorie.id)}
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

export default RadKategoriesList
