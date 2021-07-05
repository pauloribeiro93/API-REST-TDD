
module.exports = {
    test: {
        client: 'pg',
        version:'9.6',
        conection: {
            host: 'localhost',
            user: 'postgres',
            password: 'ane130',
            database: 'barriga'
        },
        migrations: {
            directiory: 'src/migrations'
        },
    },
}