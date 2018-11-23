const request = require('supertest');

const mongoose = require('mongoose');
const Mockgoose = require('mockgoose').Mockgoose;
const mockgoose = new Mockgoose(mongoose);

const app = require('../app');
const { db } = require('../config.js');

describe('DELETE TICKET', () => {
    beforeAll(() => {
        mockgoose.prepareStorage().then(() => {
            mongoose.connect(db);
        });
    });

    it('should delete a ticket', (done) => {
        request(app)
            .delete('/tickets/delete/0')
            .expect(200)
            .end((err, res) => {
                if (err) {
                    expect(res.body).toBe("Something went wrong. Ticket couldn't be deleted");
                    done(err);
                }
                expect(res.body).toBe("Ticket deleted!");
                done();
            });
    });
});