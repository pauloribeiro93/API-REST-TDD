
module.exports = {
    test: {
        client: 'pg',
        version:'9.6',
        connection: {
            host: 'localhost',
            user: jest.env('usuario'),
            password: jest.env('senha'),
            database: 'barriga'
        },
        migrations: {
            directiory: 'src/migrations'
        },
    },
}


jest.env('senha')