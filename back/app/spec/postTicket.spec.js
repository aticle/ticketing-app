const request = require('supertest');

const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);

const app = require('../app');
const { db } = require('../config.js');

describe('POST TICKET', () => {
    beforeAll(() => {
        mockgoose.prepareStorage().then(() => {
            mongoose.connect(db);
        });
    });

    it('should create a ticket', (done) => {
        request(app)
            .post('/tickets/create')
            .send({
                id: 1,
                status: 'OPEN',
                title: "tit",
                description: "dsfef"
            })
            .set('Accept', 'application/json')
            .expect(200)
            .end((err, res) => {
                if (err) done(err);
                expect(res.body).toBe("Ticket successfully created");
                done();
            });
    });
});
