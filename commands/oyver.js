const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Oyverme',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle('FreeCity Çekiliş Botuna Oy Nasıl Verilir?')
        .setDescription(`Aşağıda bulunan butona basarsanız sizi oy verme sekmesine yönlendirir.`)
        .setFooter(`Developed by OnurL30#2022 💖`)
        .setThumbnail(client.user.avatarURL());
        const buton = new MessageButton().setLabel('Vote').setStyle('LINK').setURL('https://bot.gg/discord/freecity-cekilis/');
        const row = new MessageActionRow().addComponents(buton)
       
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
    }
};