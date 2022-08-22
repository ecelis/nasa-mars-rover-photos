const request = require('supertest');
const app = require('../app');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

describe('Test user authentication', () => {
    test('Succesful login', async () => {
        return request(app)
            .get('/user/login?username=test')
            .set('Accept', 'application/json')
            .then(res => {
                const token = res.text
                const decoded = jwt.decode(token.replace(/"/,'').replace(/"/,''));  // TODO Fix the replace to apply twice
                expect(decoded.username).toBe('test')});
    });
});
