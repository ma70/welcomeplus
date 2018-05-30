const Discord = require("discord.js");//npm i --save discord.js

var Canvas = require('canvas');//npm i canvas
var jimp = require('jimp');//npm i jimp
const fs = require("fs");//npm i fs




const client = new Discord.Client();
const prefix = '+'
let WelcomerChat = JSON.parse(fs.readFileSync('../Room.json', 'utf8'));
client.on('message', message => {
if(!message.guild) return;
if(message.author.bot)return;
if (!WelcomerChat[message.guild.id]) WelcomerChat[message.guild.id] = {
welc: 'welcome'
};
if(message.content.startsWith(prefix+"setWlc")) {
        if (message.author.bot) return;
        if (message.author.id === client.user.id) return;
          if(!message.channel.guild) return;  
        if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`You Need Permission**\`ADMINISTRATOR\`**`).then(msg => {msg.delete(5000)})
        let args = message.content.split(' ').slice(1).join(' ')
        if(!args) return message.channel.send(`Please Typy The Room Name`).then(msg => {msg.delete(5000)})
        if(args.length > 50) return message.channel.send(`Room name must not exceed 50 characters`).then(msg => {msg.delete(5000)})
        let channel = message.client.channels.find('name', args);
        if (!channel) return message.channel.send(`Check the room name`).then(msg => {msg.delete(5000)})
        WelcomerChat[message.guild.id].chattt = args
        message.channel.send(`The Welcomer Room Has Been Changed To : <#${args}>`).then(msg => {msg.delete(5000)})
        fs.writeFile("../Room.json", JSON.stringify(WelcomerChat), (err) => {
    if (err) console.error(err)
  });
    }
});

client.on('guildMemberAdd', member => {
     if(!WelcomerChat[member.guild.id]) WelcomerChat[member.guild.id] = {
  chattt: 'welcome'
  }

      const welcomer =  member.guild.channels.find('name', WelcomerChat[member.guild.id].chattt);

      var Canvas = require('canvas')
      var jimp = require('jimp')

      const w = ['./img/w1.png',
      './img/w2.png',
      './img/w3.png',
      './img/w4.png',
      './img/w5.png',
      './img/w6.png',
      './img/w7.png',
      './img/w8.png'];

              let Image = Canvas.Image,
                  canvas = new Canvas(401, 202),
                  ctx = canvas.getContext('2d');
              ctx.patternQuality = 'bilinear';
              ctx.filter = 'bilinear';
              ctx.antialias = 'subpixel';
              ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';
              ctx.shadowOffsetY = 2;
              ctx.shadowBlur = 2;
              fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {
                  if (err) return console.log(err)
                  let BG = Canvas.Image;
                  let ground = new Image;
                  ground.src = Background;
                  ctx.drawImage(ground, 0, 0, 401, 202);

      })

                      let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".gif" : member.user.displayAvatarURL;
                      jimp.read(url, (err, ava) => {
                          if (err) return console.log(err);
                          ava.getBuffer(jimp.MIME_PNG, (err, buf) => {
                              if (err) return console.log(err);

                              //AVATAR�
                              let Avatar = Canvas.Image;
                              let ava = new Avatar;
                              ava.src = buf;
                              ctx.drawImage(ava, 152, 27, 95, 95);

                                                      //wl
                              ctx.font = '20px Arial Bold';
                              ctx.fontSize = '15px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                                         ctx.fillText(member.user.username, 200, 154);

                              //NAME�
                              ctx.font = '20px Arial';
                              ctx.fontSize = '28px';
                              ctx.fillStyle = "#FFFFFF";
                              ctx.textAlign = "center";
                                    ctx.fillText(`انت العضو رقم${member.guild.memberCount} `
                              , 200, 190);

 client.sendFile(canvas.toBuffer())
         fs.writeFile("../Room.json", JSON.stringify(WelcomerChat), (err) => {
    if (err) console.error(err)
  });



      })
      })
      });


client.login(process.env.BOT_TOKEN);
