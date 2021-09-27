const pops = require('../repository/pops')

const PopsController = () => {
  const index = async (req, res) => {
    //const { type } = req.body

    //if (!type || !vestigios[type]) return res.status(404).json({ error: 'type e requirido' })

    return res.status(200).json(pops.molequa)
  }

  return {
    index
  }
}

module.exports = PopsController()


