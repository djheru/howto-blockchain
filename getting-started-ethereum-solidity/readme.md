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

## Building a DApp from Scratch
