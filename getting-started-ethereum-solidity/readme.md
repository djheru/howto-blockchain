# Getting Started with Ethereum Solidity Development

## Blockchain Philosophy

#### How do you represent value?
- Network of information
  - Information is copied from node to node
  - Information cannot be controlled
  - Can be copied, infact it must be copied
  
- Network of value
  - If you tell someone a joke, you both have it
  - If you give someone $100, they have it, you don't
  - Value must be moved, not copied
  - Same for other things of value aside from money
  - Must avoid double-spending
    - Tie the value to a physical thing
    - E.g. money - anti counterfeiting measures make it hard to duplicate value
    - If the notes are destroyed, the value is too
  - A ledger tracks the movement of value
    - A ledger
  - Notes and ledgers are the primary means of tracking or representing value
  - Digital tracking of value requires a digital ledger
    - Date
    - Sender
    - Recipient
    - Amount
    
#### The internet of value
- A centralized ledger is not suitable
- Bitcoin solves this problem
- The same principle applies to other applications as well
  - For example deed to a property
- Blockchain can track the creation, movement, and destruction of value
  - Tokenization
- Smart contracts are functions stored in the blockchain
  - Transactions equate to execution of these programs
  - Transparent on the blockchain
  - Use cases include things like
    - Copyright ownership/transfer
    - Legal contracts
    - Legislation
    - Votes
    - Invoices
    - Gambling
    - Shares
  - Advantages
    - Disintermediation - no centralized authority to distrust
    = Automatic consensus
  
## How Blockchain Works
#### What is a blockchain
- A blockchain is based on a data structure that stores all of the modifications on a state, where those modifications 
are bundled into ordered blocks
  - 3 layer model
    1. Design Goals
      - Decentralization
      - Immutability
      - Peer-to-peer
    1. Implementations
      - Codebase
      - How the nodes communicate
    1. Instances
      - Instances are implementation of a ledger
      - Can have private instances for development
      - Network Identifier and Genesis Block required for private instance
      
#### Design Goals
  - Data distribution
    - The data itself
    - The processes that can modify and read the data
  - Decentralization 
    - In a centralized system, data can be lost if the main node fails
    - In blockchain, each node contains all the data
    - To preserve privacy, blockchain uses pseudonymity 
      - Each user has an anonymous address
      - To make transactions, the user must prove they have control of the account
    - Each node has the ability to write data and the access to all transactions
    - To enable consistency, the blockchain uses the Consensus Algorhythm
    - For each transaction, a randomly selected node is the single source of truth
  - Immutablity
    - To guard against rewriting history, you can only append to the ledger, not modify
  - Nodes can join at any time (Trustless)
    - Trust is built into the system
    
#### Implementations
  - Bitcoin
    - Specialized application - digital cash
    - The term for what is being tracked: Unspent Transaction Output (UTxO)
      - Equivalent of a check
      - Any node can create transactions
      - Every 10 minutes, there's a competition to determine who will apply the transactions to the ledger
      - The node is selected using the consensus algorithm 
        - By racing to do a piece of work
      - The group of the transactions during that period is the "block"
      - The winner of the competition gets to apply a special transaction that applies a certain amount of bitcoins to himself
        - The amount is determined by the consensus algorithm
        - currently 12 bitcoins per block
  - Divided by 2 every 4 years
      - Provides incentive to not jeopardize the currency
      
  - Ethereum
    - Adds some additional design principles
    - No UTxOs, the blockchain has a stored state
    - The interval for blocks is 17 seconds (on average)
    - Transactions can have code attached to them
      - The code can implement "Smart Contracts"
    - Must pay a small amount of cryptocurrency ("ether") for each instruction you run on the chain
    - More generic, computing focused
  
  - Permissioned "blockchains"
    - Smaller number of participants that trust each other
    - Maybe not all transactions are transparent
    - Centralizes decisions about who is allowed to join, who can see what transactions, the role of each node
    
#### Instances
- A blockchain is based on a data structure that stores a history of all of the modifications on a state, where those 
modifications are bundled into ordered blocks
- A blockchain protocol builds up a blockchain history
  - The first block in the chain is called the "Genesis Block"
  - To create the blockchain, the originating node must create the initial state, then pass it to a group of mining
  nodes, so they can start crafting blocks of transactions to chain to the genesis block
- This is called instantiating the blockchain
- With the same protocol/software you can create separate instances based on the genesis block and network ID
- Every implementation has a main instance - "Production Chain"
  - Usually have a few test chains to test applications
  - You can create your own network
