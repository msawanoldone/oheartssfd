const Discord = require('discord.js');
const client = new Discord.Client();
const adminprefix = "--"
const prefix = "!"




client.on('message', message => {
    if(message.content.startsWith(prefix+'hbc')) {	
   const embed = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)   
.setColor('RANDOM')
        .setDescription(`**
		
          Commands. 
${prefix}1bc - برودكاست للجميع
${prefix}2bc - برودكاست بريئاكشن 
**`)
    message.author.send(embed)
message.channel.send(":white_check_mark: | Check Your DM تم الأرسال بلخاص")
    }
});  


client.on('message', message => {
if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + '1bc') {
if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if (!args[1]) {
return;
}
  message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
      var bc = new Discord.RichEmbed()
      .addField('# | الرسالة ', args)
      .setThumbnail(message.guild.iconURL)
      .setColor('RANDOM')
      m.sendMessage(args)
  });
         if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(":x: **ليس لديك صلاحية للنشر هنا**");
  const AziRo = new Discord.RichEmbed()   
  .setColor('RANDOM')
  message.channel.sendEmbed(AziRo);          
}
} else {
  return;
}
});


client.on('message', message => {
  if(!message.channel.guild) return;
if(message.content.startsWith(prefix + '2bc')) {
if(!message.channel.guild) return message.channel.send('**هذا الأمر فقط للسيرفرات**').then(m => m.delete(5000));
if(!message.member.hasPermission('ADMINISTRATOR')) return      message.channel.send('**للأسف لا تمتلك صلاحية** `ADMINISTRATOR`' );
let args = message.content.split(" ").join(" ").slice(3 + prefix.length);
let copy = "Alpha Bots";
let request = `Requested By ${message.author.username}`;
if (!args) return message.reply('**يجب عليك كتابة كلمة او جملة لإرسال البرودكاست**');message.channel.send(`**هل أنت متأكد من إرسالك البرودكاست؟ \nمحتوى البرودكاست:** \` ${args}\``).then(msg => {
msg.react('✅')
.then(() => msg.react('❌'))
.then(() =>msg.react('✅'))

let reaction1Filter = (reaction, user) => reaction.emoji.name === '✅' && user.id === message.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '❌' && user.id === message.author.id;
let reaction1 = msg.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = msg.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
message.channel.send(`☑ | Done ... The Broadcast Message Has Been Sent For ${message.guild.members.size} Members`).then(m => m.delete(5000));
message.guild.members.forEach(m => {
var bc = new
Discord.RichEmbed()
.setColor('RANDOM')
.setTitle('برودكاست')
.addField('🚩السيرفر', message.guild.name)
.addField('🔰المرسل', message.author.username)
.addField('👑الرسالة', args)
.setThumbnail(message.author.avatarURL)
.setFooter(copy, client.user.avatarURL);
m.send({ embed: bc })
msg.delete();
})
})
reaction2.on("collect", r => {
message.channel.send(`**Broadcast Canceled.**`).then(m => m.delete(5000));
msg.delete();
})
})
}
});






client.on('message', function(message) {
	const myID = "450843030963093524";
    let args = message.content.split(" ").slice(1).join(" ");
    if(message.content.startsWith(adminprefix + "setname")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setUsername(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(adminprefix + "stream")) {
		        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args , 'https://twitch.tv/6xlez1');
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(adminprefix + "play")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setGame(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(adminprefix + "listen")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'LISTENING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(adminprefix + "watch")) {
				        if(message.author.id !== myID) return;
            if(!args) return message.reply('اكتب الحالة اللي تريدها.');
        client.user.setActivity(args, {type:'WATCHING'});
        message.channel.send(':white_check_mark: Done!').then(msg => {
           msg.delete(5000);
          message.delete(5000);
        });
    } else if(message.content.startsWith(adminprefix + "setavatar")) {
				        if(message.author.id !== myID) return;
        client.user.setAvatar(args);
        message.channel.send(':white_check_mark: Done!').then(msg => {
                if(!args) return message.reply('اكتب الحالة اللي تريدها.');
           msg.delete(5000);
          message.delete(5000);
        });
    }
});



const jackeo = ['450843030963093524'];
client.on('message', message => { 
  if (message.author.bot) return; 
  if (!message.content.startsWith(prefix)) return;
    var argresult = message.content.split(` `).slice(1).join(' '); 
      if (!jackeo.includes(message.author.id)) return; 
  let command = message.content.split(" ")[0]; 
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);
  if (command === "say")  { 
  if(!message.channel.guild) return message.reply('** __This command only for servers?__  **'); 
          message.delete() 
    message.channel.sendMessage(args.join(" ")).catch(console.error); 
  }
if (command == "emb")    { 
  if(!message.channel.guild) return message.reply('** __This command only for servers?__  **'); 
    let say = new Discord.RichEmbed() 
    .setDescription(args.join("  ")) 
    .setColor("RANDOM") 
    message.channel.sendEmbed(say); 
    message.delete(); 
  } 
});




  client.on('message',async message => {
    if(message.content.startsWith(adminprefix + "restart")) {
        if(message.author.id !== "450843030963093524") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restart Done..`);
        setTimeout(() => {
            client.destroy();
client.login(process.env.BOT_TOKEN);
        },3000);
    }
});




client.login(process.env.BOT_TOKEN);
