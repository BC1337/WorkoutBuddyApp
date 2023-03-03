require('dotenv').config()

const express = require('express')
const colors =  require('colors')
const workoutRoutes = require('./routes/workouts')
const mongoose = require('mongoose')

// express app 
const app = express()

// middleware
app.use(express.json())


app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// connect to DB
/*When the strict option is set to true, Mongoose
  will ensure that only the fields that are specified
  in your schema will be saved in the database 
*/
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
    console.log(colors.cyan('Listening on port 4000!'))
})
    })
    .catch((error) => {
        console.log(error)
    })

