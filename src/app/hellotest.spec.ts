describe('hellotest', () => {

    let expected: string = '';
    let notExpected: string = '';
    let expectMatch = null;

    beforeEach(() => {
        expected = 'hellotest';
        notExpected = 'hellotest123'; 
        expectMatch = new RegExp(/^hello/);
    });

    afterEach(() => {
        expected = '';
        notExpected = ''; 
    });

    it('checks if hellotest is hellotest', () => expect(expected).toBe('hellotest'));
    it('checks if hellotest is not hellotest', () => expect(notExpected).not.toBe('hellotest1'));
    it('checks if hellotest is not hellotest', () => expect(notExpected).toMatch(expectMatch));
});