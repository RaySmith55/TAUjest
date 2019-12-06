const setupFirst = () => console.log('Setting up before all tests run');

const setupBeforeEach = () => console.log('Setting up before each test');

const tearDownAfterEach = () => console.log('Finish up after each test');

const tearDownLast = () => console.log('Finish up after tests run');

describe('new account creation checks', () => {
    beforeAll(() => setupFirst());
    beforeEach(() => setupBeforeEach());
    afterEach(() => tearDownAfterEach());
    afterAll(() => tearDownLast());

    test('new account 1 created', () => {
        const account = 'account1';
        expect(account).toEqual('account1');
    });

    test('new account 2 created', () => {
        const account = 'account2';
        expect(account).toEqual('account2');
    });
});
