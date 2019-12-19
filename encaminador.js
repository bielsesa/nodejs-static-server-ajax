const encaminar = (manegadorPost, pathname, response, postData) => {
    if (typeof(manegadorPost[pathname]) === 'function') {
        return manegadorPost[pathname](response, postData);
    } else {
        console.log("No s'ha trobat manegador per a " + pathname);
        return "404 Not found";
      }
};

exports.encaminar = encaminar;