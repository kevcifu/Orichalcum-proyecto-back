const UserModel = require('./models/usuario');
const conectarBD = require('./db/db');

const main = async () => {
    await conectarBD();
};

main();
