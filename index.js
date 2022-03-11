const express = require("express") 
const app = express()

app.get("/", (req, res) => {
  res.send("Hello Hell!")
})

app.listen(3000, () => {
  console.log("the project is ready")
})




const Discord = require('discord.js');

const dbs = require('discord-buttons');
const ytdl = require('ytdl-core');
const ms = require('ms');

const client = new Discord.Client();


const prefix = "+"


  
client.on("message", async message => {
 if(message.content.toLowerCase() === prefix + "help") {
 message.channel.send("**Data review...**").then(m =>{
setTimeout(() => {
  let embed = new Discord.MessageEmbed()
 .setTitle("Help Panel")
 .setDescription("[Server Support](https://discord.gg/Pgh65AgDgB) | [invite](https://discord.com/oauth2/authorize?client_id=875032394925740062&permissions=8&scope=bot)")
 .addField(
`${prefix}shop`,
`لرأية شوب البوتات <:right:948877331592794112>`,
true) 
.addField(
`${prefix}botlist`,
`لرأية البوتات المجانية <:right:948877331592794112>`,
true) 
 .addField(
`${prefix}ping`,
`لرأية بنغ البوت <:right:948877331592794112>`,
true) 
 .setColor("RANDOM")
 .setFooter('My Prefix is : + ', 'https://images-ext-1.discordapp.net/external/bcHCcDUfjAr6CmKJlHzNuS3sfJeKZciWGyRvZ9NZtDQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/935959168140050502/4c4746d0b96d8b18f09837c9a81da9c2.png?width=683&height=683');
 m.edit(embed)
 m.edit('**The data has been revised**:white_check_mark:', embed)
}, 1500)
})
}
})
client.on("message", async message => {
 if(message.content.toLowerCase() === prefix + "shop") {
 message.channel.send("**Data review...**").then(m =>{
setTimeout(() => {
 let embed = new Discord.MessageEmbed()
 .setTitle("Shop Panel")
 .setDescription("[Server Support](https://discord.gg/Pgh65AgDgB) | [invite](https://discord.com/oauth2/authorize?client_id=875032394925740062&permissions=8&scope=bot)")
 .addField(
`${prefix}buy-quranbot`, `بوت قرأن ثابت بالروم 24 ساعة بأمر واحد فقط`) 
 .addField(
`${prefix}buy-logbot`, `بوت لوق مع سيت شانل (تحديد الروم) فيه جميع انواع اللوق مع خيار حذف اللوق`) 
 .setColor("RANDOM")
 .setFooter('My Prefix is : +', 'https://images-ext-2.discordapp.net/external/CDm5W3GGKeu5gLMGfc3aspz0vMDe4MYuZ99-tPCLNWQ/%3Fwidth%3D683%26height%3D683/https/images-ext-1.discordapp.net/external/bcHCcDUfjAr6CmKJlHzNuS3sfJeKZciWGyRvZ9NZtDQ/%253Fsize%253D1024/https/cdn.discordapp.com/avatars/935959168140050502/4c4746d0b96d8b18f09837c9a81da9c2.png');
 m.edit(embed)
 m.edit('**The data has been revised** :white_check_mark:', embed)
}, 1500)
})
}
})


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
      .setColor('PURPLE')
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
      .setColor('PURPLE')
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
 if(message.content.toLowerCase() === prefix + "botlist") {
 message.channel.send("**Data review...** <a:Loading:949611726956015686>").then(m =>{
setTimeout(() => {
 let embed = new Discord.MessageEmbed()
 .setTitle("Botlist")
 .setDescription("[Server Support](https://discord.gg/Pgh65AgDgB) | [Website](https://townbot.carrd.co) | [Vote](https://top.gg/bot/875032394925740062/vote) | [invite](https://discord.com/oauth2/authorize?client_id=875032394925740062&permissions=8&scope=bot)")
 .addField(
'+uptimebot',
'<:right:948877331592794112> Bot that keeps your bots up and running 24 hours',
true) 
 .addField(
'+musicbot',
'<:right:948877331592794112> Types of music bots to play and stop songs.',
true)
 .addField(
'+chatbot',
'<:right:948877331592794112> Talk to the bot like a real person',
true)
 .addField(
'+gamesbot',
'<:right:948877331592794112> Various games bot. For fun and easy to use',
true)
 .addField(
'+systembot',
'<:right:948877331592794112> All In One Bot (admin, giveaway, more..)',
true)
 .addField(
'+welcomebot',
'<:right:948877331592794112> Distinctive message when a member enters the server',
true)
 .addField(
'+reactionbot',
'<:right:948877331592794112> A bot that gives you a rank by pressing the reaction',
true)
 .addField(
'+giveawaybot',
'<:right:948877331592794112> Give gifts and prizes, to whomever you want',
true)
 .addField(
'+levelbot',
'<:right:948877331592794112> Simple Level Rank Bot, You can do it easily',
true)
 .addField(
'+linebot',
'<:right:948877331592794112> Send the selected line and easy to use',
true)
 .addField(
'+spinbot',
'<:right:948877331592794112> Spin the wheel of fortune and try your luck',
true)
 .addField(
'+memebot',
'<:right:948877331592794112> Random and varied funny pictures a new idea',
true)
 .setColor("RANDOM")
 .setFooter('My Prefix is : + ', 'https://images-ext-1.discordapp.net/external/bcHCcDUfjAr6CmKJlHzNuS3sfJeKZciWGyRvZ9NZtDQ/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/935959168140050502/4c4746d0b96d8b18f09837c9a81da9c2.png?width=683&height=683');
 m.edit(embed)
 m.edit('**The data has been revised **<:yes:949605769316302868>', embed)
 message.react("<:yes:949605769316302868>");
}, 1500)
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
'<:right:948877331592794112> Special can stay in VC Room 24/7',
true) 
 .addField(
'+musicbotv2',
'<:right:948877331592794112> Easy to use one line, With Reaction',
true)
 .addField(
'+musicbotv3',
'<:right:948877331592794112> with filters, Lots of great commands to use',
true)
 .setColor("RANDOM")
 message.channel.send(embed)
 }
 if(message.content === prefix + 'gamesbot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("GamesBot")
 .setDescription("**What version do you want?**")
 .addField(
'+gamesbotv1',
'<:right:948877331592794112> More Than 30 Fun Command... Try it its Free - Nice',
true) 
 .addField(
'+gamesbotv2',
'<:right:948877331592794112> Best Games Bot 8Ball Arabic Try it its cool and nice',
true)
 .addField(
'+gamesbotv3',
'<:right:948877331592794112> Memes and jokes and anime games (arab only)',
true)
 .setColor("RANDOM")
 message.channel.send(embed)
 }
 if(message.content === prefix + 'reactionbot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("ReactionBot")
 .setDescription("**What version do you want?**")
 .addField(
'+reactionbotv1',
'<:right:948877331592794112> A bot that gives you a rank by pressing the reaction',
true) 
 .setColor("RANDOM")
 message.channel.send(embed)
 }
 if(message.content === prefix + 'systembot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("systembot")
 .setDescription("**What version do you want?**")
 .addField(
'+systembotv1',
'<:right:948877331592794112> It contains more than 200 orders, general orders, and fun orders...',
true) 
 .addField(
'+systembotv2',
'<:right:948877331592794112> General, Moderation, Games, Anime Commands and More...',
true) 
 .addField(
'+systembotv3',
'<:right:948877331592794112> Ticket and Uptime Commands with welcome and Moderation More...',
true) 
 .setColor("RANDOM")
 message.channel.send(embed)
 }
 if(message.content === prefix + 'giveawaybot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("GiveawayBot")
 .setDescription("**What version do you want?**")
 .addField(
'+giveawaybotv1',
'<:right:948877331592794112> Give gifts and prizes, to whomever you want',
true) 
 .setColor("RANDOM")
 message.channel.send(embed)
 }
 if(message.content === prefix + 'levelbot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("LevelBot")
 .setDescription("**What version do you want?**")
 .addField(
'+levelbotv1',
'<:right:948877331592794112> Simple Level Rank Bot, You can do it easily',
true) 
 .setColor("RANDOM")
 message.channel.send(embed)
 }
})


