
/*
                                     __
        __  ______  ________  ____ _/ /
       / / / / __ \/ ___/ _ \/ __ `/ / 
      / /_/ / / / / /  /  __/ /_/ / /  
      \__,_/_/ /_/_/   \___/\__,_/_/  

      autoskuller written by unre.al

*/

const { Client, ClientOptions } = require('discord.js-selfbot-v13');
const client = new Client();

//autoskuller config 
const config = require('./config.json');

client.on('ready', async () => {
    console.log(`${client.user.username} is ready!`);
})

client.on('messageCreate', async message => {
    try {

        if (message.author.id === config.user_id) {

            message.react("☠️").catch(console.error);

        }
    } catch (error) {
        console.log(error);
        return;
    }

});

client.login(config.token);