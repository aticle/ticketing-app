const { baseRoot, port } = require('../config');
const axios = require('axios');
const sinon = require('sinon');
const mongoose = require('mongoose');

describe('server', () => {
    it('GET /', () => {

        axios.get(`${baseRoot}:${port}/tickets`, (error, resp, body) => {
            expect(resp.statusCode).toBe(200);
        });

    });
});