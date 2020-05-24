const descripcion = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripcion de la tarea por hacer'
    }
}

const completado = {
    completado: {
        default: true,
        alias: 'c',
        desc: 'Marca como completado la tarea'
    }
}

const list = {    
    listAll: {
        default: true,
        alias:'all',
        desc: 'Lista todo los TODO'
    }
}

const argv = require('yargs')
.command('crear','Crear un TODO', { descripcion })
.command('actualizar','Actualizar un TODO', { descripcion, completado })
.command('borrar', 'borrar TODO', { descripcion })
.command('listar', 'listar TODO', { list}) 
.help().argv;

module.exports = {
    argv
}