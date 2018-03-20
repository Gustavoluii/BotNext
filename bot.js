const Discord = require("discord.js");
const bot = new Discord.Client();
const TOKEN = "BOT_TOKEN"
const PREFIX = "!";

bot.login(process.env.BOT_TOKEN);

var name;
var usrAuth = 0;

bot.on("ready", function() {

    console.log("Ready");
});

bot.on("message", function(message) {

    console.log(message.content);

    if ( message.author.equals(bot.user)) 
        return;


    if( !message.content.startsWith(PREFIX))
        return;

    var argv = message.content.substr(PREFIX.length).split(" ");
    console.log("argv: "+argv+", argv[1]: "+argv[1]+"");


    switch(argv[0].toLowerCase()) {
        case "loja":
            var embedd = new Discord.RichEmbed()
            .setAuthor("Loja do servidor", "https://i.imgur.com/4eC6Mkq.png")
            .setTitle(`Clique aqui para acessar a loja! :dollar:`)
            .setURL("https://loja.next-mc.com/")
            .setColor("14DDDA")
            message.channel.sendEmbed(embedd);
            break;
        case "bot":
            var embedd = new Discord.RichEmbed()
            .setAuthor("Desenvolvedor", "https://i.imgur.com/P4HiStn.png")
            .setTitle(`:shield: Olá, eu fui Desenvolvido pelo @Gustavoluii para ajudar a equipe NextNetwork no discord.`)
            .setURL("https://twitter.com/GustavoLuii_")
            .setColor("F90808")
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
        case "comandos":
            var embedd = new Discord.RichEmbed()
            .setAuthor("Lista de comandos:", "https://i.imgur.com/4eC6Mkq.png")
            .setThumbnail("https://i.imgur.com/4eC6Mkq.png")
            .setTitle(`!loja`)
            .setDescription('Loja do servidor :dollar:')
            .addField("!site", "Site do servidor :newspaper:")
            .addField("!forum", "Fórum do servidor :hammer_pick:")
            .addField("!ip", "IP do servidor :earth_americas:")
            .addField("!formulario", "Formulário para staff :bookmark_tabs:")
            .setColor("14DDDA")
            message.channel.sendEmbed(embedd);
            break;
        default:
            message.reply("Esse comando não existe seu animal");
    }

});

bot.on('ready', () => {
    bot.user.setActivity('!comandos | Lista de comandos | !bot', {type: 'PLAYING'});
}); 
