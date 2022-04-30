const supertest= require('supertest')
const app=  require('../src/app')

describe('Endpoints Test', () => {

    
    it('(find user)', async  () =>{
        const response=  await supertest(app).get('/user')
        expect(response.statusCode).toEqual(200)
    })

    it('(create user)', async  () =>{
        const response=  await supertest(app).post('/user').send({
            id:5,
            username:"test",
            password:"test",
            profileId:1
              
        })
        expect(response.statusCode).toEqual(201)
    })

    it('(findById user)', async  () =>{
        const response=  await supertest(app).get('/user/5')
        expect(response.statusCode).toEqual(200)
    })

    it('(remove user)', async  () =>{
        const response=  await supertest(app).delete('/user/5')
        expect(response.statusCode).toEqual(200)
    })

 
})

