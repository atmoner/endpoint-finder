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

From npm
```
npm i endpoint-finder
```

## Usage:

``` js
import lcdFinder from 'endpoint-finder'
 
let lcd = new lcdFinder('bitcanna')

lcd.getLcd().then(function(result) {
  console.log(result)
})
```

Return:
`https://lcd.bitcanna.io`

If you have any ideas for improvement, open a discussion here

