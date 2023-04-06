import { addDoc, collection } from 'firebase/firestore'
import STOCK_DATA from '../stock.json'
import { db } from './config'


const data = STOCK_DATA.map((item) => {
    delete item.id
    return item
})

const productosRef = collection(db,'productos')

data.forEach((item)=> {
    addDoc(productosRef,item)
})