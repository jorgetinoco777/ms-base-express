const opts = {
    port: {
        demand: true,
        alias: 'p'
    }
}

const argv = require('yargs')
            .command('node', 'Imprime en consola la tabla de multiplicar', opts)
            .help()
            .argv;

module.exports = {
    argv
}