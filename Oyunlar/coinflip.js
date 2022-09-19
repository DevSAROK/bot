const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async (client, message, args) => {
  let para = db.fetch(`para_${message.author.id}`) 
  
//=== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let timeout = 7000;
  
  let crime = await db.fetch(`bahisoynama_${message.author.id}`)

      if (crime !== null && timeout - (Date.now() - crime) > 5) {
        
        let time = ms(timeout - (Date.now() - crime));
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("#020305")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`<a:emoji_2:1019238291649863791> You Have A Cooldown For __coinflip__
                        **Time left**
                        ${time.seconds ? time.seconds + 'seconds' : 'try again!'}`))
      } else {
  var miktar = args[0]
  if(!miktar) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("#020305")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`You Can't More Them 💴 200,000`))
 if(miktar > 150000) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("#020305")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`You can bet up to 200,000 💴!`))   
if(miktar > para) return message.channel.send(new Discord.MessageEmbed()
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
                                              .setColor("#020305")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`In your wallet to place a bet ${para ? "just " + para + ' <a:emoji_2:1019238291649863791> there is!' : 'you have no money!'}`))
        const result = [
          "LOOSELOOSE",
          "WINWIN",
          "LOSSELOSSE",
          "WINWIN",
          "LOOSELOOSE"
        ] 
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        let awnser = result[Math.floor(Math.random() * result.length)]
     if (awnser === "LOOSELOOSE") {
 var kaybettin = miktar*2        
        //////        
        var text2 = `**<@${message.author.id}> CoinFlip <:emoji_91:1019641091512868965> Choice win Or Lost**`;
          message.channel.send(text2).then(msg => {
            setTimeout(() => {
              msg.edit(`**<@${message.author.id}>spent cowoncy ${kaybettin} <:emoji_91:1019641091512868965> and chose heads
The coin spins... <a:emoji_2:1019238291649863791> tail and you lost it all...:c**`);
            }, 3000);
          });
      await db.set(`bahisoynama_${message.author.id}`, Date.now());   
      await db.add(`para_${message.author.id}`, -kaybettin);   
      } else { 
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
          var kazandın = miktar*2
        var text2 = `**<@${message.author.id}> CoinFlip <:emoji_91:1019641091512868965> Choice win Or Lost**`;
          message.channel.send(text2).then(msg => {
            setTimeout(() => {
              msg.edit(`**<@${message.author.id}> spent cowoncy ${kazandın} <:emoji_91:1019641091512868965> and chose heads
The coin spins... <a:emoji_2:1019238291649863791> and you win**`);
            }, 3000);
          });
    await db.set(`bahisoynama_${message.author.id}`, Date.now());   
    await db.add(`para_${message.author.id}`, kazandın);    
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        }}}
exports.conf = {
  enabled: true,
  aliases: ["coinflip"],
};

exports.help = {
  name: 'cf',
};