- Cryptocurrency created on one instance cannot be used on another instance, even of the same implementation
  - The transactions that created that currency happened on a different ledger

##### Fork
- If the developers of a node client application agree on a change to the rules deciding whether a given block will be
appended to the chain, you have a fork
- Implements two sets of rules/protocols
- Sometimes happen because of a bug
- Can also be intentional
- Dangerous because the value of a currency is related to the number of people using it
  - When a fork happens, the currency created after the fork can only be used on one of the forks
- Ethereum experienced a major fork
  - An attacker exploited a smart contract
  - The majority went on the new fork - Ethereum (ETH)
  - Some stayed on the old - Ethereum Classic (ETC)

#### Tricameral Systems
- Open blockchain systems rely on three main actors:
  - Developers
    - Design the protocol
    - Impement client software
    - Decide on questions of strategy and direction
  - Miners
    - A special type of user
    - Usually use a special kind of wallet software
    - Resource intensive process
      - Processing power is referred to Hash Rate
      - Higher your hash rate, higher your probability to win a consensus competition round
        - This is how you make money
    - Only applies to "proof of work" based consensus algorhithms
  - Users
    - Account holders who use the blockchain by
      - Downloading the software client
      - Downloading the ledger
      - Submitting transactions to the network
      - When transactions are submitted, the client distributes them to the other nodes
      - Can freely connect and disconnect, the client can retrieve updates to the ledger when they reconnect
      - Inside the client, a user can have several wallets
      - Roughly correspond to a user account
      - Wallets have a unique address, for transferring currency
      
#### Summary - Key components of a blockchain
- Peer-to-peer network DB
- All run a special software that can store data, update data, and connect to peers to spread the changes and update 
- Install a wallet, synchronize, and start making transactions
- Must download the full copy of the database
- Exchanges allow you to create an account on a website connected to a remote node storing your wallet in a remote data-
base and creating transactions on your behalf
- Just for currency, not really smart contracts
- Your wallet is your only key. If you lose it you have no recourse
  - Hardware wallets exist
  - Can also print your wallet data and store the hard copy
- Must download a full copy of the verified ledger
- The ledger contains the series of blocks of transactions
- Uses cryptography to ensure the transactions haven't been modified
  - To alter history, would have to recompute a block plus all the subsequent blocks, as other blocks are still being 
  created
    - Called a 51% attack because the attacker must have more than half the entire networks power in order to race and 
    create fake blocks
- Consensus algorhithm 
  - Simple users don't need to participate in mining
  - Miners participate and are implementing the consensus algorhithm
  - Miners contribute computing capacity to solve problems
    - The first machine to solve a consensus puzzle earns a small amount of currency
  - A new algorithm called "Proof of Stake" is being researched to reduce the energy expenditure of mining
    - Named "Casper"
- Cryptocurrency
  - Incentivize miners to verify transactions
  - Reward value based on the level of trust in the network
    - The more that people trust a network, the bigger the network gets, the more valuable the currency is, the more 
    likely that miners will follow the rules
    - Fraudulent transactions make the currency you've stolen worth less
  - Currency has 6 properties
    - Durable - Guaranteed by the traceability of transactions and distribution of the ledger
    - Portable - Can easily be moved from wallet to wallet by transactions in the ledger
    - Acceptable - Trust and ability to spend, including ability to exchange for fiat notes
    - Limited in supply - Availability of currency must be controlled to avoid inflation/deflation for stability
      - Only way to create is to mine
      - Ethereum - the block reward is 5 Ethers
    - Divisible - Transactions can be for virtually any amount, even very small amount
      - In ETH, the smallest amount is 1 Wei = 1/1,000,000,000,000,000,000 Ether
    - Fungible - Each unit is the same value
  - Each transaction incurs transaction fees, as labeled
    - Fees collected by the miner of the block the transactions are contained in
    - Allows users to change the priority of the transaction by adding more or less transaction fees
    - For ETH also used to pay for processing power, through a mechanism called "Gas"
- Smart Contracts
  - You can attach a small piece of computer code to each transaction
  - In ETH - can be written in a special language that is turing-complete
  - To prevent abuse by overly expensive code, you associate each transaction with a maximum amount of gas
    - A special kind of transaction fee
    - When a miner executes a transaction, they collect the cost of the instructions, the originator gets the change
    - If the gas runs out, the transaction is rolled back, but the miner keeps the gas
  - Each Ethereum client runs the EVM and the code in the transaction is written in EVM bytecode, which is like 
  assembly language for the EVM
    - Programmers use higher-level languages that compile down to EVM bytecode
    - Solidity

