const conectarBD = require('./db/db');

const main = async () => {
    await conectarBD();
};

main();
