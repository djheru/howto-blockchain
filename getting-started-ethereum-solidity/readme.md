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

  
## Cryptography Fundamentals

## Development Environment Setup

## Building a DApp from Scratch
