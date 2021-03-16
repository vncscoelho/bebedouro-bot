module.exports = {
  newRequest: (message, [team, url]) => {
    const { author, channel } = message;
    console.log(team, url);
    const actions = ['✋','🔄','✅'];
    channel.send(`Alô ${team}, vocês poderiam fazer o PR: ${url}?`)
      .then(async sentMsg => {
        await Promise.all(
          [...actions.map(action => sentMsg.react(action))]
        );
        let collector = sentMsg.createReactionCollector(r => actions.includes(r.emoji.name), {time: 640000000})
     .on('collect', (r, user) => {
         switch(r.emoji.name) {
           case '✋':
            author.send(`${user} está fazendo o seu PR.`);
            break;
          case '🔄':
            author.send(`${user} pediu alterações no seu PR.`);
            break;
          case '✅':
            author.send(`${user} aprovou o seu PR!`);
            collector.stop();
            break;
         }
      });   
      });
  }
}