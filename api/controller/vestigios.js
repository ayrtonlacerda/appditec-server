const vestigios = require('../repository/vestigios')

const VestigiosController = () => {
  const index = async (req, res) => {
    const { type } = req.body

    if (!type || !vestigios[type]) return res.status(404).json({ error: 'type e requirido' })

    return res.status(200).json(vestigios[type])
  }

  return {
    index
  }
}

module.exports = VestigiosController()

