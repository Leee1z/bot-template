const Discord = require(`discord.js`)
module.exports = {
    name: `avatar`,
    category: `General`,
    permission: 0, // 0 - Default user, 1 - User with Manage messages permission, 2 - ADMINISTRATOR, 3 - ownerid you can configure it in config.json (id)
    description: `User avatar`, // for help command
    longDescription: `User avatar`, // for help command
    usage: `avatar, avatar @user `, // without prefix. If u create help command use `${client.config.PREFIX}${command.usage}`
    run: async (client, msg, args) => {
        const member = msg.mentions.members.first() || msg.member // if we have mentions in message bot gives mentions member avatar else you avatar
        const embed = new Discord.MessageEmbed()
            .setColor(member.displayColor)
            .setAuthor(`Avatar ${member.user.tag}:`, member.user.avatarURL({size: 2048, dynamic: true }))
            .setImage(member.user.avatarURL({size: 2048, dynamic: true})) // for exmple always use dynamic: if u want animate gif avatar's
        msg.channel.send(msg.member, embed) //u can use msg.reply(embed), but i hate "," after mentions.
        //Good Luck !
    }
}