## Cryptography Fundamentals

#### Hashing Function
- Takes an arbitrary amount of data and returns a number
  - Has a defined range of values
  - Is deterministic - A given input will always produce the same output
  - Is discontinuous - Different input will always produce different output
  - Uniformity - For any given set of inputs, the corresponding outputs must be spread evenly across the range of outputs
  - Non-invertable - Extremely difficult to discern the input from the output
- Hashes are used to ensure that content has not been tampered with
- Since hashes always have the same length, easier to compare
- The header of block N contains the has of the content of block N-1 and so on
  - To change the hash of a block, you also have to change the hash of all subsequent blocks
- In addition, the header also contains a nonce and a certain number of zeroes at the beginning
  - In other words, the hash must be smaller than a target value called difficulty targets
- Must try different nonce values to get a small enough hash
- By adjusting the difficulty target, you can set an average number of tries that a miner will have to make to get a 
nonce that will make the hash small enough to match the difficulty target
- Bitcoin uses SHA-256
- Ethereum uses Keccak-256 or Keccak-512

#### Asymmetric Cryptography
- Uses a pair of related keys to transofrm some readable content to make it unreadable and vice versa
- Used for authentication
- Used for data confidentiality
- A public key encryption algorhithm takes an encryption key and some content as inputs and returns a output
- To decrypt, use the related key

#### Merkel Trees
- If you have a series of transactions you create the hash from each transaction
- then you reduce the hashes to a single hash by hashing two hashes like single elimination brackets
- The root hash is the reduced value
- If one transaction changes, the root hash will be completely differnt
- Minors can calculate hashes progressively as they receive transactions
- Users can verify a particular transaction with a small subset of the partial hashes

## Development Environment Setup

#### Installing the Libraries

- Geth
  - CLI tool implementing Ethereum
```
# Install
sudo apt install software-properties-common
sudo add-apt-repository -y ppa:ethereum/ethereum
sudo apt update 
sudo apt install ethereum
geth version
```
- TestRPC
  - Set up a test node
  - Is an emulator
  - node.js
  - Runs in memory, doesn't store anything on disk
  - Not connected to network, for development
  - `npm install -g ethereumjs-testrpc`
- Truffle
  - Build framework
  - Write/test/deploy smart contracts
  - truffleframework.com
  - `npm install -g truffle`
- Atom IDE
  - Syntax highlighting for Solidity
  
```
sudo add-apt-repository ppa:webupd8team/atom
sudo apt update
sudo apt install atom
apm install language-ethereum
```

#### Setting up a Private Network
- `mkdir -p chainskills/private` - make working directory
- `atom genesis.json` - create a genesis block

```json
{
 "nonce": "0x0000000000000042",
 "mixhash": "0x0000000000000000000000000000000000000000000000000000000000000000",
 "difficulty": "0x400", // correlates to the avg # of times a miner needs to run the hashing function to solve the consensus puzzle
 "alloc": {},
 "coinbase": "0x0000000000000000000000000000000000000000", // Address that receives the reward after a successful mine
 "timestamp": "0x0", // Used by EVM to adjust the difficulty if the difference in time between too blocks is to large/small
 "parentHash": "0x0000000000000000000000000000000000000000000000000000000000000000", // Contains the hash value of the parent block
 "extraData": "0x", 
 "gasLimit": "0xffffffff", // defines the maximum gas value of each block (limits the size of blocks)
 "config": {
    "chainId": 4224, // network ID
    "homesteadBlock": 0, // Defines the sequence # of the block starting from which the homestead protocol upgrade should be applied
    "eip155Block": 0,
    "eip158Block": 0
 }
}
```
- `geth --datadir ./ init genesis.json` - Initialize a private network instalce from geth
```
# Output: 

WARN [12-17|16:36:29] No etherbase set and no accounts found as default 
INFO [12-17|16:36:29] Allocated cache and file handles database=/media/phil/InternalStorage/Sites/_howto/howto-blockchain/getting-started-ethereum-solidity/chainskills/private/geth/chaindata cache=16 handles=16
INFO [12-17|16:36:29] Writing custom genesis block 
INFO [12-17|16:36:29] Successfully wrote genesis state database=chaindata      hash=272003…b62890
INFO [12-17|16:36:29] Allocated cache and file handles database=/media/phil/InternalStorage/Sites/_howto/howto-blockchain/getting-started-ethereum-solidity/chainskills/private/geth/lightchaindata cache=16 handles=16
INFO [12-17|16:36:29] Writing custom genesis block 
INFO [12-17|16:36:29] Successfully wrote genesis state database=lightchaindata      hash=272003…b62890

# $ tree .
.
├── genesis.json
├── geth
│   ├── chaindata
│   │   ├── 000001.log
│   │   ├── CURRENT
│   │   ├── LOCK
│   │   ├── LOG
│   │   └── MANIFEST-000000
│   └── lightchaindata
│       ├── 000001.log
│       ├── CURRENT
│       ├── LOCK
│       ├── LOG
│       └── MANIFEST-000000
└── keystore
```

