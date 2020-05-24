const colors = require('colors');
const argv = require('./config/yargs').argv;
const porhacer = require('./todo/todo');

let comando = argv._[0];

switch(comando) {
    case 'crear':
        let tarea = porhacer.crear(argv.descripcion);
        console.log('crear tarea: ', tarea);
        break;
    case 'listar':
        let listado = porhacer.listar();

        for(let lista of listado) {
            console.log('===================='.green);
            console.log('Descripcion: ' + lista.descripcion);
            console.log('Completado: ' + lista.completado);
            console.log('===================='.green);
        }
        break;
    case 'actualizar':
        let actualizado = porhacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);
        break;
    case 'borrar':
        let borrado = porhacer.borrar(argv.descripcion);
        console.log(borrado);
        break;
    default:
        console.log('comando no reconocido');
}