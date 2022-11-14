export default async function (req, res) {
  const { name, email, password } = req.body.data

  console.log(name, email, password)

  res.status(201).json({ name, email, password })
}
