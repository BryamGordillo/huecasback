const urlCrud = 'http://localhost:3001';


const getListUsuarios = async () => {
    const response = await fetch(`${urlCrud}/usuarios`);  
    const data = await response.json();     
    return  data;
}

// Obtener solo un id
const findByIdUsuario = async (usuarioId) => {
    const response = await fetch(`${urlCrud}/usuarios/${usuarioId}`);  
    const data = await response.json();     
    return  data;
}

const createUsuario = async (usuarios) => {

    const resp = await fetch(`${urlCrud}/usuarios`, {
        method: 'POST',
        body: JSON.stringify(usuarios),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


const updateUsuario = async (usuario) => {
    const resp = await fetch(`${urlCrud}/usuarios`, {
        method: 'PUT',
        body: JSON.stringify(usuario),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


export {
    getListUsuarios,
    updateUsuario,
    createUsuario,
    findByIdUsuario

}