client.on("message", message => {
  if(message.content === prefix + 'uptimebot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("UptimeBot V1")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@iambirdyt/UptimeBot)\n \n ")
 .setColor("RANDOM")
 .setFooter("Embed footer")
 message.channel.send(embed)
 }
  if(message.content === prefix + 'gamesbotv1') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("GamesBot V1")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@iambirdyt/GamesBot)\n \n ")
 .setColor("RANDOM")
 .setFooter("More Than 30 Fun Command...")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'gamesbotv3') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("GamesBot V3")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/gamesbot-v3)\n \n ")
 .setColor("RANDOM")
 .setFooter("Memes and jokes and anime games")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'levelbotv1') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("LevelBot V1")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/leveling-system)\n \n ")
 .setColor("RANDOM")
 .setFooter("Simple Level Rank Bot, You can do it easily")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'giveawaybotv1') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("GiveawayBot V1")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/giveawaybot)\n \n ")
 .setColor("RANDOM")
 .setFooter("Give gifts and prizes, to whomever you want")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'reactionbotv1') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("ReactionBot V1")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/reactionrole-bot)\n \n ")
 .setColor("RANDOM")
 .setFooter("A bot that gives you a rank by pressing the reaction")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'musicbotv1') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("MusicBot V1")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@iambirdyt/Music-Bot-24x7)\n \n ")
 .setColor("RANDOM")
 .setFooter("Special can stay in VC Room 24/7")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'musicbotv2') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("MusicBot V2")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/music-bot-1-line)\n \n ")
 .setColor("RANDOM")
 .setFooter("Easy to use one line, With Reaction")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'musicbotv3') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("MusicBot V3")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/Music-bot-filters)\n \n **<:right:948877331592794112>  Fork From Github** :  [Click Here](https://github.com/zyrouge/Music-bot)")
 .setColor("RANDOM")
 .setFooter("with filters, Lots of nicely developed commands")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'welcomebot') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("WelcomeBot V1")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@iambirdyt/welcome-bot)\n \n ")
 .setColor("RANDOM")
 .setFooter("welcomebot")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'gamesbotv2') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("GamesBot V2")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/8ball-bot-arabic)\n \n ")
 .setColor("RANDOM")
 .setFooter("Best Games Bot 8Ball Arabic Try it its cool and nice")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'chatbot') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("ChatBot V1")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@iambirdyt/ChatBot)\n \n ")
 .setColor("RANDOM")
 .setFooter("chatbot")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'systembotv1') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("SystemBot V1")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@iambirdyt/200-cmd-v2)\n \n ")
 .setColor("RANDOM")
 .setFooter("It contains more than 200 orders, general orders, and fun orders...")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'systembotv2') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("SystemBot V2")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/systembotv2)\n \n ")
 .setColor("RANDOM")
 .setFooter("General, Moderation, Games, Anime Commands and More...")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'systembotv3') {
  let embed1 = new Discord.MessageEmbed()
 .setTitle("SystemBot V3")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/systembotv3)\n \n ")
 .setColor("RANDOM")
 .setFooter("Ticket and Uptime Commands with welcome and Moderation More...")
 message.channel.send(embed1)
  }
  if(message.content === prefix + 'linebot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("Linebot V1")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/linebot)\n \n ")
 .setColor("RANDOM")
 .setFooter("Send the selected line and easy to use")
 message.channel.send(embed)
 }
 if(message.content === prefix + 'spinbot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("Spinbot V1")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/spinbot)\n \n ")
 .setColor("RANDOM")
 .setFooter("Spin the wheel of fortune and try your luck")
 message.channel.send(embed)
 }
 if(message.content === prefix + 'memebot') {
  let embed = new Discord.MessageEmbed()
 .setTitle("Memebot V1")
 .setDescription("**<:right:948877331592794112>  Fork From Replit** :  [Click Here](https://replit.com/@Tiwxsaw88bot/memebot-ar)\n \n ")
 .setColor("RANDOM")
 .setFooter("Random and varied funny pictures a new idea")
 message.channel.send(embed)
 }
})





