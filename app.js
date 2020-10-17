const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    var result = [];
    var lastCommitSha;
    require('child_process').exec('git rev-parse HEAD', function (err, stdout) {
        lastCommitSha = stdout;
        console.log('Last commit hash on this branch is:', stdout);
    });
    var data = {
        myapplication: [{
            version: "1.0",
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