#### Create Test Accounts

- `geth --datadir ./ account new` - create a new account
  - Enter and confirm the passphrase for this account
  - It will provide the address (Hash of the public key)
    - e.g. `Address: {4b3513088669ebeb427de5089de82bcedcee8c15}`
  - Make two more
    - Address: `{077cf994448f4572dcbba1f1704398a71ea938a8}`
    - Address: `{b7db3e17a321a5afd3163180d41e9ebfb6c6f9df}`
- See the new accounts are in the keystore
  - `tree .`

```
.
├── genesis.json
├── geth
│   ├── chaindata
│   │   ├── 000001.log
│   │   ├── CURRENT
│   │   ├── LOCK
│   │   ├── LOG
│   │   └── MANIFEST-000000
│   └── lightchaindata
│       ├── 000001.log
│       ├── CURRENT
│       ├── LOCK
│       ├── LOG
│       └── MANIFEST-000000
└── keystore // Our new accounts
    ├── UTC--2017-12-17T21-41-49.364015521Z--4b3513088669ebeb427de5089de82bcedcee8c15
    ├── UTC--2017-12-17T21-43-30.883654803Z--077cf994448f4572dcbba1f1704398a71ea938a8
    └── UTC--2017-12-17T21-44-01.674215997Z--b7db3e17a321a5afd3163180d41e9ebfb6c6f9df
```
- `geth --datadir ./ account list` - List the accounts with geth
```
Account #0: {4b3513088669ebeb427de5089de82bcedcee8c15} keystore:///media/phil/InternalStorage/Sites/_howto/howto-blockchain/getting-started-ethereum-solidity/chainskills/private/keystore/UTC--2017-12-17T21-41-49.364015521Z--4b3513088669ebeb427de5089de82bcedcee8c15
Account #1: {077cf994448f4572dcbba1f1704398a71ea938a8} keystore:///media/phil/InternalStorage/Sites/_howto/howto-blockchain/getting-started-ethereum-solidity/chainskills/private/keystore/UTC--2017-12-17T21-43-30.883654803Z--077cf994448f4572dcbba1f1704398a71ea938a8
Account #2: {b7db3e17a321a5afd3163180d41e9ebfb6c6f9df} keystore:///media/phil/InternalStorage/Sites/_howto/howto-blockchain/getting-started-ethereum-solidity/chainskills/private/keystore/UTC--2017-12-17T21-44-01.674215997Z--b7db3e17a321a5afd3163180d41e9ebfb6c6f9df
```

#### Starting Up the Network

- Create a startup script

```
# In a file "startup.sh"
geth \
  --networkid 4224 \
  --mine \
  --datadir "/path/to/chainskills/private" \
  --nodiscover \
  --rpc --rpcport "8545" \
  --port "30303" \
  --rpccorsdomain "*" \
  --nat "any" \
  --rpcapi eth,web3,personal,net \
  --unlock 0 \
  --password "/path/to/chainskils/private/password.sec"
  --ipcpath "~/Ethereum/geth.ipc"
```
  - Don't forget to set the execution bit
    - `chmod a+x startnode.sh`
- `startnode.sh` - start it up
- Now it's mining ETH under that account

#### Examining the Node in the Geth Console

- https://github.com/ethereum/go-ethereum/wiki/JavaScript-Console
- `geth attach` - Attach to the running node

