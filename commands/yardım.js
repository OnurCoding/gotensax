const { MessageEmbed,MessageButton,MessageActionRow } = require('discord.js');

module.exports = {
    description: 'Yardım Menüsü',
    run: async (client, interaction) => {
        const embed = new MessageEmbed()
        .setTitle('FreeCity Çekiliş Botu Yardım Menüsü')
        .setDescription(`Botta (Slash) komutlar mevcuttur. Bu komutlar üzerinden işlemlerinizi yapabilirsiniz.`)
        .addField('`/başlat`','Çekiliş Başlatır',false)
        .addField('`/bitir`','Var olan çekilişi bitirir',false)
        .addField('`/drop`','drop çekiliş başlatır',false)
        .addField('`/yenile`','Sonlanmış çekilişin kazananını yeniden belirler',false)
        .addField('`/durdur`','Devam eden çekilişi durdurur',false)
        .addField('`/devam`','Durmuş çekilişi başlatır',false)
          .addField('`/oyver`','Bota Oy verme Yada Yorum yapabildiğiniz yer',false)
        .setFooter(`Developed by OnurL30#2022 💖`)
        .setThumbnail(client.user.avatarURL());
        const buton = new MessageButton().setLabel('Destek Sunucumuz').setStyle('LINK').setURL('https://discord.gg/freecity');
        const row = new MessageActionRow().addComponents(buton)
       
       interaction.reply({
           embeds:[embed],
           components:[row],
       })
    }
};
