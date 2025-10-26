import { getStockData } from "./stocksAPI.js";


const divEl = document.getElementById("container");

let previousPrice = null;

function renderData() {
    const {name, sym, price, time} = getStockData();

    let arrow = '';
    if(previousPrice !== null) {
        arrow = price > previousPrice ? '▲' : price < previousPrice ? '▼' : '→'
    }

    previousPrice = price;

    divEl.innerHTML = 
        `<p>Name: ${name}</p>
        <p>Sym: ${sym}</p>
        <p>Price: ${price} ${arrow}</p>
        <p>Time: ${time}</p>`
}

setInterval(renderData, 1500);

