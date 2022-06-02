module.exports = {
  name: 'command',
  description: "Change This To Whatever You Want!",
  execute(message, args, Discord) {
    const newEmbed = new Discord.MessageEmbed()
    .setColor('#304281')
    .setTitle('YOUR_TITLE?')
    .setURL('https://github.com')
    .setDescription('This is a testing embed!')
    .addFields(
      {name: 'Change This To Whatever You Want!', value: 'Edit This!'},
      {name: 'Change This To Whatever You Want!', value: 'Edit This!'},
      {name: 'Change This To Whatever You Want!', value: 'Edit This!'}
    ) 
      .setImage('https://cdn.discordapp.com/attachments/853697541706350632/977309073525604372/S.png')
      .setFooter('Make Sure To Read The Rules!');

    message.channel.send(newEmbed);
  }

  
}