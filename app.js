'use strict';

const { SMTPServer } = require('smtp-server')
const emoji = require('node-emoji')
const replace = require('stream-replace')

const SERVER_PORT = process.argv[2]  || 2525
const SERVER_HOST = "localhost"

const server = new SMTPServer({
    logger: false,

    banner: 'SMTP mock server',

    disabledCommands: ['AUTH', 'STARTTLS'],

    onData(stream, session, callback) {
        stream
            .pipe(replace(/Message-ID:/g, emoji.emojify(':email: \x1b[33m  Message-ID:\x1b[0m')))
            .pipe(replace(/From:/g, emoji.emojify(':pencil: \x1b[36m From:\x1b[0m')))
            .pipe(replace(/To:/g, emoji.emojify(':fast_forward: \x1b[36m To:\x1b[0m')))
            .pipe(replace(/Date:/g, emoji.emojify(':clock130: \x1b[36m Date:\x1b[0m')))
            .pipe(replace(/Subject:/g, emoji.emojify(':fire: \x1b[31m Subject:\x1b[0m')))
            .pipe(process.stdout)
            .on('end', () => {
                callback(null)
            })
    },
})

server.on('error', err => {
    console.log('Error occurred')
    console.log(err)
});

server.listen(SERVER_PORT, SERVER_HOST)
console.log(`\x1b[33m Running on ${SERVER_HOST}:${SERVER_PORT}\x1b[0m`)