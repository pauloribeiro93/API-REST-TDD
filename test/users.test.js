const request = require('supertest')

const app = require('../src/app')


test('Devo responder na raiz', () => {
    return request(app).get('/users')
    .then((res) => {
      expect(res.status).toBe(200)
      expect(res.body).toHaveLength(1)
      expect(res.body[0]).toHaveProperty('name','john Doe')
    })
});

test('Devo inserir um usuario com sucess', () => {
    return request(app).post('/users')
    .send({name:'Walter Mitty', mail: 'walter@mail.com'})
    .then((res) => {
      expect(res.status).toBe(201)
      expect(res.body.name).toBe('Walter Mitty')
    })
});