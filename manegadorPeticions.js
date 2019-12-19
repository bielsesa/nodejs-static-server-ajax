const querystring = require('querystring');
const fs = require('fs');
const path = require('path');

const mimeType = {
    '.ico': 'image/x-icon',
    '.html': 'text/html',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.css': 'text/css',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.wav': 'audio/wav',
    '.mp3': 'audio/mpeg',
    '.svg': 'image/svg+xml',
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.eot': 'appliaction/vnd.ms-fontobject',
    '.ttf': 'aplication/font-sfnt'
  };

const index = res => {
    sendFile(res, './index.html');
}

const ajax = res => {
    sendFile(res, './js/ajax.js');
}

const jquery = res => {
    sendFile(res, './jslibs/jquery-3.4.1.js');
}

const favicon = res => {
    sendFile(res, './favicon.ico');
}

const signup = (res, data) => {
    console.log('Manegador petició SIGNUP');
    let parsedData = querystring.parse(data); // <-- HACE EL PARSE DE LOS DATOS DEL POST!
    console.log(`Parsed data: 
    nom = ${JSON.stringify(parsedData['nom'])}
    email = ${JSON.stringify(parsedData['email'])}
    psswd = ${JSON.stringify(parsedData['psswd'])}
    `);
    let resposta = `<p>Nom: ${parsedData['nom']}</p><p>Email: ${parsedData['email']}</p><p>Password: ${parsedData['psswd']}</p>`;

    res.writeHead(200, {'Content-Type': 'text/html'});
    return res.end(resposta);
}

/* funció lectura arxius */
const sendFile = (res, pathname) => {
    console.log(`PATHNAME: ${pathname}`);

    fs.exists(pathname, exist => {
        if(!exist) {
          // if the file is not found, return 404
          res.statusCode = 404;
          return res.end(`File index.html not found!`);          
        }
    
        // if is a directory, then look for index.html
        if (fs.statSync(pathname).isDirectory()) {
          pathname += './index.html';
        }
    
        // read file from file system
        fs.readFile(pathname, function(err, data){
          if(err){
            res.statusCode = 500;
            return res.end(`Error getting the file: ${err}.`);
          } else {
            // based on the URL path, extract the file extention. e.g. .js, .doc, ...
            const ext = path.parse(pathname).ext;
            // if the file is found, set Content-type and send data
            res.setHeader('Content-type', mimeType[ext] || 'text/plain' );
            return res.end(data);
          }
        });
      });
}

exports.index = index;
exports.ajax = ajax;
exports.jquery = jquery;
exports.favicon = favicon;
exports.signup = signup;