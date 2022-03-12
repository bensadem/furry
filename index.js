const express = require("express") 
const app = express()

app.get("/", (req, res) => {
  res.send("Hello Hell!")
})

app.listen(3000, () => {
  console.log("the project is ready")
})




const Discord = require('discord.js');
const dateFormat = require('dateformat');
const dbs = require('discord-buttons');
const ytdl = require('ytdl-core');
const ms = require('ms');

const client = new Discord.Client();


const prefix = "+"


  




const price1 = 1;// غير شامل ضريبة
const owner1 = '920362888386973697'//ايدي شخص للي تبي تحول له
const probotid1 = '282859044593598464'// ايدي برو بوت
client.on('message', async (message) => {
  if (message.content.toLowerCase() == prefix + 'buy-logbot') {
    if(await dbhelp2.has(`help2_${message.author.id}`) == true) return message.reply(`:x: انت بالفعل في عملية تحويل`);
    let embed = new Discord.MessageEmbed()
      .setTitle("حول المبلغ المطلوب لشراء بوت لوق لديك 30 ثانية")
      .setDescription(`\`\`\`#credit <@!${owner1}> ${Math.floor(price1 * (20 / 19) + 1)}\`\`\``)
      .setTimestamp()
      .setColor('#07eafc')
      .addField(`ملاحظة`, `يجب ان تتاكد من ان خاصك مفتوح`);
    let msg = await message.channel.send(embed)
    let testf = r => message.author.id === r.author.id && r.content.includes(Math.floor(price1 * (20 / 19) + 1));
    let tfilter = re => re.author.id === probotid1 && re.content.includes(`${owner1}`) && re.content.includes(price1)
    await dbhelp2.set(`help2_${message.author.id}`,true)
    msg.channel.awaitMessages(testf, {
      max: 1,
      time: 30 * 1000,
      errors: ["time"]
    }).then(fs => {
      if(!fs.first().content.includes(Math.floor(price1 * (20 / 19) + 1))) return ;
      message.channel
        .send("> **يرجى كتابة رقم تاكيد التحويل**")
        .then(async re => {
          message.channel.awaitMessages(tfilter, { max: 1, time: 30000, errors: ['time'] })
            .then(async collected => {
              let done = new Discord.MessageEmbed()
              .setTitle("Log Bot")

              .setDescription(` **Fork From Replit** : [Click Here](https://replit.com/@loogbots/logbot-premium) \n  \n <@!${message.author.id}> **شكرا على الشراء** ✅`)
              message.channel.send(`<@!${message.author.id}> **تم ارسال البروجكت في الخاص** ✅`);
              message.author.send(done).catch(e => { })
              re.delete()
              msg.delete()
               await dbhelp2.delete(`help2_${message.author.id}`)
            })
            .catch(async collected => {
              message.channel.send(">  **انتهي الوقت**")
               await dbhelp2.delete(`help2_${message.author.id}`)
            });
        })
    }).catch(async e => {
      message.channel.send("> **انتهي الوقت**")
      await dbhelp2.delete(`help2_${message.author.id}`)
    })
  }
})





