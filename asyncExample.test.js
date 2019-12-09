const fetchDataOverApi = require('./fetchDataOverApi.js');

// non async example
test('the intentionally failing user data for user 1', () => {
    const data = fetchDataOverApi();
    expect(data).not.toBe('John');
});

// async example
test('the user data for user 1', async() => {
    const data = await fetchDataOverApi();
    expect(data).toBe('John');
});
