const https = require('https');

class Github {

    getRepos(username, cb) {
        const options = {
            hostname: 'api.github.com',
            path: `/users/${username}/repos`,
            headers: {
                'User-Agent': 'lex',
            }
        };

        const req = https.get(options, res => {
            if (res.statusCode !== 200) return cb(new Error(`Ну удалось получить данные: ${res.statusMessage}`))
            let body = '';
            res.setEncoding('utf-8');
            res.on('data', data => body += data);
            res.on('end', () => {

                try {
                    body = JSON.parse(body);
                    cb(null, body)
                } catch (error) {
                    cb(new Error('ошибка при паринге'))
                }
            })
        })

        req.on('error', error => cb(new Error(`Не удалось отправить запрос: ${error.message}`)))
    }
}

module.exports = Github;