export const schema = gql`
  type RadKategorie {
    id: Int!
    kategoriename: String!
    subkategorie: [Subkategorie]!
    sichtbar: Boolean!
  }

  type Query {
    radKategories: [RadKategorie!]! @requireAuth
    radKategorie(id: Int!): RadKategorie @requireAuth
  }

  input CreateRadKategorieInput {
    kategoriename: String!
    sichtbar: Boolean!
  }

  input UpdateRadKategorieInput {
    kategoriename: String
    sichtbar: Boolean
  }

  type Mutation {
    createRadKategorie(input: CreateRadKategorieInput!): RadKategorie!
      @requireAuth
    updateRadKategorie(
      id: Int!
      input: UpdateRadKategorieInput!
    ): RadKategorie! @requireAuth
    deleteRadKategorie(id: Int!): RadKategorie! @requireAuth
  }
`
