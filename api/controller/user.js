const users = require('../repository/user/users')

const UserController = () => {
  const Login = async (req, res) => {
    const { user, password } = req.body

    const u = users.find(u => u.user === user)

    if (!u) return res.status(401).json({ msg: 'usuario nao existe' })

    if (u.password != password) return res.status(401).json({ msg: 'senha incorreta' })

    return res.status(200).json({ token: 'myToken', ...u })
  }

  return {
    Login
  }
}

module.exports = UserController()

