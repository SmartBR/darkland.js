const EventEmitter = require("events")
const darkLand = new EventEmitter()

function validate(client) {
    client.on("message", (message) => {
        if (message.parent.name !== "API" || message.name !== "votes") return;

        try {
            const messageFormat = message.content.split(" -> ")
            const userId = messageFormat[0]
            const botId = messageFormat[1]

            if (client.user.id !== botId || !client.users.cache.get(userId)) return;

            darkLand.emit("vote", client.users.cache.get(userId))
        }catch(err) {
            console.error(err)
        }
    })
}