const url = 'https://randomuser.me/api/';

function getUsersPromise() {
    return fetch(url)
    .then(res => res.json())
    .then(res => res.results)
    .catch(err => console.log(err));
}

const getUserAsync = async () =>{
    try{
    const res = await fetch(url+'?results=50'); //guardar una respuesta que se espera
    const data = await res.json(); //el json de la respuesta
    return data.results; //results esstamos utilizacion apo dentro de los campos de json e el principal
    }catch(err){
        console.log(err);
    }
}
const getUserData = async (id)=>{
    try{
        const res = await fetch(`${url}?id=${id}`);
        // const res = await fetch(url+'?id='+id);
        const data = await res.json();
        return data.results[0];
    }catch(err){
        console.log(err);
    }
}


export default {
    getUsersPromise,
    getUserAsync,
    getUserData
}