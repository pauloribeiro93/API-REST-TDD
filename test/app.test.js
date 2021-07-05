const request = require('supertest')

const app = require('../src/app.js')

test('Devo responder na raiz', () => {
    return request(app).get('/')
    .then((res) => {
        expect(res.status).toBe(200)
    })
});