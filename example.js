import endpointFinder from './src/index.js'
 
let getChainEndpoint = new endpointFinder('osmosis')

getChainEndpoint.getLcd().then(function(result) {
  console.log(result)
})

getChainEndpoint.getRpc().then(function(result) {
  console.log(result)
})
