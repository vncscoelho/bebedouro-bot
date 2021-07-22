const keep_alive = require('./keep_alive.js');
const Discord = require('discord.js');
const { tellFortune } = require('./fortune-teller');
const { tellBadFortune } = require('./bad-fortune-teller');
const { promoteMucher } = require('./flying');
const client = new Discord.Client({ 
  ws: { 
    intents: [
      'GUILDS',
      'GUILD_MEMBERS',
      'GUILD_PRESENCES',
      'GUILD_MESSAGES',
      'GUILD_VOICE_STATES',
      'GUILD_MESSAGE_TYPING',
      'GUILD_MESSAGE_REACTIONS',
    ] 
  } 
});
const token = process.env.token;
const cron = require("node-cron");
// const github = require("./github.js");
const letra = require("./te_amo_tantao.js");
const ytdl = require('ytdl-core-discord');

const {dorfnate} = require("./dorfnator/index.js");
const {tts} = require("./tts/index.js");

async function glub(voice_channel) {
  const connection = await voice_channel.join();
  const dispatcher = connection.play("./agua.mp3");
}

function joinCozinha(client, message) {
  const voice_channel = message.member.voice.channel;
  voice_channel.leave();
  //client.channels.fetch('690581784139661326')
    //.then(channel => channel.join()); teste
}

async function playAudioInChannel(message, audio, client, isStream) {
  const voice_channel = message.member.voice.channel;
  try {
    const connection = await voice_channel.join();
    let dispatcher;
    if (String(audio).indexOf('youtube') > 0) {
      dispatcher = connection.play(await ytdl(audio), { type: 'opus', volume: false });
    } else {
      dispatcher = connection.play(audio, { volume: false });
    }
      
    dispatcher.on('finish', () => {
      voice_channel.leave();
    });
  } catch(e) {
    console.log(e);
  }
}

module.exports = { playAudioInChannel };

client.on('error', error => {
  console.log(error)
});

client.on('ready', () => {
  console.log('Connected');

  client.channels.fetch("690581784139661326")
    .then(async cozinha => {
      cron.schedule("*/30 * * * *", async () => {
        await glub(cozinha);
      }, {
          scheduled: true,
          timezone: "America/Sao_Paulo"
        });
    });
});

