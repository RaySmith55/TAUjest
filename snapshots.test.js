var itemStock = [
    {'id': '1', 'itemName': 'Razors', 'Stock': '10'},
    {'id': '2', 'itemName': 'Socks', 'Stock': '1'},
    {'id': '3', 'itemName': 'Towels', 'Stock': '100'},
    {'id': '4', 'itemName': 'Socks', 'Stock': '100'}
];

function filterItemsStock(arr, key, term) {
    return arr.filter(function(obj) {
        return obj[key] === term
    });}
    
test('it returns all items with matching id', () => {
    expect(filterItemsStock(itemStock, 'id', '1')).toEqual([
        {'id': '1', 'itemName': 'Razors', 'Stock': '10'}
    ])
});

test('it returns all items with matching item name', () => {
    expect(filterItemsStock(itemStock, 'itemName', 'Socks')).toEqual([
        {'id': '2', 'itemName': 'Socks', 'Stock': '1'},
        {'id': '4', 'itemName': 'Socks', 'Stock': '100'}
    ])
});
