const express = require('express');
const config = require("./config/config")

const { handleTextMessage, handleButtonMessage, handleImageMessage } = require('./controllers/messageHandler');
const app = express()
const { webhookValidator } = require("./functionality/messageSender")
    // app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static("./public"))


const port = config.PORT
app.set("view engine", "ejs")
app.get("/", (req, res) => {
    res.status(200).json({
        "message": "Hello there"
    })
})

app.get("/verify/:password", (req, res) => {
    try {
        if (req.params.password === config.VERIFY_TOKEN) {
            webhookValidator().catch(err => console.log(err))
            res.status(200).json({
                "message": "Webhook, verified"
            })
        } else {
            res.status(401).json({
                "message": "Unauthorized"
            })
        }

    } catch (err) {
        res.status(200).json({
            "message": "something went wrong"
        })
    }
})

app.post("/webhook", (req, res) => {
    if (req.body.messages) {

        const messages = req.body.messages
        messages.forEach(async(value) => {
            const waId = value.from;

            if (value.type === "text") {
                handleTextMessage(waId, value.text.body)
                res.status(200).end();
<<<<<<< Updated upstream
            } else if (value.type === "interactive") {
                handleTextMessage(waId, value.interactive.list_reply.id)
=======

            } else if (value.type === "button") {
                handleButtonMessage(waId, value.button.text)
>>>>>>> Stashed changes
                res.status(200).end();
            } else if (value.type === "image") {
                handleImageMessage(waId, value.image)
                res.status(200).end();
            } else {
                res.status(200).end();
            }
        })

    } else {
        res.status(200).end();
    }
})

app.listen(port, () => {
    console.log(`Bot is listening at ${port}`)

})