const prompt = require("prompt-sync")({ sigint: true});
let agenda = [];

const cargarContacto =()=> {
    let nuevoContacto = [];
    nuevoContacto [0] = prompt('Ingrese el dni: ')
    nuevoContacto [1] = prompt('Ingrese el nombre: ')
    nuevoContacto [2] = prompt('Ingrese el apellido: ')
    nuevoContacto [3] = prompt('Ingrese el telefono: ')
    return nuevoContacto;
}
agenda = [['39222111','Ema','Fernandez','2235555555'],
['40223311','Carlos','Perez','2234455444'],
['402323212','Lucas','Gimenez','2235555555']
];

agenda.unshift(cargarContacto());
agenda.push(cargarContacto());
console.log(agenda);

agenda.splice(prompt("eliminar contacto de la posicion: "),1);

console.log(agenda);

//agenda.splice(indice,1);
/*
function buscarIndice (agenda){
    let contador = 0;
    agenda.forEach(element => {
        if(agenda[contador].indexOf('Carlos') != -1)
        return contador;
        else contador++;
    });
}

let indice = buscarIndice(agenda);
console.log(indice);


*/