import express  from "express";
import env from "./config/env"
const app = express()


app.listen(env.PORT,() => {
    console.log(`api running`)
})