```
Welcome to the Geth JavaScript console!

instance: Geth/v1.7.3-stable-4bb3c89d/linux-amd64/go1.9
coinbase: 0x4b3513088669ebeb427de5089de82bcedcee8c15
at block: 224 (Sun, 17 Dec 2017 17:09:30 EST)
 datadir: /media/phil/InternalStorage/Sites/_howto/howto-blockchain/getting-started-ethereum-solidity/chainskills/private
 modules: admin:1.0 debug:1.0 eth:1.0 miner:1.0 net:1.0 personal:1.0 rpc:1.0 txpool:1.0 web3:1.0

> eth.accounts
["0x4b3513088669ebeb427de5089de82bcedcee8c15", "0x077cf994448f4572dcbba1f1704398a71ea938a8", "0xb7db3e17a321a5afd3163180d41e9ebfb6c6f9df"]

> eth.coinbase
"0x4b3513088669ebeb427de5089de82bcedcee8c15"
  
> eth.getBalance(eth.coinbase)
2.325e+21 // Ether in Wei units

> web3.fromWei(eth.getBalance(eth.coinbase), "ether")
2525 // Ether in ETH units

> miner.stop()
true

> miner.start(8) # specify the number of threads
null

> net.version
"4224"

> personal.unlockAccount(eth.accounts[1], "hjklay11", 300)
```

#### Transferring Ethereum Between accounts
```
> eth.accounts
> eth.coinbase
> web3.fromWei(eth.getBalance(eth.coinbase), 'ether');
> web3.fromWei(eth.getBalance(eth.accounts[1]), 'ether');
> web3.fromWei(eth.getBalance(eth.accounts[2]), 'ether');

> eth.sendTransaction({ from: eth.coinbase, to: eth.accounts[1], value: web3.toWei(100, 'ether') });
> web3.fromWei(eth.getBalance(eth.accounts[1]), 'ether');

> eth.sendTransaction({ from: eth.coinbase, to: eth.accounts[2], value: web3.toWei(100, 'ether') });
> web3.fromWei(eth.getBalance(eth.accounts[2]), 'ether');
```

#### Setting up Myst

- A distributed application browser
  - A web browser
  - An ethereum node
- `https://github.com/ethereum/mist/releases`
  - Download the package for your OS
- Icons on the bottom left with mining stats
  - hash rate
  - Number of blocks in the chain
  - Number of seconds last block
  - Number of peers
- Main section of page - Wallets
  - Accounts with balances
  - Add Account Button
- Top Tab - Send
  - Select a to and from 
  - Enter the amount
  - Select fee
    - Higher the fee, faster the transaction
- Bottom - Latest Transactions
  - See the transaction
- Menu - Backup
  - Backup the keystore
    - Store it in a safe place
    - Encrypted
    - Inaccessible

#### Setting up MetaMask

- `http://metamask.io`
- Chrome extension
- Does not require Ethereum node to be present locally
  - uses the node installed on metamask servers
  - metamask extension connects
  - Can connect to several networks
    - The main chain
    - The test chains
    - Any private chain
  - Widely used and well-maintained
  - `https://www.youtube.com/watch?v=6Gf_kRE4MJU`
- Install the extension
- Have a password
- Save the recovery phrase
- Connect to the Private Network
- Click the circle person icon to import 
  - Need to load the chrome extension into a tab
  - chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn/popup.html
- Import json key from the keybase directory

## Hello Smart Contract (Greetings)

- `mkdir greetings && cd $_`
- `npm init -y`
- `npm install -S web3@0.20.0 solc`
- `touch Greetings.sol`
  - Solidity files have a .sol extension
  
```
// Example solidity contract
pragma solidity ^0.4.11;
contract Greetings {
  string message;
  function Greetings() public {
    message = "I'm ready, I'm ready!";
  }
  function setGreetings(string _message) public {
    message = _message;
  }
  function getGreetings() public constant returns (string) {
    reutrn message;
  }
}
```

#### Deploying the Smart Contract

- `testrpc` - start the node
- `node` - start the repl

