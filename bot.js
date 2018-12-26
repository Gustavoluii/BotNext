console.log("Conectando...")
const Discord = require("discord.js");
const fs = require("fs");
const moment = require("moment")
moment.locale("pt-BR")
const bot = new Discord.Client({fetchAllMembers: true});

const PREFIX = "!";
const COR = "#0f6bb7";

bot.login(process.env.BOT_TOKEN);

//Gamer do bot//
bot.on("ready", async () => {
    console.log(`${bot.user.username} está online!`);

    setInterval(function() {
    let statusale = [`!ajuda | ${bot.users.size} Membros | Luii ©`, `!ajuda | loja.next-mc.com | Luii ©`];
    let status = statusale[Math.floor(Math.random()*statusale.length)];
    bot.user.setPresence({ status: 'STREAMING', game: { name: status, url: "https://www.twitch.tv/gustavoluii"}});
    bot.user.setPresence({ status: 'STREAMING', game: { name: status, url: "https://www.twitch.tv/gustavoluii"}});
    }, 5000)
});

bot.on('guildMemberAdd', member => {
    bot.guilds.get(member.guild.id).members.get(member.id).sendMessage(`Bem-Vindo ${member} ao ${member.guild.name}, Para mais Informações use !comandos em nosso servidor`);

})

bot.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find(c => c.name == '🌑novos-membros');
    let memberavatar = member.user.displayAvatarURL
        if (!channel) return;
        let t = new Discord.RichEmbed()
        .setAuthor("Bem-Vindo!", "https://i.imgur.com/KVTR9WD.png")
        .setThumbnail(member.user.displayAvatarURL)
        .setDescription(`Bem-Vindo **${member.user.username}** ao ${member.guild.name}!\n agora nós temos **${member.guild.memberCount}** membros em nosso servidor`)
        .setColor(COR)
        channel.send(t);
});

//Membros no tópico//
bot.on('guildMemberAdd', guild => {
    const gp = `${bot.guilds.get("367132224111509504").memberCount}`
    const gg = bot.channels.get("464514467254763520")
    gg.setTopic("<:next:496683738126745620> Membros em nosso servidor: "+gp.replace("1", ":one:").replace("2", ":two:").replace("3", ":three:").replace("4", ":four:").replace("5", ":five:").replace("6", ":six:").replace("7", ":seven:").replace("8", ":eight:").replace("9", ":nine:").replace("0", ":zero:"))
    
});

//Membros no tópico//
bot.on('guildMemberRemove', guild => {
    const gp = `${bot.guilds.get("367132224111509504").memberCount}`
    const gg = bot.channels.get("464514467254763520")
    gg.setTopic("<:next:496683738126745620> Membros em nosso servidor: "+gp.replace("1", ":one:").replace("2", ":two:").replace("3", ":three:").replace("4", ":four:").replace("5", ":five:").replace("6", ":six:").replace("7", ":seven:").replace("8", ":eight:").replace("9", ":nine:").replace("0", ":zero:"))
    
});

