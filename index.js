const argv = require('yargs').
    option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'limite',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Hasta que número desea multiplicar'
    })
    .option('v', {
        alias: 'visualizar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra tablas en la consola'
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw new Error("La base tiene que ser un número")
        }
        return true
    })
    .help()
    .version()
    .argv;


const { multiplicar } = require('./multiplicador');

// console.log(argv.b);
// console.log(argv.base);

const base = 5;

multiplicar(argv.b, argv.l, argv.v);