var fila = []
const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "!";

var name;
var usrAuth = 0;

bot.login(process.env.BOT_TOKEN);



bot.on("ready", function() {

    console.log("ready");
});

bot.on('message', function (message) {

    var achar = fila.indexOf(message.author.id)
    if (achar >= 0 ) return
    else if (0 >= achar){
    fila.push(message.author.id)
    setTimeout(() =>{
    var achar2 = fila.indexOf(message.author.id)
    if (achar2 == null ) return
    fila.splice(achar2,1)
    },3000)
}

    console.log(message.content);

    if ( message.author.equals(bot.user))
    return;


if( !message.content.startsWith(PREFIX))
    return;


var argv = message.content.substr(PREFIX.length).split(" ");
console.log("argv: "+argv+", argv[1]: "+argv[1]+"");


switch(argv[0].toLowerCase()) {
    case "comandos":
        var embedd = new Discord.RichEmbed()
        .setAuthor("Lista de Comandos:", "https://i.imgur.com/4eC6Mkq.png")
        .addField("!loja", "Loja do servidor :dollar:")
        .addField("!site", "Site do servidor :newspaper:")
        .addField("!forum", "Fórum do servidor :hammer_pick:")
        .addField("!ip", "IP do servidor :earth_americas:")
        .addField("!formulario", "Formulário para staff :bookmark_tabs:")
        .addField("!convite", "Gerar um convite em nosso servidor :page_facing_up:")
        .addField("!serverinfo", "Informações sobre o servidor :space_invader:")
        .setFooter("Lista de Comandos do NextNetwork | GustavoLuii ©")
        .setThumbnail("https://i.imgur.com/4eC6Mkq.png")
        .setColor("04B404")
        message.member.sendEmbed(embedd);

        var embeddd = new Discord.RichEmbed()
        .addField("Okay!", "Foi enviado uma lista com todos os Comandos do servidor em seu privado :zap:")
        .setFooter("Essa mensagem se autodestruirá em 1 Minuto.")
        .setColor("04B404")
        message.channel.sendEmbed(embeddd).then((value) => {
          setTimeout(() => {
              value.delete();
          }, 60000);
      });
       break;

    case "loja":
        var embedd = new Discord.RichEmbed()
        .setAuthor("Loja do servidor", "https://i.imgur.com/4eC6Mkq.png")
        .setTitle(`Clique aqui para acessar a loja! :dollar:`)
        .setURL("https://loja.next-mc.com/")
        .setColor("14DDDA")
        message.channel.sendEmbed(embedd);
          break;

    case "site":
        var embedd = new Discord.RichEmbed()
        .setAuthor("Site do servidor", "https://i.imgur.com/4eC6Mkq.png")
        .setTitle(`Clique aqui para acessar o site! :newspaper:`)
        .setURL("http://next-mc.com")
        .setColor("14DDDA")
        message.channel.sendEmbed(embedd);
          break;

    case "forum":
        var embedd = new Discord.RichEmbed()
        .setAuthor("Fórum do servidor", "https://i.imgur.com/4eC6Mkq.png")
        .setTitle(`Clique aqui para acessar o Fórum! :hammer_pick:`)
        .setURL("http://forum.next-mc.com/")
        .setColor("14DDDA")
        message.channel.sendEmbed(embedd);
          break;

    case "ip":
        var embedd = new Discord.RichEmbed()
        .setAuthor("IP do Servidor", "https://i.imgur.com/4eC6Mkq.png")
        .setTitle(`Jogar.mcnextup.com :earth_americas:`)
        .setColor("14DDDA")
        message.channel.sendEmbed(embedd);
          break;

    case "formulario":
        var embedd = new Discord.RichEmbed()
        .setAuthor("Formulário do servidor", "https://i.imgur.com/4eC6Mkq.png")
        .setTitle(`Clique aqui para acessar o Formulário! :bookmark_tabs:`)
        .setURL("https://goo.gl/Az5S2X")
        .setColor("14DDDA")
        message.channel.sendEmbed(embedd);
          break;

    case "convite":
        var embedd = new Discord.RichEmbed()
        .setAuthor("Convite do nosso Discord", "https://i.imgur.com/Pjc0LJk.png")
        .setTitle(`Clique aqui para abrir o link do convite`)
        .setURL("https://discordapp.com/invite/redenextnetwork")
        .setColor("2E9AFE")
        message.channel.sendEmbed(embedd);
          break;

    case "serverinfo":
        var embedd = new Discord.RichEmbed()
        .setAuthor("Informações do Servidor:", "https://i.imgur.com/4eC6Mkq.png")
        .setColor("14DDDA")
        .setThumbnail(message.guild.iconURL)
        .addField("Nome:", message.guild.name)
        .addField("Quantidade de membros:", message.guild.memberCount)
        .setFooter("BOT NextNetwork")
        message.channel.sendEmbed(embedd);
          break;


}});


bot.on('ready', () => {
      bot.user.setGame(`!comandos | ${bot.users.size} Membros | Luii ©`, `https://www.twitch.tv/zdnplays`);
});


bot.on('guildMemberAdd', member => {
    bot.guilds.get(member.guild.id).members.get(member.id).sendMessage(`Bem-Vindo ${member} ao ${member.guild.name}, Para mais Informações use **!comandos** em nosso servidor`);

})

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '🔮novos-membros');
    let memberavatar = member.user.avatarURL
        if (!channel) return;
        let embed = new Discord.RichEmbed()
        .setColor("8904B1")
        .addField('Bem-Vindo!', `Bem-Vindo ${member.user} ao ${member.guild.name}! agora nós temos **${member.guild.memberCount}** Players em nosso servidor`)

        channel.sendEmbed(embed);
});

bot.on('guildMemberAdd', member => {

    console.log(`${member}`, "has joined" + `${member.guild.name}`)

});
