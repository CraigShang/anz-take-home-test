const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    var result = [];
    var versionNum = require('./package.json').version;
    var lastCommitSha = require('child_process').execSync('git rev-parse HEAD').toString().trim();
    var data = {
        myapplication: [{
            version: versionNum,
            lastcommitsha: lastCommitSha,
            description: "pre-interview technical test"
        }]
    };
    result.push(data)
    res.end(JSON.stringify(result));
});

server.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});
