const http = require('http');
const url = require('url');

const iniciar = (encaminar, manegadorPeticions) => {
    const onReq = (req, res) => {
        const pathname = url.parse(req.url).pathname;
        console.log(`S'ha rebut una petició a ${pathname}`);

        let dataPOST = '';
        req.setEncoding('utf8');
        req.addListener('data', data => {
            dataPOST += data;
            console.log(`S'ha rebut part del POST: ${data}`);
        })

        req.addListener('end', () => {
            encaminar(manegadorPeticions, pathname, res, dataPOST);        
        });
    }

    http.createServer(onReq).listen(9000);
    console.log('Iniciat servidor al port 9000');
}

exports.iniciar = iniciar;