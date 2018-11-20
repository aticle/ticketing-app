const { baseRoot, port } = require('../config');
const axios = require('axios');
const sinon = require('sinon');
const mongoose = require('mongoose');

describe('app', () => {
    it('GET /', () => {

        axios.get(`${baseRoot}:${port}/tickets`, (error, resp, body) => {
            expect(resp.statusCode).toBe(200);
        });

    });
});