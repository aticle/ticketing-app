const request = require('supertest');

const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);

const app = require('../app');
const { db } = require('../config.js');

describe('PUT TICKET', () => {
    beforeAll(() => {
        mockgoose.prepareStorage().then(() => {
            mongoose.connect(db);
        });
    });

    it('should update a ticket', (done) => {
        const editedTicket = {
            title: "Modified title",
            description: "Modified description"
        };
        request(app)
            .put('/tickets/update/1')
            .send(editedTicket)
            .expect(200)
            .end((err, res) => {
                if (err) done(err)
                expect(res.body).toBe("Ticket updated!");
                done(0);
            })
    });
});
