import endpointFinder from './src/index.js'

let initChains = new endpointFinder()
let getChainEndpoint = new endpointFinder('bitcanna')

// List all chains supported
initChains.listChains().then(function(result: any) {
  console.log(result)
})

// Get last valid LCD 
getChainEndpoint.getLcd().then(function(result: any) {
  console.log(result)
})

// Get last valid RPC 
getChainEndpoint.getRpc().then(function(result: any) {
  console.log(result)
}) 

