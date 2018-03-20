var fila = []
const Discord = require('discord.js');
const bot = new Discord.Client();


bot.login(process.env.BOT_TOKEN);

bot.on('message', message => {
    
    var achar = fila.indexOf(message.author.id)
    if (achar >= 0 ) return
    else if (0 >= achar){
    fila.push(message.author.id)
    setTimeout(() =>{
    var achar2 = fila.indexOf(message.author.id)
    if (achar2 == null ) return
    fila.splice(achar2,1)
    },5000)
}


    if (message.content.toLocaleLowerCase().startsWith('!bot')){
        message.channel.send(' :shield: Olá, eu fui Desenvolvido pelo @Gustavoluii para ajudar a equipe NextNetwork no discord.');         
 
        
    }

    if (message.content.toLocaleLowerCase().startsWith('!loja')){
        message.channel.send('Acesse nossa loja! - https://loja.next-mc.com/ :dollar: '); 
    
    }
    
    if (message.content.toLocaleLowerCase().startsWith('!site')){
        message.channel.send('Acesse nosso Site! - https://loja.next-mc.com/ :newspaper: '); 
    
    }
    
    if (message.content.toLocaleLowerCase().startsWith('!forum')){
        message.channel.send('Acesse nosso Fórum! - http://forum.next-mc.com/ :hammer_pick: '); 
    
    }
    
    if (message.content.toLocaleLowerCase().startsWith('!ip')){
        message.channel.send('Acesse nosso Servidor! - `Jogar.mcnextup.com` :earth_americas: '); 
    
    }
    
    if (message.content.toLocaleLowerCase().startsWith('!formulario')){
        message.channel.send('Formulário para staff! - https://goo.gl/Az5S2X :bookmark_tabs: '); 
    
    }
    
    if (message.content.toLocaleLowerCase().startsWith('!comandos')){
        message.reply('Lista de Comandos!\n• !loja - `Loja do servidor` :dollar: \n• !site - `Site do servidor` :newspaper: \n• !forum - `Fórum do servidor` :hammer_pick: \n• !ip - `IP do servidor` :earth_americas: \n• !formulario - `Formulário para staff` :bookmark_tabs:  '); 

    }

let role = message.guild.roles.find("name", "BotPerm");
if(message.member.roles.has(role.id) && message.content.startsWith("!limpar")){
  msgDel = 100;
  let numberMessages = parseInt(msgDel);
  message.channel.fetchMessages({limit: numberMessages}).then(messages => message.channel.bulkDelete(messages));
  message.channel.send('Chat limpo!');

}

let role2 = message.guild.roles.find("name", "BotPerm");
if(message.member.roles.has(role.id) && (message.content.toLocaleLowerCase().startsWith('!aviso'))){
    message.channel.send('Tag Alterada! obs: Tag em teste, risco de voltar pra antiga. :slight_smile:'); 
}
});

bot.on('guildMemberAdd', member => {
    bot.guilds.get(member.guild.id).members.get(member.id).sendMessage(`Bem-vindo ${member} ao ${member.guild.name} \nAjude vontando no servidor! https://pt.namemc.com/server/jogar.mcnextup.com :wink: `);

})

bot.on('ready', () => {
    bot.user.setActivity('!comandos Lista de comandos. !Bot', {type: 'WATCHING'});
}); 