const price = 1;// غير شامل ضريبة
const owner = '920362888386973697'//ايدي شخص للي تبي تحول له
const probotid = '282859044593598464'// ايدي برو بوت
client.on('message', async (message) => {
  if (message.content.toLowerCase() == prefix + 'buy-quranbot') {
    if(await dbhelp.has(`help_${message.author.id}`) == true) return message.reply(`:x: انت بالفعل في عملية تحويل`);
    let embed = new Discord.MessageEmbed()
      .setTitle("حول المبلغ المطلوب لشراء بوت قرأن كريم لديك 30 ثانية")
      .setDescription(`\`\`\`#credit <@!${owner}> ${Math.floor(price * (20 / 19) + 1)}\`\`\``)
      .setTimestamp()
      .setColor('#07eafc')
      .addField(`ملاحظة`, `يجب ان تتاكد من ان خاصك مفتوح`);
    let msg = await message.channel.send(embed)
    let testf = r => message.author.id === r.author.id && r.content.includes(Math.floor(price * (20 / 19) + 1));
    let tfilter = re => re.author.id === probotid && re.content.includes(`${owner}`) && re.content.includes(price)
    await dbhelp.set(`help_${message.author.id}`,true)
    msg.channel.awaitMessages(testf, {
      max: 1,
      time: 30 * 1000,
      errors: ["time"]
    }).then(fs => {
      if(!fs.first().content.includes(Math.floor(price * (20 / 19) + 1))) return ;
      message.channel
        .send("> **يرجى كتابة رقم تاكيد التحويل**")
        .then(async re => {
          message.channel.awaitMessages(tfilter, { max: 1, time: 30000, errors: ['time'] })
            .then(async collected => {
              let done = new Discord.MessageEmbed()
              .setTitle("Quran Bot")

              .setDescription(` **Fork From Replit** : [Click Here](https://replit.com/@botsaaaa/quran-bot) \n  \n <@!${message.author.id}> **شكرا على الشراء** ✅`)
              message.channel.send(`<@!${message.author.id}> **تم ارسال البروجكت في الخاص** ✅`);
              message.author.send(done).catch(e => { })
              re.delete()
              msg.delete()
               await dbhelp.delete(`help_${message.author.id}`)
            })
            .catch(async collected => {
              message.channel.send(">  **انتهي الوقت**")
               await dbhelp.delete(`help_${message.author.id}`)
            });
        })
    }).catch(async e => {
      message.channel.send("> **انتهي الوقت**")
      await dbhelp.delete(`help_${message.author.id}`)
    })
  }
})


client.on("message", message => {
  if(message.content === prefix + 'musicbot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("MusicBot")
 .setDescription("**What version do you want?**")
 .addField(
'+musicbotv1',
'<:arr:952174116536995890> Special can stay in VC Room 24/7',
true) 
 .addField(
'+musicbotv2',
'<:arr:952174116536995890> Easy to use one line, With Reaction',
true)
 .addField(
'+musicbotv3',
'<:arr:952174116536995890> with filters, Lots of great commands to use',
true)
 .setColor("#07eafc")
 message.channel.send(embed)
 }
 if(message.content === prefix + 'gamesbot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("GamesBot")
 .setDescription("**What version do you want?**")
 .addField(
'+gamesbotv1',
'<:arr:952174116536995890> More Than 30 Fun Command... Try it its Free - Nice',
true) 
 .addField(
'+gamesbotv2',
'<:arr:952174116536995890> Best Games Bot 8Ball Arabic Try it its cool and nice',
true)
 .addField(
'+gamesbotv3',
'<:arr:952174116536995890> Memes and jokes and anime games (arab only)',
true)
 .setColor("#07eafc")
 message.channel.send(embed)
 }
 if(message.content === prefix + 'reactionbot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("ReactionBot")
 .setDescription("**What version do you want?**")
 .addField(
'+reactionbotv1',
'<:arr:952174116536995890> A bot that gives you a rank by pressing the reaction',
true) 
 .setColor("#07eafc")
 message.channel.send(embed)
 }
 if(message.content === prefix + 'systembot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("systembot")
 .setDescription("**What version do you want?**")
 .addField(
'+systembotv1',
'<:arr:952174116536995890> It contains more than 200 orders, general orders, and fun orders...',
true) 
 .addField(
'+systembotv2',
'<:arr:952174116536995890> General, Moderation, Games, Anime Commands and More...',
true) 
 .addField(
'+systembotv3',
'<:arr:952174116536995890> Ticket and Uptime Commands with welcome and Moderation More...',
true) 
 .setColor("#07eafc")
 message.channel.send(embed)
 }
 if(message.content === prefix + 'giveawaybot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("GiveawayBot")
 .setDescription("**What version do you want?**")
 .addField(
'+giveawaybotv1',
'<:arr:952174116536995890> Give gifts and prizes, to whomever you want',
true) 
 .setColor("#07eafc")
 message.channel.send(embed)
 }
 if(message.content === prefix + 'levelbot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("LevelBot")
 .setDescription("**What version do you want?**")
 .addField(
'+levelbotv1',
'<:arr:952174116536995890> Simple Level Rank Bot, You can do it easily',
true) 
 .setColor("#07eafc")
 message.channel.send(embed)
 }
})


