export const schema = gql`
  type Subkategorie {
    id: Int!
    subkatbname: String!
    sichtbar: Boolean!
    RadKategorie: RadKategorie
    radKategorieId: Int
  }

  type Query {
    subkategories: [Subkategorie!]! @requireAuth
    subkategorie(id: Int!): Subkategorie @requireAuth
  }

  input CreateSubkategorieInput {
    subkatbname: String!
    sichtbar: Boolean!
    radKategorieId: Int
  }

  input UpdateSubkategorieInput {
    subkatbname: String
    sichtbar: Boolean
    radKategorieId: Int
  }

  type Mutation {
    createSubkategorie(input: CreateSubkategorieInput!): Subkategorie!
      @requireAuth
    updateSubkategorie(
      id: Int!
      input: UpdateSubkategorieInput!
    ): Subkategorie! @requireAuth
    deleteSubkategorie(id: Int!): Subkategorie! @requireAuth
  }
`
