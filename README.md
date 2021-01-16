# Darkland.js - Verificador de votos
Verificador de votos da comunidade DarkLand.site

Para usar é bem simples, basta puxar o nosso método de validação:
```js
const Discord = require("discord.js")
const client = new Discord.Client()
const { darkLand, validate } = require("darkland.js")

client.on("ready", () => {
    validate(client)
})

client.login("YOUR_TOKEN_HERE")
```

e por último chamar o nosso evento:
```js
darkLand.on("vote", (user) => {
    console.log(`${user.username} voted!`)
})
```