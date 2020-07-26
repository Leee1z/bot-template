const Discord = require("discord.js")
module.exports = async (client) => {
    console.log(`${client.user.username} With us now ❤!`)
    client.user.setActivity(`!помощь`, {
        type: "WATCHING",
    })
    client.user.setStatus('dnd')
}