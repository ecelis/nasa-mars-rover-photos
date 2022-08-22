const request = require('supertest');
const app = require('../app');
const { send } = require('express/lib/response');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

describe('Test Access Control', () => {
    test('GET from protected endpoint', async () => {
        return request(app)
            .get(`/rover/curiosity/fhaz`)
            .set('Accept', 'application/json')
            .set('authorization', `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0IiwiaWF0IjoxNjYwMDEwOTg3LCJleHAiOjE2OTE1Njg1ODd9.LKSJWXa1I3PmzifMcZNeeFUFEUn5rIUdOcbdW5K0c5U'}`)
            .then(res => {
                expect(JSON.parse(res.text).photos[0].camera.name).toBe('FHAZ');
            })
    });
});
