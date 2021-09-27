import { subAreas } from './molequa/mocks/index'
const mocksmolequa = require('./molequa/mocks/mocksmolequa')

const genetica = require('./genetica')

const molequa = () => ({
  creche_b: mocksmolequa.creche_b.map(item => {
    let subareas
    item?.subAreas?.map(sa =>
      subareas = {
        ...subareas,
        [sa]: subAreas[sa] || {}
      }
    )
    return {
      ...item,
      subAreas: subareas
    }
  }),
  creche_c: mocksmolequa.creche_c.map(item => {
    let subareas
    item?.subAreas?.map(sa =>
      subareas = {
        ...subareas,
        [sa]: subAreas[sa] || {}
      }
    )
    return {
      ...item,
      subAreas: subareas
    }
  }),
  quadra_coberta: mocksmolequa.quadra_coberta.map(item => {
    let subareas
    item?.subAreas?.map(sa =>
      subareas = {
        ...subareas,
        [sa]: subAreas[sa] || {}
      }
    )
    return {
      ...item,
      subAreas: subareas
    }
  }),
})



module.exports = {
  genetica,
  molequa: molequa(),
}