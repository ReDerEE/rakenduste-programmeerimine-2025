const cats = [
  {
    id: "7d613b93-fa3e-4ef3-a9d2-e09e5ca6e4e6",
    name: "Meow",
    createdAt: 1727098800585,
    updatedAt: null,
    deleted: false,
  },
  {
    id: "2dc9ce08-d345-4fed-8560-4c6b66fb0836",
    name: "Kitty",
    createdAt: 1727098952739,
    updatedAt: null,
    deleted: false,
  },
]

class catData {
  constructor(id, name, createdAt, updatedAt = false, deleted = false) {
    this.id = id
    this.name = name
    this.createdAt = createdAt
    this.updatedAt
    this.updatedAt = updatedAt
    this.deleted = deleted
  }
}

exports.create = (req, res) => {
  newCat = new catData()
  newCat.id = crypto.randomUUID()
  newCat.name = req.body.name
  newCat.createdAt = Date.now()
  cats.push(newCat)
  //   res.send(req.params.name)
  console.log(req.body)
  const { name } = req.body
  console.log({ name })
  res.sendStatus(200)
}

exports.read = (req, res) => {
  res.send(cats.filter(cat => cat.deleted == false))
}

exports.update = (req, res) => {
  updateCat = cats.find(cat => (cat.id = req.body.id))
  if (req.body.updateName) {
    updateCat.name = req.body.updateName
    updateCat.updatedAt = Date.now()
    res.sendStatus(200)
  } else {
    res.sendStatus(400)
  }
}

exports.delete = (req, res) => {
  deleteCat = cats.find(cat => (cat.id = req.body.id))
  deleteCat.deleted = true
  deleteCat.updatedAt = Date.now()
  res.sendStatus(200)
}
