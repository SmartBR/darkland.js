const EventEmitter = require("events")
const darkland = new EventEmitter()

module.exports = {
    darkland,
    validate: (client) => {
        client.on("message", (message) => {
            if (message.channel.id !== "800089683006062672") return;
    
            try {
                const messageFormat = message.content.split(" -> ")
                const userId = messageFormat[0]
                const botId = messageFormat[1]
    
                if (client.user.id !== botId || !client.users.cache.get(userId)) return;
    
                darkland.emit("vote", client.users.cache.get(userId))
            }catch(err) {
                console.error(err)
            }
        })
    }
}