const Discord = require("discord.js");//npm i --save discord.js
var Canvas = require('canvas');//npm i canvas
var jimp = require('jimp');//npm i jimp
const fs = require("fs");//npm i fs
const bot = new Discord.Client();
const prefix = '+'






bot.on('guildMemberAdd', member => {

     if (member.guild.id === "448590558160748545") {
    
    
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

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;
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

                        
                        
bot.channels.get("457753370954825728").sendFile(canvas.toBuffer())
bot.channels.get("457753370954825728").send(`**__WELCOME TO Heroku & GitHub Shop__**✨ ${member}`)



})
})

}
});






bot.login(process.env.BOT_TOKEN);
