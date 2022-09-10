const express = require('express')
const sequelize = require('./src/db/sequelize')


const port = process.env.PORT || 3000
const app = express()

// sequelize.initDb()

app.get('/', (req, res) => {
    res.json({ msg: 'Hello Heroku !' })
})

require('./src/routes/user/findAllUsers')(app)

app.listen(port, () => console.log(`Notre application Node est demaree sur : http://localhost:${port}`))