client.on("ready", () => {
 console.log(` ${client.user.username} online`);
 const status = [
 `Type +botlist`,
 `Get your Bots 0.2`
 ]
 setInterval(() => {
 client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "PLAYING"})
 }, 5000)
})

client.on('guildCreate',guild=>{
  let channel = client.channels.cache.find(c => c.id === '951219606373146674');
  let embed = new Discord.MessageEmbed()
  .setAuthor(guild.name,guild.iconURL({dynamic:true}))
  .setTitle(`${client.user.username}, Join new server.`)
  .setDescription(`Server Name: **${guild.name}**
Server Members: **${guild.memberCount}**
Creadted at: **${guild.createdAt}**
Region: **${guild.region}**
Owner: **${guild.owner}**
Verifiy: **${guild.verificationLevel}**`)
.setTimestamp()
channel.send(embed)
})

client.on('guildDelete',guild=>{
  let channel = client.channels.cache.find(c => c.id === '951219635850735716');
  let embed = new Discord.MessageEmbed()
  .setAuthor(guild.name,guild.iconURL({dynamic:true}))
  .setTitle(`${client.user.username}, Left a Server.`)
  .setDescription(`Server Name: **${guild.name} (${guild.id})**
Server Members: **${guild.memberCount}**
Creadted at: **${guild.createdAt}**
Region: **${guild.region}**
Owner: **${guild.owner}**
Verifiy: **${guild.verificationLevel}**`)
.setTimestamp()
channel.send(embed)
})


