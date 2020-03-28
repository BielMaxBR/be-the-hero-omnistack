const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('ONG', () => {
    beforeEach(async() => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    });

    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to crate a new ong', async () => {
        const response = await request(app).post('/ongs').send({
            name: "APAsincronizaodresD3",
            email: "gbielmaximo@gmail.com",
            whatsapp: "83988301457",
            city: "ali ó",
            uf: "PB"
        })
      
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })
})