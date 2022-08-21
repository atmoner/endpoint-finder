<div align="center">

<img width="300" alt="cosmos" src="https://user-images.githubusercontent.com/1071490/185792789-ed005cb5-bc78-481f-8993-07b647ebbe13.png">

    
</div>

## Table of Contents
1. [How it works](#how-it-works)
2. [Install](#install)
3. [Usage](#usage)

## How it works

For cosmos dapp developers, the use of RPC and LCD endpoints are very important!
A problem arises... Endpoints are not always available and it is important to always have a list of available endpoints available.

This package will allow you to append the endpoints of any chain lister on **chain-registry** (thanks to Pyramation for the [lib chain-registry](https://github.com/cosmology-tech/chain-registry))

The return will necessarily be an endpoint in http 200 status!

## Install:

```
npm i endpoint-finder
```

## Usage:

List all chains supported:

``` js
import endpointFinder from 'endpoint-finder'

let initChains = new endpointFinder()

// List all chains supported
initChains.listChains().then(function(result) {
  console.log(result)
})
```

Get last valid LCD:

``` js
import endpointFinder from 'endpoint-finder'
 
let getChainEndpoint = new endpointFinder('bitcanna')

// Get last valid LCD 
getChainEndpoint.getLcd().then(function(result) {
  console.log(result)
})
```

Return:
`https://lcd.bitcanna.io`

Get last valid RPC:

``` js
import endpointFinder from 'endpoint-finder'
 
let getChainEndpoint = new endpointFinder('bitcanna')

// Get last valid RPC 
getChainEndpoint.getRpc().then(function(result) {
  console.log(result)
})
```

Return:
`https://rpc.bitcanna.io`

If you have any ideas for improvement, [open a discussion here](https://github.com/atmoner/endpoint-finder/discussions/new?category=ideas)