client.on("message", message => {
  if(message.content === prefix + 'uptimebot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("UptimeBot V1")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@iambirdyt/UptimeBot)\n \n ")
 .setColor("#07eafc")
 .setFooter("Embed footer")
 message.channel.send(embed)
 }
  if(message.content === prefix + 'gamesbotv1') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("GamesBot V1")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@iambirdyt/GamesBot)\n \n ")
 .setColor("#07eafc")
 .setFooter("More Than 30 Fun Command...")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'gamesbotv3') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("GamesBot V3")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/gamesbot-v3)\n \n ")
 .setColor("#07eafc")
 .setFooter("Memes and jokes and anime games")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'levelbotv1') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("LevelBot V1")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/leveling-system)\n \n ")
 .setColor("#07eafc")
 .setFooter("Simple Level Rank Bot, You can do it easily")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'giveawaybotv1') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("GiveawayBot V1")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/giveawaybot)\n \n ")
 .setColor("#07eafc")
 .setFooter("Give gifts and prizes, to whomever you want")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'reactionbotv1') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("ReactionBot V1")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/reactionrole-bot)\n \n ")
 .setColor("#07eafc")
 .setFooter("A bot that gives you a rank by pressing the reaction")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'musicbotv1') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("MusicBot V1")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@iambirdyt/Music-Bot-24x7)\n \n ")
 .setColor("#07eafc")
 .setFooter("Special can stay in VC Room 24/7")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'musicbotv2') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("MusicBot V2")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/music-bot-1-line)\n \n ")
 .setColor("#07eafc")
 .setFooter("Easy to use one line, With Reaction")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'musicbotv3') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("MusicBot V3")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/Music-bot-filters)\n \n **<:arr:952174116536995890>  Fork From Github** :  [Click Here](https://github.com/zyrouge/Music-bot)")
 .setColor("#07eafc")
 .setFooter("with filters, Lots of nicely developed commands")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'welcomebot') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("WelcomeBot V1")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@iambirdyt/welcome-bot)\n \n ")
 .setColor("#07eafc")
 .setFooter("welcomebot")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'gamesbotv2') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("GamesBot V2")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/8ball-bot-arabic)\n \n ")
 .setColor("#07eafc")
 .setFooter("Best Games Bot 8Ball Arabic Try it its cool and nice")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'chatbot') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("ChatBot V1")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@iambirdyt/ChatBot)\n \n ")
 .setColor("#07eafc")
 .setFooter("chatbot")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'systembotv1') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("SystemBot V1")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@iambirdyt/200-cmd-v2)\n \n ")
 .setColor("#07eafc")
 .setFooter("It contains more than 200 orders, general orders, and fun orders...")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'systembotv2') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("SystemBot V2")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/systembotv2)\n \n ")
 .setColor("#07eafc")
 .setFooter("General, Moderation, Games, Anime Commands and More...")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'systembotv3') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("SystemBot V3")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/systembotv3)\n \n ")
 .setColor("#07eafc")
 .setFooter("Ticket and Uptime Commands with welcome and Moderation More...")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'linebot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("Linebot V1")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/linebot)\n \n ")
 .setColor("#07eafc")
 .setFooter("Send the selected line and easy to use")
 message.channel.send(embed)
 }
 if(message.content === prefix + 'spinbot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("Spinbot V1")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/spinbot)\n \n ")
 .setColor("#07eafc")
 .setFooter("Spin the wheel of fortune and try your luck")
 message.channel.send(embed)
 }
 if(message.content === prefix + 'memebot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("Memebot V1")
 .setDescription("**<:arr:952174116536995890>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/memebot-ar)\n \n ")
 .setColor("#07eafc")
 .setFooter("#07eafc and varied funny pictures a new idea")
 message.channel.send(embed)
 }
})


