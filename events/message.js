    const Discord = require('discord.js');
    module.exports = async (client, msg) => {
        if (msg.author.bot) return

        const args = msg.content.slice(client.config.prefix.length).trim().split(/ +/g);
        const cmd = args.shift().toLowerCase();

        let command = client.commands.get(cmd);
        if (!command) {
            command = client.commands.get(client.aliases.get(cmd))
        }

        if (msg.content.indexOf(client.config.prefix) !== 0) return;

        if (!command) return

        if (command) {
            let permission = msg.member.id == client.config.ownerid
            ? true : command.permission <= 2 && msg.member.hasPermission(`ADMINISTRATOR`)
            ? true : command.permission <= 1 && msg.member.hasPermission(`MANAGE_MESSAGES`)
            ? true : command.permission == 0 
            ? true : false
            if (!permission) return msg.reply(log.setAuthor(`Your text if miss of permission`, avatar))
            command.run(client, msg, args)
        }
    }