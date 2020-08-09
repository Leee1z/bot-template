module.exports = async (client) => {
    console.log(client.config.WELCOME)
    client.user.setActivity(client.config.STATUSTEXT, { //config in config.json STATUSTEXT
        type: client.config.ACTIVITY, //config in config.json ACTIVITY
    })
    client.user.setStatus(client.config.STATUS) //config in config.json STATUS
}