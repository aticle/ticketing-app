const request = require('supertest');

const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);

const app = require('../app');
const { db } = require('../config.js');

describe('GET TICKET', () => {
    beforeAll(() => {
        mockgoose.prepareStorage().then(() => {
            mongoose.connect(db);
        });
    });

    it('should return ticket by id', (done) => {
        request(app)
            .get('/ticket/find/1')
            .expect(200, (req, res) => {
                expect(Array.isArray(res.body)).toBe(true);
                done();
            })
    });
});
