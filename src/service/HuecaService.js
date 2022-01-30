const urlCrud = 'http://localhost:3001';


const getListHuecas = async () => {
    const response = await fetch(`${urlCrud}/huecas`);  
    const data = await response.json();     
    return  data;
}
// Obtener solo un id
const findByIdHueca = async (huecaId) => {
    console.log(huecaId);
    const response = await fetch(`${urlCrud}/huecas/${huecaId}`);  
    const data = await response.json();     
    return  data;
}

const createHueca = async (hueca) => {

    const resp = await fetch(`${urlCrud}/huecas`, {
        method: 'POST',
        body: JSON.stringify(hueca),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}


const updateHueca = async (hueca) => {
    console.log(hueca);
    const resp = await fetch(`${urlCrud}/huecas`, {
        method: 'PUT',
        body: JSON.stringify(hueca),
        headers: {
            'Content-type': 'application/json'
        }
    });
    return await resp.json();
}

export {
    getListHuecas,
    createHueca,
    updateHueca,
    findByIdHueca

}