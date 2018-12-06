import { getJwt, setJwt, removeJwt } from './jwt';

describe('jwt', () => {
    class LocalStorageMock {
        constructor() {
            this.store = {};
        }

        clear() {
            this.store = {};
        }

        getItem(key) {
            return this.store[key] || null;
        }

        setItem(key, value) {
            this.store[key] = value.toString();
        }

        removeItem(key) {
            delete this.store[key];
        }
    };

    global.localStorage = new LocalStorageMock();
    const token = 'dummy token';
    it('sets jwt in localStorage', () => {
        setJwt(token);
        expect(localStorage.getItem('tickAppJwt')).toBe(token);
    });

    it('gets jwt from localStorage', () => {
        expect(getJwt()).toBe(token);
    });

    it('removes jwt from localStorage', () => {
        removeJwt();
        expect(localStorage.getItem('tickAppJwt')).toBe(null);
    });
});
