
module.exports = {
    test: {
        client: 'pg',
        version:'9.6',
        connection: {
            host: 'localhost',
            user: 'usuario',
            password: 'senha',
            database: 'barriga'
        },
        migrations: {
            directiory: 'src/migrations'
        },
    },
}


