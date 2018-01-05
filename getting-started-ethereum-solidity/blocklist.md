# Building a Sample DApp

- Named BlockList
- List your stuff for sale, i.e. craigslist
- Uses the MetaMask extension for processing payments

### Project Setup
- Create a directory for the project - `mkdir blocklist && cd $_`
- Use Truffle Box for bootstrapping the application - `truffle unbox pet-shop`
- Create a new contract

```
pragma solidity ^0.4.11;

contract BlockList {
  // State variables
  address seller;
  string name;
  string description;
  uint256 price;

  // sell an item
  function sellItem(string _name, string _description, uint256 _price) public {
    seller = msg.sender;
    name = _name;
    description = _description;
    price = _price;
  }

  // get the item
  function getItem() public constant returns (
      address _seller,
      string _name,
      string _description,
      uint256 _price
    ) {
      return(seller, name, description, price);
    }
}
```
- Need to update the config in ./truffle.js
```javascript
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545, // default is 7545 for some reason
      network_id: "*" // Match any network id
    }
  }
};
```

```
$ truffle console

BlockList.deployed().then(function(instance) { app = instance; });

app.getItem.call(); // get default state
/*
Default values:
[ '0x0000000000000000000000000000000000000000',
  '',
  '',
  BigNumber { s: 1, e: 0, c: [ 0 ] } ]

*/

app.sellItem('iPhone 7', 'Selling it to buy crack', web3.toWei(3, 'ether'), { from: web3.eth.accounts[1] });
// see the details in the console
// get the state now
app.sellItem('iPhone 7', 'Selling it to buy crack', web3.toWei(3, 'ether'), { from: web3.eth.accounts[1] });
/*
[ '0x672033a28868d0296d2de0a852c9a612b0e25658',
  'iPhone 7',
  'Selling it to buy crack',
  BigNumber { s: 1, e: 18, c: [ 30000 ] } ]
*/
```
