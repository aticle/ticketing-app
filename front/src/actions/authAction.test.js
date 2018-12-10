import actionTypes from './actionTypes';
import { registerUser, loginUser } from './authAction';

jest.mock('axios');

const history = { push: jest.fn() };
const dispatch = jest.fn();
const user = {
    "name": "full name",
    "email": "bla3@bla.com",
    "password": "qwerty",
    "_id": "5bff67c6c614ba2ca7fb1ab8",
    "__v": 0,
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZnVsbCBuYW1lIiwiZW1haWwiOiJibGEzQGJsYS5jb20iLCJwYXNzd29yZCI6IiQyYSQxMCRyR1VrQU4yY25rNXh3eTl3S0dTQzdPaGhZZ1VaM2FZQ091Rm9GbDBUVk0zcGtLSzBGTWY5bSIsImlhdCI6MTU0Mzc3OTM5OCwiZXhwIjoxNTQzNzgyOTk4fQ.Et4SlI0sKzvhe1JV-JCnN_klkxcl6_m8jOG8hGZpQeI"
};

describe('authActions', () => {
    it('registerUser', () => {
        const regUser = {
            "name": "full name",
            "email": "bla3@bla.com",
            "password": "qwerty",
            "password_confirm": "qwerty"
        };
        jest.requireMock('axios').default.post.mockReturnValue(Promise.resolve(regUser));

        registerUser(regUser, history)(dispatch);

        expect(jest.requireMock('axios').default.post).toHaveBeenCalledWith('/users/register', regUser);

        // then
        expect(jest.requireMock('axios').default.post).toHaveReturnedWith(expect.any(Object));

        // catch
        jest.requireMock('axios').default.post.mockReturnValue(Promise.reject({ email: 'nope' }));
        registerUser(regUser, history)(dispatch);
        expect(jest.requireMock('axios').default.post).toHaveLastReturnedWith(expect.any(Object));
    });

    it('loginUser', () => {
        const regUser = {
            "email": "bla3@bla.com",
            "password": "qwerty"
        };
        jest.requireMock('axios').default.post.mockReturnValue(Promise.resolve(regUser));

        registerUser(regUser, history)(dispatch);

        expect(dispatch.mock.calls[0][0]).toEqual({ type: actionTypes.REGISTER_USER });
        expect(jest.requireMock('axios').default.post).toHaveBeenCalledWith('/users/register', regUser);

        // then
        expect(jest.requireMock('axios').default.post).toHaveReturnedWith(expect.any(Object));

        // catch
        jest.requireMock('axios').default.post.mockReturnValue(Promise.reject({ email: 'nope' }));
        registerUser(regUser, history)(dispatch);
        expect(jest.requireMock('axios').default.post).toHaveLastReturnedWith(expect.any(Object));
    });
});