```javascript
// Deploying the contract

//set up web3 to connect to the geth api
const Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
console.log(web3.eth.accounts);

// compile the contract
const solc = require('solc');
const sourceCode = fs.readFileSync('Greetings.sol').toString(); // read in the solidity file
const compiledCode = solc.compile(sourceCode);

// Application Binary Interface of the contract
const contractABI = JSON.parse(compiledCode.contracts[':Greetings'].interface);
// bytecode
const byteCode = compiledCode.contracts[':Greetings'].bytecode;

// instance of the contract object
const greetingsContract = web3.eth.contract(contractABI);
// deploy the contract
// data - the bytecode of the compiled contract
// from - the account address from which we deploy the contract
// gas - the payment for priority of deploying the contract
const greetingsDeployed = greetingsContract.new({ data: '0x' + byteCode, from: web3.eth.accounts[0], gas: 4700000 });

// View contract details
console.log('the deployed greeting: ', greetingsDeployed);

/*
// output of the testrpc node
  Transaction: 0xedb531ce6c4eaec00ed98845481b797cea9e170c75b52beeb83db8292a690182
  Contract created: 0x3de2d5a49a7e54586206c4429d996f88864d179e // it the address of the contract on the node
  Gas usage: 284796
  Block Number: 1
  Block Time: Mon Jan 01 2018 12:01:03 GMT-0500 (EST)

*/

const contractAddress = greetingsDeployed.address; // same as reflected in the "Contract created:" line of the output ^

// this is the instance of the contract (class) and you can call the public methods on it
const greetingsInstance = greetingsContract.at(contractAddress); 

greetingsInstance.getGreetings(); // should output the default greeting
greetingsInstance.setGreetings('Hello Chainskills!', { from: web3.eth.accounts[0] });
// returns the transaction identifier, e.g. '0x32069b435920a777423f7bb07788d88e8ef209592da6d19a69a5b1314eff897d'
/*
// node console output:

  Transaction: 0x32069b435920a777423f7bb07788d88e8ef209592da6d19a69a5b1314eff897d
  Gas usage: 33864
  Block Number: 2
  Block Time: Mon Jan 01 2018 12:10:29 GMT-0500 (EST)
*/

// check to see the state has been correctly updated
greetingsInstance.getGreetings();
// 'Hello Chainskills!'
```

## Using Truffle as a Build Tool

#### Truffle Project Setup 

- `mkdir greetings-truffle && cd $_`
- `truffle init` - downloads some generator/boilerplate stuff
- folder structure:
```
- contracts
  Migrations.sol
- migrations
  1_initial_migration.js
- test
truffle.js
truffle-config.js
```

#### Deploying

- Set up config and deployment modules

```javascript
// in ./truffle.js
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: 'localhost',
      port: 8545,
      network_id: '*'
    }
  }
};

// in ./migrations/2_deploy_contracts
var Greetings = artifacts.require('./Greetings.sol');
module.exports = function(deployer) {
  deployer.deploy(Greetings);
};
```

- `truffle migrate`
```
Using network 'development'.

Running migration: 1_initial_migration.js
  Deploying Migrations...
  ... 0x8eb36f20263b074accbaaff8967b0706769ebd80e097fc10010d2a97a6dfa0d8
  Migrations: 0xabc5dcb76bc6a33edb114da8f2f007dcf03e1977
Saving successful migration to network...
  ... 0xb085d57e1318974b94dbd32c97043a383a541530d8ba4aed5ed69ee201ad5569
Saving artifacts...
Running migration: 2_deploy_contracts.js
  Deploying Greetings...
  ... 0xcadb67e57f959a2b55291f613e32500ffbbd794c5c463a99f445d19bcf3a248a
  Greetings: 0x3ff7874328a755dcc36c0c8e1aa79a214153531d
Saving successful migration to network...
  ... 0xf7f4e555029bff7a7840229c4a3a14acbc2f958cb584a0723e7486bc47fe3f18
Saving artifacts...
```

#### Truffle Console

- `truffle console` - It's a custom node repl
- `Greetings.address` - e.g. '0x3ff7874328a755dcc36c0c8e1aa79a214153531d'
- `we3.eth.accounts` - still have access to web3

```javascript
// It is a higher-level abstraction wrapping the contract
let app;
Greetings.deployed().then(function(instance) { app = instance; });

app.getGreetings.call(); // getGreetings is called statically - no transaction on the chain - only querying the state
app.setGreetings('supdawg', { from: web3.eth.accounts[0] });

/*
{ tx: '0x26e6214a9f3e3e62d5a9eda20dfb3be7d8ab7e612f511d0d317674d0f588fb69',
  receipt: 
   { transactionHash: '0x26e6214a9f3e3e62d5a9eda20dfb3be7d8ab7e612f511d0d317674d0f588fb69',
     transactionIndex: 0,
     blockHash: '0x1ea0e08d9dce0cc29e9671d462bc646bced053529dd010c03be44f90858c6576',
     blockNumber: 7,
     gasUsed: 33160,
     cumulativeGasUsed: 33160,
     contractAddress: null,
     logs: [],
     status: 1 },
  logs: [] }

 */

app.getGreetings.call();
// 'supdawg's
```

