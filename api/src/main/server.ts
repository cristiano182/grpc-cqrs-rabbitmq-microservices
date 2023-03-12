import express from "express"
import env from "./config/env"
import routes from "./routes/index"

import "./config/app"

const app = express()

app.use(express.json())

app.use(routes)




app.listen(env.PORT, () => {
    console.log("API Running on port: ", env.PORT)
})