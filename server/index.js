const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const app = express() //из express создаем сам сервер
const PORT = config.get('serverPort')
const corsMiddleware = require('./middleware/cors.middleware')

app.use(corsMiddleware)
app.use(express.json())//ПоУмолчЕкспресНеУмеетРаспарсиватьJsonСтрокуДелаемЭтоСами
app.use("/api/auth", authRouter)//наш роутер1парамЭтоURLпоКоторОнБудетОбраб


//созд функ котор будет подк к БД и запускать Server
const start = async () => {
    try {
        await mongoose.connect(config.get("dbUrl"), {
            useNewUrlParser:true,
            useUnifiedTopology:true
        })

        app.listen(PORT, () => {
            console.log('Server started on port ', PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start() //запускаем сервер на 8000 порту
