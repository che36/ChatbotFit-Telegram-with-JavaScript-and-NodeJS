const Youtube = require('youtube-node');
const config = require('./yt-config.json');

const youtube = new Youtube();
youtube.setKey(config.key);

function searchVideoRL(message, queryText) {
    return new Promisse((resolve, reject) => {
        youtube.search(`Exercicio em casa para biceps ${queryText}`, 2, function (error, result) {
            if (!error) {
                const videoIds = result.items.map((item) => item.id.videoId).filter(item => item);
                const youtubeLinks = videoIds.map(videoId => `https://www.youtube.com/watch?v=${videoId}`);
                resolve(`${message} ${youtubeLinks.join(`,`)}`);
            } else {
                reject('Deu erro');
            }
        });
    });
};

module.exports.searchVideoRL = searchVideoRL;

