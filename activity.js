const numA = parseInt(prompt('Digite dato 1'));
const numB = parseInt(prompt('Digite dato 2'));
let res = document.getElementById('res');

if(numA < numB && numA !== isNaN && numB !== isNaN){
    for (let index = numA; index <= numB; index++) {
        if(index % 2 !== 0){
            console.log(index);
            res.innerHTML += index+',\n';
        }
    }
}else if(numA === numB){    
    res.innerHTML = 'Los numeros son iguales';
}else if(numA === isNaN || numB === isNaN){
    res.innerHTML = 'No se puede efectuar la operacion';
}else{
    res.innerHTML = 'No se puede efectuar la operacion';
}


