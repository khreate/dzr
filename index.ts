const { Client, Intents}  = require('discord.js')
const { TOKEN } = require('./config.json')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })

client.once('ready', () => {
    console.log('online')
})

client.login(TOKEN)