client.on('message' , saud=> {
if(saud.content === `<@!${client.user.id}>>`){
saud.channel.send(`**My prefix is +**`)
}
});

client.on("message", async(NotOurs) => {
 
  if (NotOurs.author.bot) return;
let devs = ["712379964498116670"];
  if (NotOurs.content.toLowerCase() === prefix + "links") {
      if(!devs.includes(NotOurs.author.id)){
    let embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
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

client.on("message", async ncr => {
    if (ncr.content.startsWith(prefix + "ping")) {
    var states = "🟢 Excellent";
    var states2 = "🟢 Excellent";
    var ncr = message;
    var msg = `${Date.now() - ncr.createdTimestamp}`;
    var api = `${Math.round(client.ws.ping)}`;
    if (Number(msg) > 70) states = "🟢 Good";
    if (Number(msg) > 170) states = "🟡 Not Bad";
    if (Number(msg) > 350) states = "🔴 Soo Bad";
    if (Number(api) > 70) states2 = "🟢 Good";
    if (Number(api) > 170) states2 = "🟡 Not Bad";
    if (Number(api) > 350) states2 = "🔴 Soo Bad";
    if (ncr.author.bot) return;
    ncr.channel.send(
      new MessageEmbed()
        .setColor("00e8ff")
        .setAuthor(ncr.author.username, ncr.author.avatarURL())
        .addField("**Time Taken:**", msg + " ms 📶 | " + states, true)
        .addField("**WebSocket:**", api + " ms 📶 | " + states2, true)
        .setTimestamp()
        .setFooter(`Request By ${ncr.author.tag}`)
    ); // All Copyrights Go's To </> NAAR Studio: https://discord.gg/YJ6mUdgTscs
    }
});

client.login(process.env.token); 
