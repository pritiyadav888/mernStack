const bcrypt = require("bcryptjs")
const ObjectId = require("mongodb").ObjectId;

const users = [
      {
    name: 'admin',
    lastName: 'admin',
    email: 'admin@admin.com',
    password: bcrypt.hashSync('Pritiyadav', 10),
    isAdmin: true,
  },
  {
      _id: ObjectId("625add3d78fb449f9d9fe2ee"),
    name: 'Priti',
    lastName: 'Yadav',
    email: 'priti@yadav.com',
    password: bcrypt.hashSync('priti@yadav.com', 10),
  },
]

module.exports = users