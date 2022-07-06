import express, { Application } from "express"

const app: Application = express()
const port: number = 8000

app.listen(port, (): void => {
    console.log(`this app is runnig on http://localhost:${ port }`)
})