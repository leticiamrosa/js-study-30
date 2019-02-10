const http = require('http'); 
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public/19_Webcam_fun'));

http.createServer(app).listen(3000, () => console.log('Servidor rodando local em http://localhost:3000'));