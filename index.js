const server = require('./server');
const encaminador = require('./encaminador');
const manegadorPeticions = require('./manegadorPeticions');

const manegadors = {};
manegadors['/'] = manegadorPeticions.index;
manegadors['/index.html'] = manegadorPeticions.index;
manegadors['/js/ajax.js'] = manegadorPeticions.ajax;
manegadors['/jslibs/jquery-3.4.1.js'] = manegadorPeticions.jquery;
manegadors['/favicon.ico'] = manegadorPeticions.favicon;
manegadors['/signup'] = manegadorPeticions.signup;

server.iniciar(encaminador.encaminar, manegadors);