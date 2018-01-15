const BlockList = artifacts.require('./BlockList.sol');

contract('BlockList', function (accounts) {

    let blockListInstance;
    const seller = accounts[1];
    const sampleItem = {
        itemName: 'item 1',
        itemDescription: 'It is an item',
        itemPrice: 10
    };

    // test initial values
    it('should be initiated with empty values', function () {
        return BlockList.deployed()
            .then(function (instance) {
                return instance.getItem.call();
            })
            .then(function (data) {
                assert.equal(data[0], 0x0, 'Seller address must be empty');
                assert.equal(data[1], '', 'Item name must be empty');
                assert.equal(data[2], '', 'Description must be empty');
                assert.equal(data[3].toNumber(), 0, 'Seller address must be empty');
            });
    });

    it('should sell an article', function () {
        // test the sale of an item
        return BlockList.deployed()
            .then(function (instance) {
                blockListInstance = instance;
                return blockListInstance.sellItem(
                    sampleItem.itemName,
                    sampleItem.itemDescription,
                    web3.toWei(sampleItem.itemPrice, 'ether'),
                    { from: seller }
                );
            })
            .then(function () {
                return blockListInstance.getItem.call();
            })
            .then(function (data) {
                assert.equal(
                    data[0],
                    seller,
                    'Expected seller: ' + seller);
                assert.equal(
                    data[1],
                    sampleItem.itemName,
                    'Expected itemName: ' + sampleItem.itemName);
                assert.equal(
                    data[2],
                    sampleItem.itemDescription,
                    'Expected description: ' + sampleItem.itemDescription);
                assert.equal(
                    data[3].toNumber(),
                    web3.toWei(sampleItem.itemPrice, 'ether'),
                    'Expected price: ' + web3.toWei(sampleItem.itemPrice, 'ether'));
            })
    });
});