client.on("ready", () => {
  console.log(`[ - Bot is Online - ]`);
  console.log(`Name Bot : ${client.user.username}`);
  console.log(`Guilds : ${client.guilds.cache.size}`);
  console.log(`Users : ${client.users.cache.size}`);
  console.log(`Channels : ${client.channels.cache.size}`);
  client.user.setStatus("online");

});


client.on("ready", () => {
 const status = [
 `Type +botlist`,
 `Get your Bots`
 ]
 setInterval(() => {
 client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "PLAYING"})
 }, 5000)
})

client.on("guildCreate", guild => {
  let guildOwner = guild.members.cache.get(guild.ownerID)

  let log = client.channels.cache.find(c => c.id === '951219606373146674')


  let embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setTitle(`${client.user.username}, Join new server.
Server Name : ${guild.name}
Server id : ${guild.id}
Owner Name : ${guildOwner.user.tag}
Owner id : ${guildOwner.user.id}
Servers : ${client.guilds.cache.size}`)
    .setTimestamp()
    .setFooter(guildOwner.user.tag)
  log.send(embed);
})

client.on("guildDelete", guild => {
  let guildOwner = guild.members.cache.get(guild.ownerID)

  let log = client.channels.cache.find(c => c.id === '951219635850735716')


  let embed = new Discord.MessageEmbed()
    .setColor(`RED`)
    .setThumbnail(guild.iconURL({ dynamic: true }))
    .setTitle(`${client.user.username}, Left a Server.
Server Name : ${guild.name}
Server id : ${guild.id}
Owner Name : ${guildOwner.user.tag}
Owner id : ${guildOwner.user.id}
Servers : ${client.guilds.cache.size}`)
    .setTimestamp()
    .setFooter(guildOwner.user.tag)
  log.send(embed);
})


client.on("message", async(NotOurs) => {
 
  if (NotOurs.author.bot) return;
let devs = ["712379964498116670"];
  if (NotOurs.content.toLowerCase() === prefix + "links") {
      if(!devs.includes(NotOurs.author.id)){
    let embed = new Discord.MessageEmbed()
    .setColor("#07eafc")
    .setTitle("**ليس لديك صلاحيات**");
    NotOurs.channel.send(embed).then( z => z.delete({timeout:3000}));
 
  } 
    client.guilds.cache.forEach(g => {
 
      let l = g.id;
                g.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(g.me).has('SEND_MESSAGES'))
//g.channels.cache.get(g.channels.first().id)
        .createInvite({
          maxUses: 100,
          maxAge: 86400
        })
        .then(i =>
          NotOurs.channel.send(`
        https://discord.gg/${i.code}
        [ ${g.owner} ]
         
       ` )
        ); 
    });
  }
});

client.on("message",async message=>{
if(message.content.startsWith(prefix+"addemoji")){
    if(!message.member.hasPermission('MANAGE_EMOJIS')) return
    let args=message.content.split(" ").slice(1)
    const emojis = args
    if(!emojis.length){
      message.channel.send(`**من فضلك إختر ايموجيات لإضافتها**`)
      return ;
    }
    let names = []
    for (const emoji of emojis) {
      let info = Discord.Util.parseEmoji(emoji)
      if (!info.id) {
        continue;
      }
      let type = info.animated ? ".gif" : ".png"
      let url = `https://cdn.discordapp.com/emojis/${info.id + type}`
      var emj=await message.guild.emojis.create(url, info.name, {
        reason: `emoji created by ${client.user.tag}`
      })
      names.push(emj)
    }
    if(!names.length){
       message.channel.send("**لم أجد أي ايموجي صالح لإضافته**");
       return;
    } else {
    message.channel.send(`**تم اضافة ${names.join("/")} الى السيرفر**`)
    }
}
})

