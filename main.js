const Discord = require('discord.js')
const config = require('./settings/config.json')
const fs = require("fs");
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.categories = fs.readdirSync("./commands/")
client.config = config
client.objs = require('./data/objects.js');

fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        const event = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
    });
});

["command"].forEach(handler => {
    require(`./handler/${handler}`)(client);
});

client.login(config.TOKEN); //config in config.json TOKEN