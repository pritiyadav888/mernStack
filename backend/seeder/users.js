const bcrypt = require("bcryptjs")

const users = [
      {
    name: 'admin',
    lastName: 'admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('admin@admin.com', 10),
    isAdmin: true,
  },
  {
    name: 'priti',
    lastName: 'yadav',
    email: 'priti@yadav.com',
    password: bcrypt.hashSync('priti@yadav.com', 10),
  },
]

module.exports = users
