import { db } from 'src/lib/db'

export const radKategories = () => {
  return db.radKategorie.findMany()
}

export const radKategorie = ({ id }) => {
  return db.radKategorie.findUnique({
    where: { id },
  })
}

export const createRadKategorie = ({ input }) => {
  return db.radKategorie.create({
    data: input,
  })
}

export const updateRadKategorie = ({ id, input }) => {
  return db.radKategorie.update({
    data: input,
    where: { id },
  })
}

export const deleteRadKategorie = ({ id }) => {
  return db.radKategorie.delete({
    where: { id },
  })
}

export const RadKategorie = {
  subkategorie: (_obj, { root }) => {
    return db.radKategorie
      .findUnique({ where: { id: root?.id } })
      .subkategorie()
  },
}
