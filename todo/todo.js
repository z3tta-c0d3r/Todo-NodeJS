const fs = require('fs')

let listadoTodo = new Array();

const saveDB = () => {

    let data = JSON.stringify(listadoTodo);

    //fs.openSync('./../db/data.json');
    fs.writeFile('db/data.json', data,(err) => {
        if(err) throw new Error('No se puede grabar', err);
    });
}

const cargarDB = () => {
    
    try {
        listadoTodo = require('../db/data.json');
        
    } catch(error) {
        listadoTodo = [];
    }
}

const crear = (descripcion) => {
    cargarDB();

    let porHacer = {
        descripcion,
        completado : false
    };
    listadoTodo.push(porHacer);

    saveDB();

    return porHacer;
}

const listar = () => {
    cargarDB();
    return listadoTodo;
}

const actualizar = (descripcion, completado) => {
    cargarDB();

    console.log('listar: ' + listadoTodo[2].descripcion)
    console.log('descrip:' + descripcion)
    let index = listadoTodo.findIndex(tarea => { return tarea.descripcion === descripcion });

    console.log('index: ' + index)
    if (index >= 0) {
        listadoTodo[index].completado = completado;
        saveDB();
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion, completado) => {
    cargarDB();

    let index = listadoTodo.findIndex(tarea => { return tarea.descripcion === descripcion });

    console.log('index: ' + index)
    if (index >= 0) {
        listadoTodo.splice(index,1);
        saveDB();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    crear,
    listar,
    actualizar,
    borrar
}