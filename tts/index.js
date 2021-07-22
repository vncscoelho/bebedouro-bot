const axios = require('axios');
const service = 'https://ttsmp3.com/makemp3_new.php';
const FormData = require('form-data');

module.exports = {
  tts: (msg) => {
    const message = String(msg).replace(/\*/g, '');
    return axios
      .post(service, `msg=${msg}&lang=Camila&source=ttsmp3`)
      .then(({data}) => data.URL);
  }
}