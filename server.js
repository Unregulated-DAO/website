const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
 
const app = express();
const PORT = 443;

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => res.sendFile(path.resolve('build', 'index.html')));
 
const privateKey = fs.readFileSync('private.key');
const certificate = fs.readFileSync('certificate.crt');

https.createServer({
    key: privateKey,
    cert: certificate
}, app).listen(PORT, () => {
    console.log("Express server listening on port " + PORT);
});
