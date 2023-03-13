import STOCK from "../../stock.json"

export const fetchDatos = () => {
    return new Promise ((resolve,reject) =>{
        setTimeout(()=>{
            resolve(STOCK)
        },1500)
    })
}

export const fetchPorId = (id) =>{
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(STOCK.find(element => element.id === id))
        }, 1500)
    })
}