## Transactions & Blocks

- A blockchain is an immutable set of blocks linked together in a specific order
- A block is a set of transactions
- A transaction can be one of three things
  - Transfer of ether
  - Code of a smart contract
  - Invocation of a function/method of a smart contract
- Transaction has 4 fields
  - From - who is paying for the transaction
  = To - Recipient of transaction or 0 when deploying a contract
  - Value - Amount of ether transferred, can be zero
  - Data or input 
    - Code of a smart contract
    - arguments when invoking a method of a smart contract
    - nothing for ether transfer

- `geth attach http://localhost:8545`

```javascript
/*
// examining smart contract transactions
Transaction: 0xa1e2133e6c3439522570ba48af65cac97b47b76141314dc7f5d1d69abdd57e40
  Gas usage: 26981
  Block Number: 4
  Block Time: Mon Jan 01 2018 14:34:51 GMT-0500 (EST)
 */
 eth.getTransaction('0xcadb67e57f959a2b55291f613e32500ffbbd794c5c463a99f445d19bcf3a248a');
/*
{
  blockHash: "0x8e2612a334bd8ecf369895e0031de262372acf3ced3184dc514cfe53744f84e8",
  blockNumber: 3,
  from: "0x98234576ebb7cecf4e6e5b0a9da6b940bcc65ad8",
  gas: 6721975,
  gasPrice: 100000000000,
  hash: "0xcadb67e57f959a2b55291f613e32500ffbbd794c5c463a99f445d19bcf3a248a",
  input: "0x6060604052341561000f57600080fd5b6040805190810160405280601581526020017f49276d2072656164792c2049276d2072656164792100000000000000000000008152506000908051906020019061005a929190610060565b50610105565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a157805160ff19168380011785556100cf565b828001600101855582156100cf579182015b828111156100ce5782518255916020019190600101906100b3565b5b5090506100dc91906100e0565b5090565b61010291905b808211156100fe5760008160009055506001016100e6565b5090565b90565b6102e3806101146000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806349da5de414610051578063ca4c3a41146100ae575b600080fd5b341561005c57600080fd5b6100ac600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061013c565b005b34156100b957600080fd5b6100c1610156565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101015780820151818401526020810190506100e6565b50505050905090810190601f16801561012e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b80600090805190602001906101529291906101fe565b5050565b61015e61027e565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101f45780601f106101c9576101008083540402835291602001916101f4565b820191906000526020600020905b8154815290600101906020018083116101d757829003601f168201915b5050505050905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061023f57805160ff191683800117855561026d565b8280016001018555821561026d579182015b8281111561026c578251825591602001919060010190610251565b5b50905061027a9190610292565b5090565b602060405190810160405280600081525090565b6102b491905b808211156102b0576000816000905550600101610298565b5090565b905600a165627a7a72305820b1c813a6718ab7352a468436664b03c11e4b8ed70334e123df7ade4db6c0dae50029",
  nonce: 2,
  to: "0x0",
  transactionIndex: 0,
  value: 0
}
*/
eth.getBlock('0x8e2612a334bd8ecf369895e0031de262372acf3ced3184dc514cfe53744f84e8');
/*
{
  difficulty: 0,
  extraData: "0x0",
  gasLimit: 6721975,
  gasUsed: 284796,
  hash: "0x8e2612a334bd8ecf369895e0031de262372acf3ced3184dc514cfe53744f84e8",
  logsBloom: "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
  miner: "0x0000000000000000000000000000000000000000",
  nonce: "0x0",
  number: 3,
  parentHash: "0xf4a6f31a4aa6bcb3300ea3775c9a4001c1606a6a748aa77d6f39979c0ff09efc",
  receiptsRoot: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
  sha3Uncles: "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347",
  size: 1000,
  stateRoot: "0xee5f6679273c1b6654d5f997c54e29508eeae28c88bf869a0973a95213a85da7",
  timestamp: 1514835291,
  totalDifficulty: 0,
  transactions: ["0xcadb67e57f959a2b55291f613e32500ffbbd794c5c463a99f445d19bcf3a248a"],
  transactionsRoot: "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
  uncles: []
}
*/
```


