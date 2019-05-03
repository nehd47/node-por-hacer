const descOpt = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const actualizar = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado: {
        demand: false,
        alias: 'c',
        default: true
    }
}


const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', descOpt)
    .command('actualizar', 'Actualiza un elemento por hacer', actualizar)
    .command('listar', 'Lista todos los elementos por hacer')
    .command('borrar', 'Elimina un elemento segun du descripcion', descOpt)
    .command('help', 'ayuda para la app de node de tareas por hacer')
    .argv;

module.exports = {
    argv
}