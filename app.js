//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer');

const colors = require('colors');

//console.log(argv);


let comando = argv._[0];

switch (comando) {

    case 'crear':
        console.log(`***Crear tarea por hacer::  ${ argv.descripcion } `);
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        console.log('****Mostrar todas las tareas por hacer');
        let listado = porHacer.getListado();
        console.log('********** Por  Hacer ***********'.inverse);
        let i = 0;
        for (let tarea of listado) {
            i++;
            console.log(`************* ${i} *****************`.green.bold);
            console.log(tarea.descripcion.bold);
            console.log(' Estado Tarea: ', tarea.completado);
            console.log(`************* ${i} *****************`);
        }
        console.log('********** Por  Hacer ***********'.inverse);
        break;
    case 'actualizar':
        console.log(`***Actualiza una tarea por hacer ::  ${ argv.descripcion } a completado : ${argv.completado}`);
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;

    case 'borrar':
        console.log(`***Elimina una tarea por hacer ::  ${ argv.descripcion }`);
        let eliminar = porHacer.borrar(argv.descripcion);
        console.log(eliminar);
        break;
    default:
        console.log('@@@@@@@@@@@@@Comando no reconocido.@@@@@@@@@@@@@@');
        break;

}