#### Understanding Gas
- Miners validate transactions and add them to the blockchain
- Transferring ether costs money
- Deploying smart contracts costs money
- Invoking smart contract methods costs money
- Gas is a unit of complexity used to set the prices in the ethereum VM
- Costs based on the complexity of the operation performed
- The price in ether is computed by using the gas price you are willing to pay for one unit of gas

```javascript
eth.accounts.forEach(function (acct) {
  var acctBalance = web3.fromWei(eth.getBalance(acct), 'ether');
  console.log('acct balance: ', acct, acctBalance);
});
// do `truffle migrate` and check again
// see the gas usage by the coinbase account
```

- There is no charge for executing functions that do not change the state
  - Mark the contract function as constant and do not alter the state

#### Gas and opcodes

- After deploying the contract, look for the transaction that deploys the greetings contract
  -  e.g. `0xcadb67e57f959a2b55291f613e32500ffbbd794c5c463a99f445d19bcf3a248a`
- `eth.getTransaction('0xcadb67e57f959a2b55291f613e32500ffbbd794c5c463a99f445d19bcf3a248a')`

```
{
  blockHash: "0x4737c921f876fa307e843e9d3df27af2cae14ad5055ef78a5d5fdf5537d4ed76",
  blockNumber: 3,
  from: "0x4c59ff840b65dc9772d3ad501c8c3b1b80df33d3",
  gas: 6721975,
  gasPrice: 100000000000,
  hash: "0xcadb67e57f959a2b55291f613e32500ffbbd794c5c463a99f445d19bcf3a248a",
  input: "0x6060604052341561000f57600080fd5b6040805190810160405280601581526020017f49276d2072656164792c2049276d2072656164792100000000000000000000008152506000908051906020019061005a929190610060565b50610105565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f106100a157805160ff19168380011785556100cf565b828001600101855582156100cf579182015b828111156100ce5782518255916020019190600101906100b3565b5b5090506100dc91906100e0565b5090565b61010291905b808211156100fe5760008160009055506001016100e6565b5090565b90565b6102e3806101146000396000f30060606040526004361061004c576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806349da5de414610051578063ca4c3a41146100ae575b600080fd5b341561005c57600080fd5b6100ac600480803590602001908201803590602001908080601f0160208091040260200160405190810160405280939291908181526020018383808284378201915050505050509190505061013c565b005b34156100b957600080fd5b6100c1610156565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101015780820151818401526020810190506100e6565b50505050905090810190601f16801561012e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b80600090805190602001906101529291906101fe565b5050565b61015e61027e565b60008054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156101f45780601f106101c9576101008083540402835291602001916101f4565b820191906000526020600020905b8154815290600101906020018083116101d757829003601f168201915b5050505050905090565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f1061023f57805160ff191683800117855561026d565b8280016001018555821561026d579182015b8281111561026c578251825591602001919060010190610251565b5b50905061027a9190610292565b5090565b602060405190810160405280600081525090565b6102b491905b808211156102b0576000816000905550600101610298565b5090565b905600a165627a7a72305820b1c813a6718ab7352a468436664b03c11e4b8ed70334e123df7ade4db6c0dae50029",
  nonce: 2,
  to: "0x0",
  transactionIndex: 0,
  value: 0
}
```

- The input is the code
  - The binary bytecode version of the smart
  - contract compiled by solidity
- Access the binary version using `Greetings.binary`
- Bytecode because it needs to be executable by the EVM on every machine running a node on the network
- EVM decodes the bytecode into a series of Ethereum instructions called opcodes
  - opcodes compose the assembly language used by the EVM to execute the smart contract
- View the instructions by going to `https://etherscan.io/opcode-tool` and pasting the input string
- The gas cost is calculated by examining the opcodes and assigning the costs which are laid out in the whitepaper
- The more data you store on the state and the higher the overall complexity of the code, the higher the gas cost

#### Costs of transferring ether

- Sending ether: `eth.sendTransaction({ from: fromAccount, to: toAccount, value: web3.toWei(5, 'ether') })`
  - Returns tx number, e.g. '0xf8eafd3a329f010d0f2b15b06640ee6722fb2721875bf1cd4558d03ecb547836'
- View the account balances:
```
acct balance:  0x38f1924497c75ae966d25c77cbe735c2786778d7 94.999999999999979
acct balance:  0x4cf4b6ee9a1767b5893bea63463cda5e372d014a 105
```
- See the from account was charged an extra .000000000000021
  - 21000 wei
  - this is a constant fee, no matter the transfer amount
