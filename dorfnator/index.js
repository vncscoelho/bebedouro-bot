const sharp = require('sharp');
const got = require('got');

const dorfnate = async (url, channel) => {
  console.log(url);
  const input = await got(`${url}`, { responseType: 'buffer' });

  const composite = await sharp(input.body)
  .rotate(-2.5)
  .resize({
    width: 430,
    height: 260
  }).toBuffer();

  await sharp('./dorfnator/dorf.png')
    .composite([{
      input: composite,
      blend: 'dest-over',
      top: 42,
      left: 42
    }])
    .sharpen()
    .webp( { quality: 90 } )
    .toFile('./dorfnator/output.png');

  channel.send("", {files: ["./dorfnator/output.png"]});
}

module.exports = { dorfnate }