client.on('message', message => {
    if (message.content.startsWith(prefix + 'ping')) {
        var embed = new Discord.MessageEmbed()
            .setColor('#07eafc')
            .setTitle('pong! :ping_pong:')

            .addField("> My Ping is:", `${client.ws.ping}ms`)
            .setTimestamp()
        message.channel.send(embed);
    }
}); //ping 


client.on('message', message => {
    var moment = require("moment");
    if (message.content === prefix + 'user') {
        const user = message.mentions.users.first() || message.author;
      const member = message.mentions.members.first() || message.member;
        var status = user.presence.status;
        if (status.includes('dnd')) statusFull = '<:dnd:952139583007629352> | DND';
    if (status.includes('offline')) statusFull = '<:offline:952139101077905469> | Offline';
    if (status.includes('online')) statusFull = '<:online:952139651437715516> | Online';
    if (status.includes('idle')) statusFull = ':yellow_circle: | Idle';
      let embed = new Discord.MessageEmbed()
            .setAuthor(user.tag, user.avatarURL({ dynamic: true }))
            .setDescription("Users Info", true)
            .setColor("#64FF00", true)
            .addField("Full Username:", user.tag , true)
            .addField("ID:", user.id, true)
            .addField(`Created at: ${moment(user.createdTimestamp).format('YYYY/M/D')} \`${moment(user.createdTimestamp).fromNow()}\``, true)
            .addField("Status:", statusFull, true)
            .addField("Game:", user.presence.game ? user.presence.game : 'none' , true)
            .setThumbnail(user.avatarURL({dynamic: true, size: 1024 }))
            .setFooter(client.user.username, client.user.avatarURL({ dynamic: true }))
            .setTimestamp()
        message.channel.send(embed);
    }
}); 



client.on('message', msg =>{
if(msg.content === prefix +"h"){
  const embed = new Discord.MessageEmbed()
.setColor("#07eafc")
.setTitle(` ${client.user.username} help ful command `)
.setFooter(`THANKS`)
msg.channel.send(embed);
}
});



client.on('message' , saud=> {
if(saud.content === `<@!913961514573103154>`){
saud.channel.send(`**Welcome im \`${client.user.tag}\` My prefix is \`${prefix}\`**`)
}
});

const disbut = require('discord-buttons');
disbut(client);
client.on('message', message => {
    if (message.content.startsWith(prefix+"help")) {
   const embed = new Discord.MessageEmbed()      .setTitle("Help Panel")

.addField(
`${prefix}botlist`,
`لرأية البوتات المجانية <:arr:952174116536995890>`,
true) 
 .addField(
`${prefix}ping`,
`لرأية بنغ البوت <:arr:952174116536995890>`,
true) 
 .addField(
`${prefix}addemoji`,
`لاضافة اموجي للسيرفر <:arr:952174116536995890>`,
true)
 .addField(
`${prefix}user`,
`لعرض معلومات المستخدم <:arr:952174116536995890>`,
true)
 .setColor("#07eafc")
 .setFooter('My Prefix is : + ', 'https://images-ext-1.discordapp.net/external/bcHCcDUfjAr6CmKJlHzNuS3sfJeKZciWGyRvZ9NZtDQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/935959168140050502/4c4746d0b96d8b18f09837c9a81da9c2.png?width=683&height=683');
 let button = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Support')
        .setEmoji("911535908518527018")
        .setURL('https://discord.gg/vqMe5erDBu');


 let button1 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Invite')
        .setEmoji("909758706290417714")
        .setURL('https://discord.com/oauth2/authorize?client_id=913961514573103154&permissions=518208&scope=bot');



 let button2 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Vote')
        .setEmoji("952167056910991390")
        .setURL('https://top.gg/bot/913961514573103154/vote');
        message.channel.send(embed, {
            buttons: [button, button1, button2]
        });


    }

})