client.on('message', async function(message) {
  const { content, channel, author } = message;
  if (channel.type === 'dm') {
    console.log(content, author);
    if (content === "420") {
      client.channels.fetch('735548150726787092')
        .then(channel => {
          channel.send("negaodabl random");
        })
    }
  }

  if (content.substring(0, 1) == '!') {
    let args = content.substring(1).split(' ');
    let cmd = args[0];
    args = args.splice(1);

    switch (cmd) {
      case 'para':
      case 'chega':
        joinCozinha(client, message);
        break;
      case 'toca':
        playAudioInChannel(message, args[0], client, true);
        break;
      case 'glub':
        playAudioInChannel(message, "./agua.mp3", client);
        channel.send("GLUB");
        break;
      case 'pingou':
        playAudioInChannel(message, "./foguete.mp3", client);
        break;
      case 'sextou':
        playAudioInChannel(message, "./sextou.mp3", client);
        break;
      case 'sextou2':
        playAudioInChannel(message, "./sextou2.mpeg", client);
        channel.send(`bah 😅 armandinho é o terror né meu 💯 bah 🤣 fico no horror com esse loco né 🤪 é um poeta 📖 né meu 😆 bah não tem quem não goste do loco 🤭 o pinta é afudê 😎 ô meuzinho 😝 to me largando lá pra tubarão 🦈 com meus bruxo 🧙‍♀️🧙‍♂️ aqui de floripa 🤙 vou ver se pego um corpinho hoje lá bah 🥵😇 vamo ver né meu 😳 vamo pra cima grêmio ⚽ 🗣️💨 fifiu`,)
        break;
      case 'alienigena':
        playAudioInChannel(message, "https://www.myinstants.com/media/sounds/aligenigenamp3menor.mp3", client);
        break;
      case 'nova-geracao':
        playAudioInChannel(message, "https://www.myinstants.com/media/sounds/nova-geracao_1.mp3", client);
        break;
      case 'rodolfo':
        playAudioInChannel(message, "https://www.myinstants.com/media/sounds/bom-dia-acorda-rodolfo-rodolfoooo-part.mp3", client);
        channel.send(`rodolfo rodolfo:pig: RODOLFO!!:astonished: que te passa?:cry: rolim? rolim? rodolfim?? rodolfim? rodolfo  RODOLFO RODOLFO!:sob: esta morto no respira:cry::cry:si respira respira:cold_sweat::nose: esta vivo:flushed::flushed: RODOLFO!! :pig2::pig2::dash: ahhhhh estava dormindo:cold_sweat::cold_sweat: ai que susto:sweat_smile: que susto:sweat_smile::joy: que susto:joy::pig:`);
        break;
      case 'risadinhadeladrao':
        playAudioInChannel(message, "ladrao.mp3", client);
        break;
      case 'lf':
        playAudioInChannel(message, "lf.mp3", client);
        channel.send(`♫ *${letra[Math.floor(Math.random() * 32)]}* ❤♡♥`);
        break;
      case 'quintou':
        playAudioInChannel(message, 'quintou.mp3', client)
        break;
      case 'vamo':
        playAudioInChannel(message, "https://www.myinstants.com/media/sounds/vamo_gremio_fiu_fiu_-2251937486906011096-audiotrimmer.mp3", client);
        break;
      case 'susto':
        playAudioInChannel(message, "https://www.myinstants.com/media/sounds/que-susto_aYts9hf.mp3", client);
        break;
      case 'pikachu':
        playAudioInChannel(message, "https://www.myinstants.com/media/sounds/e-o-pikachu.mp3", client);
        break;
      case 'pedra':
      	playAudioInChannel(message, "https://www.myinstants.com/media/sounds/olha_a_pedra.mp3", client);
      	break;
      case 'we':
      	playAudioInChannel(message, "https://www.myinstants.com/media/sounds/weeeee_original_1193597514938524841.mp3", client);
      	break;
      case 'bababooey':
      	playAudioInChannel(message, "https://www.myinstants.com/media/sounds/bababooey-sound-effect.mp3", client);
      	break;
      case 'poze':
      	playAudioInChannel(message, "https://www.myinstants.com/media/sounds/eu-te-conheco-nessa-porra.mp3", client);
      	break;
      case 'braia':
      	playAudioInChannel(message, "https://www.myinstants.com/media/sounds/droga-e-o-brian-audiotrimmer.mp3", client);
      	break;
      case 'ambulancia':
      	playAudioInChannel(message, "https://www.myinstants.com/media/sounds/e-a-ambulancia-besta000.mp3", client);
      	break;
      case 'tey':
      	playAudioInChannel(message, "https://www.myinstants.com/media/sounds/tey-quietinho-bydilera.mp3", client);
      	break;
      case 'inferno':
      	playAudioInChannel(message, "https://www.myinstants.com/media/sounds/picapau-va-pro-inferno-fundo-verde.mp3", client);
      	break;
      case 'pepe':
      	playAudioInChannel(message, "https://www.myinstants.com/media/sounds/pepe-ja-tirei-a-vela-mp3cut.mp3", client);
      	break;
      case 'taz':
      	playAudioInChannel(message, "https://www.myinstants.com/media/sounds/y2mate_sYvKxRA.mp3", client);
      	break;
      case 'tapa':
      	playAudioInChannel(message, "./tapa.mp3", client);
      	break;
      case 'cv':
      	playAudioInChannel(message, 
        "https://www.myinstants.com/media/sounds/super-xandao-mandando-um-salve-pro-comando-vermelho-f0das3kkkkkk.mp3", 
        client);
      	break;
      case 'vergonha':
      	playAudioInChannel(message, "vergonha.mp3", client);
        break;
      case 'rapaiz':
        playAudioInChannel(message, 'https://www.myinstants.com/media/sounds/vinheta-xaropinho-rapaz-cut-mp3.mp3', client);
        break;
      case 'gusta':
        playAudioInChannel(message, 'https://www.myinstants.com/media/sounds/no-te-gusta.mp3', client);
        break;
      case 'alo-gusta':
        playAudioInChannel(message, 'https://www.myinstants.com/media/sounds/voice-2015-03-30-14-44.mp3', client);
        break;
      case 'oi-gusta':
        playAudioInChannel(message, 'https://www.myinstants.com/media/sounds/oigustavo.mp3', client);
        break;
      case 'vitor':
        playAudioInChannel(message, 'https://www.myinstants.com/media/sounds/vitor_1l2wEXU.mp3', client);
        break;
      case 'richard':
        playAudioInChannel(message, 'https://www.myinstants.com/media/sounds/wtc-antoine-daniel-super-richard-special-russie.mp3', client);
        break;
      case 'uepa':
        playAudioInChannel(message, 'https://www.myinstants.com/media/sounds/uepa-mp3cut.mp3', client);
        break;
      case 'rapaz':
        playAudioInChannel(message, 'https://www.myinstants.com/media/sounds/vinheta-xaropinho-rapaz_dx3f4Be.mp3', client);
        break;
      case 'lucas':
        playAudioInChannel(message, 'https://www.myinstants.com/media/sounds/oilucas.mp3', client);
        break;
      case 'hora':
        playAudioInChannel(message, 'https://www.myinstants.com/media/sounds/bora-beber-olha-a-hora.mp3', client);
        break;
      case 'pedro':
        playAudioInChannel(message, 'https://www.myinstants.com/media/sounds/parapedro.mp3', client);
        break;
      case 'julio':
        playAudioInChannel(message, 'https://www.myinstants.com/media/sounds/whatsapp-audio-2019-10-10-at-12_ydPdPrv.mp3', client);
        break;
      case 'naiguel':
        playAudioInChannel(message, 'naiguel.mp3', client);
        break;
      case 'coelho':
        playAudioInChannel(message, 'https://www.myinstants.com/media/sounds/vinheta-ifood-2016-fabio-porchat-judite-curtinha.mp3', client);
        break;
      case 'marcelo':
        playAudioInChannel(message, "./marcelo.mp3", client);
        break;
      case 'parabens':
        playAudioInChannel(message, "https://www.myinstants.com/media/sounds/parabens-viu-seu-coco_rPXxWo0.mp3", client);
        break;
      case 'sorte':
        const fortune = await tellFortune(message);
        const spokenFortune = await tts(fortune);
        playAudioInChannel(message, spokenFortune, client);
        break;
      case 'azar':
        const badFortune = await tellBadFortune(message);
        const spokenBadFortune = await tts(badFortune);
        playAudioInChannel(message, spokenBadFortune, client);
        break;
      case 'fofoca':
        promoteMucher(message, client);
        break;
      case 'nicolas':
        playAudioInChannel(message, "https://www.myinstants.com/media/sounds/yt1s_NhzHkJE.mp3", client);
        break;
      case 'leticia':
        playAudioInChannel(message, "https://www.myinstants.com/media/sounds/botinha-otopetica.mp3", client);
        break;
      case 'oi-coelho':
        playAudioInChannel(message, "https://www.myinstants.com/media/sounds/oi-cueio_1.mp3", client);
        break;
      case 'oi-gui':
        playAudioInChannel(message, "https://www.myinstants.com/media/sounds/oiguilherme.mp3", client);
        break;
      case 'dorfnate':
        dorfnate(args[0], message.channel);
        break;
      case 'tts':
        const audio = await tts(args.join(' '));
        playAudioInChannel(message, audio, client);
        break;
    }
  }

});

client.login(token);
