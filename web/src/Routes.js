// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import ScaffoldLayout from 'src/layouts/ScaffoldLayout'

const Routes = () => {
  return (
    <Router>
      <Route path="/kategorieselect" page={KategorieselectPage} name="kategorieselect" />
      <Set wrap={ScaffoldLayout} title="Subkategories" titleTo="subkategories" buttonLabel="New Subkategorie" buttonTo="newSubkategorie">
        <Route path="/subkategories/new" page={SubkategorieNewSubkategoriePage} name="newSubkategorie" />
        <Route path="/subkategories/{id:Int}/edit" page={SubkategorieEditSubkategoriePage} name="editSubkategorie" />
        <Route path="/subkategories/{id:Int}" page={SubkategorieSubkategoriePage} name="subkategorie" />
        <Route path="/subkategories" page={SubkategorieSubkategoriesPage} name="subkategories" />
      </Set>
      <Set wrap={ScaffoldLayout} title="RadKategories" titleTo="radKategories" buttonLabel="New RadKategorie" buttonTo="newRadKategorie">
        <Route path="/rad-kategories/new" page={RadKategorieNewRadKategoriePage} name="newRadKategorie" />
        <Route path="/rad-kategories/{id:Int}/edit" page={RadKategorieEditRadKategoriePage} name="editRadKategorie" />
        <Route path="/rad-kategories/{id:Int}" page={RadKategorieRadKategoriePage} name="radKategorie" />
        <Route path="/rad-kategories" page={RadKategorieRadKategoriesPage} name="radKategories" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
