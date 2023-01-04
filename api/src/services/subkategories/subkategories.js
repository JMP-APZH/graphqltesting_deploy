import { db } from 'src/lib/db'

export const subkategories = () => {
  return db.subkategorie.findMany()
}

export const subkategorie = ({ id }) => {
  return db.subkategorie.findUnique({
    where: { id },
  })
}

export const createSubkategorie = ({ input }) => {
  return db.subkategorie.create({
    data: input,
  })
}

export const updateSubkategorie = ({ id, input }) => {
  return db.subkategorie.update({
    data: input,
    where: { id },
  })
}

export const deleteSubkategorie = ({ id }) => {
  return db.subkategorie.delete({
    where: { id },
  })
}

export const Subkategorie = {
  RadKategorie: (_obj, { root }) => {
    return db.subkategorie
      .findUnique({ where: { id: root?.id } })
      .RadKategorie()
  },
}
