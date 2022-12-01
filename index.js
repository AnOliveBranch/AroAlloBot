const {
    Client,
    GatewayIntentBits
} = require('discord.js');
const {
    discordToken,
} = require('./config.json');

const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', async (message) => {
    let channelId = message.channelId;
    if (channelId == '765318323491045396') {
        await message.startThread(
            {
                name: `${message.author.username} Introduction`
            }
        );
    }
});

client.login(discordToken);