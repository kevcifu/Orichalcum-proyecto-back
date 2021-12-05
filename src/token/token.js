import jwt from 'jsonwebtoken';

const validarToken = (token) =>{
    if (token) {
        const verificacion = jwt.verify(token, 'secret', (err, data) => {
            if(data) {
                return {
                    data: data,
                };
            }
            if(err){
                return { 
                    error: err,
                };
            }
        });
        return verificacion;
    }
};

const generarToken = (cargaUtil) =>{
    return jwt.sign(cargaUtil, 'secret',{
        expiresIn: '24h',
    });
};

export {validarToken, generarToken};