function clean(text) {
    if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
    else
    return text;
    }
    
    bot.on("message", message => {
    const args = message.content.split(" ").slice(1);
    
    if (message.content.startsWith(`${PREFIX}eval`)) {
    if(message.author.id !== "231611977053503488") return;
    try {
    const code = args.join(" ");
    let evaled = eval(code);
    
    if (typeof evaled !== "string")
    evaled = require("util").inspect(evaled);
    
    message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
    message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
    }
    }
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    let prefix = PREFIX;

//    if (message.content.includes("discord.gg/")) {
//        bot.channels.get("464555146504962048").send("<:alerta:502524278936305694> | "+ message.author+ " Enviou uma mensagem suspeita no canal " + message.channel);
 // //      if (!message.member.hasPermission("ADMINISTRATOR")) {
  //          message.delete();
  //          message.reply("`❌ Divulgação - [Servidores]`");
 //       }

//    }
    
//    if (message.content.includes("https://discord.gg/")) {
//        bot.channels.get("464555146504962048").send("<:alerta:502524278936305694> | "+ message.author+ " Enviou uma mensagem suspeita no canal " + message.channel);
 //       if (!message.member.hasPermission("ADMINISTRATOR")) {
//            message.delete();
//            message.reply("`❌ Divulgação - [Servidores]`");
//        }
//
//    }

    //Canal de sugestão//
    if(message.channel.id == "497060772539662366"){
        message.react('👍')
        message.react('👎')
    };


    //responder mention//
    if (message.content === `<@${bot.user.id}>`) {
        let embeduser = new Discord.RichEmbed()
        .setDescription("<:next:496683738126745620> | Para saber mais sobre meus comandos use `!ajuda`")
        .setColor(COR)
        message.channel.send(embeduser);
    }
    //////////////////////////////////////
    if(message.content.startsWith(prefix)){
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    //////////////////////////////////////

        //anunciar command//
        if(cmd === `${prefix}anunciar`){
            if (message.member.hasPermission("ADMINISTRATOR")) {
                const text = args.slice(0.5).join(" ");
                 if (text.length < 0.5) return message.channel.send("Você precisa por alguma mensagem!").then((value) => {
                   setTimeout(() => {
                        value.delete();
                    }, 3000);
                });
                const embed = new Discord.RichEmbed()
                .setColor(COR)
                .setAuthor(`Anúncio - ${message.guild.name}`, "https://i.imgur.com/qX4nK3l.gif")
                .setFooter(`Anúncio realizado por: ${message.author.username}`,message.member.user.displayAvatarURL)
                .setTimestamp(new Date())
                .setDescription(text);
                message.channel.send("@everyone")
                message.delete().catch();
                message.channel.send({embed}).then(msg=> {
                msg.react('📢');
                
          });
         }
        }
        
                if(cmd === `${prefix}denúncia` || cmd === `${prefix}denuncia`){
            if(!args[0]) return message.reply("Use: "+prefix+"denuncia (mensagem)").then(msg => msg.delete(10000));
            let embedd = new Discord.RichEmbed()
            .setAuthor("Denúncia:")
            .setDescription("```"+ args.join(" ") +"```")
            .setFooter(message.author.username)
            .setTimestamp()
            .setColor(COR)

            bot.channels.get("526096281689522192").send(embedd); //"📋 | **" + message.author.username + "** Enviou uma denúcia:\n```"+ args.join(" ") +"```"
                    
            console.log(`${message.author.username} Enviou uma sugestão`)
            message.channel.send(`📋 | ${message.author} Obrigado por sua colaboração, sua denúncia foi recebida pela nossa equipe de moderadores para análise.`).then(msg => msg.delete(20000));
            message.delete();
        }

        if(cmd === `${prefix}revisão` || cmd === `${prefix}revisao`){
            if(!args[0]) return message.reply("Use: "+prefix+"revisão (mensagem)").then(msg => msg.delete(10000));
            let embedd = new Discord.RichEmbed()
            .setAuthor("Revisão:")
            .setDescription("```"+ args.join(" ") +"```")
            .setFooter(message.author.username)
            .setTimestamp()
            .setColor(COR)

            bot.channels.get("526100374478913536").send(embedd); //"📋 | **" + message.author.username + "** Enviou uma denúcia:\n```"+ args.join(" ") +"```"
                    
            console.log(`${message.author.username} Enviou uma sugestão`)
            message.channel.send(`📋 | ${message.author} Sua revisão foi enviada para análise pela equipe de administração, em breve lhe daremos um retorno.`).then(msg => msg.delete(20000));
            message.delete();
        }

    if(cmd === `${prefix}skin`){
        let reason = args.slice(0).join(' ');
        if (reason.length < 1) return message.reply('Use: !skin (nick)');

        let skinembed = new Discord.RichEmbed()
        .setTitle("<:steve:502532637106110479> "+ args[0])
        .setImage(`https://mc-heads.net/body/${args[0]}`)
        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setColor(COR)
        message.channel.send(skinembed);

    }

    
    if(cmd === `${prefix}skinhead`){
        let reason = args.slice(0).join(' ');
        if (reason.length < 1) return message.reply('Use: !skinhead <nick>');

        let skinembed = new Discord.RichEmbed()
        .setTitle("<:steve:502532637106110479> "+ args[0])
        .setImage(`https://mc-heads.net/head/${args[0]}`)
        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setColor(COR)
        message.channel.send(skinembed);

    }
    
    if(cmd === `${prefix}skinavatar`){
        let reason = args.slice(0).join(' ');
        if (reason.length < 1) return message.reply('Use: !skinavatar <nick>');

        let skinembed = new Discord.RichEmbed()
        .setTitle("<:steve:502532637106110479> "+ args[0])
        .setImage(`https://mc-heads.net/avatar/${args[0]}`)
        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setColor(COR)
        message.channel.send(skinembed);

    }

    //chat on command//
    if(cmd === `${prefix}chaton`){
        if (message.member.hasPermission("MANAGE_ROLES")) {
            var da = message.guild.roles.find(c => c.name == "@everyone")
            message.channel.overwritePermissions(da, {
                SEND_MESSAGES: true
                
              })
              let onembed = new Discord.RichEmbed()
              .setDescription(`:unlock: | Canal desbloqueado pelo ${message.author}`)
              .setColor(COR)
              message.delete();
              message.channel.send(onembed);
            }
    }

    //chat off command//
    if(cmd === `${prefix}chatoff`){
        if (message.member.hasPermission("MANAGE_ROLES")) {
            var da = message.guild.roles.find(c => c.name == "@everyone")
            message.channel.overwritePermissions(da, {
                SEND_MESSAGES: false
                
              })
              let offembed = new Discord.RichEmbed()
              .setDescription(`:lock: | Esse canal foi bloqueado temporariamente pelo ${message.author}`)
              .setColor(COR)
              message.delete();
              message.channel.send(offembed);
        }   
    }

    //limpar chat//
    if(cmd === `${prefix}limpar`){
    if(!message.member.hasPermission("MANAGE_ROLES")) return;
    if(!args[0]) return message.channel.send("Especifique quantas linhas.").then(msg => msg.delete(5000));
        message.channel.bulkDelete(args[0]).then(() => {
        let clearembed = new Discord.RichEmbed()
        .setDescription(`:wastebasket: | Limpei **${args[0]}** mensagens.`)
        .setColor(`#0489B1`)
        message.channel.send(clearembed).then(msg => msg.delete(10000));
    });
    }

        //votação command//
    if(cmd === `${prefix}votação`){
        if (message.member.hasPermission("ADMINISTRATOR")) {
            const text = args.slice(0.5).join(" ");
             if (text.length < 0.5) return message.channel.send("Você precisa por alguma mensagem!").then((value) => {
               setTimeout(() => {
                    value.delete();
                }, 5000);
            });
            const embed = new Discord.RichEmbed()
            .setColor(COR)
            .setAuthor("Votação:", `https://i.imgur.com/DRE2Syf.gif`)
            .setFooter(`Votação iniciada por: ${message.author.username}`,message.member.user.displayAvatarURL)
            .setDescription(text);
            message.delete().catch();
            message.channel.send("@here")
            message.channel.send({embed}).then(msg=> {
            msg.react('👍');
            msg.react('👎');
            })
        }
    }
        
    //ping//
    if(cmd === `${prefix}ping`){
        if(!message.member.hasPermission("ADMINISTRATOR")) return;
        return message.channel.send(`:exclamation: | Meu ping está ${Date.now() - message.createdTimestamp} ms.`);
    }
    
    if(cmd === `${prefix}vip` || cmd === `${prefix}site`){
        let vipembed = new Discord.RichEmbed()
        .addField("`💵` Compre VIP em:", "[__Clique aqui__](http://loja.next-mc.com)")
        .setColor(COR)
        message.channel.send(vipembed);
    }
    if(cmd === `${prefix}ip`){
        let ipembed = new Discord.RichEmbed()
        .addField("`🌎` IP:", "jogar.next-mc.com")
        .setColor(COR)
        message.channel.send(ipembed);
    }
    if(cmd === `${prefix}links` || cmd === `${prefix}forum` || cmd === `${prefix}formulario`){
        let linkembed = new Discord.RichEmbed()
        .addField("`🌏` Links:", "[__Loja__](http://loja.next-mc.com) **|** [__Fórum__](http://forum.next-mc.com) **|** [__Formulário__](https://nextgo.me/3Y) **|** [__Twitter__](https://twitter.com/RedeNextNetwork) **|** [__YouTube__](https://www.youtube.com/channel/UCmFSSXpPtJHyD4srKBgFLTQ)")
        .setColor(COR)
        message.channel.send(linkembed);
    }

    if(cmd === `${prefix}ajuda` || cmd === `${prefix}comandos`) {
        let ajudaembed = new Discord.RichEmbed()
        .setAuthor("NextNetwork - Ajuda", bot.user.displayAvatarURL)
        .addField("`💵` Compre VIP em:", "[__Clique aqui__](http://loja.next-mc.com)", true)
        .addField("`🌎` IP:", "jogar.next-mc.com", true)
        .addField("`👾` Nosso Discord:", "[__Link Direto__](https://discord.gg/redenextnetwork)", true)
        .addField("`🌏` Links:", "[__Loja__](http://loja.next-mc.com) **|** [__Fórum__](http://forum.next-mc.com) **|** [__Formulário__](https://nextgo.me/3Y) **|** [__Twitter__](https://twitter.com/RedeNextNetwork) **|** [__YouTube__](https://www.youtube.com/channel/UCmFSSXpPtJHyD4srKBgFLTQ)")
        .addField("`📦` Comandos:", "`links`, `ip`, `discord`, `vip`, `skin`, `skinhead`, `skinavatar`", true)
        .setTimestamp()
        .setFooter(`${message.author.tag} | ©‎ GustavoLuii`, message.author.avatarURL)
        .setColor(COR)
        message.member.send(ajudaembed);

        let ajudachatembed = new Discord.RichEmbed()
        .setDescription("**Okay!** Foi enviado uma lista com todos os meus comandos em seu privado!")
        .setColor(COR)
        message.channel.send(ajudachatembed); 


    }

    if(cmd === `${prefix}admin`){
        const emoji = bot.emojis.find(c => c.name == "unknown");
        if(!message.member.hasPermission("MANAGE_ROLES")) return message.react(emoji);
        let ajudaadminembed = new Discord.RichEmbed()
        .setAuthor("Administração - NextNetwork", bot.user.displayAvatarURL)
        .addField("`📦` Comandos:", "`!chatoff`\n`!chaton`\n`!limpar`")
        .setColor(COR)
        message.member.send(ajudaadminembed);

        let adminembed = new Discord.RichEmbed()
        .setDescription("<:staff:496861260219023364> | Menu de administração enviado com sucesso.")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setColor(COR)
        message.channel.send(adminembed); //.then(msg => msg.delete(20000));
        message.delete();
    }

}
});