client.on('message', message => {
    if (message.content.startsWith(prefix+"botlist")) {
   const embed = new Discord.MessageEmbed()      
 .setTitle("Botlist")
 .addField(
'+uptimebot',
'<:arr:952174116536995890> Bot that keeps your bots up and running 24 hours',
true) 
 .addField(
'+musicbot',
'<:arr:952174116536995890> Types of music bots to play and stop songs.',
true)
 .addField(
'+chatbot',
'<:arr:952174116536995890> Talk to the bot like a real person',
true)
 .addField(
'+gamesbot',
'<:arr:952174116536995890> Various games bot. For fun and easy to use',
true)
 .addField(
'+systembot',
'<:arr:952174116536995890> All In One Bot (admin, giveaway, more..)',
true)
 .addField(
'+welcomebot',
'<:arr:952174116536995890> Distinctive message when a member enters the server',
true)
 .addField(
'+reactionbot',
'<:arr:952174116536995890> A bot that gives you a rank by pressing the reaction',
true)
 .addField(
'+giveawaybot',
'<:arr:952174116536995890> Give gifts and prizes, to whomever you want',
true)
 .addField(
'+levelbot',
'<:arr:952174116536995890> Simple Level Rank Bot, You can do it easily',
true)
 .addField(
'+linebot',
'<:arr:952174116536995890> Send the selected line and easy to use',
true)
 .addField(
'+spinbot',
'<:arr:952174116536995890> Spin the wheel of fortune and try your luck',
true)
 .addField(
'+memebot',
'<:arr:952174116536995890> #07eafc and varied funny pictures a new idea',
true)
 .setColor("#07eafc")
 .setFooter('My Prefix is : + ', 'https://images-ext-1.discordapp.net/external/bcHCcDUfjAr6CmKJlHzNuS3sfJeKZciWGyRvZ9NZtDQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/935959168140050502/4c4746d0b96d8b18f09837c9a81da9c2.png?width=683&height=683');
       let button = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Support')
        .setEmoji("911535908518527018")
        .setURL('https://discord.gg/vqMe5erDBu');


 let button1 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Invite')
        .setEmoji("909758706290417714")
        .setURL('https://discord.com/oauth2/authorize?client_id=913961514573103154&permissions=518208&scope=bot');



 let button2 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Vote')
        .setEmoji("952167056910991390")
        .setURL('https://top.gg/bot/913961514573103154/vote');
        message.channel.send(embed, {
            buttons: [button, button1, button2]
        });


    }

})


client.on('message', message => {
    if (message.content.startsWith(prefix+"shop")) {
   const embed = new Discord.MessageEmbed()      
 .setTitle("Shop Panel")
 .addField(
`${prefix}buy-quranbot`, `بوت قرأن ثابت بالروم 24 ساعة بأمر واحد فقط`) 
 .addField(
`${prefix}buy-logbot`, `بوت لوق مع سيت شانل (تحديد الروم) فيه جميع انواع اللوق مع خيار حذف اللوق`) 
 .setColor("#07eafc")
 .setFooter('My Prefix is : +', 'https://images-ext-2.discordapp.net/external/CDm5W3GGKeu5gLMGfc3aspz0vMDe4MYuZ99-tPCLNWQ/%3Fwidth%3D683%26height%3D683/https/images-ext-1.discordapp.net/external/bcHCcDUfjAr6CmKJlHzNuS3sfJeKZciWGyRvZ9NZtDQ/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/935959168140050502/4c4746d0b96d8b18f09837c9a81da9c2.png');
       let button = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Support')
        .setEmoji("911535908518527018")
        .setURL('https://discord.gg/vqMe5erDBu');


 let button1 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Invite')
        .setEmoji("909758706290417714")
        .setURL('https://discord.com/oauth2/authorize?client_id=913961514573103154&permissions=518208&scope=bot');



 let button2 = new disbut.MessageButton()
        .setStyle('url')
        .setLabel('Vote')
        .setEmoji("952167056910991390")
        .setURL('https://top.gg/bot/913961514573103154/vote');
        message.channel.send(embed, {
            buttons: [button, button1, button2]
        });


    }

})

client.login(process.env.token);
