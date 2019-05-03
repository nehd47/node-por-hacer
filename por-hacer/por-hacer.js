const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('db/datos.json', data, (err) => {
        if (err)
            throw new Error('No se pudo grabar', err);
    });
}

const cargarDB = () => {
    try {

        listadoPorHacer = require('../db/datos.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}


const getListado = () => {
    try {
        listadoPorHacer = require('../db/datos.json');
        return listadoPorHacer;
    } catch (error) {
        listadoPorHacer = [];
    }
}

const actualizar = (descripcion, completado = true) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }

}


const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false
    };
    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;
}

const borrar = (descripcion) => {

    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    });


    /*
    O 
    let nuevoListado = listadoPorHacer.filter( tarea => {
        return tarea.descripcion != descripcion
    });
    if(listadoPorHacer.lenght === nuevoListado){
        return false;
    }else{
        listadoPorHacer = nuevoListado;
        guardaDB();
        return true;
    }
    */

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }

}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}