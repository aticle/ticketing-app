import isEmpty from './is-empty';

describe('Validate isEmpty', () => {
    it('w/ empty values', () => {
        expect(isEmpty(undefined)).toBe(true);
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty({})).toBe(true);
        expect(isEmpty([])).toBe(true);
        expect(isEmpty('')).toBe(true);
    });

    it('w/ non-empty values', () => {
        expect(isEmpty([1])).toBe(false);
        expect(isEmpty(2)).toBe(false);
        expect(isEmpty({ key: 'value' })).toBe(false);
        expect(isEmpty('val')).toBe(false);
    });
});
