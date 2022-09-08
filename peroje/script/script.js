import {datos} from '../data/datos.js';
const items = document.getElementById("items")
const templateCard = document.getElementById('template-card').Content;
const fragment = document.createDocumentFragment()
let like={};

document.addEventListener(DOMContentLoaded,()=>{
    loadData(datos)
}
)

const loadData = datos =>{
    datos.forEach(Flowers =>{
        const{id,name,image} = Flowers;
        templateCard.querySelector('h5').textContent
        templateCard.querySelector('img').setAtribute('src',image);
        templateCard.querySelector('.btn-dark').dataset.Id
        const clone = templateCard.clneNode(true)
        fragment.appendChild(clone)
    

    })

    items.appendChild(fragment)
}